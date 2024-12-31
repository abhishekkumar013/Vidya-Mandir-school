import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;