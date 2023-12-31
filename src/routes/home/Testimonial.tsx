import React from 'react';
import classes from './home.module.css';

interface Props {
  content: string;
  image: { src: string; alt: string };
  person: { name: string; title: string };
}

const Testimonial: React.FC<Props> = ({ image, content, person }) => {
  return (
    <section
      className={`pt-14 flex flex-col items-center ${classes['comma-icon']}`}
    >
      <p className="text-center font-semibold leading-7">{content}</p>
      <div className="py-4 xl:pt-6 xl:pb-7 text-center">
        <h3 className="text-rapture-blue font-semibold text-lg">
          {person.name}
        </h3>
        <h4 className="italic text-sm">{person.title}</h4>
      </div>
      <div className="pb-6 xl:pb-0">
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-full w-16 border-2 border-light-rapture-blue"
        />
      </div>
    </section>
  );
};

export default Testimonial;
