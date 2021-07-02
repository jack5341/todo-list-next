import { useContext } from "react";
import Image from "next/image";

// Shared Components
import DaysElement from "../shared-components/days-element";

// Context APIs
import { ListStore } from "../../contexts/listStore";

export default function LeftSide(props) {
  const value = useContext(ListStore);
  if (value) {
    return (
      <>
        <div className="rounded-xl w-full shadow-skyblue bg-skyblue justify-center">
          <center className="mt-7">
            <Image
              src="/assets/images/billgates.jpg"
              alt="user-photo"
              className="rounded-full"
              height={65}
              width={65}
            />
          </center>
          <div className="flex justify-center days flex-col">
            <center>
              <ul className="w-10/12 h-min-371-p h-max-371-p mt-4 overflow-auto">
                {value.days[0].map((e, key) => (
                  <DaysElement
                    currentday={[value.currentDay[0], value.currentDay[1]]}
                    len={value.todoList[0][e.toString()]}
                    e={e}
                    key={key}
                  />
                ))}
              </ul>
            </center>
            <div
              onClick={() => {
                const listname = prompt(
                  "Bitte fügen Sie einen neuen Listennamen hinzu: "
                );
                if (listname.length > 3) value.days[1]([...value.days[0], listname]);
              }}
              className="flex bg-skyblue-d hover:bg-blue-100 duration-100 bottom-0 cursor-pointer py-4 rounded-bl-xl"
            >
              <p className="pl-10 text-gray-500">+ Neue Liste</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
