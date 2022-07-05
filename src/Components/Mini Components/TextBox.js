export default function TextBox({ textBoxHeader, children }) {
  return (
    <div className="text-box">
      <h3 className="font-bold text-3xl w-9/12 m-auto mb-5">{textBoxHeader}</h3>
      <p className="w-10/12 m-auto text-lg">{children}</p>
    </div>
  );
}
