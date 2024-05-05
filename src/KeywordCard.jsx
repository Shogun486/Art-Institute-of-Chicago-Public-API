import React from 'react';

const KeywordCard = ({card, image}) => {
  return (
    <div className="self-center relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative mx-4 mt-4  text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-70">
        <img className="place-content-center object-contain" src={`${image}/${card.image_id}/full/843,/0/default.jpg`} />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {card.title}
        </h4>
        <p
          className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
          {card.artist_title}
        </p>
      </div>
    </div>
  )
}

export default KeywordCard;