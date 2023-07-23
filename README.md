# Svelte Project Setup and Running Guide

This guide provides step-by-step instructions to set up and run a Svelte project on your local machine.

## Prerequisites

Before getting started, make sure you have the following installed:

1. [Node.js](https://nodejs.org) (LTS version recommended)
2. npm (Node Package Manager) - It comes bundled with Node.js.

## Step 1: Create a new Svelte project

To create a new Svelte project, open your terminal and run the following commands:

```bash
# Use degit to clone the Svelte template
npx degit sveltejs/template svelte-project

# Change to the project directory
cd svelte-project
```

## Step 2: Install dependencies

In the project directory, install the required dependencies by running:

```bash
npm install
```

## Step 3: Run the development server

Once the dependencies are installed, start the development server by running:

```bash
npm run dev
```

This will launch the development server, and your Svelte app will be accessible at `http://localhost:5000`.
