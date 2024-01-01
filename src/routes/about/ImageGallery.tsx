import React, { useState } from 'react';
import { produce } from 'immer';
import { directors } from '../../helpers';
import PlusIcon from '../../assets/images/icon-cross.svg';
import TwitterIcon from '../../assets/images/icon-twitter.svg';
import LinkedInIcon from '../../assets/images/icon-linkedin.svg';

interface ImageState {
  selected: boolean;
  name: string;
}

const ImageGallery: React.FC = () => {
  const [imageState, setImageState] = useState<ImageState>({
    selected: false,
    name: '',
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const updatedState = produce(imageState, (state) => {
      state.selected = !state.selected;
      state.name = e.currentTarget.name;
    });
    setImageState(updatedState);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {directors.map((director) =>
        imageState.selected &&
        director.name.toLowerCase().includes(imageState.name) ? (
          <div className="relative flex flex-col items-center bg-dark-green py-8 px-12 mb-14 lg:mb-16">
            <h3 className="text-lg font-semibold text-rapture-blue mb-3">
              {director.name}
            </h3>
            <p className="leading-6 text-center mb-6">
              "Empowered teams create truly amazing products. Set the north star
              and let them follow it."
            </p>
            <div className="flex justify-center gap-4 mb-4 lg:mb-0">
              <a href="https://twitter.com" target="_blank">
                <img src={TwitterIcon} alt="twitter icon" />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <img src={LinkedInIcon} alt="linkedin icon" />
              </a>
            </div>
            <div className="absolute -bottom-7 flex justify-center">
              <button
                name={`${director.inputName}`}
                onClick={handleClick}
                className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center hover:bg-rapture-blue focus:bg-rapture-blue"
              >
                <img src={PlusIcon} alt="plus icon" />
              </button>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col items-center bg-sacramento-state-green p-8 mb-14 lg:mb-16">
            {director.getImage()}
            <h3 className="text-lg font-semibold text-rapture-blue mb-1">
              {director.name}
            </h3>
            <h4 className="text-sm italic mb-6">{director.title}</h4>
            <div className="absolute -bottom-7 flex justify-center">
              <button
                name={`${director.inputName}`}
                onClick={handleClick}
                className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center hover:bg-rapture-blue focus:bg-rapture-blue"
              >
                <img src={PlusIcon} alt="plus icon" />
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ImageGallery;
