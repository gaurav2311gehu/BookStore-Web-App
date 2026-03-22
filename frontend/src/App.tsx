
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Cart from './components/Cart';

export default function App() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (book: any) => {
    setCartItems([...cartItems, book]);
  };
 return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <Navbar cartCount={cartItems.length} />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail addToCart={addToCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
