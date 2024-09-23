type Props = {
  type?: string;
  placeholder?: string;
  inputVal?: string;
  changeFunc?: (e: any) => void;
  variation?: string;
  label?: string;

  options?: string[];
};

const Select = ({
  inputVal = "",
  changeFunc,
  variation,
  label,
  options,
}: Props) => {
  return (
    <>
      {variation === "adminAdd" && (
        <div className="w-full  flex flex-col gap-2   mb-6">
          {label && (
            <label className=" text-neutral-300 font-medium text-baseblock">
              {label}
            </label>
          )}

          <select
            className="block w-full bg-[#5a5b70] rounded-2xl font-medium text-base  text-white pl-5 py-3  capitalize  "
            value={inputVal}
            onChange={changeFunc}
          >
            <option disabled value="">
              Choose
            </option>
            {options?.map((option: any, index) => (
              <option key={index} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {variation === "adminHeader" && (
        <select
          className="block bg-[#5a5b70] rounded-2xl font-medium text-base  text-white pl-5 py-1 mr-5 text-whiteLight w-[150px] overflow-x-auto ml-auto  "
          value={inputVal}
          onChange={changeFunc}
        >
          
          <option value="All">
            All
          </option>
          {options?.map((option: any, index) => (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default Select;
