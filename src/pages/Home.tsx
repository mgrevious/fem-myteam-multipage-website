import logo from '../assets/images/logo.svg';
import hamburgerMenu from '../assets/images/icon-hamburger.svg';

const Home = () => {
  return (
    <>
      <div className="bg-pattern-home-svg-2 py-10 px-6">
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
      <div className="bg-sacramento-state-green bg-pattern-home-svg-3 py-10 px-6">
        <p className="text-lg text-center font-semibold text-secondary">
          Section 2
        </p>
      </div>
    </>
  );
};

export default Home;
