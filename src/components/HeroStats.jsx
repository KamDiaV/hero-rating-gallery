import React from 'react';

export default function HeroStats({ stats }) {
  return (
    <ul className="hero-stats">
      {stats.map(({ label, value }) => (
        <li key={label}>
          <strong>{label}:</strong> {value}
        </li>
      ))}
    </ul>
  );
}