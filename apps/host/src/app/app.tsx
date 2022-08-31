import * as React from 'react';
import { useContext, useState } from 'react';
import { Header } from '@mod-fed/ui';

import { DataProvider, DataContext } from '@mod-fed/shared/data-context';

import { Link, Route, Routes } from 'react-router-dom';

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

export function Host({ title }: { title: string }) {
  const { user, updateUser } = useContext(DataContext);

  const [accountBalance, setAccountBalance] = useState(1000);

  return (
    <div className="border-solid border-purple-500 border-2 p-3">
      <div>
        <div>
          <h1 className="font-bold mb-3">
            This is the <span className="text-blue-600">{title}</span>{' '}
            application
          </h1>
        </div>

        <div className="mb-3">
          This is some shared state from a{' '}
          <span className="font-semibold">context</span> which represents the
          current user:{' '}
          <span className="font-bold text-yellow-600">{user}</span>
        </div>

        <button
          className="border-black border-2 p-3 mb-3 cursor-pointer hover:bg-teal-200"
          onClick={() => updateUser()}
        >
          Click to update the user, and view the{' '}
          <span className="font-bold-">shop</span> application, which should
          have the same updated user.
        </button>

        <div>
          <div className="mb-3">
            This is some shared state created from a{' '}
            <span className="font-semibold">useState</span> hook:{'  '}
            <span className="text-green-700 font-bold">
              {new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
              }).format(accountBalance)}
            </span>
          </div>

          <div>
            <button
              className="border-black border-2 p-3 mb-3 cursor-pointer hover:bg-teal-200"
              onClick={() => setAccountBalance(0)}
            >
              Click to clear the state from the{' '}
              <span className="font-semibold">useState</span> hook and update
              the state in the shared component
            </button>
          </div>
        </div>
      </div>

      <Header
        accountBalance={accountBalance}
        setAccountBalance={setAccountBalance}
      />
    </div>
  );
}

export function App() {
  return (
    <DataProvider>
      <React.Suspense fallback={null}>
        <div className="p-6">
          <ul className="flex justify-between w-1/6 my-2 border-solid border-2 p-2 border-red-300">
            <li className="underline hover:text-red-500">
              <Link to="/">Host</Link>
            </li>

            <li className="underline hover:text-red-500">
              <Link to="/shop">Shop</Link>
            </li>

            <li className="underline hover:text-red-500">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Host title="HOST" />} />

            <Route path="/shop" element={<Shop />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </React.Suspense>
    </DataProvider>
  );
}

export default App;
