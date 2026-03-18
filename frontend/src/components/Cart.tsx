import { Link } from 'react-router-dom';

export default function Cart({ cartItems }: { cartItems: any[] }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link to="/" className="text-blue-600 hover:underline font-medium">Browse Books</Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={`${item.id}-${index}`} className="p-4 sm:p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.author}</p>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  ${item.price?.toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Total:</span>
            <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
          </div>
          <div className="p-6 bg-white border-t border-gray-200 flex justify-end gap-4">
            <Link to="/" className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Continue Shopping
            </Link>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
