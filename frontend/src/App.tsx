<<<<<<< HEAD
=======
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31
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

<<<<<<< HEAD
  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

=======
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <Navbar cartCount={cartItems.length} />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail addToCart={addToCart} />} />
<<<<<<< HEAD
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
=======
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31
          </Routes>
        </main>
      </div>
    </Router>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31
