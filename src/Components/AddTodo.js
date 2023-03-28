import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("title and desc can not be blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a To Do</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="Text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="Title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            To Do Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add To Do
        </button>
      </form>{" "}
    </div>
  );
};
