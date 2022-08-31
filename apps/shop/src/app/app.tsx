import { DataContext } from '@mod-fed/shared/data-context';
import { useContext } from 'react';

export function Shop() {
  const { user, updateUser } = useContext(DataContext);

  return (
    <div>
      <div>
        <div className="font-bold mb-3">
          <h1>
            <span> Hello there, </span>
            Welcome "SHOPPING APP"
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
      </div>
    </div>
  );
}

export default Shop;
