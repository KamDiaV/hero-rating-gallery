import React from 'react';
import './TooltipInfo.css';

export default function TooltipInfo({ info }) {
  return (
    <div className="info-tooltip">
      ℹ️
      <div className="tooltip-content">{info}</div>
    </div>
  );
}
