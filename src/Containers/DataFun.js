import React, { useEffect, useState } from 'react';
import Home from './HOC/Home';
import Loading from './HOC/Loading';

const HomeHOC = Loading(Home)

function DataFun() {
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

export default DataFun;