import { createContext, useEffect, useState } from "react";

export const ShipsAppContext = createContext(null);

export const ShipsContextProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const [editableShip, setEditableShip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/ships");
      const body = await response.json();

      setShips(body);
    })();
  }, []);

  const editShips = async (shipsPayload) => {
    setLoading(true);
    const response = await fetch("/api/ships", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ships: shipsPayload }),
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
  const context = {
    ships,
    editShip,
    editableShip,
    setEditableShip,
    current,
    setCurrent,
    loading,
  };

  return (
    <ShipsAppContext.Provider value={context}>
      {children}
    </ShipsAppContext.Provider>
  );
};
