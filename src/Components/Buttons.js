import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

function Buttons() {
  return (
    <div className="buttons">
      <button>
        <AiOutlineUsergroupAdd />
        View all
      </button>
      <button>
        {" "}
        <AiOutlineUserAdd />
        Add Client
      </button>
    </div>
  );
}

export default Buttons;
