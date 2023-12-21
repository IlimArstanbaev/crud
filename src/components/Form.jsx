import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [itemName, setItemName] = useState("");

  const handleInputChange = (e) => {
    setItemName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName.trim()) {
      alert("Введите название элемента");
      return;
    }

    axios
      .post("http://localhost:3001/items", { name: itemName })
      .then((response) => console.log("Item added:", response.data))
      .catch((error) => console.error("Error adding item: ", error));

    setItemName("");
  };

  return (
    <div>
      <h2>Создание нового элемента</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название:
          <input type="text" value={itemName} onChange={handleInputChange} />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default Form;
