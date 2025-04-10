import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (!userData || !userData.$id) {
      console.error("User data is missing or invalid.");
      return;
    }

    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        await appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      });

      if (dbPost) {
        toast.success("Post updated successfully ✨");
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        data.featuredImage = file.$id;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id, // Ensure userData.$id exists before using it
        });

        if (dbPost) {
          toast.success("Post created successfully 🎉");
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (typeof value === "string" && value) {
      return (
        value
          .trim()
          .toLowerCase()
          // Remove all characters except lowercase letters, digits, spaces, and hyphens.
          .replace(/[^a-z0-9\s-]/g, "")
          // Replace any sequence of spaces or hyphens with a single hyphen.
          .replace(/[\s-]+/g, "-")
          // Remove any leading or trailing hyphens.
          .replace(/^-+|-+$/g, "")
      );
    }
    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col md:flex-row flex-wrap"
    >
      {/* Left Column */}
      <div className="w-full md:w-2/3 px-2">
        <Input
          label="Title:"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug:"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content:"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/3 px-2">
        <Input
          label="Featured Image:"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFileDownload(post.featuredImage)}
              alt={post.title}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
