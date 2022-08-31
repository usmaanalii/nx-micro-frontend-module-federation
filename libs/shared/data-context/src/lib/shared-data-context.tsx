import { createContext, useState } from 'react';
export interface SharedDataContextProps {
  children: JSX.Element;
}
export const DataContext = createContext<Record<string, any>>({});

export function DataProvider({ children }: SharedDataContextProps) {
  const [user, setUser] = useState('Pavement User 1');

  const users = ['Pavement User 1', 'Tigana', 'Pablo', 'Keshvi'];

  const updateUser = () =>
    setUser(users[Math.floor(Math.random() * users.length)]);

  return (
    <DataContext.Provider value={{ user, updateUser }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
