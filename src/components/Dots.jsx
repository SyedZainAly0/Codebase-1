function Dots({ images, activeIndex, goToSlide }) {
  return (
    <div style={styles.container}>
      {images.map((_, i) => (
        <span
          key={i}
          onClick={() => goToSlide(i)}
          style={{
            ...styles.dot,
            backgroundColor: i === activeIndex ? "#007bff" : "#ccc"
          }}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px"
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    cursor: "pointer"
  }
};

export default Dots;