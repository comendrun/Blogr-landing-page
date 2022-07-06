export default function TextBox({ textBoxHeader, children }) {
  return (
    <div className="text-box max-w-6xl flex flex-col	m-auto desktop:max-w-full desktop:text-left desktop:mx-auto desktop:my-2 desktop:items-end desktop:w-10/12">
      <h3 className="font-bold text-3xl w-9/12 m-auto mb-5 desktop:text-left desktop:w-full desktop:m-0 desktop:mb-4 desktop:">{textBoxHeader}</h3>
      <p className="w-10/12 m-auto text-lg max-w-xl desktop:text-left  desktop:w-full desktop:m-0 desktop: desktop:max-w-full">{children}</p>
    </div>
  );
}
