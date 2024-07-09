import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState("users");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
        console.log("data", items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <Table items={items} />
    </div>
  );
}

export default App;
