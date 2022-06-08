import React from 'react';

function Loading(Component) {
    return function LoadingHome(props) {
        if (props.isLoading) {
            return <p>LOADING....Please wait !!!</p>
        }

        return <Component data={props.userData} />
    };
}

export default Loading;