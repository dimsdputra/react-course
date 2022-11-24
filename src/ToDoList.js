import React, { useState } from "react";

const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <div className="container mx-auto">
      <div className="grid place-items-center">
        <div className="mt-5 mb-5">
          <h1 className="text-left text-xl font-bold text-amber-900">
            ToDo List App
          </h1>
        </div>
        <div className="w-full max-w-md">
          <div className="bg-white shadow-sm shadow-amber-900 rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-lg font-medium text-amber-900"
              >
                Add Task
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="rounded border-2 p-1 pl-3 border-amber-900 text-amber-900 flex-auto w-64 "
                  placeholder="Add ToDo List"
                  onChange={handleChange}
                />
                <button
                  className="rounded bg-amber-200 p-1 text-amber-900 ml-2 flex-auto w-32 font-semibold"
                  onClick={addTask}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {todoList.length === 0 ? (
        <div className="grid place-items-center">
          <div className="mt-5 mb-5">
            <h1 className="text-left text-xl font-bold text-amber-900">
              Tidak Ada Task
            </h1>
          </div>
        </div>
      ) : (
        todoList.map((task) => {
          return (
            <div className="list grid grid-cols-4 gap-4">
              <div className="w-full max-w-md">
                <div className="bg-white shadow-sm shadow-amber-900 rounded-lg p-4 mb-4">
                  <div className="content-card">
                    <label className="block text-sm text-amber-900 ">
                      Task
                    </label>
                    <p className="font-bold text-amber-900 text-4xl">
                      {task.taskName}
                    </p>
                  </div>
                  <div className="grid justify-items-end">
                    <div>
                      <button
                        className="flex items-center bg-amber-200 hover:bg-amber-400 text-amber-900 font-medium text-md px-5 py-1 rounded mt-5"
                        onClick={() => deleteTask(task.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-4 mr-2"
                        >
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ToDoList;
