# Personal Portfolio Website

A modern, responsive personal portfolio website built with vanilla JavaScript and TailwindCSS. Features a clean, minimalist design with smooth animations and dynamic content loading.

## Features

- 💻 Responsive design (mobile-first approach)
- 🌙 Dark theme with sleek UI
- ⚡ Dynamic GitHub projects integration
- 🎯 Expertise showcase
- ✨ Smooth typing animation for role description
- 📱 Mobile-friendly navigation
- 🔍 SEO optimized

## Tech Stack

- **Runtime:** [Bun](https://bun.sh/)
- **CSS Framework:** [TailwindCSS](https://tailwindcss.com/)
- **Animation:** [Typed.js](https://github.com/mattboldt/typed.js/)
- **API Integration:** GitHub GraphQL API
- **Build Tool:** Bun's built-in bundler

## Project Structure

```
personal-web/
├── assets/               # Static assets (images, icons)
├── src/
│   ├── data/            # Data files for expertise and pinned items
│   ├── scripts/         # JavaScript modules
│   │   ├── api.js       # API integration logic
│   │   ├── main.js      # Main application logic
│   │   └── ui.js        # UI component creation
│   └── global.css       # Global styles and Tailwind imports
├── index.html           # Main HTML file
├── bun.lock             # Bun lock file
└── package.json         # Project dependencies and scripts
```

## Getting Started

1. **Prerequisites**

   - Install [Bun](https://bun.sh)

2. **Installation**

   ```zsh
   # Clone the repository
   git clone https://github.com/mindkeeper/personal-web.git
   cd personal-web

   # Install dependencies
   bun install
   ```

3. **Environment Setup**

   ```zsh
   # Create a .env file and add your GitHub token
   echo "GITHUB_TOKEN=your_github_token" > .env
   ```

4. **Development**
   ```zsh
   # Start the development server
   bun run dev
   ```

## Features in Detail

### Dynamic GitHub Projects

- Fetches and displays pinned repositories from GitHub
- Shows repository stats (stars, language)
- Links directly to GitHub repositories

### Expertise Section

- Showcases technical skills with modern icons
- Responsive grid layout
- Smooth hover animations

### Navigation

- Intersection Observer for active section detection
- Smooth scroll behavior
- Dynamic link highlighting

## Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run tw:dev` - Watch for Tailwind CSS changes
- `bun run tw:build` - Build Tailwind CSS for production

## Credits

This website's design was inspired by [Sarah Dayan's personal website](https://www.sarahdayan.dev/)

## Author

**Nur Cholis Majid**

- GitHub: [@mindkeeper](https://github.com/mindkeeper)
- Twitter: [@nrchlsm](https://x.com/nrchlsm)

## License

This project is open source and available under the [MIT License](LICENSE).
