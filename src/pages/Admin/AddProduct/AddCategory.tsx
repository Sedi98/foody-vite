import { useContext, useState } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import cloud from "../../../assets/icons/admin/cloud.svg";
import Input from "../../../components/Shared/Input/Input";
// import Select from "../../../components/Shared/Input/Select";
import {  showErrorToast } from "../../../services/Utils/ToastUtils";

import { postUpload, postCategory, updateCategory } from "../../../services/Api/Api";

const AddCategory = ({data}:any) => {
  const { value, setValue,setActiveData } = useContext(ProductContext);



  type Option = {
    name: string;
    slug: string;
    img_url: string;
  };

  console.log(data);
  

  const [inputValue, setInputValue] = useState<Option>({
    name: data?.name ? data.name : "",
    slug: data?.slug ? data.slug : "",
    img_url: data?.img_url ? data.img_url : "",
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
    if (inputValue.name === "" || inputValue.slug === "") {
      showErrorToast("All fields are required");
      return;
      
    }

    const response =  data ? await updateCategory(data.id,inputValue) : await postCategory(inputValue);
    console.log(response);


    setValue();
    setActiveData(null)
  };


  const handleCancel = () => {
    setValue();
    setInputValue({
      name:"",
      slug:"",
      img_url:"",
    });
    setActiveData(null)

  };

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
          {data ? "Edit" : "Add"} Category
        </h2>

        <div className=" flex flex-col lg:flex-row w-full mb-20">
          <div className=" w-full lg:w-1/3 h-38">
            <p className=" text-neutral-300 font-medium  text-lg  tracking-wide">
              Upload Image
            </p>
            <img
              src={inputValue.img_url ? inputValue.img_url : "https://via.placeholder.com/124x124"}
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
                  
                  className=" absolute  opacity-0 w-full h-full cursor-pointer"
                  onChange={(e) => {
                    console.log(e.target.files);
                    handleImage(e.target.files![0]);
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
              {data ? "Edit" : "Add"} your category information
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
            <Input
              placeholder=""
              label={`Slug`}
              type="text"
              variation="adminAdd"
              changeFunc={handleChange}
              inputVal={inputValue.slug}
            />
          </div>
        </div>

        <div className="flex justify-around  border-gray-500 border-t-4 pt-6  gap-10">
          <button
            className=" text-white bg-[#43445a] w-1/2 rounded-2xl py-3"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
          <button
            className=" text-white bg-[#c035a2] w-1/2 rounded-2xl py-3"
            onClick={handleSubmit}
          >
            {data ? "Edit" : "Add"} Category
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
