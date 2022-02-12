import React from 'react';

//--Styles--
import './image.scss';


/**
 * @component
 * @prop {string} src - The image's path source, relative to public folder
 * @prop {string} alt - Image's alternate text
 * @prop {string} objFit - The object-fit CSS property for the image
 * @prop {string} caption - Image's caption
 * @returns 
 */

const Image = ({src, alt, objFit='cover', caption=undefined, className, children}) => {
    return (
        <figure className={`image ${className}`}>
            <img
                src={src}
                alt={alt}
                className={`image__img ${objFit ? `image__img--${objFit}` : ''}`}
            />
            {children}
            {caption ?? <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>}
        </figure>
    );
};

export default Image;
