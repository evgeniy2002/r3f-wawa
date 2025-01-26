import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

export const Card: React.FC<CardProps> = ({ title, content, ...props }) => {
  return (
    <div {...props} className='card'>
      <div className='card__container'>
        <h2>{title}</h2>
        <p style={{ marginTop: 8 }}>{content}</p>
      </div>
    </div>
  );
};
