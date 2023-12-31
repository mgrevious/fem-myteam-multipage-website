import Pitch from './components/Pitch';
import Testimonial from './components/Testimonial';
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
      <div className="py-10 px-6 sm:px-10 sm:container sm:mx-auto lg:container lg:mx-auto home-section-1">
        <section className="mt-24 sm:mt-28 lg:mb-48 lg:flex lg:justify-between">
          <h1 className="text-4xl sm:text-[64px] sm:leading-[64px] text-center font-bold mb-6 px-16 lg:p-0 sm:px-40 lg:text-left lg:text-[100px] lg:leading-[1em] lg:m-0 lg:pt-4">
            Find the best <span className="text-secondary">talent</span>
          </h1>
          <div className="lg:flex lg:flex-col lg:justify-between lg:max-w-[40%]">
            <div className="hidden lg:block lg:w-[50px] h-1 bg-rapture-blue mb-24"></div>
            <p className="text-center leading-7 mb-40 sm:px-32 lg:text-left lg:text-lg lg:m-0 lg:px-0 lg:pb-1">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </section>
      </div>
      <div className="home-section-2 bg-sacramento-state-green">
        <div className="py-16 sm:py-24 px-6 sm:px-10 sm:container sm:mx-auto lg:container lg:mx-auto">
          <div className="lg:flex lg:justify-between pt-9">
            <div className="relative">
              <div className="w-[50px] bg-secondary h-1 absolute top-0 left-0"></div>
              <h2 className="text-[32px] font-bold mb-14 w-2/3 pt-12 lg:text-[48px]">
                Build & manage distributed teams like no one else
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
      </div>
      <div className="home-section-3">
        <div className="py-36 testimonials sm:pt-28 sm:pb-0 px-6 sm:px-10 sm:container sm:mx-auto lg:container lg:mx-auto">
          <h2 className="text-[32px] text-center font-bold mb-4 lg:px-32 lg:text-5xl lg:mt-8">
            Delivering real results for top companies. Some of our{' '}
            <span className="text-rapture-blue">success stories.</span>
          </h2>
          <div className="lg:flex lg:items-start lg:justify-between lg:gap-8 lg:mt-10 lg:mb-36">
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
      </div>
      <div className="bg-secondary home-section-4">
        <div className="flex justify-center items-center py-20 px-6 sm:px-10 sm:container sm:mx-auto lg:container lg:mx-auto">
          <section className="flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center sm:w-full">
            <h3 className="text-sacramento-state-green text-3xl font-bold mb-7 sm:mb-0 text-center">
              Ready to get started?
            </h3>
            <div className="text-center">
              <button className="h-12 font-semibold text-lg text-sacramento-state-green border-2 border-sacramento-state-green rounded-full px-8">
                contact us
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
