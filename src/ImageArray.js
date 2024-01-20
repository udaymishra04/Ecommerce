import React from 'react';

const images = require.context('./images/productimg', true);
const imageList = images.keys().map(image => images(image));

function ProductArray() {
  return (
    <div>
      {imageList.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} width="100" height="100" />
      ))}
    </div>
  );
}
export default imageList;