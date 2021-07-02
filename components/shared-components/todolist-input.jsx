export default function TodoListInput() {
  return (
    <div className="flex mt-158-p">
      <input type="checkbox" className="mr-28-p" name="isdone" />{" "}
      <input
        type="text"
        className="border-b focus:outline-none pb-2 w-full"
        placeholder="Was willst du machen?"
      />
    </div>
  );
}
