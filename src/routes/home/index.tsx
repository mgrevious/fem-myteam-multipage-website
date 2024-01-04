import Pitch from './Pitch';
import Contact from '../../components/Contact';
import Testimonial from './Testimonial';
import person1Img from '../../assets/images/avatar-kady.jpg';
import person2Img from '../../assets/images/avatar-aiysha.jpg';
import person3Img from '../../assets/images/avatar-arthur.jpg';
import personIcon from '../../assets/images/icon-person.svg';
import cogIcon from '../../assets/images/icon-cog.svg';
import chartIcon from '../../assets/images/icon-chart.svg';
import classes from './home.module.css';

const Home = () => {
  return (
    <>
      <section className={classes['section-1']}>
        <div className="py-10 px-6 xl:px-20 sm:container sm:mx-auto xl:container xl:mx-auto xl:pt-0 xl:pb-56">
          <div className="flex flex-col sm:mt-4 sm:items-center xl:flex-row xl:mb-0 xl:mt-4 xl:flex xl:justify-start">
            <h1 className="text-center font-bold mb-6 px-10 xl:p-0 text-[40px] leading-[1em] sm:text-[64px] sm:w-3/6 xl:text-left xl:text-[100px] xl:w-1/2 xl:mr-8 xl:mb-0">
              Find the best <span className="text-secondary">talent</span>
            </h1>
            <div className="sm:flex sm:justify-center xl:flex xl:flex-col xl:justify-between xl:w-1/2 xl:p-12">
              <div className="hidden xl:block xl:w-[50px] h-1 bg-rapture-blue mb-16" />
              <p className="font-semibold text-center leading-7 mb-40 sm:mb-48 sm:w-3/6 xl:w-full xl:text-left xl:text-xl xl:m-0 xl:px-0">
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that.
              </p>
            </div>{' '}
          </div>
        </div>
      </section>
      <section className={`${classes['section-2']} bg-sacramento-state-green`}>
        <div className="pt-16 pb-4 sm:py-24 px-6 sm:px-28 sm:container sm:mx-auto xl:py-[128px] xl:container xl:mx-auto">
          <div className="xl:flex xl:justify-between">
            <div className="relative xl:w-5/12">
              <div className="w-[50px] bg-secondary h-1 absolute top-0 left-0"></div>
              <h2 className="text-[32px] font-bold mb-14 pt-10 xl:text-[48px]">
                Build & manage distributed teams like no one else.
              </h2>
            </div>
            <div className="xl:pt-12 sm:flex sm:flex-col sm:justify-start xl:w-6/12">
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
      <section className={`${classes['section-3']} bg-deep-jungle-green`}>
        <div className="testimonials py-36 px-6 sm:px-28 sm:py-20 xl:px-16 xl:py-40 xl:pt-28 sm:container sm:mx-auto xl:container xl:mx-auto">
          <h2 className="text-[32px] sm:mt-8 text-center font-bold mb-4 xl:my-0 xl:px-28 xl:text-5xl">
            Delivering real results for top companies. Some of our{' '}
            <span className="text-rapture-blue">success stories.</span>
          </h2>
          <div className="xl:flex xl:items-start xl:justify-between xl:gap-8 xl:mt-6">
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
