import React from "react";
import { useState } from "react";

function ToDoCard(props) {
  //Destructuring all the props properties
  const {
    filteredTodo,
    setStoreData,
    setShowBtn,
    setIndex,
    setFormData,
    setFilters,
  } = props;

  //This function help us to Change status in the card
  function handleSelect(e, index) {
    filteredTodo[index].status = e.target.value;
    //This state only has the purpose of re-render once status changes
    setFilters(filteredTodo);
  }

  //This function help us to Delete the card
  function handleDelete(index) {
    let deletedData = filteredTodo.filter((_, index1) => {
      return index1 !== index;
    });
    setStoreData(deletedData);
  }

  //This function help us to retrieve the edit card's data and update that to Input fields
  function handleEdit(value, index) {
    setFormData({
      task: value.task,
      description: value.description,
      status: "Not Completed",
    });
    setShowBtn(false);

    //This Index is which help us to update the right card's data in the next step
    setIndex(index);
  }

  return (
    <div>
      <div className="mt-4 d-flex justify-content-around gap-3 flex-wrap">
        {filteredTodo.length == 0 ? (
          <h3 className="text-success mt-3">
            Currently No Task is assigned !!!
          </h3>
        ) : (
          filteredTodo.map((values, index) => (
            <div className="card" style={{ width: "20rem" }} key={index}>
              <div className="card-body">
                <h6 className="card-title">Task : {values.task}</h6>
                <p className="card-text">Description : {values.description}</p>
                <p>
                  Status :
                  <select
                    className={
                      values.status == "Completed"
                        ? "bg-success text-light py-1 ms-1"
                        : "bg-danger text-light py-1 ms-1"
                    }
                    onChange={(e) => handleSelect(e, index)}
                    value={values.status}
                  >
                    <option value="Not Completed">Not Completed</option>
                    <option value="Completed">Completed</option>
                  </select>
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-success"
                    onClick={() => handleEdit(values, index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ToDoCard;
