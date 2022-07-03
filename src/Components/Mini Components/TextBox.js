export default function TextBox({ textBoxHeader, children }) {
  return (
    <div className="text-box">
      <h3>{textBoxHeader}</h3>
      <p>{children}</p>
    </div>
  );
}
