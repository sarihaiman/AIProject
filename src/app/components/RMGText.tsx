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

