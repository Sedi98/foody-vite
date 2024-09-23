import {  useContext,useState,useEffect } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import cloud from "../../../assets/icons/admin/cloud.svg";
import Input from "../../../components/Shared/Input/Input";
import Select from "../../../components/Shared/Input/Select";
import { postUpload,getRestuarants,postProduct } from "../../../services/Api/Api";
import { showErrorToast } from "../../../services/Utils/ToastUtils";

type dataProps = {
  name: string,
  description: string,
  img_url: string,
  rest_id: string,
  price: number
}

const AddProduct = ({ type,op }: { type: string,op:string }) => {
  const { value, setValue } = useContext(ProductContext);
  const [inputValue, setInputValue] = useState<dataProps>({
    name: "",
    description: "",
    img_url: "",
    rest_id: "",
    price: 0,
  })
  const [img, setImg] = useState<string>("");
  const [restaurant, setRestaurant] = useState<any[]>([]);


  useEffect(() => {
    getRestuarants().then((res) => {
      setRestaurant(res.result.data);
    });
  }, []);


  const handleImage = async (file: File) => {
    let data = new FormData();
    data.append("file", file);
    let resp = await postUpload(data);
    setImg(resp.img_url);
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      img_url: resp.img_url,
    }));
  };

  const handleClick = async() => {
    

    if (!img) {
      showErrorToast("Image is required");
      return;
    }
    if (
      inputValue.name === "" ||
      inputValue.description === "" ||
      inputValue.rest_id === "" ||
      inputValue.price === 0
    ) {
      showErrorToast("All fields are required");
      return;
    }

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      price: Number(inputValue.price),
    }));

    console.log(inputValue);
    let resp = await postProduct(inputValue);
    console.log(resp);
    
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
              src={img ? img : "https://via.placeholder.com/124x124"}
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
              {op} your {type} information
            </p>
          </div>

          <div className=" w-full lg:w-2/3  pt-5 pl-5  pr-7 pb-7  rounded-2xl bg-[#43445a] max-h-[600px] overflow-y-auto ">
            <Input
              placeholder=""
              label={`${op} Name`}
              type="text"
              variation="adminAdd"
              changeFunc={(e:any) => {setInputValue({...inputValue,name:e.target.value})}}
              inputVal={inputValue.name}
            />
            <Input
              placeholder=""
              label="Description"
              type="number"
              variation="adminArea"
              changeFunc={(e:any) => {setInputValue({...inputValue,description:e.target.value})}}
              inputVal={inputValue.description}
            />
            <Input
              placeholder=""
              label="Price"
              type="text"
              variation="adminAdd"
              changeFunc={(e:any) => {setInputValue({...inputValue,price: e.target.value})}}
              inputVal={String(inputValue.price)}
            />
            <Select
              label="Restaurant"
              type="text"
              variation="adminAdd"
              inputVal={inputValue.rest_id}
              changeFunc={(e:any) => {setInputValue({...inputValue,rest_id:e.target.value})}}
              options={restaurant}
            />
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

export default AddProduct;
