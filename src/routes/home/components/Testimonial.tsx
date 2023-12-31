import React from 'react';

interface Props {
  content: string;
  image: { src: string; alt: string };
  person: { name: string; title: string };
}

const Testimonial: React.FC<Props> = ({ image, content, person }) => {
  return (
    <section className="pt-14 flex flex-col items-center comma-icon">
      <p className="text-center leading-7">{content}</p>
      <div className="py-4 lg:pt-6 lg:pb-7 text-center">
        <h3 className="text-rapture-blue font-semibold text-lg">
          {person.name}
        </h3>
        <h4 className="italic text-sm">{person.title}</h4>
      </div>
      <div className="pb-6">
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-full w-[62px] border-2 border-light-rapture-blue"
        />
      </div>
    </section>
  );
};

export default Testimonial;
