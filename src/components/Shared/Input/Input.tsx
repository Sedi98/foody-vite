

type Props = {
  type?: string;
  placeholder?: string;
  inputVal?: string;
  changeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variation?: string;
  label?: string;
};

const Input = ({
  type = "text",
  placeholder,
  inputVal="",
  changeFunc,
  variation,
  label,
}: Props): JSX.Element => {
  return (
    <>
      {variation === "navbar" && (
        <input
          className="capitalize px-6 py-3 relative rounded-xl outline-none shadow-sm ml-auto w-1/4"
          type={type}
          placeholder={placeholder}
          value={inputVal}
          onChange={changeFunc}
        />
      )}
      {variation === "login" && (
        <div>
          {label && (
            <label htmlFor="text-xl font-medium text-neutral-500">
              {label}
            </label>
          )}

          <input
            className="p-4 rounded-md outline-none bg-[#ffe6e6]"
            type={type}
            placeholder={placeholder}
            value={inputVal}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      )}
      {variation === "admin" && (
        <input
          className=" rounded text-neutral-500 bg-gray-300 py-4 pl-10 font-medium text-lg "
          type={type}
          placeholder={placeholder}
          value={inputVal}
          onChange={changeFunc}
        />
      )}
    </>
  );
};

export default Input;
