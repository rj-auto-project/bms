
import Loader from '@ui/Loader';
import React, {createContext, useContext, useState} from 'react';

interface LoaderContextType {
  show: (loading: boolean) => void;
  isLoading: boolean;
}

const LoaderContext = createContext<LoaderContextType>({
  show: () => {},
  isLoading: false,
});

export const LoaderProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const show = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <LoaderContext.Provider value={{show, isLoading}}>
      {children}
      <Loader />
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
