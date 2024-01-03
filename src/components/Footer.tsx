import logo from '../assets/images/logo.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleScroll = () => {
    const htmlEl = document.querySelector('html') as HTMLElement;
    htmlEl.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="bg-dark-green text-white">
        <div className="py-16 sm:py-16 px-6 sm:px-10 xl:px-20 sm:container sm:mx-auto xl:container xl:mx-auto">
          <div className="flex flex-col justify-center items-center xl:flex-row xl:h-[100px]">
            <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:w-full sm:items-start xl:justify-start">
              {' '}
              <div className="flex flex-col items-center sm:items-start">
                <img
                  src={logo}
                  alt="Footer myteam logo"
                  className="w-[95px] xl:w-[160px] mb-9"
                />
                <div className="flex justify-center align-center gap-9 sm:gap-5">
                  <Link onClick={handleScroll} to="/">
                    home
                  </Link>
                  <Link onClick={handleScroll} to="/about">
                    about
                  </Link>
                </div>
              </div>
              <ul className="list-none text-center sm:text-right xl:text-left xl:ml-32 xl:mt-1 my-10 sm:m-0 opacity-60">
                <li className="mb-2">987 Hillcrest Lane</li>
                <li className="mb-2">Irvine, CA</li>
                <li className="mb-2">California 92714</li>
                <li className="mb-2">Call Us : 949-833-7432</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex sm:flex-row sm:justify-between sm:w-full sm:mt-10 xl:flex-col xl:justify-between xl:items-end xl:m-0 xl:h-full">
              <div className="flex justify-center gap-4 mb-5">
                <img src={facebookIcon} alt="Facebook Icon" />
                <img src={pinterestIcon} alt="Pinterest Icon" />
                <img src={twitterIcon} alt="Twitter Icon" />
              </div>
              <p className="text-center opacity-60">
                Copyright 2020. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
