import logo from '../assets/images/logo.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-dark-green text-white">
        <div className="py-16 sm:py-16 px-6 sm:px-10 lg:px-16 sm:container sm:mx-auto lg:container lg:mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:w-full sm:items-start">
              {' '}
              <div className="flex flex-col items-center sm:items-start">
                <img
                  src={logo}
                  alt="Footer myteam logo"
                  className="w-[95px] mb-9"
                />
                <div className="flex justify-center align-center gap-9 sm:gap-5">
                  <Link to="/">home</Link>
                  <Link to="/about">about</Link>
                </div>
              </div>
              <ul className="list-none text-center sm:text-right my-10 sm:m-0 opacity-60">
                <li className="mb-2">987 Hillcrest Lane</li>
                <li className="mb-2">Irvine, CA</li>
                <li className="mb-2">California 92714</li>
                <li className="mb-2">Call Us : 949-833-7432</li>
              </ul>
            </div>
            <div className="sm:flex sm:flex-row sm:justify-between sm:w-full sm:mt-10">
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
