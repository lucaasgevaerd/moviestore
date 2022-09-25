import { createContext, useState } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { CartItem } from './types/cart-item';

export const PurchasesContext = createContext({
  state: [] as CartItem[],
  setState: (state: CartItem[]) => { },
});


function App() {

  const [state, setState] = useState<CartItem[]>([]);

  return (
    <PurchasesContext.Provider value={{ state, setState }}>
      <div className="app-container">
        <AppRouter />
      </div>
    </PurchasesContext.Provider>
  );
}


export default App;
