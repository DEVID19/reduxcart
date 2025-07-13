
# 🛒 ReduxCart – A Learning Project

ReduxCart is a fully functional e-commerce cart application I built **from scratch** as part of my journey to **master Redux Toolkit**. This project helped me understand core Redux concepts like slice creation, actions, reducers, local state syncing with `localStorage`, and how to manage a global cart state efficiently.

---

## 📚 Why I Built This

I built this project to get real-world experience with:

- 🔄 Redux Toolkit (`createSlice`, `useSelector`, `useDispatch`)
- 🛠️ Global state management for a shopping cart
- 🔍 Implementing search/filter features
- 💾 Using `localStorage` to persist cart data
- 🎨 Building responsive UIs with Tailwind CSS
- 🧠 Understanding the data flow in modern React + Redux apps

---

## ✨ Features

- ✅ Browse 100+ products fetched from [DummyJSON API](https://dummyjson.com/products)
- 🔍 Search products by title or description
- 🛒 Add / Remove items from cart
- ➕➖ Increment and Decrement item quantity
- 🧮 Auto-calculated total quantity & price
- 💾 Cart state is saved in `localStorage` so it's preserved on refresh
- 📱 Fully responsive design for all screen sizes

---

## 🔧 Tech Stack

- **React** (with Vite)
- **Redux Toolkit**
- **Tailwind CSS**
- **Lucide React Icons**
- **React Hot Toast**
- **DummyJSON API**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/reduxcart.git
cd reduxcart
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🗂️ Folder Structure

```
src/
│
├── app/               # Redux store & slices
│   └── cartSlice.js
│
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Cart.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🧠 What I Learned

- Deep dive into Redux Toolkit's `createSlice` and dispatching multiple actions
- Managing and syncing global cart state with `localStorage`
- Building reusable components (like `ProductCard`, `Navbar`)
- Implementing search functionality and conditional rendering
- Creating responsive UI with Tailwind CSS

---

## 🌐 Live Demo

🔗 [Live Site (Vercel)](https://reduxcart-rho.vercel.app/)

---

## 🤝 Connect with Me

**Devid Wasulal Bisen**  
Frontend Developer | BTech IT 
📫 [LinkedIn](https://linkedin.com/in/devid-bisen)  
🌐 [Portfolio](https://devidbisen.netlify.app)  
📧 devidbisen84@gmail.com  
📍 Nagpur, Maharashtra

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

> ⚠️ This is a **learning project**, created to practice Redux Toolkit and build a cart system from scratch using React.
