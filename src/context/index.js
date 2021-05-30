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

  const editShips = async () => {
    setLoading(true);
    const response = await fetch("/api/ships", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ships: [12, 3, 4, 56] }),
    });

    const body = await response.json();
    setShips(body);
    setLoading(false);
  };
  const editShip = (index, value) => {
    const shipsCopy = ships.map((s) => s);
    shipsCopy[index] = value;

    editShips(shipsCopy);
  };
  const context = { ships, editShip, loading };

  return (
    <ShipsAppContext.Provider value={context}>
      {children}
    </ShipsAppContext.Provider>
  );
};
