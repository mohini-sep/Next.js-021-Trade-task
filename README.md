# Next.js-021-Trade-task

A responsive Orders dashboard built with Next.js for displaying and managing open orders. This project was created as part of the Trade UI Task, focusing on replicating the Open Orders screen with clean design, smooth interactions, and mobile responsiveness.

![image](https://github.com/user-attachments/assets/dbdaf1ce-dcd0-49d9-9940-94c8c4b84784)


## 🧠 Features
- 📱 Fully responsive UI
- 📊 Table view for open orders
- 🧭 Filter controls and sorting
- 🎨 Clean, minimal design using custom CSS
- ⚡ Built with Next.js 

## 🏗️ Project Structure
<pre> 
/root-directory
├── /node_modules             # External libraries and dependencies
├── /.next                    # Next.js build output (do not push to git)
├── /components               # Reusable components
│   ├── Layout.js             # Layout component for consistent page structure
├── /pages                    # Pages for routing in Next.js
│   ├── _app.js               # Custom App component for Next.js
│   ├── index.js              # Homepage and main content
│   ├── orders.js             # Orders page
├── /styles                   # Styling for the project
│   ├── Layout.module.css     # Styles for the Layout component
│   ├── Orders.module.css     # Styles for the Orders page
│   ├── globals.css           # Global styles for the project
├── .gitignore                # Files to ignore in Git version control
├── next.config.js            # Configuration file for Next.js
├── package-lock.json         # Lock file for package versions
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
</pre>

## Technologies Used
- Next.js (React Framework)
- React.js
- CSS / Tailwind CSS (for styling)
- JavaScript
- Node.js (runtime environment)
- Git (Version Control)

## 🚀 Getting Started

To get started with the project locally, follow these steps:

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/orders-app.git
   cd orders-app
2. Install dependencies:
   ```bash
   npm install

3. Run the app:
   ```bash
   npm run dev
The app will be live at http://localhost:3000

## Features
Responsive Layout: The app is built with responsiveness in mind, ensuring a great user experience across devices.

Clean and Modular Code: The code is structured into reusable components, which enhances maintainability and readability.

Page Navigation: Next.js’s file-based routing makes it easy to manage pages and navigation.

Optimized for Performance: Using server-side rendering and static site generation features of Next.js, the app ensures fast load times and good SEO.

## Approach
1. Project Setup
I started by setting up a new Next.js project using create-next-app, which set up the necessary files and folders for a basic Next.js application.

2. Component-Based Architecture
The application is structured around reusable components. The Layout.js component provides a consistent layout across all pages, while the index.js and orders.js pages handle specific content and logic for the homepage and orders page, respectively.

3. Styling
For styling, I used CSS Modules for component-specific styles, which ensures that styles are scoped to the component and prevents conflicts with other components. I used global CSS for universal styles that apply to the entire project.

4. Pages and Routing
Next.js uses file-based routing. The pages directory contains the index.js (homepage) and orders.js (orders page), with the Layout.js component being used across multiple pages to provide consistent layout.

5. Performance Optimization
Next.js comes with built-in features like server-side rendering (SSR) and static site generation (SSG), which I leveraged to make sure the app performs efficiently and can be easily indexed by search engines.

6. Version Control
I used Git for version control and pushed the project to GitHub. The .gitignore file excludes unnecessary files such as the node_modules directory and the .next build folder.
