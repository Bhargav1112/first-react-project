import React, { useEffect, useState } from 'react';
import Home from './Containers/HOC/Home';
import Loading from './Containers/HOC/Loading';

import "./App.css";
import Counter from "./Containers/counter/Counter";
import CountryFun from "./Containers/CountryFun";
import Timer from "./Containers/Time/Timer";
import TimerFunc from "./Containers/Time/TimerFunc";

const HomeHOC = Loading(Home)

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const DUMMY_DATA = [
    { id: 'c1', name: 'Amit' },
    { id: 'c2', name: 'Ajay' },
    { id: 'c3', name: 'Ram' },
  ]

  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setData(DUMMY_DATA) }, 3000)
  }, [])

  return (
    <div>
      <HomeHOC isLoading={loading} userData={data} />
    </div>
  );
}

export default App;
