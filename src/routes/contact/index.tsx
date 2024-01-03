import AskIcon1 from '../../assets/images/icon-person.svg';
import AskIcon2 from '../../assets/images/icon-cog.svg';
import AskIcon3 from '../../assets/images/icon-chart.svg';
import classes from './contact.module.css';

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
    <section className={classes['section-1']}>
      <div className="pt-10 pb-24 px-6 sm:px-28 xl:px-20 sm:container sm:mx-auto xl:container xl:mx-auto xl:pt-20 xl:pb-36">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col items-center xl:items-start">
            <h1 className="mb-6 sm:mb-9 xl:mb-12 text-center xl:text-left text-[40px] sm:text-[64px] font-bold">
              Contact
            </h1>
            <h2 className="text-center mb-12 xl:text-left text-[32px] text-secondary font-bold">
              Ask us about
            </h2>
            <div className="flex flex-col">
              {thingsToAsk.map((data) => (
                <div className="flex items-center mb-8 xl:mb-4">
                  <div className="w-16 h-16 shrink-0 mr-6">
                    <img src={data.icon} alt="icon" />
                  </div>
                  <div className="xl:ml-8 font-semibold text-xl">
                    {data.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form>
            <input
              className="bg-transparent autofill:text-white autofill:bg-dark-green border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3 outline-none"
              placeholder="Name"
              type="text"
            />
            <input
              className="bg-transparent autofill:text-white autofill:bg-dark-green border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3 outline-none"
              placeholder="Email Address"
              type="email"
            />
            <input
              className="bg-transparent autofill:text-white autofill:bg-dark-green border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3 outline-none"
              placeholder="Company"
              type="text"
            />
            <input
              className="bg-transparent autofill:text-white autofill:bg-dark-green border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3 outline-none"
              placeholder="Title"
              type="text"
            />
            <textarea
              className="bg-transparent min-h-28 autofill:text-white autofill:bg-dark-green border-b border-b-white w-full placeholder:text-white placeholder:opacity-60 placeholder:text-sm px-4 py-5 mb-3 outline-none"
              placeholder="Message"
            />
            <button
              className="bg-white text-sacramento-state-green px-8 h-12 font-semibold text-xl rounded-full mt-4"
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
