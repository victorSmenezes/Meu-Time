import { ParamsProvider } from './Params';

export const AppProvider = ({ children }) => {
  return <ParamsProvider>{children}</ParamsProvider>;
}
