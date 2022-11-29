import React from 'react'

const Form = (props) => {
  return (
    <div className="grid place-items-center">
        <div className="mt-5 w-4/5">
          <h1 className="bg-amber-900 border border-amber-100 shadow-box-lg p-4 text-center text-5xl font-bold text-amber-100 mb-12">
            ToDo List App
          </h1>
        </div>
        <div className="w-full max-w-md">
          <div
            className="bg-amber-100 border border-amber-900 px-8 pt-6 pb-8 mb-4 shadow-box-md"
          >
            <div className="">
              <div>
                <label className="block text-lg font-medium text-amber-900">
                  Add Title
                </label>
                <input
                  type="text"
                  className="border p-1 pl-3 focus:outline-none text-md border-amber-900 text-amber-900 w-full shadow-box-sm"
                  placeholder="Add Title"
                  onChange={(e) => props.setNewTask(e.target.value)}
                />
              </div>
              <div className="mt-6">
                <label className="block text-lg font-medium text-amber-900">
                  Add Description
                </label>
                <input
                  type="text"
                  className="border p-1 pl-3 focus:outline-none text-md border-amber-900 text-amber-900 w-full shadow-box-sm"
                  placeholder="Add Description"
                  onChange={(e) => props.setDeskripsi(e.target.value)}
                />
              </div>
              <div className="flex flex-row-reverse mt-6">
                <button
                  className="border border-amber-900 text-amber-900 text-md font-semibold text-semibold hover:bg-amber-900 hover:text-amber-50 shadow-box-sm bg-white py-1 w-36"
                  onClick={props.addTask}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Form
