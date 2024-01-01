import AskIcon1 from '../../assets/images/icon-person.svg';
import AskIcon2 from '../../assets/images/icon-cog.svg';
import AskIcon3 from '../../assets/images/icon-chart.svg';

const Contact = () => {
  const thingsToAsk = [
    {
      icon: AskIcon1,
      text: 'The quality of our talent network',
    },
    {
      icon: AskIcon2,
      text: 'Usage & implementation of our software',
    },
    {
      icon: AskIcon3,
      text: 'How we help drive innovation',
    },
  ];
  return (
    <section className="contact-section-1 mb-20">
      <div className="py-10 px-6 sm:px-10 lg:px-16 sm:container sm:mx-auto lg:container lg:mx-auto">
        <div className="grid grid-cols-2">
          {' '}
          <div className="flex flex-col">
            <h1 className="sm:text-[64px] font-bold my-9">Contact</h1>
            <h2 className="sm:text-3xl text-secondary font-bold mb-9">
              Ask us about
            </h2>
            <div>
              {thingsToAsk.map((data) => (
                <div className="flex items-center mb-4">
                  <span>
                    <img src={data.icon} alt="icon" />
                  </span>
                  <span className="lg:ml-8 font-semibold text-xl">
                    {data.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <form>
            <input
              className="bg-transparent border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3"
              placeholder="Name"
              type="text"
            />
            <input
              className="bg-transparent border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3"
              placeholder="Email Address"
              type="text"
            />
            <input
              className="bg-transparent border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3"
              placeholder="Company"
              type="text"
            />
            <input
              className="bg-transparent border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3"
              placeholder="Title"
              type="text"
            />
            <input
              className="bg-transparent border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3"
              placeholder="Message"
              type="text"
            />
            <button
              className="bg-white text-sacramento-state-green px-8 h-12 font-semibold text-lg rounded-full mt-4"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
