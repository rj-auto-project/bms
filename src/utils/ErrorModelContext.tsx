import ErrorModal from '@ui/Errormodel';
import React, {createContext, useContext, useState} from 'react';

interface ErrorContextType {
  showError: (message: string) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (message: string) => {
    setErrorMessage(message);
    setVisible(true);
  };

  const hideError = () => {
    setVisible(false);
    setErrorMessage('');
  };

  return (
    <ErrorContext.Provider value={{showError}}>
      {children}
      <ErrorModal
        visible={visible}
        message={errorMessage}
        onClose={hideError}
      />
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};
