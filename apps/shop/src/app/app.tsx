import { DataContext } from '@mod-fed/shared/data-context';
import { useContext } from 'react';

export function Shop() {
  const { counter, setCounter } = useContext(DataContext);

  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome "SHOPPING APP"
          </h1>
        </div>
        <button onClick={() => setCounter(counter + 1)}>
          counter {counter}
        </button>{' '}
      </div>
    </div>
  );
}

export default Shop;
