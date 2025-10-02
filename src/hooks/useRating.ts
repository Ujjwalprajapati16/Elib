'use client';

import { useState } from 'react';
import axios from '@/lib/axios'; 

type UseRatingProps = {
  bookId: string;
};

type UseRatingReturn = {
  rating: number;
  setRating: (value: number) => void;
  comment: string;
  setComment: (value: string) => void;
  loading: boolean;
  error: string | null;
  submitRating: () => Promise<void>;
};

export const useRating = ({ bookId }: UseRatingProps): UseRatingReturn => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitRating = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('User not authenticated');

      await axios.post(
        `/rate/${bookId}`,
        { rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setComment('');
      setRating(5);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || err.message || 'Failed to submit rating');
    } finally {
      setLoading(false);
    }
  };

  return { rating, setRating, comment, setComment, loading, error, submitRating };
};
