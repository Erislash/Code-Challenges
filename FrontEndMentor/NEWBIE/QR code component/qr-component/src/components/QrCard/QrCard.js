import React from 'react';

import './QrCard.scss';


const QrCard = ({imgPath, title, body}) => {
    return (
        <div className='qrCard'>
            <div className="qrCard__imageContainer">
                <img className='qrCard__imageContainer__image' src={ imgPath } alt='Course QR code.' />
            </div>
            <div className="qrCard__body">
                <h3 className='qrCard__body__title'>{ title }</h3>
                <p className='qrCard__body__paragraph'>{ body }</p>
            </div>
        </div>
    );
};


export default QrCard;
