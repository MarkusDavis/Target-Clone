import React, { useState, useEffect } from 'react';
import { formatCardNumber } from 'payment-formatter';

const CardInput = ({ value, onChange, ...props }) => {
  const [formattedValue, setFormattedValue] = useState('');

  useEffect(() => {
    const formattedNumber = formatCardNumber(value);
    setFormattedValue(formattedNumber);
    onChange(formattedNumber.replace(/\s/g, ''));
  }, [value, onChange]);

  return (
    <input
      type="text"
      value={formattedValue}
      onChange={(e) => onChange(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      {...props}
    />
  );
};

export default CardInput;