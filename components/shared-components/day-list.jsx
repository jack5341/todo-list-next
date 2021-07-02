export default function DayList() {
  return (
    <ul className="w-10/12 h-min-342-p mt-4">
      {days.map((e, key) => (
        <li
          key={key}
          id={e[0] ? e[0] : null}
          onClick={(e) => props.setday(e.target.id)}
          className={
            e[0] === props.day ? "active" : "duration-100 hover:bg-blue-200"
          }
        >
          {e[0]}
          {e[1] ? (
            <span className="text-gray-500 font-normal float-right mr-6">
              {e[1]}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
