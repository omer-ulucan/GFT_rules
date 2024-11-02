type NavbarProps = {
  info: string;
  rules: string;
  inMatch: string;
  onInMatchClick: () => void;
  onInfoClick: () => void;
  onRulesClick: () => void;
  leftImageSrc: string;
  rightImageSrc: string;
  activeSection: string;
};

const Navbar = ({
  info,
  rules,
  inMatch,
  onInMatchClick,
  onInfoClick,
  onRulesClick,
  leftImageSrc,
  rightImageSrc,
  activeSection,
}: NavbarProps) => {
  return (
    <div className="relative flex items-center justify-between md:justify-center bg-gray-800 md:bg-transparent py-2 px-4 mb-4 md:mb-0">
      <img
        src={leftImageSrc}
        alt="Left Image"
        className="h-[60px] w-[60px] object-contain md:h-[90px] md:w-[90px] m-2 md:m-10 md:mr-auto"
      />

      <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4 md:relative md:left-0 md:transform-none bg-transparent md:bg-gray-800 py-2 md:py-10 px-2 md:px-6 rounded-3xl">
        <li className="relative">
          <button
            onClick={onInfoClick}
            className="text-white hover:text-gray-400 px-2 md:px-10 text-sm md:text-base"
          >
            {info}
          </button>
          {activeSection === 'info' && (
            <div className="absolute bottom-0 md:bottom-auto md:top-full md:mt-1 left-1/2 transform -translate-x-1/2 h-0.5 md:h-2 w-full md:w-2 bg-yellow-500 md:rounded-full"></div>
          )}
        </li>
        <li className="relative">
          <button
            onClick={onRulesClick}
            className="text-white hover:text-gray-400 px-2 md:px-10 text-sm md:text-base"
          >
            {rules}
          </button>
          {activeSection === 'rules' && (
            <div className="absolute bottom-0 md:bottom-auto md:top-full md:mt-1 left-1/2 transform -translate-x-1/2 h-0.5 md:h-2 w-full md:w-2 bg-yellow-500 md:rounded-full"></div>
          )}
        </li>
        <li className="relative">
          <button
            onClick={onInMatchClick}
            className="text-white hover:text-gray-400 px-2 md:px-10 text-sm md:text-base"
          >
            {inMatch}
          </button>
          {activeSection === 'inMatch' && (
            <div className="absolute bottom-0 md:bottom-auto md:top-full md:mt-1 left-1/2 transform -translate-x-1/2 h-0.5 md:h-2 w-full md:w-2 bg-yellow-500 md:rounded-full"></div>
          )}
        </li>
      </ul>

      <img
        src={rightImageSrc}
        alt="Right Image"
        className="h-[60px] w-[60px] object-contain md:h-[90px] md:w-[90px] m-2 md:m-10 md:ml-auto"
      />
    </div>
  );
};

export default Navbar;
