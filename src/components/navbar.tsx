type NavbarProps = {
  info: string;
  rules: string;
  inMatch: string;
  onInMatchClick: () => void;
  onInfoClick: () => void;
  onRulesClick: () => void;
};

const Navbar = ({ info, rules, inMatch, onInfoClick, onRulesClick, onInMatchClick }: NavbarProps) => {
  return (
    <div className="flex justify-center">
      <ul className="flex space-x-4 bg-gray-800 m-10 py-10 rounded-3xl">
        <li>
          <button onClick={onInfoClick} className="text-white hover:text-gray-400 px-10">
            {info}
          </button>
        </li>
        <li>
          <button onClick={onRulesClick} className="text-white hover:text-gray-400 px-10">
            {rules}
          </button>
        </li>
        <li>
          <button onClick={onInMatchClick} className="text-white hover:text-gray-400 px-10">
            {inMatch}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
