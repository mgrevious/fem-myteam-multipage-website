import Contact from '../../components/Contact';
import ImageGallery from './ImageGallery';
import VergeIcon from '../../assets/images/logo-the-verge.png';
import JakartaIcon from '../../assets/images/logo-jakarta-post.png';
import GuardianIcon from '../../assets/images/logo-the-guardian.png';
import TechRadarIcon from '../../assets/images/logo-tech-radar.png';
import GadgetsNowIcon from '../../assets/images/logo-gadgets-now.png';

const About = () => {
  return (
    <>
      <section className="about-section-1">
        <div className="px-6 pt-12 pb-32 sm:px-10 lg:px-16 sm:container sm:mx-auto lg:container lg:mx-auto">
          <div className="lg:flex lg:justify-start">
            <h1 className="text-4xl sm:text-[64px] text-center font-bold mb-4 sm:mb-6 px-16 lg:p-0 sm:px-40 lg:text-left lg:text-[100px] lg:leading-[1em] lg:m-0 lg:w-2/5">
              About
            </h1>
            <div className="lg:flex lg:flex-col lg:justify-start lg:max-w-[60%]">
              <div className="hidden lg:block lg:w-[50px] h-1 bg-secondary mb-16"></div>
              <p className="text-center leading-7 sm:px-32 lg:text-left lg:text-lg lg:m-0 lg:px-0 lg:pr-16">
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We’ll bring those
                teams to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-2 bg-deep-jungle-green">
        <div className="py-24 px-6 sm:px-10 lg:px-16 sm:container sm:mx-auto lg:container lg:mx-auto lg:py-32">
          <div>
            <h2 className="text-[32px] text-center font-bold mb-12 lg:px-16 lg:p-0 lg:mb-16">
              Meet the directors
            </h2>
            <ImageGallery />
          </div>
        </div>
      </section>
      <section className="about-section-3 bg-sacramento-state-green">
        <div className="py-20 px-6 sm:px-10 lg:px-16 sm:container sm:mx-auto lg:container lg:mx-auto lg:py-32">
          <h3 className="text-3xl sm:text-[32px] lg:text-[48px] text-center font-bold mb-12 lg:p-0 sm:px-40 lg:mb-16">
            Some of our clients
          </h3>
          <div className="grid grid-cols-1 gap-14 px-20 sm:px-0 sm:grid-cols-5 sm:gap-8 lg:gap-20">
            <div className="flex justify-center items-center">
              <img src={VergeIcon} alt="The Verge logo" />
            </div>
            <div className="flex justify-center items-center">
              <img src={JakartaIcon} alt="Jakarta logo" />
            </div>
            <div className="flex justify-center items-center">
              <img src={GuardianIcon} alt="The Guardian logo" />
            </div>
            <div className="flex justify-center items-center">
              <img src={TechRadarIcon} alt="Tech Radar logo" />
            </div>
            <div className="flex justify-center items-center">
              <img
                className="h-8 sm:h-9 lg:h-11"
                src={GadgetsNowIcon}
                alt="Gadgets Now logo"
              />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default About;
