import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../api/api";

export default function BookDetail({ addToCart }) {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-600 mb-2">by {book.author}</p>
      <p className="mb-4">₹{book.price}</p>
      <p className="mb-6">{book.description}</p>

      <button
        onClick={() => addToCart(book)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}