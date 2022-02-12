import React from 'react';

//--Components--
import Image from '../Image/image.js'


//--Styles--
import './nftCard.scss';



/**
 * @component
 * 
 * @returns 
 */
const NFTCard = ({image, nftTitle, id, body, price, daysLeft, creator:{name, profilePicture}}) => {
    return (
        <div className='nftCard'>
            <Image
                className={'nftCard__image'}
                src={image}
                alt={`Preview image of the ${nftTitle} NFT.`}
                objFit='cover'
                caption=''
            >
                <div className="nftCard__image__hover">
                    <span className='icon' style={{'content':'url(./assets/images/icon-view.svg)'}}></span>
                </div>
            </Image>

            <h2 className='nftCard__title'>
                {nftTitle} #{id}
            </h2>

            <p className='nftCard__body'>
                {body}
            </p>

            <div className="nftCard__info">
                <div className="nftCard__info__price">
                    <span className='icon' style={{'content':'url(./assets/images/icon-ethereum.svg)'}}></span>
                    {price} ETH
                </div>
                <div className="nftCard__info__daysLeft">
                    <span className='icon' style={{'content':'url(./assets/images/icon-clock.svg)'}}></span>
                    {daysLeft} {(parseInt(daysLeft) === 1) ? 'day' : 'days'} left
                </div>
            </div>
            
            <div className="nftCard__avatar">
                <Image
                    src={profilePicture}
                    alt={`${name} user`}
                    className='nftCard__avatar__image'
                    caption=''
                />
                Creation of&nbsp;<span className='nftCard__avatar__name'>{name}</span>
            </div>

        </div>
    );
};

export default NFTCard;