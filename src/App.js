import { React, useEffect, useState } from 'react';

import './App.css';

export default function App() {
  const [appData, setAppData] = useState(localStorage.getItem('appData'));

  localStorage.setItem('appData', appData);
  // useEffect(() => {
  // }, [appData]);

  return (
    <div>
      React Marathon, appData: <input size="5" defaultValue={appData}></input>
    </div>
  );
}
