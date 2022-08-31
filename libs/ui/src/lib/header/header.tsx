import styles from './header.module.css';

export function Header({
  accountBalance,
  setAccountBalance,
}: {
  accountBalance: number;
  setAccountBalance: (value: number) => void;
}) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Header!</h1>

      <div>
        This is the account balance:{' '}
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format(accountBalance)}
      </div>

      <button
        className="counter-button"
        onClick={() => setAccountBalance(accountBalance + 100)}
      >
        Deposit £100
      </button>

      <button
        className="counter-button"
        onClick={() => setAccountBalance(accountBalance - 100)}
      >
        Withdraw £100
      </button>
    </div>
  );
}

export default Header;
