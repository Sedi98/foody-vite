import {  useContext, useState } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import cloud from "../../../assets/icons/admin/cloud.svg";
import Input from "../../../components/Shared/Input/Input";

import {  showErrorToast } from "../../../services/Utils/ToastUtils";

import { postUpload, postOffer, updateOffer } from "../../../services/Api/Api";


type Option = {
  name: string;
  description: string;
  img_url: string;
};


const AddOffer = ({data}: any) => {
  const { value, setValue,setActiveData } = useContext(ProductContext);
 
  const [inputValue, setInputValue] = useState<Option>({
    name:  data? data.name : "",
    description: data? data.description : "",
    img_url: data? data.img_url : "",
  });

  const handleImage = async (file: File) => {
    let data = new FormData();
    data.append("file", file);
    let resp = await postUpload(data);
    console.log(resp);
    setInputValue({
      ...inputValue, img_url: resp.img_url});
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | any
  ) => {
    const { name, value } = e.target;

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));

    console.log(inputValue);
  };

  const handleSubmit = async () => {
    if (!inputValue.img_url) {
      showErrorToast("Image is required");
      return;
    }
    if (inputValue.name === "" || inputValue.description === "") {
      showErrorToast("All fields are required");
      return;
      
    }
    
    console.log(data);

    const response =data? await updateOffer(data.id, inputValue) : await postOffer(data);

    console.log(response);
    setActiveData(null);
    setValue();
  };

  const handleCancel = () => {
    setActiveData(null);
    setValue();
    setInputValue({
      name: "",
      description: "",
      img_url: "",
    })
  }


  return (
    <>

{value && (
        <span
          className="bg-[#c035a2] text-lg text-white font-medium px-3 py-1 rounded-full fixed top-[20px] right-[20px] md:right-[67.5%] z-50 "
          onClick={() => setValue()}
        >
          X
        </span>
      )}

      <div
        className={` bg-[#27283c] w-full md:w-2/3 z-40 ${
          value ? "right-0" : "right-[-67%]"
        }  flex-col pl-7 pt-7 pb-5 pr-7 lg:pr-14 fixed right-0 top-0  max-h-screen   overflow-y-auto h-screen duration-300`}
      >
        <h2 className=" text-neutral-300 font-medium text-2xl  mb-2">
          {data? "Edit" : "Add"} Offer
        </h2>

        <div className=" flex flex-col lg:flex-row w-full mb-20">
          <div className=" w-full lg:w-1/3 h-38">
            <p className=" text-neutral-300 font-medium  text-lg  tracking-wide">
              Upload Image
            </p>
            <img
              src={inputValue.img_url?  inputValue.img_url : "https://via.placeholder.com/124x124"}
              alt="img"
              className=" w-[124px] h-[124px] object-cover"
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
                  onChange={(e?: any) => {
                    handleImage( e.target.files![0]);
                  }}
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
              {data? "Edit" : "Add"} your offer
            </p>
          </div>

          <div className=" w-full lg:w-2/3  pt-5 pl-5  pr-7 pb-7  rounded-2xl bg-[#43445a] max-h-[600px] overflow-y-auto ">
           {/* content will be there */}
           <Input
              placeholder=""
              label={`Name`}
              type="text"
              variation="adminAdd"
              changeFunc={handleChange}
              inputVal={inputValue.name}
            />

            <Input placeholder="" label={`Description`} changeFunc={handleChange} inputVal={inputValue.description} variation="adminArea"/>
          </div>
        </div>

        <div className="flex justify-around  border-gray-500 border-t-4 pt-6  gap-10">
        <button className=" text-white bg-[#43445a] w-1/2 rounded-2xl py-3" onClick={handleCancel}>Cancel</button>
          <button className=" text-white bg-[#c035a2] w-1/2 rounded-2xl py-3" onClick={handleSubmit}>Add Offer</button>
        </div>
      </div>
    </>
  );
};

export default AddOffer;
