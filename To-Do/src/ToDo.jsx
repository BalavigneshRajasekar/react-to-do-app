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

  function handleSelect(e, index, value) {
    // if (e.target.value == "Completed") {
    //   e.target.style.backgroundColor = "green";
    // } else if (e.target.value == "Not Completed") {
    //   e.target.style.backgroundColor = "red";
    // }

    filteredTodo[index].status = e.target.value;
    setFilters(filteredTodo);

    console.log(storeData);
    console.log(value);
    console.log(index);
    console.log(storeData);
  }
  return (
    <div className="container-fluid ">
      <div>
        <input
          type="text"
          className="input-field"
          value={formData.task}
          onChange={handleData}
          placeholder="task name"
          name="task"
        ></input>
        <input
          type="text"
          className="input-field"
          placeholder="description"
          value={formData.description}
          name="description"
          onChange={handleData}
        ></input>
        <button
          className="btn btn-success px-5 ms-5 mt-1 mb-2"
          onClick={addTaskData}
        >
          Add
        </button>
      </div>

      <div className="d-flex justify-content-between mt-5">
        <h5>My ToDos</h5>
        <h5>
          Filters:
          <select
            className="select "
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
        {filteredTodo.map((value, index) => (
          <div className="card" style={{ width: "20rem" }} key={index}>
            <div className="card-body">
              <h6 className="card-title">Task : {value.task}</h6>
              <p className="card-text">Description : {value.description}</p>
              <p>
                Status :
                <select
                  className={
                    value.status == "Completed"
                      ? "bg-success text-light"
                      : "bg-danger text-light"
                  }
                  onChange={(e) => handleSelect(e, index, value)}
                  value={value.status}
                >
                  <option value="Not Completed">Not Completed</option>
                  <option value="Completed">Completed</option>
                </select>
              </p>
              <div className="d-flex justify-content-end">
                <button className="btn btn-success">Edit</button>
                <button className="btn btn-danger ms-2">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
