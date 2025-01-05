import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        res.json();
      })
      .then((data) => setMessage(data.message))
      .catch((err) => setError(err.message));
  }, []);

  return <div>{error ? <div>Error: {error}</div> : <div>{message}</div>}</div>;
}

export default App;
