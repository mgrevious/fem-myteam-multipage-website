import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer';
import logo from '../assets/images/logo.svg';
import hamburgerMenu from '../assets/images/icon-hamburger.svg';

const Root: React.FC = () => {
  // const navigation = useNavigation();
  return (
    <>
      <div className="py-10 px-6 sm:px-10 sm:container sm:mx-auto lg:container lg:mx-auto">
        <header className="text-lg text-center font-semibold text-secondary">
          <nav>
            <div className="flex justify-between items-center">
              <div className="flex justify-start">
                <img src={logo} alt="MyTeam Logo" className="w-32 sm:mr-12" />
                <div className="text-white hidden sm:flex sm:gap-10">
                  <a href="">home</a>
                  <a href="">about</a>
                </div>
              </div>
              <button className="hidden sm:inline-block h-12 font-semibold text-lg border-2 text-white border-white rounded-full px-8">
                contact us
              </button>
              <button type="button" className="sm:hidden">
                <img src={hamburgerMenu} alt="" />
              </button>
            </div>
          </nav>
        </header>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
