
const ImageComponent = ({ src, alt }) => {
  return (
    <div>
      <div style={styles.container}>
      <img src={src} alt={alt} style={styles.image} />
    </div>
    </div>
  );
};


const styles = {
    container: {
      backgroundColor: '#f0f0f0',
      padding: '20px',
      textAlign: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
};

export default ImageComponent;