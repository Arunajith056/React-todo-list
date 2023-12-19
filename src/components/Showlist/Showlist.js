import React, { useState } from "react";
import "./showlist.css";

const Showlist = () => {
  const [items, setItems] = useState([
    { id: 1, task: "to do today", checked: true },
    { id: 2, task: "to do tomorrow", checked: false },
    { id: 3, task: "to do yesterday", checked: true },
  ]);

  const handleCheckboxChange = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
    document.activeElement.blur();
    localStorage.setItem("todo-list", JSON.stringify(newItems));
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("todo-list", JSON.stringify(updatedItems));

    //   // Clear the localStorage key if the list is empty
    //   if (updatedItems.length === 0) {
    //     localStorage.removeItem("todo-list");
    //   }
  };


  return (
    <div>
      {items.length ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`checkbox_${index}`}
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <label
                htmlFor={`checkbox_${index}`}
                onDoubleClick={() => handleCheckboxChange(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.task}
              </label>
              <span className="delete" onClick={() => handleDelete(item.id)}>
                &#10006;
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">"Task List is Empty Add a task to show"</p>
      )}
    </div>
  );
};

export default Showlist;
