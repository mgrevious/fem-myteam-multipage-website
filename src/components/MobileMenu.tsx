import React from 'react';
import CloseIcon from '../assets/images/icon-close.svg';
import { Link } from 'react-router-dom';

// nav -right-2/3
interface Props {
  menuRef: React.RefObject<HTMLElement>;
  menuBgRef: React.RefObject<HTMLDivElement>;
}

const MobileMenu: React.FC<Props> = ({ menuRef, menuBgRef }) => {
  const handleClose = () => {
    if (menuRef.current && menuBgRef.current) {
      menuRef.current.classList.add('-right-2/3');
      menuRef.current.classList.remove('right-0');
      menuBgRef.current.classList.remove('block');
      menuBgRef.current.classList.add('hidden');
    }
  };

  return (
    <div id="menu" className="w-full fixed right-0 top-0 md:w-auto md:hidden">
      <div
        ref={menuBgRef}
        className="opacity-50 bg-black hidden min-h-screen absolute right-0 left-0 top-0"
      ></div>
      <nav
        ref={menuRef}
        className="absolute top-0 -right-2/3 duration-300 transition-all w-2/3 min-h-screen bg-white"
      >
        <button
          id="close-mobile-menu"
          className="bg-transparent absolute top-16 right-8"
          onClick={handleClose}
        >
          <img src={CloseIcon} alt="close menu" />
        </button>
        <ul className="pl-10 text-white flex flex-col md:flex-row md:pt-0 text-lg md:text-[15px] font-light leading-6 text-header tracking-wide min-h-screen md:static md:min-h-min md:w-auto bg-police-blue pt-28">
          <li className="py-4 sm:pl-[52px] font-semibold">
            <Link onClick={handleClose} to="/">
              home
            </Link>
          </li>
          <li className="py-4 sm:pl-[52px] font-semibold">
            <Link onClick={handleClose} to="/about">
              about
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleClose}
              className="py-2 px-8 mt-7 inline-block font-semibold text-lg text-white border-2 border-white rounded-full"
            >
              contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
