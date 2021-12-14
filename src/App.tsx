import React, { useState } from 'react';
import Header from 'Components/Header';

const App = () => {
  const [showTwo, setShowTwo] = useState<boolean>(false);
  return (
    <div className="app">
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
    </div>
  );
};

export default App;
