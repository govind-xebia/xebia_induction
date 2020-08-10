import { createContext } from 'react';

const CountryContext = createContext({ country: "in" });
export const { Provider } = CountryContext;

export default CountryContext;