import { createRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import hamburgerMenu from '../assets/images/icon-hamburger.svg';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const menuRef = createRef<HTMLElement>();
  const menuBgRef = createRef<HTMLDivElement>();

  const handleOpen = () => {
    if (menuRef.current && menuBgRef.current) {
      menuRef.current.classList.remove('-right-2/3');
      menuRef.current.classList.add('right-0');
      menuBgRef.current.classList.remove('hidden');
      menuBgRef.current.classList.add('block');
    }
  };

  return (
    <>
      <div className="py-[68px] px-6 sm:px-12 xl:px-20 sm:container sm:mx-auto xl:container xl:mx-auto">
        <header className="text-xl text-center font-semibold text-secondary">
          <nav>
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <img src={logo} alt="MyTeam Logo" className="w-40 sm:mr-16" />
                <div className="text-white hidden sm:flex sm:gap-10">
                  <Link className="hover:text-secondary" to="/">
                    home
                  </Link>
                  <Link className="hover:text-secondary" to="/about">
                    about
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className="hidden sm:inline-block font-semibold text-xl border-2 text-white border-white rounded-full py-3 px-9"
              >
                contact us
              </Link>
              <button
                id="mobile-menu"
                type="button"
                className="sm:hidden"
                onClick={handleOpen}
              >
                <img src={hamburgerMenu} alt="" />
              </button>
            </div>
          </nav>
        </header>
        <MobileMenu menuRef={menuRef} menuBgRef={menuBgRef} />
      </div>
    </>
  );
};

export default Header;
