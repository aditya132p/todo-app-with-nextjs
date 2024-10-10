import React, { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { todoSlice } from "../Store/todoSlice";

type Props = {
  id?: string;
  title: string;
  isCheck: boolean;
};

const tasktext: FunctionComponent<Props> = ({ title, isCheck, id }) => {
  const dispatch = useDispatch();
  const handelCheck = (id: string) => {

    dispatch(todoSlice.actions.todoComplete({ id }));
    // console.log(id);
  };

  return (
    <div className="task flex gap-5">
      <input className="" onClick={() => handelCheck(id)} type="checkbox" />
      <span
        className={
          isCheck
            ? " text-2xl line-through decoration-gray-500	decoration-2 "
            : "text-2xl"
        }
      >
        {title}
      </span>
    </div>
  );
};

export default tasktext;
