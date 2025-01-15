// AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Task/taskSlice.js";
import { v4 as uuidv4 } from "uuid";

function InputTask() {
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    deadline: "",
    completed: false,
    important: false,
  });

  const dispatch = useDispatch();

  const handleSaveTask = () => {
    dispatch(addTask(newTask));
    setNewTask({
      id: "",
      title: "",
      description: "",
      deadline: "",
      completed: false,
      important: false,
    });
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="py-2 px-4 my-2 font-medium rounded-md cursor-pointer transition-colors bg-gradient-to-tr from-indigo-500 to-indigo-400 text-white hover:bg-indigo-600 focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        + Add Task
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Task</h2>
            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              cols="10"
              rows="4"
              value={newTask.description}
              placeholder="Description"
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <input
              type="date"
              placeholder="Deadline"
              value={newTask.deadline}
              onChange={(e) =>
                setNewTask({ ...newTask, deadline: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={newTask.completed}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      completed: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <span className="text-gray-700">Completed</span>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={newTask.important}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      important: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <span className="text-gray-700">Important</span>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none"
                onClick={handleSaveTask}
              >
                Save Task
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputTask;
