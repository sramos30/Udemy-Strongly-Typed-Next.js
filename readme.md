# Strongly Typed Next.js
# Create a full stack web application with Next.js, TypeScript and GraphQL 
https://www.udemy.com/course/strongly-typed-next-js/learn/lecture/23446596#overview

# Chapter 1: Next.js - https://michaelstromer.nyc/books/strongly-typed-next-js/next-js

# Installation
mkdir lego-catalog
cd lego-catalog
mkdir app
cd app
npm init -y
npm install next react react-dom
npm install @material-ui/core

Open package.json and add the following scripts:

"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}

Create a pages' folder

npm install --save-dev typescript @types/react @types/node

Create a new file called app/tsconfig.json, then run npm run dev

Let's make one modification to the newly generated file app/tsconfig.json:

{
  "compilerOptions": {
    // ...
    "baseUrl": "."
  }
}

Git Ignore - let's ignore some files to prevent checking them into our source control repository.
At the root of your project insert the following inside a new .gitignore file.

.env
node_modules
.DS_Store
.next

Let's start with three core components of Next.js:

index.tsx: homepage for our website.
_app.tsx: handles global page props.
_document.tsx: handles global styles

