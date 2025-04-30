import React from 'react';
import './StarRating.css'; 

export default function StarRating({ value, max = 5, onChange }) {
  return (
    <div className="stars">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`star ${i < value ? 'filled' : ''}`}
          onClick={() => onChange(i + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
