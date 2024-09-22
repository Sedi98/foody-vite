type Props = {
  type?: string;
  placeholder?: string;
  inputVal?: string;
  changeFunc?: (e: any) => void;
  variation?: string;
  label?: string;
};

const Select = ({
 
  inputVal = "",
  changeFunc,
  variation,
  label,
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
            <option disabled value="">Choose</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      )}
    </>
  );
};

export default Select;
