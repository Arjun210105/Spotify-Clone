# Spotify Clone

A modern music streaming application built with React and Tailwind CSS, replicating the core features of Spotify.

## 📋 Overview

This project is a feature-rich Spotify clone that demonstrates React best practices, including:
- Component-based architecture
- Context API for state management
- Responsive UI with Tailwind CSS
- Audio player functionality
- Album and song browsing

## 🎯 Features

- 🎵 **Music Player** - Play, pause, next, previous controls
- 📀 **Album Browser** - Browse and view album collections
- 🎼 **Song Listing** - Display songs with metadata (name, description, image)
- 📱 **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- ⏱️ **Seek Bar** - Track progress and seek functionality
- 🎚️ **Volume Control** - Adjustable audio volume

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **State Management**: Context API
- **Linting**: ESLint 9

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or above) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

## 🚀 Installation & Setup

Follow these steps to get the project running on your system:

### 1. Clone the Repository

```bash
git clone https://github.com/SreeArjun/spotify-clone-project.git
cd spotify-clone
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages including:
- React and React DOM
- Tailwind CSS and Tailwind Vite plugin
- React Router DOM
- ESLint and development tools

### 3. Start the Development Server

```bash
npm run dev
```

The application will start and typically be available at:
```
http://localhost:5173
```

Your browser should open automatically. If not, manually navigate to the URL above.

## 📝 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).

### Build
```bash
npm run build
```
Creates a production-ready build in the `dist/` directory.

### Preview Build
```bash
npm run preview
```
Previews the production build locally before deployment.

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality and style.

## 📂 Project Structure

```
spotify-clone/
├── src/
│   ├── Components/          # React components (SideBar, Player, SongItem, etc.)
│   ├── Context/            # Context API setup (PlayerContext, PlayerContextCreate)
│   ├── assets/             # Images, icons, and audio files
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styling
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── public/                 # Public assets
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies
├── eslint.config.js       # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── index.html             # HTML template
```

## 🎨 Key Components

### **SideBar** (`src/Components/SideBar.jsx`)
Navigation component displaying home and menu options.

### **Player** (`src/Components/Player.jsx`)
Audio player with controls (play, pause, next, previous) and progress bar.

### **DisplayHome** (`src/Components/DisplayHome.jsx`)
Main page displaying album collections.

### **SongItem** (`src/Components/SongItem.jsx`)
Individual song component with click-to-play functionality.

### **AlbumItem** (`src/Components/AlbumItem.jsx`)
Album card component for browsing collections.

## 🔧 Context API Setup

The application uses React's Context API for global state management:

- **PlayerContext** (`src/Context/PlayerContextCreate.jsx`) - Creates the context
- **PlayerContextProvider** (`src/Context/PlayerContext.jsx`) - Provides player state and methods

## 🎵 Audio Data

Audio files and metadata are stored in:
```
src/assets/assets.js
```

This file contains:
- Song data (name, description, image, audio file)
- Album information
- Icon references for UI components

## 🌐 Browser Support

This project works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.0 | UI library |
| react-dom | ^19.2.0 | DOM rendering |
| react-router-dom | ^7.13.0 | Routing |
| tailwindcss | ^4.1.18 | CSS framework |
| @tailwindcss/vite | ^4.1.18 | Tailwind Vite plugin |
| vite | ^7.3.1 | Build tool |

## 🐛 Troubleshooting

### White screen issue
- Check browser console for errors (F12)
- Ensure all imports are correct
- Clear browser cache and restart dev server

### Audio not playing
- Verify audio files exist in `src/assets/`
- Check browser's autoplay policies
- Ensure the audio file format is supported

### Port already in use
If port 5173 is already in use, Vite will automatically use the next available port.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Services
The built files in the `dist/` folder can be deployed to:
- **Vercel**: `vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Any static hosting service**: Upload the `dist` folder

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Sree Arjun** - [GitHub](https://github.com/SreeArjun)

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit a pull request.

## 📞 Support

For issues, questions, or suggestions, please open an issue in the GitHub repository.

---

Enjoy using Spotify Clone! 🎵
