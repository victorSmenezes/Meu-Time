'use client';

import { createContext, useContext, useState } from 'react';

const ParamsContext = createContext({});

const ParamsProvider = ({ children }) => {
  const [params, setParams] = useState({
    country: "",
    league: {
      id: "",
      value: "",
    },
    season: ""
  });

  return (
    <ParamsContext.Provider value={{ params }}>
      {children}
    </ParamsContext.Provider>
  );
}

const useParamsContext = () => {
  const context = useContext(ParamsContext)
return context
}

export { ParamsContext, useParamsContext, ParamsProvider };
