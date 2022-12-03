import { createContext } from 'react';

const CountryContext = createContext({ region: "in", contractorMode: false });
export const { Provider } = CountryContext;

export default CountryContext;