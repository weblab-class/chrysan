import React, { Component, useState } from "react";
import Editable from "../modules/Editable.js";

// update api and shit
const handleSubmit = () => {
    db.inventory.updateOne(
        { id: this.props.userId },
        {
          $set: { bio: {task}},
        }
     )
  }

function Edit(userId) {
    // State for the input
    const [task, setTask] = useState("");
    console.log(task)

      return (
          <div>
              this is the edit page kek!!

              this box is for your description
            <Editable
                text={task}
                placeholder="Write a task name"
                type="input"
                userId= {userId}
            >
             <input
                type="text"
                name="task"
                placeholder="Write a task name"
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            </Editable>
            <button
                type="submit"
                className=""
                value="Submit"
                onClick={() => handleSubmit()}
            >
                Submit
            </button>
          </div>
      )
    }

export default Edit