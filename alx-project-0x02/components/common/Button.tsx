// components/common/Button.tsx

import React from 'react';


const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  children,
  className = '',
  ...rest
}) => {
  const base = 'bg-blue-600 text-white font-semibold hover:bg-blue-700 transition';
  const sizeClass = sizeClasses[size];

  return (
    <button
      className={`${base} ${sizeClass} ${shape} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
