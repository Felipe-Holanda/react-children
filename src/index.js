import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultricies, nisl et aliquam tincidunt, nunc elit aliquet nisl, eget
          tincidunt nunc nisl eget nunc. Donec auctor, nunc eget aliquam
          tincidunt, nisl elit aliquet nunc, eget tincidunt nisl nunc eget
          elit. Donec ultricies, nisl et aliquam tincidunt, nunc elit aliquet.
        </p>
      </div>
    </Main>
  </React.StrictMode>
);

