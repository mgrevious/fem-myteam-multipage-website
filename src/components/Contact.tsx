import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section className="bg-secondary contact-section">
      <div className="flex justify-center items-center py-20 px-6 sm:px-28 xl:px-20 sm:container sm:mx-auto xl:container xl:mx-auto">
        <section className="flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center sm:w-full">
          <h3 className="text-sacramento-state-green text-3xl font-bold mb-7 sm:mb-0 text-center xl:text-[48px]">
            Ready to get started?
          </h3>
          <div className="text-center">
            <Link
              to="/contact"
              className="py-3 px-9 inline-block font-semibold text-xl text-sacramento-state-green border-2 border-sacramento-state-green rounded-full"
            >
              contact us
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
