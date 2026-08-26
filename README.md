# Xfinity Login Website

A modern, responsive login website built with React, Vite, and Tailwind CSS, inspired by the Xfinity "Soft Maintenance" design.

## Features

- 🎨 Modern UI with light and dark theme split design
- 📱 Fully responsive for mobile, tablet, and desktop
- ⚡ Built with Vite for fast development
- 🎯 Interactive login form with validation
- 🔐 Password visibility toggle
- 🎬 Smooth animations and transitions
- 💳 Google Sign-In option
- 🎨 Tailwind CSS for styling

## Project Structure

```
xfinity-login/
├── src/
│   ├── components/
│   │   └── LoginForm.jsx       # Main login form component
│   ├── pages/
│   │   └── LoginPage.jsx       # Login page layout
│   ├── styles/
│   │   └── LoginPage.css       # Page-specific styles
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## Installation

1. Navigate to the project directory:
```bash
cd xfinity-login
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

## Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview

Preview the production build:
```bash
npm run preview
```

## Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Popular icon library
- **PostCSS & Autoprefixer** - CSS processing tools

## Features Implemented

✅ Responsive split-screen layout
✅ Email/Username input field
✅ Password input with visibility toggle
✅ Remember me checkbox
✅ Loading state during sign-in
✅ Error message display
✅ Google Sign-In button
✅ Forgot Password and Help links
✅ Terms of Service and Privacy Policy links
✅ Sign Up link for new users
✅ Mobile-optimized design
✅ Smooth animations and transitions
✅ Form validation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- [ ] Backend authentication integration
- [ ] Two-factor authentication
- [ ] Remember device functionality
- [ ] Social login integration (Google, Apple)
- [ ] Password recovery flow
- [ ] Multi-language support
- [ ] Dark mode toggle

## License

MIT License - feel free to use this project for your own purposes.

## Notes

This is a frontend-only implementation. To make this fully functional, you would need to:
1. Connect to a backend API for authentication
2. Implement proper security measures (HTTPS, CSRF tokens, etc.)
3. Add server-side session management
4. Implement proper error handling and logging
