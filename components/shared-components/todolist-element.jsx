import { useContext, useEffect, useState } from "react";
import { ListStore } from "../../contexts/listStore";
import Images from "next/image";

export default function TodoListElement(props) {
  const value = useContext(ListStore);
  const [ischecked, setChecked] = useState(false);

  useEffect(() => {
    if (value.complated[0][value.currentDay[0]].includes(props.index))
      setChecked(true);
  }, [value]);

  return (
    <div
      key={props.index}
      className="flex h-28-p items-center w-full mb-7 text-lg"
    >
      <input
        type="checkbox"
        checked={ischecked ? true : false}
        onChange={(e) => {
          setChecked(!ischecked);
          if (ischecked)
            value.deletefromArray(
              value.complated[1],
              value.complated[0],
              value.currentDay[0],
              props.index
            );
          else
            value.addtoArray(
              value.complated[1],
              value.complated[0],
              value.currentDay[0],
              props.index
            );
        }}
        className="mr-28-p -mt-1 checkbox"
        name="isdone"
      />{" "}
      <div className="flex justify-between border-b w-full task-line">
        <label
          className={
            "pb-2 break-words" +
            (ischecked ? " line-through text-gray-300" : null)
          }
          htmlFor="isdone"
        >
          {props.label}
        </label>
        <div className={`flex items-center icons ${ischecked ? "hidden" : "block"}`}>
          <div>
            <Images
              src="/assets/icons/calendar.png"
              alt="calendar-icon"
              className="cursor-pointer transform duration-100 w-4 hover:scale-90 rounded"
              height={26}
              width={23}
            />
          </div>
          <div className="ml-3">
            <Images
              src="/assets/icons/delete.png"
              alt="delete-icon"
              onClick={() =>
                value.deletefromArray(
                  value.todoList[1],
                  value.todoList[0],
                  value.currentDay[0],
                  // Bug Fix #3
                  // Added element index to deletefromArray
                  props.index
                )
              }
              className="cursor-pointer transform duration-100 w-4 hover:scale-90 rounded"
              height={26}
              width={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
