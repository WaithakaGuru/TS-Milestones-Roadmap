# TypeScript Milestones Coding challenges

---

<details> 
<summary> <b>Table of Contents:</b></summary>

- [About this Repo](#what-this-repo-entails)
- [Topics Covered](#topics-covered)
  - [TypeScript Basic](#in-milestone_1_challenges)
  - [InDepth Typescript](#in-milestone_2_challenges)
- [Getting Started](#getting-started-in-this-repo)
  - [Step I](#-step-1-initialize-a-new-project)
  - [Step II](#-step-2-install-typescript)
  - [Step III](#-step-3-create-a-tsconfig.json-file)
  - [Step IV](#-step-4-create-your-first-typescript-file)
  - [Step V](#-step-5-compile-typescript-to-javascript)
  - [Step VI](#-step-6-run-the-output)
- [Contributions](#-contributing-to-this-learning-repo)
  - [Contribution steps](#please-follow-these-steps)
- [Contribution Guidelines](#guidelines)
</details>

## What this repo entails

- **Code solutions to Typescript coding challenges** - from basic to Advanced
- **Increasing difficulty** of tasks with each milestone
- **Test cases** for the coding solutions
- **An ordered learning procedure** from the basics of JS to Functions and Scope and other Advanced concepts

---

## Topics covered

- ### In milestone_1_challenges

  - **Variables** - declaration and use
  - TS **Datatypes** +**Functions** in Typescripts - arrow func, normal func e.t.c
  - The Concept of **_Types aliases_** in TypeScript

- ### In milestone_2_challenges

  - **Data Structures** in Ts
  - **Objects** - Declaration, use, traversing and Object methods
  - **Arrays** - Declaration, use, traversing, Search and Array methods

---

## Getting Started in this Repo

This guide walks you through setting up a TypeScript development environment in Visual Studio Code (VSCode).

✅ Prerequisites

- VSCode installed ✅

- Node.js installed

  - 👉 Download from https://nodejs.org/ if not already installed.

### 📦 Step 1: Initialize a New Project

Open VSCode.

Create a new folder for your project and open it in VSCode:

```bash

mkdir my-typescript-app
cd my-typescript-app
code .
```

Initialize the project:

```bash
npm init -y
```

### 📥 Step 2: Install TypeScript

Install TypeScript as a development dependency:

```bash
npm install --save-dev typescript
```

### 🛠️ Step 3: Create a tsconfig.json File

Generate a tsconfig.json file with default options:

```bash
npx tsc --init
```

This file tells TypeScript how to compile your code.

### 📝 Step 4: Create Your First TypeScript File

Create a src folder and a file inside it:

```bash
mkdir src
touch src/index.ts
```

Add some code to index.ts:

```ts
const greet = (name: string): void => {
  console.log(`Hello, ${name}!`);
};

greet("Waithaka");
```

### 🧪 Step 5: Compile TypeScript to JavaScript

Run the TypeScript compiler:

```bash
npx tsc
```

This will create a dist folder (or build, depending on your config) with the compiled .js files.

### ⚙️ Optional: VSCode Extensions

Install these recommended extensions for a better experience:

ESLint – helps catch errors

Prettier – code formatter

### ▶️ Step 6: Run the Output

Use Node.js to run the compiled JS file:

```bash
node dist/index.js
```

📌 Tip: Enable Auto Compilation
To watch for changes and compile automatically:

```bash
npx tsc --watch
```

> You're All Set!
> You now have a working TypeScript project running in VSCode!
> Happy coding! ✨

## 🤝 Contributing to this Learning Repo

Contributions are welcome! If you'd like to help improve this project,

### Please follow these steps:

1.  **Fork** the repository.
1.  **Clone** your forked copy of the project:
    ```bash
    git clone https://github.com/WaithakaGuru/TS-Milestones-Roadmap
    ```
1.  **Create a new branch** for your changes:
    ```bash
    git checkout -b feature/your-feature-name
    ```
1.  **Make your changes and commit** them:
    ```bash
    git commit -m "Add your descriptive commit message here"
    ```
1.  **Push to your fork**:
    ```bash
    git push origin feature/your-feature-name
    ```
1.  **Create a Pull Request** from your branch to the main branch of this repository.
    `bash
git push origin feature/your-feature-name
` ### Guidelines
    --- - Your code should be neat, non-repetitve and Formatted _preferrably using **prettier code formatter** ._ - Provide tests covering most / all of the use cases of your code - Write precise, descriptive commit message answering _what the commit does and how_

                            _Please ensure your code follows the project's coding conventions and includes relevant documentation and tests.

                        **Thanks for contributing! 🙌\_**

---
