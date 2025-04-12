🐞 Debug Diaries
Debug Diaries is a modern and responsive developer-centric blog platform, designed for sharing insights, solving bugs, and documenting development journeys. With an Android APK version and Appwrite-powered backend, this full-stack app makes it easier than ever to post, explore, and engage with developer blogs.

🚀 Features
📝 Create, edit, and delete blog posts with rich text

🔍 Filter and search blogs by tags or categories

👤 User authentication and profile management

📱 Mobile-first responsive UI

🔐 Secure backend with Appwrite authentication and database

☁️ Media upload support using Appwrite Storage

🛠️ Tech Stack
Frontend
React.js 

Tailwind CSS

Framer Motion

Axios / Appwrite SDK

Backend
Appwrite (Authentication, Database, Storage, Functions)

Appwrite Cloud or self-hosted instance

Add the link or GitHub Releases section once available

📂 Project Structure
```
└── 📁src
    └── 📁appwrite
        └── auth.js
        └── config.js
    └── 📁assets
        └── avatar1.svg
        └── hero.jpg
        └── react.svg
    └── 📁components
        └── AuthLayout.jsx
        └── Button.jsx
        └── 📁container
            └── Container.jsx
        └── 📁Footer
            └── Footer.jsx
        └── 📁Header
            └── AiBtn.jsx
            └── Header.jsx
            └── LogoutBtn.jsx
        └── index.js
        └── Input.jsx
        └── layout.jsx
        └── Login.jsx
        └── Logo.jsx
        └── 📁post-form
            └── PostForm.jsx
        └── PostCard.jsx
        └── PostsProvider.jsx
        └── RTE.jsx
        └── Select.jsx
        └── Signup.jsx
        └── ThemeProvider.jsx
        └── 📁ui
            └── avatar.jsx
            └── badge.jsx
            └── button.jsx
            └── card.jsx
            └── input.jsx
    └── 📁conf
        └── conf.js
    └── 📁lib
        └── utils.js
    └── 📁pages
        └── AddPost.jsx
        └── AllPosts.jsx
        └── AskAi.jsx
        └── EditPost.jsx
        └── ForgotPassword.jsx
        └── Home.jsx
        └── LandingPage.jsx
        └── Login.jsx
        └── Post.jsx
        └── ResetPassword.jsx
        └── Signup.jsx
    └── 📁store
        └── authSlice.js
        └── store.js
    └── App.css
    └── App.jsx
    └── index.css
    └── main.jsx
```

⚙️ Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/rajkumarojhaa/Debug-Diaries.git
cd Debug-Diaries
2. Configure Appwrite
Make sure you have an Appwrite instance running (either self-hosted or cloud).

Create a project and add the following:

Authentication: Enable email/password auth

Database: Create a blogs collection with fields:

title (string)

content (string)

tags (array)

thumbnail (file reference)

authorId (user ID)

Storage: For blog images/thumbnails

Roles & Permissions: Set appropriate read/write permissions for users

3. Setup .env.local
bash
Copy
Edit
cp .env.local.example .env.local
Fill in the required Appwrite credentials:

env
Copy
Edit
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
4. Install Dependencies
bash
Copy
Edit
npm install
5. Run the App
bash
Copy
Edit
npm run dev
Visit http://localhost:3000

📤 Deployment
Frontend: Vercel or Netlify

Backend: Appwrite Cloud or Docker-hosted server

