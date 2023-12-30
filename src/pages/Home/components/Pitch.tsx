import React from 'react';

interface Props {
  content: string;
  header: string;
  icon: { src: string; alt: string };
}

const Pitch: React.FC<Props> = ({ icon, header, content }) => {
  return (
    <section className="mt-14 sm:mt-10 flex flex-col sm:flex-row items-center sm:justify-center">
      <img src={icon.src} alt={icon.alt} className="mb-6 sm:mb-0 sm:mr-7" />
      <div className="sm:mt-6">
        <h3 className="text-secondary text-center sm:text-left font-bold mb-3 sm:mb-5 text-lg">
          {header}
        </h3>
        <p className="text-center sm:text-left opacity-60 w-full leading-6">
          {content}
        </p>
      </div>
    </section>
  );
};

export default Pitch;
