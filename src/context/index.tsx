import { createContext, useContext, useState } from 'react';

const chairColors = [
  {
    color: '#683434',
    name: 'brown',
  },
  {
    color: '#1a5e1a',
    name: 'green',
  },
  {
    color: '#659994',
    name: 'blue',
  },
  {
    color: '#896599',
    name: 'mauve',
  },
  {
    color: '#ffa500',
    name: 'orange',
  },
  {
    color: '#59555b',
    name: 'grey',
  },
  {
    color: '#222222',
    name: 'black',
  },
  {
    color: '#ececec',
    name: 'white',
  },
];

const cushionColors = [
  {
    color: '#683434',
    name: 'brown',
  },
  {
    color: '#1a5e1a',
    name: 'green',
  },
  {
    color: '#659994',
    name: 'blue',
  },
  {
    color: '#896599',
    name: 'mauve',
  },
  {
    color: '#ffa500',
    name: 'orange',
  },
  {
    color: '#59555b',
    name: 'grey',
  },
  {
    color: '#222222',
    name: 'black',
  },
  {
    color: '#ececec',
    name: 'white',
  },
];

export interface ConfigContext {
  legs: number;
  setLegs: (value: number) => void;
  chairColor: { name: string; color: string };
  cushionColor: { name: string; color: string };
  setChairColor: (value: { name: string; color: string }) => void;
  setCushionColor: (value: { name: string; color: string }) => void;
  chairColors: { name: string; color: string }[];
  cushionColors: { name: string; color: string }[];
}

export const ConfigContext = createContext<ConfigContext | null>(null);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [legs, setLegs] = useState(0);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  return (
    <ConfigContext.Provider
      value={{
        legs,
        setLegs,
        chairColor,
        cushionColor,
        setChairColor,
        setCushionColor,
        chairColors,
        cushionColors,
      }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }

  return context;
};
