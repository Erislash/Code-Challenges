import React from 'react';
import ReactDOM from 'react-dom';
import QrCard from './components/QrCard/QrCard.js';

import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <QrCard 
      imgPath='./assets/images/qr.png'
      title='Improve your front-end skills by building projects'
      body={['Scan the ', <b><abbr title="Quick Response code">QR code</abbr></b> ,' to visit Frontend Mentor and take your coding skills to the next level']}
    />
  </React.StrictMode>,
  document.getElementById('root')
);