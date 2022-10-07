import { createContext, ReactNode, useState } from 'react';

interface IAppContext {
  willCheckout: boolean;
  onSetCheckout: () => void;
};

interface IAppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IAppContext>({
  willCheckout: false,
  onSetCheckout: () => {},
});

AppContext.displayName = 'AppContext';

export function AppContextProvider({ children }: IAppContextProviderProps) {
  const [ willCheckout, setWillCheckout ] = useState<boolean>(false);

  const handleToggleCheckout = () => {
    setWillCheckout((prevWillCheckout) => !prevWillCheckout);
  };

  return (
    <AppContext.Provider
      value={ {
        willCheckout,
        onSetCheckout: handleToggleCheckout
      } }
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppContext;