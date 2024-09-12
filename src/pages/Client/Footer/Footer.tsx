import insta from "../../../assets/img/insta.svg";
import twitter from "../../../assets/img/twitter.svg";
import facebook from "../../../assets/img/fb.svg";
import pizza from "../../../assets/img/pizza.svg";
import potato from "../../../assets/img/potato.svg";

const Footer = () => {
  return (
    <>
      <section className=" flex-col gap-10 justify-center px-3 sm:px-14 mb-96 mt-52 hidden lg:flex"></section>

      <div className="flex-col hidden lg:flex justify-center items-center relative pt-44 pb-6 bg-black w-full">
        {/* float item */}

        <section className="w-3/4 flex justify-around bg-slate-900 absolute -top-[300px] items-center rounded-3xl py-12 px-0 sm:px-9 text-white aos-init aos-animate">
          <img
            className="hidden sm:block w-[300px]"
            src={pizza}
            alt="pizza"
            loading="lazy"
          />
          <div className="flex flex-col items-center gap-5">
            <p className=" font-medium text-xl sm:text-4xl w-9/12 text-center leading-tight">
              {" "}
              Discover Restaurants Near From you
            </p>
            <button className=" bg-orange-500 px-12 py-4 font-medium text-md rounded-full hover:scale-95 transition-all duration-500">
              Get Started
            </button>
          </div>
          <img
            className="hidden sm:block w-[300px]"
            src={potato}
            alt="potato"
            loading="lazy"
          />
        </section>

        {/*  */}
        <section className=" flex items-center justify-around w-4/5">
          <div className="flex flex-col gap-5 sm:gap-2">
            <p className="text-white font-extrabold text-center text-5xl sm:text-start sm:text-3xl">
              Foody<span className="text-orange-500">.</span>
            </p>
            <p className="text-neutral-500 w-full sm:w-2/3 text-center mx-auto sm:text-start sm:mx-0 text-lg">
              Lorem ipsum is placeholder text commonly used in the graphic
            </p>

            <div className="flex justify-center sm:justify-start gap-2">
              <img
                width={"40"}
                height={"40"}
                src={facebook}
                className=" border-white border-2 p-1 rounded-3xl cursor-pointer hover:scale-95 transition-all duration-500"
                alt="facebook"
                loading="lazy"
              />
              <img
                width={"40"}
                height={"40"}
                src={insta}
                className=" border-white border-2 p-1 rounded-3xl cursor-pointer hover:scale-95 transition-all duration-500"
                alt="insta"
                loading="lazy"
              />
              <img
                width={"40"}
                height={"40"}
                src={twitter}
                className=" border-white border-2 p-1 rounded-3xl cursor-pointer hover:scale-95 transition-all duration-500"
                alt="twitter"
                loading="lazy"
              />
            </div>
          </div>

          <div className="hidden sm:flex justify-center gap-28 h-full text-neutral-500">
            <ul className="flex flex-col gap-1 ">
              <li className="text-white font-extrabold text-2xl">Popular</li>
              <li>Programming</li>
              <li>Foods for children</li>
              <li>Price list</li>
              <li>Business</li>
            </ul>

            <ul className="flex flex-col gap-1">
              <li className="text-white font-extrabold text-2xl">Cash</li>
              <li>Delivery</li>
              <li>Payment</li>
              <li>About the store</li>
            </ul>

            <ul className="flex flex-col gap-1">
              <li className="text-white font-extrabold text-2xl">Help</li>
              <li>Contacts</li>
              <li>Purchase returns</li>
              <li>Buyer help</li>
            </ul>
          </div>
        </section>

        <div className="text-white mt-20 text-center w-3/4 sm:w-full">
          All rights reserved © 2003-2024 Foody
        </div>
      </div>
    </>
  );
};

export default Footer;
