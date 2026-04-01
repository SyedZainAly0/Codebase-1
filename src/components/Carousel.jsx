function Carousel({ image }) {
  return (
    <div style={styles.container}>
      <img src={image} alt="slide" style={styles.image} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px"
  },
  image: {
    width: "500px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
  }
};

export default Carousel;