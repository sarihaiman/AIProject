// import React from 'react';

// const InputComponent = ({ value, onChange }) => {
//     return (
//         <input
//             type="text"
//             value={value}
//             onChange={onChange}
//             style={{
//                 backgroundColor: '#f0f0f0',
//                 color: '#333',
//                 border: '1px solid #ccc',
//                 borderRadius: '4px',
//                 padding: '5px'
//             }}
//         />
//     );
// }

// export default InputComponent;

import React, { useState } from 'react';

const InputComponent = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            style={{
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '5px'
            }}
        />
    );
}

export default InputComponent;