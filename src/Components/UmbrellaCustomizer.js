import React, { useState } from 'react'; 
import UmbrellaPreview from './UmbrellaPreview';
import ColorSwatch from './ColorSwatch';
import LogoUploader from './LogoUploader';
import '../Style/UmbrellaCustomizer.css';

const UmbrellaCustomizer = () => {
  const [selectedColor, setSelectedColor] = useState('pink');
  const [logo, setLogo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('pink'); // Initial background color

  const colorToButtonColor = {
    pink: '#d81b60',    // Darker pink for button
    blue: '#0288d1',    // Darker blue for button
    yellow: '#fbc02d',  // Darker yellow for button
  };

  const handleColorChange = (color) => {
    if (color !== selectedColor) {
      setIsLoading(true);
      setTimeout(() => {
        setSelectedColor(color);
        setBackgroundColor(color); // Update the background color
        setIsLoading(false);
      }, 1000); // Simulate a loading time of 1 second
    }
  };

  const handleLogoUpload = (logoFile) => {
    setIsLoading(true);
    const logoURL = URL.createObjectURL(logoFile);

    setTimeout(() => {
      setLogo(logoURL);
      setIsLoading(false);
    }, 3000); // Simulate loading time
  };

  const buttonColor = colorToButtonColor[selectedColor]; // Get button color based on the selected color

  return (
    <div className={`customizer-container ${backgroundColor}-theme`} style={{display:'flex', flexDirection: 'row'}}>
        <UmbrellaPreview 
          color={selectedColor} 
          logo={logo} 
          isLoading={isLoading}
        />
        <div className="controls">
          <h1 style={{marginBottom: '35px'}}>Customize Your Umbrella</h1>
          <ColorSwatch onColorChange={handleColorChange} style={{marginBottom: '30px'}}/>
          <LogoUploader onLogoUpload={handleLogoUpload} buttonColor={buttonColor} /> {/* Pass button color */}
        </div>
      </div>
  );
};

export default UmbrellaCustomizer;
