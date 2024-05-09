# React Todo Task

## Description

A todo app is designed to help users organize, prioritize, and manage their tasks or to-do lists. These apps typically offer features such as creating, editing, and deleting tasks and Filtering their Task
With that filter option user can able to identify which are completed and not completed task

## Tech Stack

**Client:** HTML, CSS, Bootstrap, Javascript, React

## Demo

https://price-card-ui.vercel.app/

## Documentation

/_ Two main components which are needed _/

#### ToDo

It is responsible for managing the user interface for adding, editing, and filtering tasks. The component maintains several states, including:

1.  storeData: An array of task objects that are stored in the component's state.

2.  formData: An object that holds the current task details being edited or added.

3.  filter: A string that represents the current filter status (e.g., "All", "Completed", "Not Completed").

4.  filters: An array of filter statuses that are used to filter the tasks.

5.  showBtn: A boolean that determines whether the "Add" or "Update" button should be displayed.

6.  index: An integer that represents the index of the task being edited.

The component also includes several functions:

1.  handleData: This function updates the formData object whenever a user interacts with the input fields.

2.  addTaskData: This function adds a new task object to the storeData array and resets the formData object.

3.  filteredTodo: This function filters the tasks in the storeData array based on the current filter status.

4.  HandleUpdate: This function updates the task at the specified index in the storeData array with the current formData object and resets the formData object.

The component also renders several UI elements, including input fields for task and description, a button for adding or updating tasks, a filter bar, and a ToDoCard component that displays the tasks and allows for editing. The ToDoCard component receives several props from the ToDo component, including the filtered tasks, functions for updating the storeData array, and functions for updating the UI elements.

#### ToDoCard Component

It is responsible for rendering a card for each task in the filteredTodo array. The filteredTodo array is a prop that is passed to this component. The component also has several other props such as setStoreData, setShowBtn, setIndex, setFormData, and setFilters. These props are used to update the state of the parent component when certain actions are performed in the ToDoCard component.

The ToDoCard component has three main functions: handleSelect, handleDelete, and handleEdit. These functions handle the actions of changing the status of a task, deleting a task, and editing a task respectively.

The handleSelect function updates the status of the task at the specified index in the filteredTodo array. It then triggers a re-render of the component by updating the setFilters state.

The handleDelete function filters out the task at the specified index from the filteredTodo array and updates the setStoreData state with the remaining tasks.

The handleEdit function updates the setFormData state with the task data of the task at the specified index. It also sets the setIndex state with the index of the task to be edited.

The ToDoCard component returns a div that contains the task details and the status dropdown. It also includes buttons for editing and deleting the task. If there are no tasks in the filteredTodo array, it displays a message saying "Currently No Task is assigned !!!".

## Run Locally

Clone the project

```bash
https://github.com/BalavigneshRajasekar/react-to-do-app.git
```

Go to the project directory

```bash
  cd To-Do
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
