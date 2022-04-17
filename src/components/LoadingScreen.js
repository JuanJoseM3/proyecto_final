import React from 'react';
import '../styles/loading-screen.css';

const LoadingScreen = () => {
    return (
        <div className='loading-container'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadingScreen;