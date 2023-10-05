import { createContext, useState, useContext } from "react";

export const StoreContext = createContext();

export const UserStore = ({ children }) => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  console.log(contador)
  return (
    <StoreContext.Provider
      value={{
        contador,
        incrementarContador
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
