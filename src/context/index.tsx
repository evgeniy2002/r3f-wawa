import { createContext, ReactNode, useContext, useState } from 'react';

interface IAnimationContext {
  names: string[];
  setNames: (value: string[]) => void;
  animationIndex: number;
  setAnimationIndex: (value: number) => void;
}

const AnimationContext = createContext<IAnimationContext | null>(null);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [names, setNames] = useState<string[]>([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  return (
    <AnimationContext.Provider value={{ names, setNames, animationIndex, setAnimationIndex }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error('useAnimation must be used within a AnimationProvider');
  }

  return context;
};
