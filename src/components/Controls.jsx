function Controls({ next, prev }) {
  return (
    <div style={styles.container}>
      <button style={styles.btn} onClick={prev}>⬅ Prev</button>
      <button style={styles.btn} onClick={next}>Next ➡</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  },
  btn: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer"
  }
};

export default Controls;