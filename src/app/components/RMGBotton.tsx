import React from 'react';

const BottonComponent = ({ onClick, text }) => {
    return (
        <button 
            onClick={onClick}
            style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                cursor: 'pointer'
            }}
        >
            {text}
        </button>
    );
}

export default BottonComponent;