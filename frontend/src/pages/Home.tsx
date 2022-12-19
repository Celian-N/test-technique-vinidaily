import React, { useState } from 'react';
import { Wine } from '../types/wines';
import './Home.css';

function Home() {
  const [wines, setWines] = useState([] as Wine[]);

  return (
    <div>
      <header>
      </header>
      <div>
          {`${wines}`}
      </div>
    </div>
  );
}

export default Home;
