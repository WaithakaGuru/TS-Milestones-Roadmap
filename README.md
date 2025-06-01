# TypeScript Milestones Coding challenges
---

<details> 
<summary> <b>Table of Contents:</b></summary>

- [About this Repo](#what-this-repo-entails)
- [Topics Covered](#topics-covered)
    - [TypeScript Basic](#in-milestone_1_challenges)
    - [InDepth Typescript](#in-milestone_2_challenges)
- [Getting Started](#getting-started-in-this-repo)
    + [Step I](#-step-1-initialize-a-new-project)
    + [Step II](#-step-2-install-typescript)
    + [Step III](#-step-3-create-a-tsconfig.json-file)
    + [Step IV](#-step-4-create-your-first-typescript-file)
    + [Step V](#-step-5-compile-typescript-to-javascript)
    + [Step VI](#-step-6-run-the-output)
- [Contributions](#-contributing-to-this-learning-repo)
    - [Contribution steps](#please-follow-these-steps)
- [Contribution Guidelines](#guidelines)
</details>



## What this repo entails

- __Code solutions to Typescript coding challenges__ - from basic to Advanced
- __Increasing difficulty__ of tasks with each milestone
- __Test cases__ for the coding solutions
- __An ordered learning procedure__ from the basics of JS to Functions and Scope and other Advanced concepts 
---

## Topics covered 
+ ### In milestone_1_challenges 

    + __Variables__ - declaration and use
    + TS __Datatypes__ 
    +__Functions__ in Typescripts - arrow func, normal func e.t.c
    + The Concept of ___Types aliases___ in TypeScript 

+ ### In milestone_2_challenges

    - __Data Structures__ in Ts
    - __Objects__ - Declaration, use, traversing and Object methods 
    - __Arrays__ - Declaration, use, traversing, Search and Array methods 
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
>  You're All Set!
You now have a working TypeScript project running in VSCode!
Happy coding! ✨

## 🤝 Contributing to this Learning Repo


Contributions are welcome! If you'd like to help improve this project, 
   ### Please follow these steps:

1. **Fork** the repository.
1. **Clone** your forked copy of the project:
   ```bash
   git clone https://github.com/WaithakaGuru/TS-Milestones-Roadmap
1. __Create a new branch__ for your changes:
    ```bash
    git checkout -b feature/your-feature-name
    ```
1. __Make your changes and commit__ them:
    ```bash
    git commit -m "Add your descriptive commit message here"
    ```
1. __Push to your fork__:
    ```bash 
    git push origin feature/your-feature-name
    ```
1. __Create a Pull Request__ from your branch to the main branch of this repository.
    ```bash
    git push origin feature/your-feature-name
    ```
    ### Guidelines 
    ---
    - Your code should be neat, non-repetitve and Formatted _preferrably using __prettier code formatter__ ._
    - Provide tests covering most / all of the use cases of your code
    - Write precise, descriptive commit message answering _what the commit does and how_

    _Please ensure your code follows the project's coding conventions and includes relevant documentation and tests.
__Thanks for contributing! 🙌___
---