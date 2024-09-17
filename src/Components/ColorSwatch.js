import React from 'react';
import '../Style/ColorSwatch.css';

const ColorSwatch = ({ onColorChange }) => {
  const colors = ['pink', 'blue', 'yellow'];

  return (
    <div className="color-swatch">
      {colors.map((color) => (
        <button
          key={color}
          className={`swatch-button ${color}`}
          onClick={() => onColorChange(color)}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ColorSwatch;
