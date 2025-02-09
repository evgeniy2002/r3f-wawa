import React from 'react';
import { useConfig } from '../context';

export const Config = () => {
  const {
    legs,
    chairColors,
    chairColor,
    cushionColor,
    cushionColors,
    setLegs,
    setChairColor,
    setCushionColor,
  } = useConfig();

  return (
    <div className='config'>
      <div className='config__content'>
        <div className='config__card'>
          <h2>Chair color</h2>

          <div className='config__colors'>
            {chairColors.map(({ name, color }) => (
              <div
                key={name}
                data-name={name}
                className={`${color === chairColor.color ? 'item--active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setChairColor({ name, color })}></div>
            ))}
          </div>
        </div>
        <div className='config__card'>
          <h2>CushionColors</h2>

          <div className='config__colors'>
            {cushionColors.map(({ name, color }) => (
              <div
                key={name}
                data-name={name}
                className={`${color === cushionColor.color ? 'item--active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setCushionColor({ name, color })}></div>
            ))}
          </div>
        </div>
        <div className='config__card'>
          <h2>Legs</h2>

          <div className='config__legs'>
            <span
              className={`leg ${legs === 0 ? 'config__legs--active' : ''}`}
              onClick={() => setLegs(0)}>
              Design
            </span>

            <span
              className={`leg ${legs === 1 ? 'config__legs--active' : ''}`}
              onClick={() => setLegs(1)}>
              Classic
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
