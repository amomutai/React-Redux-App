import React from 'react';

import Sidebar from './layouts/Sidebar'
import MainSection from './layouts/MainSection';

function App() {
  return (
    <div className="App">
      <div className="container">
         <Sidebar />
         <MainSection />
      </div>
    </div>
  );
}

export default App;
