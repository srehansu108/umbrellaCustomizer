import React from 'react';
import pinkUmbrella from '../Images/pink.png';
import blueUmbrella from '../Images/blue.png';
import yellowUmbrella from '../Images/yellow.png';
import '../Style/UmbrellaPreview.css';

const UmbrellaPreview = ({ color, logo, isLoading }) => {
  const umbrellas = {
    pink: pinkUmbrella,
    blue: blueUmbrella,
    yellow: yellowUmbrella,
  };

  // Define loader color based on the selected color theme
  const loaderColor = {
    pink: '#d81b60',    // Darker pink
    blue: '#0288d1',    // Darker blue
    yellow: '#fbc02d',  // Darker yellow
  }[color] || '#000000'; // Fallback to black if color not found

  return (
    <div className="umbrella-preview">
      {isLoading ? (
        <div className="loading-container">
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 28.3 31.2"
            width="400"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            className="loading-icon"
            style={{ fill: loaderColor }} // Apply dynamic color
          >
            <path d="M25.1 23.6c-.3.1-.6.2-1 .2-.6.1-1.3 0-2.1.1s-1.7.3-2.6.8c-.8.5-1.4 1.1-1.9 1.6-.7.9-1.1 1.7-1.5 2.2-.2.3-.4.4-.7.6-.2.1-.4.2-.8.2v-13L26 22.9c-.3.3-.6.5-.9.7m-11.3 5.9c-.5-.1-.8-.2-1-.4-.2-.2-.5-.4-.7-.7-.3-.5-.7-1.1-1.2-1.7-.5-.7-1.1-1.3-2.1-1.9-.8-.5-1.6-.7-2.3-.8-1.1-.2-2-.1-2.7-.2l-.9-.3c-.2-.1-.4-.3-.6-.6l11.4-6.6v13.2zM1.7 21.3c0-.3.1-.6.2-1 .2-.5.6-1.1.9-1.9.3-.8.6-1.7.6-2.8v-.1c0-1.5-.6-2.6-1-3.5l-.6-1.2c-.1-.4-.2-.7-.2-1 0-.3.1-.6.2-1l11.4 6.6-11.3 6.8c-.1-.4-.2-.7-.2-.9M3.2 7.6c.3-.1.6-.2 1-.2.6-.1 1.3 0 2.1-.1.7-.2 1.6-.4 2.5-.9.8-.5 1.4-1.1 1.9-1.6.7-.9 1.1-1.7 1.5-2.2.2-.3.4-.4.7-.6.2-.1.5-.2.8-.2V15L2.3 8.3c.3-.4.6-.6.9-.7m11.3-5.9c.5 0 .8.2 1 .4.2.2.5.4.7.7.3.5.7 1.1 1.2 1.7.5.7 1.1 1.3 2.1 1.9.8.5 1.6.7 2.4.8 1.1.1 2 .1 2.7.2l.9.3c.2.1.4.3.6.6l-11.4 6.6V1.7zm12.1 8.2c0 .3-.1.6-.2 1-.2.5-.6 1.1-.9 1.9-.3.8-.6 1.7-.6 2.8v.2c0 1.5.5 2.6 1 3.5l.6 1.2c.1.4.2.7.2 1 0 .3-.1.6-.2.9l-11.4-6.6L26.3 9c.2.4.3.7.3.9m.4 7.8c-.3-.6-.5-1.3-.5-2v-.1c0-1 .4-1.8.8-2.7.2-.4.5-.8.6-1.3.2-.5.3-1 .3-1.6 0-.7-.2-1.4-.6-2.1-.5-.8-1.1-1.4-1.8-1.7-.5-.2-1-.3-1.5-.4-.7-.1-1.4-.1-2.1-.1-.7-.1-1.3-.2-1.9-.6-.6-.3-1-.7-1.4-1.2-.5-.9-.9-1.7-1.6-2.5-.3-.4-.7-.8-1.3-1-.5-.3-1.1-.4-1.9-.4-1 0-1.8.2-2.4.7-.5.3-.8.7-1.1 1.1-.4.6-.7 1.2-1.1 1.7-.4.5-.8 1-1.5 1.4-.6.4-1.2.5-1.8.6-.9.1-1.8 0-2.8.2-.5.1-1 .3-1.5.7-.5.3-.9.8-1.3 1.4C.2 8.5 0 9.3 0 10c0 .6.1 1.1.3 1.6.3.7.7 1.3 1 2 .3.6.5 1.3.5 2.1v.1c0 1.1-.4 1.8-.8 2.7-.2.4-.5.8-.6 1.3-.2.5-.3 1-.3 1.6 0 .7.2 1.4.6 2.1.5.8 1.1 1.4 1.8 1.7.5.2 1 .3 1.5.4.7.1 1.4.1 2.1.1.7.1 1.3.2 2 .6.6.3 1 .7 1.4 1.2.5.7.9 1.5 1.6 2.3.3.4.7.7 1.3 1 .5.3 1.2.4 1.9.4 1 0 1.8-.3 2.4-.7.5-.3.8-.7 1.1-1.1.4-.6.8-1.2 1.2-1.7.4-.5.8-1 1.5-1.4.6-.3 1.1-.5 1.7-.6.9-.1 1.8 0 2.8-.2.5-.1 1-.3 1.5-.6s.9-.8 1.3-1.4c.4-.7.6-1.5.6-2.1 0-.6-.1-1.1-.3-1.6-.5-.9-.8-1.5-1.1-2.1"></path>
          </svg>
        </div>
      ) : (
        <>
          <img
            src={umbrellas[color]}
            alt={`${color} umbrella`}
            className="umbrella-image"
          />
          {logo && <img src={logo} alt="Logo preview" className="logo-preview" />}
        </>
      )}
    </div>
  );
};

export default UmbrellaPreview;