import React, { useState, useEffect } from 'react';
import { formatHeroStats } from '../utils/heroUtils';
import TooltipInfo from './TooltipInfo';
import HeroStats from './HeroStats';
import StarRating from './StarRating';

export default function HeroCard({ hero }) {
  const { name, url, info } = hero;
  const storageKey = `rating-${name}`;

  const stats = formatHeroStats(hero);

  const [rating, setRating] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored !== null) setRating(Number(stored));
  }, [storageKey]);

  const handleClick = (newRating) => {
    setRating(newRating);
    localStorage.setItem(storageKey, newRating);
  };

  return (
    <div className="hero-card">
      <img src={url} alt={name} className="hero-card__image" />
      <div className="hero-card__details">
        <div className="hero-card__header">
          <h2 className="hero-card__name">{name}</h2>
          <TooltipInfo info={info} />
        </div>
        <HeroStats stats={stats} />
        <div className="hero-card__rating">
          <StarRating value={rating} onChange={handleClick} />
        </div>
      </div>
    </div>
  );
}