import React, { Profiler, useState } from "react";

function Contact() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: contact@example.com</p>
      <p>Phone: +92 300 1234567</p>
      <button onClick={() => setCount(count + 1)}>Click Me ({count})</button>
    </div>
  );
}

export default function ContactWithProfiler(props) {
  const handleRender = (id, phase, actualDuration) => {
    console.log(`${id} rendered in ${actualDuration.toFixed(2)}ms during ${phase}`);
  };

  return (
    <Profiler id="Contact" onRender={handleRender}>
      <Contact {...props} />
    </Profiler>
  );
}