import Contact from '../../components/Contact';
import ImageGallery from './ImageGallery';
import VergeIcon from '../../assets/images/logo-the-verge.png';
import JakartaIcon from '../../assets/images/logo-jakarta-post.png';
import GuardianIcon from '../../assets/images/logo-the-guardian.png';
import TechRadarIcon from '../../assets/images/logo-tech-radar.png';
import GadgetsNowIcon from '../../assets/images/logo-gadgets-now.png';
import classes from './about.module.css';

const About = () => {
  return (
    <>
      <section className={classes['section-1']}>
        <div className="px-6 pt-12 pb-32 sm:px-28 sm:container sm:mx-auto xl:px-20 xl:pt-16 xl:pb-[128px] xl:container xl:mx-auto">
          <div className="flex flex-col xl:flex xl:flex-row xl:justify-start">
            <h1 className="text-4xl sm:text-[64px] text-center font-bold mb-4 sm:mb-8 px-20 xl:p-0 sm:px-40 xl:text-left xl:text-[100px] xl:leading-[1em] xl:m-0 xl:w-2/5">
              About
            </h1>
            <div className="xl:flex xl:flex-col xl:justify-start xl:max-w-[60%]">
              <div className="hidden xl:block xl:w-[50px] h-1 bg-secondary mb-16"></div>
              <p className="text-center leading-7 sm:px-32 xl:text-left xl:text-xl xl:m-0 xl:px-0 xl:pr-16">
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
      <section
        className={`${classes['section-2']} bg-deep-jungle-green overflow-hidden`}
      >
        <div className="py-24 px-6 sm:px-28 sm:container sm:mx-auto sm:py-[100px] xl:px-20 xl:container xl:mx-auto xl:py-[128px]">
          <div>
            <h2 className="text-[32px] text-center font-bold mb-12 xl:px-20 xl:p-0 xl:mb-16 xl:text-[48px]">
              Meet the directors
            </h2>
            <ImageGallery />
          </div>
        </div>
      </section>
      <section className={`${classes['section-3']} bg-sacramento-state-green`}>
        <div className="py-20 px-6 sm:px-28 sm:container sm:mx-auto xl:container xl:mx-auto xl:pt-[128px] xl:pb-[152px]">
          <h3 className="text-3xl sm:text-[32px] xl:text-[48px] text-center font-bold mb-12 xl:p-0 sm:px-40 xl:mb-16">
            Some of our clients
          </h3>
          <div className="grid grid-cols-1 gap-14 px-20 sm:px-0 sm:grid-cols-5 sm:gap-8 xl:gap-20">
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
                className="h-8 sm:h-9 xl:h-11"
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
