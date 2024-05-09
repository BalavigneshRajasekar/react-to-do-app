import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ToDo() {
  let [storeData, setStoreData] = useState([]);
  let [formData, setFormData] = useState({
    task: "",
    description: "",
    status: "Not Completed",
  });
  let [filter, setFilter] = useState("All");
  let [filters, setFilters] = useState([]);
  let [showBtn, setShowBtn] = useState(true);
  let [index, setIndex] = useState();

  function handleData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function addTaskData() {
    setStoreData([...storeData, formData]);
    setFormData({
      task: "",
      description: "",
      status: "Not Completed",
    });
  }

  const filteredTodo = storeData.filter((todo) => {
    if (filter == "All") {
      return true;
    }
    return todo.status === filter;
  });

  function handleSelect(e, index) {
    filteredTodo[index].status = e.target.value;
    setFilters(filteredTodo);
  }

  function handleDelete(index) {
    let deletedData = filteredTodo.filter((_, index1) => {
      return index1 !== index;
    });
    setStoreData(deletedData);
  }

  function handleEdit(value, index) {
    setFormData({
      task: value.task,
      description: value.description,
      status: "Not Completed",
    });
    setShowBtn(false);
    setIndex(index);
  }

  function HandleUpdate() {
    console.log(formData);
    storeData[index] = formData;

    setShowBtn(true);
    setFormData({
      task: "",
      description: "",
      status: "Not Completed",
    });
  }
  return (
    <div className="container ">
      <div>
        <input
          type="text"
          className="input-field "
          value={formData.task}
          onChange={handleData}
          placeholder="task name"
          name="task"
        ></input>
        <input
          type="text"
          className="input-field "
          placeholder="description"
          value={formData.description}
          name="description"
          onChange={handleData}
        ></input>
        {showBtn ? (
          <button
            className="btn btn-success px-5 ms-md-5 mt-4 mt-md-1 mb-2"
            onClick={addTaskData}
          >
            Add
          </button>
        ) : (
          <button
            className="btn btn-success px-5 ms-md-5 mt-4 mt-md-1 mb-2"
            onClick={() => HandleUpdate()}
          >
            Update
          </button>
        )}
      </div>

      {/* Filter bar */}

      <div className="d-flex justify-content-between mt-5">
        <h5>My ToDos</h5>
        <h5>
          Filters:
          <select
            className="select py-1"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </h5>
      </div>

      {/* TODO CARD */}

      <div className="mt-4 d-flex justify-content-around gap-3 flex-wrap">
        {filteredTodo.map((values, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default ToDo;
