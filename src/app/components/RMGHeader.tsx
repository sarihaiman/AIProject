import React from 'react';

const UpperHeader = ({ title }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    margin: '0',
  },
};

export default UpperHeader;

