// // import React from 'react';

// // interface LargeTitleProps {
// //   text: string;
// // }

// // const LargeTitle: React.FC<LargeTitleProps> = ({ text }) => {
// //   return (
// //     <h1 className="text-4xl font-bold text-center mb-8">{text}</h1>
// //   );
// // }

// // export default LargeTitle;

// import React from 'react';

// interface LargeTitleProps {
//   text: string;
// }

// const LargeTitle: React.FC<LargeTitleProps> = ({ text }) => {
//   return (
//     <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
//       <h1 className="text-4xl font-bold text-gray-800 text-center">{text}</h1>
//     </div>
//   );
// }

// export default LargeTitle;

import React from 'react';

const TextComponent = ({ text }) => {
  return (
    <p style={styles.text}>
      {text}
    </p>
  );
};

const styles = {
  text: {
    fontSize: '25px',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5',
  },
};

export default TextComponent;

