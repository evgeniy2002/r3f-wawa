import React from 'react';
import { useAnimationContext } from '../context';

export const Interface = () => {
  const { names, animationIndex, setAnimationIndex } = useAnimationContext();

  return (
    <div className='interface'>
      {names.map((name, index) => (
        <button
          key={index}
          className={`${animationIndex === index && 'active'}`}
          onClick={() => setAnimationIndex(index)}>
          {name}
        </button>
      ))}
    </div>
  );
};
