import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Menu,
  X,
  ChevronRight,
  Code,
  Terminal,
  Database,
  Cpu,
  BookOpen,
  Share2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typewriter } from "react-simple-typewriter";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-700 via-purple-500 to-pink-300">
      {/* Header */}

      {/* Full-Screen Banner */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner1.jpg?height=1080&width=1920"
            alt="Coding background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-white/10 border-white/20 text-white mb-6"
            >
              Tech Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-tight">
              <span className="inline-block">
                <Typewriter
                  words={["Debugging the Digital World", "One Line at a Time"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/10 max-w-2xl mx-auto mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  bg-clip-text font-bold">
              Join our community of developers sharing insights, solutions, and
              stories from the trenches of software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-medium bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  
                    navigate("/all-posts"); // Redirect to AllPosts if logged in
                  
                }}
              >
                Start Reading
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium border-white text-white hover:bg-white/10"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-white/80 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar
                    key={i}
                    className="border-2 border-background h-8 w-8"
                  >
                    <AvatarImage
                      src={`/placeholder.svg?height=32&width=32`}
                      alt={`User ${i}`}
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Join 10,000+ developers
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div>
      </section>

      {/* Info Banners about Coding Blogs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10" />,
                title: "Learn from Experts",
                description:
                  "Access tutorials and articles written by industry professionals with years of experience in software development.",
              },
              {
                icon: <Terminal className="h-10 w-10" />,
                title: "Practical Solutions",
                description:
                  "Find real-world solutions to common programming challenges that you can implement in your projects today.",
              },
              {
                icon: <Cpu className="h-10 w-10" />,
                title: "Stay Updated",
                description:
                  "Keep up with the latest technologies, frameworks, and best practices in the ever-evolving world of software development.",
              },
            ].map((banner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 h-full border border-border/60">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
                  <div className="relative">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-4 inline-block">
                      {banner.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{banner.title}</h3>
                    <p className="text-muted-foreground">
                      {banner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 z-0">
              <img
                src="/hero.jpg"
                alt="Featured banner"
                className="object-cover absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 mix-blend-multiply" />
              <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
              <div className="max-w-3xl">
                <div className="px-3 py-1 text-sm bg-white/10 border border-white/20 text-white mb-6 rounded">
                  Editor's Pick
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Future of Web Development: Trends to Watch in 2025
                </h2>
                <p className="text-white/80 mb-6">
                  Explore the emerging technologies and methodologies that are
                  shaping the future of web development. From AI-powered tools
                  to new frameworks, stay ahead of the curve.
                </p>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-10 w-10 border-2 border-white/20 rounded-full overflow-hidden">
                    <img
                      src="/avatar1.svg"
                      alt="Author"
                      className="h-full w-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-white/60 text-sm">
                      Lead Developer • April 1, 2025
                    </p>
                  </div>
                </div>
                <button className="bg-white text-primary hover:bg-white/90 px-4 py-2 rounded flex items-center">
                  Read Article
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.293 16.707a1 1 0 0 1 0-1.414L13.586 11 9.293 6.707a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive into our diverse range of topics covering everything from
              frontend frameworks to system architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                count: 124,
              },
              {
                icon: <Terminal className="h-8 w-8" />,
                title: "DevOps",
                count: 86,
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Databases",
                count: 53,
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: "System Design",
                count: 78,
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="#">
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 hover:bg-primary/5">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                        {category.icon}
                      </div>
                      <h3 className="font-bold text-xl mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.count} articles
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
