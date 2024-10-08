import React from "react";
import uploadImg from "../../../assets/icons/profile/upload.svg";
import Input from "../../../components/Shared/Input/Input";
import Button from "../../../components/Shared/Button/Button";
import { postUpload, updateUser } from "../../../services/Api/Api";
import { UserContext } from "../../../Context/UserContext";
import { showErrorToast } from "../../../services/Utils/ToastUtils";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";

type UserProps = {
  phone: string;
  email: string;
  img_url: string;
  username: string;
  address: string;
  fullname: string;
  id: string;
};

type objProps = {
  email?: string;
  username?: string;
  fullname?: string;
  address?: string;
  phone?: string;
  img_url?: string;
};
const User = () => {
  const { user } = React.useContext(UserContext);

  const [inputValue, setInputValue] = React.useState<UserProps>({
    phone: user?.phone ? user.phone : "",
    email: user?.email ? user.email : "",
    img_url: user?.img_url ? user.img_url : "",
    username: user?.username ? user.username : "",
    address: user?.address ? user.address : "",
    fullname: user?.fullname ? user.fullname : "",
    id: user?.id ? user.id : "",
  });
  const handleImage = async (file: File) => {
    let data = new FormData();
    data.append("file", file);
    let resp = await postUpload(data);

    setInputValue({
      ...inputValue,
      img_url: resp.img_url,
    });
  };

  const handleSubmit = async () => {
    if (
      inputValue.email === "" ||
      inputValue.username === "" ||
      inputValue.fullname === ""
    ) {
      showErrorToast("All fields are required");
      return;
    }

    if (!/^\+994\d{9}$/.test(inputValue.phone)) {
      showErrorToast(
        "Phone number is not valid. It must start with +994 and be 13 characters long."
      );
      return false;
    }

    let dataObj: objProps = {};

    dataObj.fullname = inputValue.fullname;
    dataObj.username = inputValue.username;
    dataObj.email = inputValue.email;

    if (inputValue.email !== user?.email) {
      showErrorToast("Email cannot be changed");
      return;
    }

    if (inputValue.address !== user?.address && inputValue.address !== "") {
      dataObj.address = inputValue.address;
    }
    if (inputValue.phone !== user?.phone && inputValue.phone !== "") {
      dataObj.phone = inputValue.phone;
    }
    if (inputValue.img_url !== user?.img_url && inputValue.img_url !== "") {
      dataObj.img_url = inputValue.img_url;
    }

    await updateUser(dataObj);
  };

  return (

    <>

    <HelmetLib title="Profile" />
    
    <div className="w-full bg-[#f3f4f6] rounded-md p-6">
      <h2 className=" font-semibold text-3xl text-neutral-600  tracking-wide">Profile</h2>
      <div className=" w-full flex  justify-center ">
        <span className="relative">
          <img
            src={inputValue.img_url ? inputValue.img_url : uploadImg}
            alt=""
            className="cursor-pointer min-w-[146px] max-w-[146px] h-[146px] rounded-full object-cover"
            loading="lazy"
          />
          <input
            type="file"
            accept="image/*"
            className=" absolute  opacity-0 w-full h-full cursor-pointer top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
            onChange={(e) => {
              handleImage(e.target.files![0]);
            }}
          />
        </span>
      </div>

      <div className=" sm:m-10 grid grid-cols-1 lg:grid-cols-2 gap-7  ">
        <Input
          type="text"
          label="Phone"
          variation="profile"
          placeholder="+994"
          changeFunc={(e: any) =>
            setInputValue({ ...inputValue, phone: e?.target.value })
          }
          inputVal={inputValue.phone}
        />
        <Input
          type="email"
          label="Email"
          variation="profile"
          placeholder=""
          changeFunc={(e: any) =>
            setInputValue({ ...inputValue, email: e?.target.value })
          }
          inputVal={inputValue.email}
        />
        <Input
          type="text"
          label="Username"
          variation="profile"
          placeholder=""
          changeFunc={(e: any) =>
            setInputValue({ ...inputValue, username: e?.target.value })
          }
          inputVal={inputValue.username}
        />
        <Input
          type="text"
          label="Address"
          variation="profile"
          placeholder=""
          changeFunc={(e: any) =>
            setInputValue({ ...inputValue, address: e?.target.value })
          }
          inputVal={inputValue.address}
        />
        <Input
          type="text"
          label="Fullname"
          variation="profile"
          placeholder=""
          changeFunc={(e: any) =>
            setInputValue({ ...inputValue, fullname: e?.target.value })
          }
          inputVal={inputValue.fullname}
        />
        <Button click={handleSubmit} text="Save" variation="profile" />
      </div>
    </div>
    
    </>
    
  );
};

export default User;
