import React from 'react';
import Image1 from './assets/images/avatar-nikita.jpg';
import Image2 from './assets/images/avatar-christian.jpg';
import Image3 from './assets/images/avatar-cruz.jpg';
import Image4 from './assets/images/avatar-drake.jpg';
import Image5 from './assets/images/avatar-griffin.jpg';
import Image6 from './assets/images/avatar-aden.jpg';

interface Director {
  name: string;
  title: string;
  getImage: () => React.ReactNode;
  inputName: string;
}

const renderImg = (src: string, alt: string) => (
  <img
    className="w-24 rounded-full border-2 border-light-rapture-blue mb-4"
    src={src}
    alt={alt}
  />
);

export const directors: Director[] = [
  {
    name: 'Nikita Marks',
    title: 'Founder & CEO',
    getImage() {
      return renderImg(Image1, 'Nikita Marks');
    },
    inputName: 'nikita',
  },
  {
    name: 'Christian Duncan',
    title: 'Co-founder & COO',
    getImage() {
      return renderImg(Image2, 'Christian Duncan');
    },
    inputName: 'christian',
  },
  {
    name: 'Cruz Hamer',
    title: 'Co-founder & CTO',
    getImage() {
      return renderImg(Image3, 'Cruz Hamer');
    },
    inputName: 'cruz',
  },
  {
    name: 'Drake Heaton',
    title: 'Business Development Lead',
    getImage() {
      return renderImg(Image4, 'Drake Heaton');
    },
    inputName: 'drake',
  },
  {
    name: 'Griffin Wise',
    title: 'Lead Marketing',
    getImage() {
      return renderImg(Image5, 'Griffin Wise');
    },
    inputName: 'griffin',
  },
  {
    name: 'Aden Allen',
    title: 'Chief Engineer',
    getImage() {
      return renderImg(Image6, 'Aden Allen');
    },
    inputName: 'aden',
  },
];
