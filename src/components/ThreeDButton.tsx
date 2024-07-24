import React from 'react';
import clsx from 'clsx';

const ThreeDButton = ({ text, onClick, bgColor }) => {
  return (
    <button
      className={clsx(
        'relative mt-6 text-white py-2 px-6 rounded-full text-lg shadow-lg transform transition-transform active:translate-y-1 active:shadow-none',
        `bg-${bgColor}`
      )}
      onClick={onClick}
    >
      
      <span className="relative">{text}</span>
    </button>
  );
};

export default ThreeDButton;
