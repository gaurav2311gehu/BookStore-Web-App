import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../api/api';
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31

export default function BookList() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mock data for DevOps practice if backend is not available
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response.data);
      } catch (err) {
        console.error('Failed to fetch from API, using mock data.', err);
        setBooks([
<<<<<<< HEAD
          { _id: '1', title: 'The DevOps Handbook', author: 'Gene Kim' },
          { _id: '2', title: 'Continuous Delivery', author: 'Jez Humble' },
          { _id: '3', title: 'Site Reliability Engineering', author: 'Niall Richard Murphy' },
=======
          { id: '1', title: 'The DevOps Handbook', author: 'Gene Kim' },
          { id: '2', title: 'Continuous Delivery', author: 'Jez Humble' },
          { id: '3', title: 'Site Reliability Engineering', author: 'Niall Richard Murphy' },
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31
        ]);
        setError('Backend not reachable. Displaying mock data.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading books...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">BookStore</h1>
      {error && <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-6">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
<<<<<<< HEAD
          <div key={book._id} className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">by {book.author}</p>
            <Link 
              to={`/books/${book._id}`}
=======
          <div key={book.id} className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">by {book.author}</p>
            <Link 
              to={`/books/${book.id}`}
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
