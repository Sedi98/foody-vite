import {  useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import cloud from "../../../assets/icons/admin/cloud.svg";
// import Input from "../../../components/Shared/Input/Input";
// import Select from "../../../components/Shared/Input/Select";

const AddOffer = ({ type,op }: { type: string,op:string }) => {
  const { value, setValue } = useContext(ProductContext);

  const handleClick = () => {
    console.log(value);
    
  }
  return (
    <>

    {value && (
      <span
      className="bg-[#c035a2] text-lg text-white font-medium px-3 py-1 rounded-full fixed top-[20px] right-[67.5%] z-50 "
      onClick={() => setValue()}
      
    >
      X
    </span>
    )}
      

      <div
        className={` bg-[#27283c] w-2/3 z-50 ${
          value ? "right-0" : "right-[-67%]"
        }  flex-col pl-7 pt-7 pb-5 pr-7 lg:pr-14 fixed right-0 top-0  max-h-screen   overflow-y-auto h-screen duration-300`}
      >
        <h2 className=" text-neutral-300 font-medium text-2xl  mb-2">
          {op} {type}
        </h2>

        <div className=" flex flex-col lg:flex-row w-full mb-20">
          <div className=" w-full lg:w-1/3 h-38">
            <p className=" text-neutral-300 font-medium  text-lg  tracking-wide">
              Upload Image
            </p>
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="img"
              className=" w-[124px] h-[124px]"
            />
          </div>

          <div className=" w-full lg:w-2/3  h-38 pt-6 ">
            <div className=" bg-[#43445a] h-full  flex rounded-2xl items-center justify-center cursor-pointer ">
              <div className=" flex-col  relative">
                <input
                  type="file"
                  accept="image/*"
                  name=""
                  id=""
                  className=" absolute  opacity-0 w-full h-full cursor-pointer"
                />
                <img src={cloud} alt="" className="color: transparent;" />
                <p className=" text-neutral-500  font-medium text-lg ">
                  Upload
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex   flex-col   lg:flex-row  w-full mb-36 ">
          <div className="w-full lg:w-1/3">
            <p className=" text-neutral-300 font-medium  text-lg  tracking-wide">
              {op} your {type} information
            </p>
          </div>

          <div className=" w-full lg:w-2/3  pt-5 pl-5  pr-7 pb-7  rounded-2xl bg-[#43445a] max-h-[600px] overflow-y-auto ">
           {/* content will be there */}
          </div>
        </div>

        <div className="flex justify-around  border-gray-500 border-t-4 pt-6  gap-10">
        <button className=" text-white bg-[#43445a] w-1/2 rounded-2xl py-3" onClick={() => setValue()}>Cancel</button>
          <button className=" text-white bg-[#c035a2] w-1/2 rounded-2xl py-3" onClick={handleClick}>{op} {type}</button>
        </div>
      </div>
    </>
  );
};

export default AddOffer;
