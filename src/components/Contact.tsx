import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section className="bg-secondary contact-section">
      <div className="flex justify-center items-center py-20 px-6 sm:px-10 lg:px-16 sm:container sm:mx-auto lg:container lg:mx-auto">
        <section className="flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center sm:w-full">
          <h3 className="text-sacramento-state-green text-3xl font-bold mb-7 sm:mb-0 text-center">
            Ready to get started?
          </h3>
          <div className="text-center">
            <Link
              to="/contact"
              className="h-12 flex items-center font-semibold text-lg text-sacramento-state-green border-2 border-sacramento-state-green rounded-full px-8"
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
