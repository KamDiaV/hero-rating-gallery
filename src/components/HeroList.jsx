import React from 'react';

export default function HeroList({
  items,
  renderItem,
  keyExtractor,
  className
}) {
  return (
    <div className={className}>
      {items.map((item, index) => {
        const key = keyExtractor(item, index);
        return <React.Fragment key={key}>{renderItem(item)}</React.Fragment>;
      })}
    </div>
  );
}