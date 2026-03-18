import { Link } from 'react-router-dom';
import { ShoppingCart, BookOpen } from 'lucide-react';

export default function Navbar({ cartCount }: { cartCount: number }) {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold hover:text-gray-300 transition-colors">
          <BookOpen className="w-6 h-6" />
          <span>DevOps BookStore</span>
        </Link>
        <Link to="/cart" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="hidden sm:inline">Cart</span>
        </Link>
      </div>
    </nav>
  );
}
