import React from 'react';
import ReactDOM from 'react-dom';

//--Components--
import NFTCard from './components/NFTCard/nftCard.js'


import './index.scss';

const genericCreator={
  name:'Jules Wyvern',
  profilePicture:'./assets/images/image-avatar.png'
}

ReactDOM.render(
  <React.StrictMode>
    <NFTCard
      image='./assets/images/image-equilibrium.jpg'
      nftTitle='Equilibrium'
      id='3429'
      body='Our Equilibrium collection promotes balance and calm.'
      price='0.041'
      daysLeft='3'
      creator={genericCreator}
    />
  </React.StrictMode>,
  document.getElementById('root')
);