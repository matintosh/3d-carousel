import { createContext, useEffect, useState } from "react";

export const ShipsAppContext = createContext(null);

export const ShipsContextProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/ships");
      const body = await response.json();

      setShips(body);
    })();
  }, []);

  const context = { ships, loading };
  return (
    <ShipsAppContext.Provider value={context}>
      {children}
    </ShipsAppContext.Provider>
  );
};
