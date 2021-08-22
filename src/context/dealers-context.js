import { createContext, useContext } from "react";

export const DealersContext = createContext([]);

export const UseDealersContext = () => useContext(DealersContext);
