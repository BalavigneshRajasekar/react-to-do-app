import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoCard from "./ToDoCard";

function ToDo() {
  //Hold The Meta DATA
  let [storeData, setStoreData] = useState([]);
  //Hold Form Data
  let [formData, setFormData] = useState({
    task: "",
    description: "",
    status: "Not Completed",
  });
  //Hold Data for Filter Action
  let [filter, setFilter] = useState("All");
  // //For render purpose once changed the status
  let [filters, setFilters] = useState([]);
  // Help to switching "Add BTN" to "Update BTN"
  let [showBtn, setShowBtn] = useState(true);
  //Hold MetaData Index for editing
  let [index, setIndex] = useState();

  //Capturing Initial Form Data
  function handleData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //This function is used to add all the form data In an array of objects
  function addTaskData() {
    setStoreData([...storeData, formData]);
    setFormData({
      task: "",
      description: "",
      status: "Not Completed",
    });
  }

  //This FilteredTodo is used to Show the list of tasks in ToDoCard component and Filter option
  const filteredTodo = storeData.filter((todo) => {
    if (filter == "All") {
      return true;
    }
    return todo.status === filter;
  });

  //This function is used to edit the existing tasks
  function HandleUpdate() {
    //This will take tha new value from the input field and replace it with the old value
    //Index is help us to get the same card which needs to be updated
    storeData[index] = formData;

    setShowBtn(true);
    setFormData({
      task: "",
      description: "",
      status: "Not Completed",
    });
  }
  return (
    <div className="">
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
        <h5 className="fw-bold">My ToDos</h5>
        <h5 className="fw-bold">
          Status Filter:
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

      {/* //Here we send essential methods to get and set values for ToDOCard component */}
      <div className="mt-3">
        <ToDoCard
          filteredTodo={filteredTodo}
          setStoreData={setStoreData}
          setShowBtn={setShowBtn}
          setIndex={setIndex}
          setFormData={setFormData}
          setFilters={setFilters}
        ></ToDoCard>
      </div>
    </div>
  );
}

export default ToDo;
