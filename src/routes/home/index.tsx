import Pitch from './Pitch';
import Contact from '../../components/Contact';
import Testimonial from './Testimonial';
import person1Img from '../../assets/images/avatar-kady.jpg';
import person2Img from '../../assets/images/avatar-aiysha.jpg';
import person3Img from '../../assets/images/avatar-arthur.jpg';
import personIcon from '../../assets/images/icon-person.svg';
import cogIcon from '../../assets/images/icon-cog.svg';
import chartIcon from '../../assets/images/icon-chart.svg';

import './home.scss';

const Home = () => {
  return (
    <>
      <section className="py-10 px-6 sm:px-10 lg:px-16 sm:container sm:mx-auto lg:container lg:mx-auto home-section-1">
        <div className="sm:mt-4 lg:mb-48 lg:mt-10 lg:flex lg:justify-between">
          <h1 className="text-[40px] leading-[1em] sm:text-[64px] text-center font-bold mb-6 px-10 lg:p-0 sm:px-40 lg:text-left lg:text-[100px] lg:m-0">
            Find the best <span className="text-secondary">talent</span>
          </h1>
          <div className="lg:flex lg:flex-col lg:justify-start lg:max-w-[40%]">
            <div className="hidden lg:block lg:w-[50px] h-1 bg-rapture-blue mb-16" />
            <p className="text-center leading-7 mb-40 sm:mb-48 sm:px-32 lg:text-left lg:text-lg lg:m-0 lg:px-0 lg:pr-16">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
      </section>
      <section className="home-section-2 bg-sacramento-state-green">
        <div className="pt-16 pb-4 sm:py-24 px-6 sm:px-10 lg:px-16 sm:container sm:mx-auto lg:container lg:mx-auto">
          <div className="lg:flex lg:justify-between">
            <div className="relative">
              <div className="w-[50px] bg-secondary h-1 absolute top-0 left-0"></div>
              <h2 className="text-[32px] font-bold mb-14 w-2/3 pt-12 lg:text-[48px]">
                Build & manage distributed teams like no one else.
              </h2>
            </div>
            <div className="lg:pt-12">
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
        </div>
      </section>
      <section className="home-section-3 bg-deep-jungle-green">
        <div className="testimonials py-32 px-6 sm:px-10 sm:py-20 lg:px-16 lg:py-32 sm:container sm:mx-auto lg:container lg:mx-auto">
          <h2 className="text-[32px] sm:mt-8 text-center font-bold mb-4 lg:mt-4 lg:px-32 lg:text-5xl">
            Delivering real results for top companies. Some of our{' '}
            <span className="text-rapture-blue">success stories.</span>
          </h2>
          <div className="lg:flex lg:items-start lg:justify-between lg:gap-8 lg:mt-10">
            <Testimonial
              image={{ src: person1Img, alt: 'Testimonial photo of Kady' }}
              person={{
                name: 'Kady Baker',
                title: 'Product Manager of Bookmark',
              }}
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
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Home;
