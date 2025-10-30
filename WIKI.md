# Mindloop Development Wiki
## A Beginner's Guide to Everything in Your Tech Stack

---

## 📚 Table of Contents

1. [General Terms](#general-terms)
2. [Programming Languages](#programming-languages)
3. [Frameworks & Libraries](#frameworks--libraries)
4. [Build Tools & Bundlers](#build-tools--bundlers)
5. [Package Managers](#package-managers)
6. [Configuration Files](#configuration-files)
7. [File Types & Extensions](#file-types--extensions)
8. [Development Concepts](#development-concepts)
9. [Common Commands](#common-commands)

---

## General Terms

### **Tech Stack** (or "Technology Stack")
**What it means:** All the tools, languages, and technologies you use to build your app.  
**Example:** "Our tech stack is React + TypeScript + Vite."  
**Analogy:** Like a chef's toolkit: knives (tools), ingredients (libraries), recipe book (frameworks).

### **Dependencies**
**What it means:** Tools/code packages your project needs to run. They're listed in `package.json`.  
**Example:** React, Vite, dayjs are all dependencies.  
**Analogy:** Like apps on your phone - you need Instagram app to use Instagram.

### **Package**
**What it means:** A piece of code someone else wrote that you can use in your project.  
**Example:** `react-router-dom` is a package that gives you routing features.  
**Analogy:** Like a library book you borrow instead of writing your own.

---

## Programming Languages

### **JavaScript (JS)**
**What it is:** The language that makes websites interactive. Browsers understand JavaScript.  
**File extension:** `.js`  
**Example code:** `console.log("Hello")`  
**Why it matters:** All web apps use JavaScript. It's the universal language of the web.

### **TypeScript (TS)**
**What it is:** JavaScript with added safety features. It catches mistakes before your app runs.  
**File extension:** `.ts` or `.tsx`  
**What TSX means:** TypeScript + JSX (the HTML-like code in React)  
**Example:** TypeScript won't let you add `2 + "hello"` because it knows numbers and text are different.  
**Why use it:** Prevents bugs, makes code easier to understand, helps your editor suggest things.

### **HTML**
**What it is:** The structure/skeleton of a webpage (titles, paragraphs, buttons).  
**File extension:** `.html`  
**Example:** `<h1>Welcome</h1>` creates a big heading.  
**Why it matters:** Every webpage needs HTML to exist.

### **CSS**
**What it is:** Makes HTML look pretty (colors, spacing, layouts).  
**File extension:** `.css`  
**Example:** `color: blue;` makes text blue.  
**Why it matters:** Without CSS, websites look like plain text documents from 1995.

---

## Frameworks & Libraries

### **React**
**What it is:** A library that helps you build user interfaces (the buttons, forms, pages users see).  
**Created by:** Facebook/Meta  
**Why use it:** Instead of writing repetitive code, React lets you build reusable "components" (like LEGO blocks).  
**Example:** A `Button` component you can use 100 times instead of writing button code 100 times.

### **React Router**
**What it is:** A library that handles navigation between pages in your app (like going from Home → History).  
**Package name:** `react-router-dom`  
**Why use it:** Without it, your app can't have multiple pages/routes.  
**Example:** When user clicks "History", Router shows the History page instead of Home page.

---

## Build Tools & Bundlers

### **Vite**
**What it is:** A build tool that:
- Starts your app super fast (in seconds, not minutes)
- Watches your code and refreshes the browser automatically
- Turns your code into optimized files browsers can run

**Pronunciation:** "veet" (French for "fast")  
**Why use it:** Older tools take 30+ seconds to start. Vite starts in 2 seconds.  
**What it does behind the scenes:** Compiles TypeScript → JavaScript, bundles files together, serves your app.

### **Bundler**
**What it is:** A tool that combines all your separate files into fewer, optimized files.  
**Why needed:** You write 50 small files, but browsers work better with fewer, larger files.  
**Examples:** Vite, Webpack, Rollup (Vite uses Rollup under the hood)

---

## Package Managers

### **npm**
**What it is:** Node Package Manager - downloads and manages the tools/packages your project needs.  
**Commands:**
- `npm install` = Download all packages listed in `package.json`
- `npm install react` = Download the React package
- `npm run dev` = Run the "dev" script from `package.json`

**What it creates:** `node_modules/` folder (where all downloaded packages live)  
**Why use it:** You don't have to manually download 100 packages. npm does it automatically.

### **package.json**
**What it is:** A file that lists:
- All the packages your project needs
- Scripts you can run (like `npm run dev`)
- Project name, version, etc.

**Why it matters:** Anyone can clone your project and run `npm install` to get all dependencies automatically.  
**Location:** Always in the root of your project folder.

---

## Configuration Files

### **tsconfig.json**
**What it is:** Settings file that tells TypeScript how to behave in your project.  
**What it controls:** How strict TypeScript is, which version of JavaScript to compile to, where to find files.  
**Why it matters:** Same project runs the same way for everyone, catches errors consistently.

### **vite.config.ts**
**What it is:** Settings file for Vite build tool.  
**What it controls:** Where your source files are, how to build the app, plugins to use.  
**Why it matters:** Customizes how Vite builds and serves your app.

### **.gitignore**
**What it is:** Tells Git which files to NOT track/upload to GitHub.  
**Example:** `node_modules/` (you don't upload 10,000 downloaded package files)  
**Why it matters:** Keeps your GitHub repo clean, only essential files uploaded.

---

## File Types & Extensions

### **.ts** (TypeScript)
**What it is:** A TypeScript file (regular TypeScript code, not React components).  
**Used for:** Utilities, helpers, types, API calls.  
**Example:** `utils/format.ts` - helper functions.

### **.tsx** (TypeScript + JSX)
**What it is:** TypeScript file that can contain JSX (React component code).  
**Used for:** React components (pages, buttons, forms).  
**Example:** `components/Header.tsx` - a React component.

### **.js** (JavaScript)
**What it is:** JavaScript file.  
**When you see it:** Usually config files or old JavaScript code.  
**Modern projects:** Use `.ts` or `.tsx` instead of `.js`.

### **.json** (JSON)
**What it is:** JavaScript Object Notation - a way to store data in text format.  
**Example:** `package.json`, `tsconfig.json`  
**Used for:** Configuration files, data storage.

### **.css** (CSS)
**What it is:** Stylesheet file with styling rules.  
**Example:** `App.css`, `index.css`  
**Used for:** Colors, spacing, layouts, animations.

### **.html** (HTML)
**What it is:** Webpage structure file.  
**Example:** `index.html` - the main HTML file that loads your React app.  
**In React apps:** You rarely edit this file, React generates HTML for you.

---

## Development Concepts

### **Component**
**What it is:** A reusable piece of UI (user interface) code.  
**Example:** A `Button` component - write it once, use it 100 times.  
**In your project:** `Header.tsx`, `MoodSlider.tsx` are components.  
**Analogy:** Like a LEGO block - build once, reuse everywhere.

### **Props**
**What it is:** Data/values you pass TO a component to customize it.  
**Example:** `<Button color="blue">` - `color` is a prop.  
**In your code:** `<MoodSlider value={mood} onChange={setMood} />` - `value` and `onChange` are props.

### **State**
**What it is:** Data that can change over time in a component.  
**Example:** `const [count, setCount] = useState(0)` - `count` is state.  
**Why it matters:** When state changes, React updates the UI automatically.

### **Hook**
**What it is:** A special function that starts with `use` - gives components extra powers.  
**Examples:**
- `useState` - lets component remember changing data
- `useEffect` - lets component do things when page loads
- `useParams` - gets URL parameters

**Why called "hooks":** They "hook into" React's features.

### **Route**
**What it is:** A URL path that shows a specific page.  
**Examples:**
- `/` = Home page
- `/history` = History page
- `/day/123` = Day details page

**In your code:** Defined in `AppRoutes.tsx`.

### **localStorage**
**What it is:** Browser storage that saves data on user's computer (persists even after browser closes).  
**Why use it:** Your entries stay saved even if user closes browser.  
**Storage limit:** ~5-10MB per website.

### **API**
**What it is:** Application Programming Interface - a way for your app to talk to other services.  
**Example:** Your app might call an API to generate AI reflections (like ChatGPT API).  
**In your code:** `generateReflection.ts` could eventually call a real AI API.

---

## Common Commands

### **Git Commands**
```bash
git init              # Start tracking this folder with Git
git add .             # Stage all files for commit
git commit -m "msg"   # Save a snapshot of your code
git push              # Upload code to GitHub
git pull              # Download code from GitHub
```

### **npm Commands**
```bash
npm install           # Download all packages from package.json
npm install <package> # Download a specific package
npm run dev           # Start development server
npm run build         # Create production-ready files
npm run preview       # Preview the built app
```

### **Folder Navigation**
```bash
cd folderName         # Go into a folder
cd ..                 # Go up one folder
ls                    # See what files/folders are here (Mac/Linux)
dir                   # See what files/folders are here (Windows)
pwd                   # Show current folder path (Mac/Linux)
```

---

## Project Structure Explained

### **src/** (Source)
**What it is:** All your code lives here.  
**Why:** Organized location for all code files.

### **src/components/**
**What it is:** Reusable UI pieces (buttons, headers, forms).  
**Example:** `Header.tsx`, `MoodSlider.tsx`

### **src/pages/**
**What it is:** Full page components (Home, History, DayView).

### **src/routes/**
**What it is:** Defines which URL shows which page.  
**Example:** `AppRoutes.tsx` - connects URLs to pages.

### **src/utils/**
**What it is:** Helper functions that don't create UI, just do calculations/formatting.

### **src/types/**
**What it is:** TypeScript type definitions (describes what data looks like).  
**Example:** `entry.ts` - defines what an Entry object must have.

### **src/storage/**
**What it is:** Code that handles saving/loading data (like localStorage).

### **public/**
**What it is:** Static files that don't need processing (images, icons).  
**Example:** `vite.svg` logo image.

### **node_modules/**
**What it is:** All downloaded packages (created by `npm install`).  
**Never edit this:** Git ignores it, you don't touch it.

---

## Quick Reference: What Does What?

| Thing | What It Does | Where You Use It |
|-------|--------------|------------------|
| **TypeScript** | Adds safety checks to JavaScript | All `.ts` and `.tsx` files |
| **React** | Builds user interfaces | Components (`.tsx` files) |
| **Vite** | Starts app fast, builds it | Runs in terminal (`npm run dev`) |
| **npm** | Downloads packages | Terminal commands |
| **package.json** | Lists all tools needed | Root folder (automatically created) |
| **localStorage** | Saves data in browser | Used in storage/entriesRepo.ts |
| **React Router** | Handles page navigation | App.tsx, AppRoutes.tsx |

---

## 🎯 Your Learning Path

1. **Understand these first:**
   - npm / package.json
   - TypeScript basics
   - React components
   - Props and State

2. **Then learn:**
   - React Router (navigation)
   - localStorage (saving data)
   - Build tools (Vite)

3. **Advanced later:**
   - Testing
   - Deployment
   - Performance optimization

---

## 💡 Tips for Beginners

- **Don't memorize everything:** Reference this wiki when you see a new term
- **Google is your friend:** Search "what is [term]" + "explained for beginners"
- **One concept at a time:** Don't try to learn everything at once
- **It gets easier:** After 10-20 hours, patterns start making sense

---

**Last Updated:** When this was created  
**Version:** 1.0  
**For:** Complete beginners learning web development

