import React, { useState, Suspense } from 'react';
import doge from 'Assets/images/doge.jpg';

const ComputedOne = React.lazy(() => import('Components/ComputedOne'));
const ComputedTwo = React.lazy(
  () =>
    import(
      /* webpackChunkName: "ComputedTwo" */
      'Components/ComputedTwo'
    ),
);

const App = () => {
  const [showTwo, setShowTwo] = useState<boolean>(false);
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <ComputedOne a={1} b={2} />
        {showTwo && <ComputedTwo a={3} b={4} />}
        <button type="button" onClick={() => setShowTwo(true)}>
          显示Two
        </button>
        <img src={doge} alt="" />
      </Suspense>
    </div>
  );
};

export default App;
