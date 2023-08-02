import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

//pages
import Cardapio from './pages/Cardapio/Cardapio';

ReactDOM.render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>,
  document.getElementById('root')
);
