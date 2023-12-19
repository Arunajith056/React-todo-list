import React from "react";
import "./additem.css";

const Additem = () => {
  return (
    <div className="Additem">
    <div className="add-control">
      <div className="form-group has-feedback">
        <div className="input-container">
          <input
            type="text"
            className="form-control"
            placeholder="✍️ Add item..."
          />
          <i
            className="fa fa-plus form-control-feedback add-btn"
            title="Add item"
          ></i>
        </div>
      </div>
    </div>
    <p className="err text-danger text-center hidden">
      <i className="fa fa-warning"></i> Oops! Please, enter some item
    </p>
    <p className="no-items text-muted text-center hidden">
      <i className="fa fa-ban"></i>
    </p>
  </div>
  
  );
};

export default Additem;
