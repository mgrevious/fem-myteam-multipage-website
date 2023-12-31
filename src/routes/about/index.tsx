import Contact from '../../components/Contact';

const About = () => {
  return (
    <>
      <div className="py-10 px-6 sm:px-10 sm:container sm:mx-auto lg:container lg:mx-auto home-section-1">
        <section className="mt-24 sm:mt-28 lg:mb-48 lg:flex lg:justify-between">
          <h1 className="text-4xl sm:text-[64px] sm:leading-[64px] text-center font-bold mb-6 px-16 lg:p-0 sm:px-40 lg:text-left lg:text-[100px] lg:leading-[1em] lg:m-0 lg:pt-4">
            About
          </h1>
          <div className="lg:flex lg:flex-col lg:justify-between lg:max-w-[40%]">
            <div className="hidden lg:block lg:w-[50px] h-1 bg-secondary mb-24"></div>
            <p className="text-center leading-7 mb-40 sm:px-32 lg:text-left lg:text-lg lg:m-0 lg:px-0 lg:pb-1">
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </p>
          </div>
        </section>
      </div>
      <Contact />
    </>
  );
};

export default About;
