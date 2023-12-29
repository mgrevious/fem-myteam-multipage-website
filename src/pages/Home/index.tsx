import logo from '../../assets/images/logo.svg';
import hamburgerMenu from '../../assets/images/icon-hamburger.svg';
import personIcon from '../../assets/images/icon-person.svg';
import cogIcon from '../../assets/images/icon-cog.svg';
import chartIcon from '../../assets/images/icon-chart.svg';
import Pitch from './components/Pitch';
import Testimonial from './components/Testimonial';
import person1Img from '../../assets/images/avatar-kady.jpg';
import person2Img from '../../assets/images/avatar-aiysha.jpg';
import person3Img from '../../assets/images/avatar-arthur.jpg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import pinterestIcon from '../../assets/images/icon-pinterest.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';

import './home.scss';

const Home = () => {
  return (
    <>
      <div className="bg-home-section-1 py-10 px-6">
        <header className="text-lg text-center font-semibold text-secondary">
          <nav>
            <div className="flex justify-between">
              <img src={logo} alt="MyTeam Logo" className="w-32" />
              <button>
                <img src={hamburgerMenu} alt="" />
              </button>
            </div>
          </nav>
        </header>
        <section className="mt-24">
          <h1 className="text-4xl text-center font-bold px-16 mb-6">
            Find the best <span className="text-secondary">talent</span>
          </h1>
          <p className="text-center">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </section>
      </div>
      <div className="bg-sacramento-state-green bg-home-section-2 py-10 px-6">
        <div className="relative pt-9">
          <div className="w-[50px] bg-secondary h-1 absolute top-0 left-0"></div>
          <h2 className="text-[32px] font-bold mb-6 w-2/3">
            Build & manage distributed teams like no one else.
          </h2>
          <Pitch
            icon={{ src: personIcon, alt: 'Person Icon' }}
            header="Experienced Individuals"
            content="Our network is made up of highly experienced professionals who are
              passionate about what they do."
          />
          <Pitch
            icon={{ src: cogIcon, alt: 'Cog Icon' }}
            header="Easy to Implement"
            content="Our processes have been refined over years of implementation meaning our teams always deliver."
          />
          <Pitch
            icon={{ src: chartIcon, alt: 'Chart Icon' }}
            header="Enhanced Productivity"
            content="Our customized platform with in-built analytics helps you manage your distributed teams."
          />
        </div>
      </div>
      <div className="bg-home-section-3 px-6 testimonials">
        <h2 className="text-[32px] text-center font-bold pt-36 mb-4">
          Delivering real results for top companies. Some of our{' '}
          <span className="text-rapture-blue">success stories.</span>
        </h2>
        <Testimonial
          image={{ src: person1Img, alt: 'Testimonial photo of Kady' }}
          person={{ name: 'Kady Baker', title: 'Product Manager of Bookmark' }}
          content=" “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
        />
        <Testimonial
          image={{ src: person2Img, alt: 'Testimonial photo of Aiysha' }}
          person={{
            name: 'Aiysha Reese',
            title: 'Founder of Manage',
          }}
          content=" “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
        />
        <Testimonial
          image={{ src: person3Img, alt: 'Testimonial photo of Arthur' }}
          person={{
            name: 'Arthur Clarke',
            title: 'Co-founder of MyPhysio',
          }}
          content=" “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
        />
      </div>
      <div className="bg-secondary flex justify-center items-center px-10 py-20">
        <section className="flex flex-col justify-center">
          <h3 className="text-sacramento-state-green text-3xl font-bold mb-7 text-center">
            Ready to get started?
          </h3>
          <div className="text-center">
            <button className="h-12 font-semibold text-lg text-sacramento-state-green border-2 border-sacramento-state-green rounded-full px-10">
              contact us
            </button>
          </div>
        </section>
      </div>
      <div className="py-20 bg-sacramento-state-green">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="Footer myteam logo" className="w-[95px] mb-9" />
          <div className="flex justify-center align-center gap-9">
            <a href="">home</a>
            <a href="">about</a>
          </div>
          <ul className="list-none text-center mt-10 mb-10 opacity-60">
            <li className="mb-2">987 Hillcrest Lane</li>
            <li className="mb-2">Irvine, CA</li>
            <li className="mb-2">California 92714</li>
            <li className="mb-2">Call Us : 949-833-7432</li>
          </ul>
          <div className="flex gap-4 mb-5">
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={pinterestIcon} alt="Pinterest Icon" />
            <img src={twitterIcon} alt="Twitter Icon" />
          </div>
          <p className="text-center opacity-60">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
