import React from 'react';

interface Props {
  content: string;
  header: string;
  icon: { src: string; alt: string };
}

const Pitch: React.FC<Props> = ({ icon, header, content }) => {
  return (
    <div
      className={`mb-14 sm:mb-10 sm:last:mb-4 flex flex-col sm:flex-row items-center sm:justify-start sm:items-center`}
    >
      <img src={icon.src} alt={icon.alt} className="mb-6 sm:mb-0 sm:mr-7" />
      <div>
        <h3 className="text-secondary text-center sm:text-left font-bold mb-3 sm:mb-4 text-lg">
          {header}
        </h3>
        <p className="text-center sm:text-left opacity-60 w-full leading-6 font-semibold">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Pitch;
