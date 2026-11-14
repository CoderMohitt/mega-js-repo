import useToggle from "./useToggle";

export default function New() {
      const [open, toggleOpen] = useToggle(false);

  return (
    <div>
      <button onClick={toggleOpen}>{open ? "Hide" : "Show"}</button>
      {open && <p>Hidden content</p>}
    </div>)

}