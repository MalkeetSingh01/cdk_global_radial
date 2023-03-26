import React, { useState } from "react";
import styles from "./form.module.css";
import axios from "axios";

// export const DataContext = createContext(null);

export default function Form() {
  const url = "/sql/query1";
  const [state, setState] = useState({
    query: "",
  });

  const [receive, setReceive] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(state);
    try {
      await axios.post(url, {
        query: state.query,
      });
      setReceive(true);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(state);
  //   await fetch(`${url}`, {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       state,
  //     }),
  //   });
  // };

  // const [data, setData] = useState([]);

  // const getApiData = async () => {
  //   const res = await Axios.get("http://localhost:8000/sql/query1");
  //   setData(res.data);
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_input}>
          <label htmlFor="query">Query : </label>
          <input
            type="text"
            value={state.query}
            name="query"
            id="query"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">
          Get Data
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </form>
    </>
  );
}
