export default function Button({ text, handleClick }) {
  return (
    <button className="" type="button" onClick={handleClick}>{text}</button>
  );
}