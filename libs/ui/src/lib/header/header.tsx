export function Header({
  accountBalance,
  setAccountBalance,
}: {
  accountBalance: number;
  setAccountBalance: (value: number) => void;
}) {
  return (
    <div className="border-blue-500 border-4 p-3">
      <h1 className="font-bold mb-3">This is a shared component</h1>

      <div className="mb-3">
        This is is some shared state from the HOST APP:{' '}
        <span className="text-green-700 font-bold">
          {new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
          }).format(accountBalance)}
        </span>
      </div>

      <button
        className="border-black border-2 p-3 cursor-pointer hover:bg-teal-200"
        onClick={() => setAccountBalance(accountBalance + 100)}
      >
        Deposit £100
      </button>

      <button
        className="border-black border-2 p-3 ml-2 cursor-pointer hover:bg-teal-200"
        onClick={() => setAccountBalance(accountBalance - 100)}
      >
        Withdraw £100
      </button>
    </div>
  );
}

export default Header;
