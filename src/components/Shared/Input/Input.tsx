type Props = {
  type?: string;
  placeholder?: string;
  inputVal?: string;
  changeFunc?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | undefined
  ) => void;
  variation?: string;
  label?: string;
};

const Input = ({
  type = "text",
  placeholder,
  inputVal = "",
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
        <div className="w-full">
          {label && (
            <label className="text-xl font-medium text-neutral-500">
              {label}
            </label>
          )}

          <input
            className="p-4 rounded-md outline-none bg-[#ffe6e6] block w-full text-black"
            type={type}
            value={inputVal}
            onChange={changeFunc}
          />
        </div>
      )}
      {variation === "admin" && (
        <input
          className=" rounded text-gray-300 bg-[#5a5b70] py-4 pl-10 font-medium text-lg "
          type={type}
          placeholder={placeholder}
          value={inputVal}
          onChange={changeFunc}
        />
      )}

      {variation === "adminAdd" && (
        <div className="w-full  flex flex-col gap-2   mb-6">
          {label && (
            <label className=" text-neutral-300 font-medium text-baseblock">
              {label}
            </label>
          )}

          <input
            className="block w-full bg-[#5a5b70] rounded-2xl font-medium text-base  text-white pl-5 py-3   "
            type={type}
            placeholder={placeholder}
            value={inputVal}
            onChange={changeFunc}
            name={label?.toLocaleLowerCase()}
          />
        </div>
      )}

      {variation === "adminArea" && (
        <div className="w-full  flex flex-col gap-2   mb-6">
          {label && (
            <label className=" text-neutral-300 font-medium text-baseblock">
              {label}
            </label>
          )}

          <textarea
            className="block w-full resize-none bg-[#5a5b70] rounded-2xl font-medium text-base  text-white pl-5 py-3   "
            placeholder={placeholder}
            value={inputVal}
            onChange={changeFunc}
            name={label?.toLocaleLowerCase()}
            maxLength={150}
          ></textarea>
        </div>
      )}

      {variation === "profile" && (
        <div className="w-full">
          {label && (
            <label className="text-xl font-medium text-neutral-500 mb-2">
              {label}
            </label>
          )}

          <input
            className="p-4 rounded-md outline-none bg-white block w-full text-black"
            type={type}
            value={inputVal}
            onChange={changeFunc}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};

export default Input;
