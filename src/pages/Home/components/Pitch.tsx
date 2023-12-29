import React from 'react';

interface Props {
  content: string;
  header: string;
  icon: { src: string; alt: string };
}

const Pitch: React.FC<Props> = ({ icon, header, content }) => {
  return (
    <section className="mt-14 flex flex-col items-center">
      <img src={icon.src} alt={icon.alt} className="mb-6" />
      <h3 className="text-secondary text-center font-bold mb-3">{header}</h3>
      <p className="text-center">{content}</p>
    </section>
  );
};

export default Pitch;
