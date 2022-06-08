import React from 'react';

function Home(props) {
    return (
        props.data.map(user => {
            return <div key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.id}</p>
            </div>
        })
    );
}

export default Home;