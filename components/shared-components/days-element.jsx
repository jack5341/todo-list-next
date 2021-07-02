export default function DaysElement(props) {

  return (
    <a onClick={(e) => props.currentday[1](e.target.id)}>
      <li
        id={props.e}
        className={
          props.e === props.currentday[0]
            ? "active"
            : "duration-100 hover:bg-blue-200 text-gray-500"
        }
      >
        {props.e}
        {/* Bug Fix #2 */}
        {/* I noticed Next.js see my array as a object with **typeof** keyword. Then I assigned my variable as Array */}
        {[props.len][0].length > 0 ? (
          <span className="text-gray-500 pointer-events-none font-normal float-right mr-6">
            {[props.len][0].length}
          </span>
        ) : null}
      </li>
    </a>
  );
}
