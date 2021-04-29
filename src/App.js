import { useEffect, useState } from 'react';

import './App.css';

export default function App() {
  const [appData, setAppData] = useState('');

  useEffect(() => {
    setAppData(localStorage.getItem('appData'));
  }, []);

  return (
    <div>
      React Marathon, appData: <input size="5" defaultValue={appData}></input>
    </div>
  );
}
