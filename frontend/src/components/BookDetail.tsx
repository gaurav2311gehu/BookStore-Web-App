<<<<<<< HEAD
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
=======
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBookById } from '../api/api';

export default function BookDetail({ addToCart }: { addToCart: (book: any) => void }) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        if (id) {
          const response = await getBookById(id);
          setBook(response.data);
        }
      } catch (err) {
        console.error('Failed to fetch book details, using mock data.', err);
        // Mock data fallback
        const mockBooks: Record<string, any> = {
          '1': { id: '1', title: 'The DevOps Handbook', author: 'Gene Kim', price: 29.99, description: 'How to Create World-Class Agility, Reliability, and Security in Technology Organizations.' },
          '2': { id: '2', title: 'Continuous Delivery', author: 'Jez Humble', price: 34.99, description: 'Reliable Software Releases through Build, Test, and Deployment Automation.' },
          '3': { id: '3', title: 'Site Reliability Engineering', author: 'Niall Richard Murphy', price: 39.99, description: 'How Google Runs Production Systems.' },
        };
        setBook(mockBooks[id || ''] || { id, title: 'Unknown Book', author: 'Unknown', price: 0, description: 'No description available.' });
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <div className="p-4 text-center">Loading details...</div>;
  if (!book) return <div className="p-4 text-center">Book not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">&larr; Back to Books</Link>
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
        <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
        <p className="text-2xl font-semibold text-green-600 mb-6">${book.price?.toFixed(2)}</p>
        <div className="prose text-gray-700 mb-8">
          <p>{book.description}</p>
        </div>
        <button 
          onClick={() => {
            addToCart(book);
            navigate('/cart');
          }}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors w-full sm:w-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31
