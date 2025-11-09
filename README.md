# Shopping Cart - React E-commerce Frontend

A modern, responsive e-commerce shopping cart application built with React and Vite. This project demonstrates frontend development skills including routing, state management, and API integration.

## 🚀 Live Demo

[View Live Demo](https://digitronix-store.vercel.app/)

test

## ✨ Features

- **Product Browsing**: Browse products from multiple categories (laptops, smartphones, tablets, accessories)
- **Search Functionality**: Real-time product search with instant results
- **Shopping Cart**: Add, remove, and update product quantities
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Sticky Navigation**: Header stays visible while scrolling for easy navigation
- **Modern UI**: Clean interface with smooth animations and user-friendly controls

## 🛠️ Technologies Used

- **React 19** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS** - Styling with CSS custom properties
- **Lucide React** - Icon library
- **DummyJSON API** - Product data source

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/David-Vaclavik/Shopping-Cart.git
   cd Shopping-Cart
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
Shopping-Cart/
├── public/              # Static assets
│   ├── logo-digi.svg
│   └── vite.svg
├── src/
│   ├── assets/          # Images and SVGs
│   ├── components/      # Reusable React components
│   │   ├── CardControls.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── SearchBar.jsx
│   ├── pages/           # Page components
│   │   ├── Cart.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Home.jsx
│   │   └── Shop.jsx
│   ├── styles/          # CSS modules
│   │   ├── App.css
│   │   ├── Cart.css
│   │   ├── ErrorPage.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Shop.css
│   │   └── Variables.css
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── routes.jsx       # Route configuration
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Key Features Explained

### Product Management

- Fetches products from multiple categories via DummyJSON API
- Combines and sorts products alphabetically
- Displays products in a responsive grid layout

### Shopping Cart

- Add products with quantity controls
- Increment/decrement quantities with pill-shaped button groups
- Remove items by setting quantity to 0
- Real-time total calculation
- Persistent cart state across pages

### Search

- Real-time search filtering
- Searches across product titles
- Shows all products when search is empty

### Responsive Design

- Sticky header for better navigation
- Flexible layouts that adapt to screen size

## 🎨 Styling

The project uses CSS custom properties (CSS variables) for consistent theming:

```css
:root {
  --primary: oklch(0.4 0.1 264);
  --bg: oklch(0.96 0 264);
  --text: oklch(0.15 0 264);
  --text-muted: oklch(0.4 0 264);
  --border: oklch(0.6 0 264);
  --border-muted: oklch(0.7 0 264);
  /* ... more variables */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 750px - Full layout with all features
- **Tablet**: 500px - 750px - Adjusted spacing and smaller logo
- **Mobile**: < 500px - Stacked layout, hidden logo, single column grid

## 🚧 Future Enhancements

- [ ] Add product filtering by category
  <!-- - [ ] Implement user authentication -->
  <!-- - [ ] Add dark mode support -->
    <!-- - [ ] Add favorites/wishlist functionality -->
    <!-- - [ ] Add product reviews and ratings -->
    <!-- - [ ] Implement order history -->

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**David Václavík**

- GitHub: [@David-Vaclavik](https://github.com/David-Vaclavik)

## 🙏 Acknowledgments

- Product data provided by [DummyJSON](https://dummyjson.com/)
- Logo placeholder from [Logoipsum](https://logoipsum.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Fonts: Inter and Orbitron from [Google Fonts](https://fonts.google.com/)

---

**Note**: This is a demonstration project for educational purposes. It is not a real e-commerce store and does not process actual payments.
