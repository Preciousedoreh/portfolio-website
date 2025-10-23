# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript. This website allows you to showcase your projects and provides an easy way for clients to view your work and contact you.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Project Showcase**: Dedicated section to display your projects with descriptions and links
- **Contact Form**: Built-in contact form for potential clients to reach out
- **Fast Performance**: Built with Vite for optimal loading times
- **TypeScript**: Full TypeScript support for better development experience

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. **Install Node.js**: 
   - Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)
   - This will also install npm (Node Package Manager)

2. **Install Dependencies**:
   ```bash
   npm install
   ```

## Running the Project

To start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero/landing section
│   ├── About.tsx       # About me section
│   ├── Projects.tsx    # Projects showcase
│   └── Contact.tsx     # Contact form
├── App.tsx             # Main app component
├── App.css             # Main styles
├── index.css           # Global styles
└── main.tsx            # App entry point
```

## Customization

### Personal Information
1. Update your name in `src/components/Hero.tsx`
2. Modify the about section in `src/components/About.tsx`
3. Add your skills in the skills section

### Projects
Edit `src/components/Projects.tsx` to add your own projects:
- Update the `projects` array with your project details
- Include project titles, descriptions, technologies used
- Add links to GitHub repositories and live demos

### Styling
- Modify `src/App.css` for component-specific styles
- Update `src/index.css` for global styles
- Customize colors, fonts, and layout to match your brand

### Contact Form
The contact form in `src/components/Contact.tsx` currently logs to console. To make it functional:
1. Set up a backend service (e.g., Netlify Forms, EmailJS, or your own server)
2. Update the `handleSubmit` function to send data to your chosen service

## Deployment

This project can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ESLint** - Code linting

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help or have questions:
1. Check the [React documentation](https://react.dev/)
2. Check the [Vite documentation](https://vitejs.dev/)
3. Open an issue in this repository