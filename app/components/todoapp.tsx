"use client";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Tasktext from "../ui/tasktext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { todoSlice } from "../Store/todoSlice";
import { useParams } from "next/navigation";

export default function Todoapp() {
  const dispatch = useDispatch();
  const allTask = useSelector((state: any) => state.todoTask.todos);
  const [todo, setTodo] = useState({ id: "", title: "", isCheck: false });

  // console.log("allTask", allTask)

  useEffect(() => {
    console.log(allTask);
  }, [allTask]);

  const handleChange = (e: any) => {
    setTodo({
      ...todo,
      id: self.crypto.randomUUID(),
      title: e.target.value,
      isCheck: false,
    });
  };

  const handleSubmit = () => {
    dispatch(todoSlice.actions.todoAdd(todo));
    setTodo({ title: "", isCheck: false, id: "" });
  };

  const handleRemove = (id: string) => {
    dispatch(todoSlice.actions.todoRemove({ id }));
    console.log("remove");
    console.log(allTask);
  };

  return (
    <>
      <div className="bg-white w-full h-screen flex ">
        <div className=" w-[20%] flex flex-col items-center px-16 h-full justify-center gap-5 border-2">
          <span className="text-2xl text-red-400">All</span>
          <span className="text-2xl text-gray-700 hover:text-red-400">
            Active
          </span>
          <span className="text-2xl text-gray-700 hover:text-red-400">
            Completed
          </span>
        </div>
        <div className="w-[80%] bg-white">
          <div className="px-14 py-12 flex flex-col gap-6">
            <h1 className="text-3xl font-semibold ">All Task</h1>

            <input
              className=" py-2 px-2 rounded-md border-none outline-none  bg-slate-100 w-full"
              placeholder="Add a new task insdie ‘All’ category"
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                  console.log("click");
                }
              }}
              value={todo.title}
              onChange={handleChange}
            />

            <div className="py-4 ">
              {allTask &&
                allTask.map((data, idx: number) => (
                  <div className="flex justify-between items-center" key={idx}>
                    <Tasktext title={data.title} id={data.id} isCheck={data.IsCheck} />
                    <Trash2
                      color="#FF0000"
                      size={"14px"}
                      onClick={() => handleRemove(data.id)}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
