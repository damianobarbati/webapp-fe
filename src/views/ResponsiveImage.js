import React from 'react';

const imageUrl_400 = new URL('../../assets/earth.jpg?as=webp&width=400', import.meta.url);
const imageUrl_800 = new URL('../../assets/earth.jpg?as=webp&width=800', import.meta.url);
const imageUrl_1200 = new URL('../../assets/earth.jpg?as=webp&width=1200', import.meta.url);

const ResponsiveImage = () => {
  return (
    <>
      <img
        alt="planer earth"
        src={imageUrl_800}
        srcSet={`${imageUrl_400} 400w,
                ${imageUrl_800} 800w,
                ${imageUrl_1200} 1200w`}
        sizes="(max-width: 400px) 400x, (min-width: 400px) and (max-width: 800px) 800w, (min-width: 800px) 1200w"
      />

      <picture>
        <img alt="planer earth" src={imageUrl_800} />
        <source media="(max-width: 400px)" srcSet={imageUrl_400} />
        <source media="(min-width: 400px) and (max-width: 800px)" srcSet={imageUrl_800} />
        <source media="(min-width: 800px)" srcSet={imageUrl_1200} />
      </picture>
    </>
  );
};

export default ResponsiveImage;
