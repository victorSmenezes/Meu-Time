'use client';

import { createContext, useContext, useState } from 'react';

const ParamsContext = createContext({});

const ParamsProvider = ({ children }) => {
  const [paramsCountry, setParamsCountry] = useState('')
  const [paramsLeague, setParamsLeague] = useState('')
  const [paramsLeagueId, setParamsLeagueId] = useState('')
  const [paramSeason, setParamSeason] = useState('')

  return (
    <ParamsContext.Provider value={{ 
      paramsCountry, setParamsCountry, 
      paramsLeague, setParamsLeague, 
      paramsLeagueId, setParamsLeagueId, 
      paramSeason, setParamSeason
      }}>
      {children}
    </ParamsContext.Provider>
  );
}

const useParamsContext = () => {
  const context = useContext(ParamsContext)
return context
}

export { ParamsContext, useParamsContext, ParamsProvider };
