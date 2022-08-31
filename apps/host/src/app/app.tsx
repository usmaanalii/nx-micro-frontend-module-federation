import * as React from 'react';
import { useContext, useState } from 'react';
import { Header } from '@mod-fed/ui';

import { DataProvider, DataContext } from '@mod-fed/shared/data-context';

import { Link, Route, Routes } from 'react-router-dom';

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

export function Host({ title }: { title: string }) {
  const { counter, setCounter } = useContext(DataContext);

  const [accountBalance, setAccountBalance] = useState(1000);

  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome {title} 👋
          </h1>
        </div>
        <button onClick={() => setCounter(counter + 1)}>
          counter {counter}
        </button>{' '}
        <Header
          accountBalance={accountBalance}
          setAccountBalance={setAccountBalance}
        />
        <div className="counter-div">
          <div>
            Account balance:{' '}
            {new Intl.NumberFormat('en-GB', {
              style: 'currency',
              currency: 'GBP',
            }).format(accountBalance)}
          </div>

          <div>
            <button
              className="counter-button"
              onClick={() => setAccountBalance(0)}
            >
              Clear account balance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <DataProvider>
      <React.Suspense fallback={null}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Host title="HOST APP!!!!" />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </React.Suspense>
    </DataProvider>
  );
}

export default App;
