import Head from "next/head";
import Images from "next/image";
import jwt from "jsonwebtoken";
import { useState, useEffect } from "react";

// Components
import LeftSide from "../components/layout-components/left-side";
import Container from "../components/layout-components/container";
import ListElement from "../components/shared-components/todolist-element";

// Context APIs
import { ListStore } from "../contexts/listStore";

export default function Home() {
  const [day, setday] = useState("Montag");
  const [ischecked, setChecked] = useState(false);
  const [list, setlist] = useState({
    Montag: ["Hello Montag !", "Uxactly GmbH!"],
    Dienstag: ["Hello Dienstag !"],
    Mittwoch: [],
    Donnerstag: [],
    Freitag: [],
    Samstag: [],
    Sonntag: [],
  });

  const [complated, setComplated] = useState({
    Montag: [],
    Dienstag: [],
    Mittwoch: [],
    Donnerstag: [],
    Freitag: [],
    Samstag: [],
    Sonntag: [],
  });

  useEffect(() => {
    setlist(jwt.decode(window.localStorage.getItem("list")));
    setComplated(jwt.decode(window.localStorage.getItem("complated")));
  }, []);

  const [days, setdays] = useState([
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ]);

  const stateTree = {
    currentDay: [day, setday],
    todoList: [list, setlist],
    days: [days, setdays],
    complated: [complated, setComplated],
    addtoArray: (setarr, arr, day, input) => {
      setarr({
        ...arr,
        [day]: [...arr[day], input],
      });
    },
    deletefromArray: (setarr, arr, day, input) => {
      const reducedArr = [...arr[day]];
      reducedArr.splice(input ? reducedArr.indexOf(input) : 0, 1);
      setarr({
        ...arr,
        [day]: [...reducedArr],
      });
    },
  };

  useEffect(() => {
    window.localStorage.setItem("list", jwt.sign(list, "shhhhh"));
    window.localStorage.setItem("complated", jwt.sign(complated, "shhhhh"));
  }, [list, complated]);

  const keywordOfArray = list
    ? Object.keys(list).findIndex((e) => e === day)
    : null;

  return (
    <ListStore.Provider value={stateTree}>
      <Head>
        <title>Todo - {day} </title>
      </Head>
      <Container>
        <div className="flex h-screen justify-center items-center">
          <div className="grid shadow-skyblue grid-cols-4 rounded-xl">
            <LeftSide />
            <div className="col-span-3 -ml-5 bg-white w-662-p rounded-xl p-10 py-0 shadow-skyblue">
              <div className="flex my-4 flex-col">
                <p className="text-4xl font-bold mt-4"> {day} </p>
                <div className="p-3 h-min-360-p h-max-360-p mt-17-p overflow-auto">
                  {list
                    ? Object.values(list)[keywordOfArray].map((e, key) => (
                        <ListElement
                          day={day}
                          key={key}
                          index={key}
                          label={e}
                        />
                      ))
                    : null}
                  <p className="text-blue-smoothblue text-sm mt-1 ml-1 cursor-pointer">
                    > Complated {complated ? [complated[day]][0].length : null}
                  </p>
                </div>
                <form
                  onSubmit={async (e) => {
                    // Bug Fix #1
                    e.preventDefault();
                    // Reconstruct for the push an element to state
                    if (document.getElementById("input-list").value) {
                      stateTree.addtoArray(
                        setlist,
                        list,
                        day,
                        document.getElementById("input-list").value
                      );

                      ischecked
                        ? stateTree.addtoArray(
                            setComplated,
                            complated,
                            day,
                            list[day].length
                          )
                        : stateTree.deletefromArray(
                            setComplated,
                            complated,
                            day,
                            list[day].length
                          );
                      document.getElementById("input-list").value = "";
                    }
                    return null;
                  }}
                  className="flex mt-8"
                >
                  <input
                    type="checkbox"
                    id="input-checkbox"
                    onChange={() => setChecked(!ischecked)}
                    className="mr-28-p checkbox"
                  />{" "}
                  <input
                    type="text"
                    id="input-list"
                    className="border-b focus:outline-none pb-2 w-full"
                    placeholder="Was willst du machen?"
                  />  
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ListStore.Provider>
  );
}
