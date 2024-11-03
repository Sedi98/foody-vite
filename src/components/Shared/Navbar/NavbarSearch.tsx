import React from "react";
import Input from "../Input/Input";
import { useTranslation } from "react-i18next";
import NavbarSearchItem from "./NavbarSearchItem";
import { getRestuarants } from "../../../services/Api/Api";
import { useNavigate } from "react-router-dom";

type DataTypes = {
  name: string;
  img_url: string;
  id: string;
  delivery_price: number;
  delivery_min: number;
  cuisine: string;
  created: number;
  category_id: string;
  address: string;
};

const NavbarSearch: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [value, setValue] = React.useState("");
  const [restaurants, setRestaurants] = React.useState<DataTypes[]>([]);
  const [filtered, setFiltered] = React.useState<DataTypes[]>([]);

  const handleInput = (event: any) => {
    console.log(event.target.value);
    setValue(event.target.value);

    if (event.target.value === "") {
      setFiltered([]);
    } else {
      setFiltered(filteredResults);
    }
  };

  const filteredResults = React.useMemo(
    () =>
      restaurants.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      ),
    [restaurants, value]
  );

  const fetchRestaurants = React.useCallback(async () => {
    setFiltered([]);
    if (restaurants.length === 0) {
      const resp = await getRestuarants();
      setRestaurants(resp.result.data);
    }
  }, [restaurants.length]);
  return (
    <>
      <div className="relative w-1/4" onClick={() => fetchRestaurants()}>
        <Input
          variation="navbar"
          type="text"
          placeholder={t("navInputPlaceholder")}
          inputVal={value}
          changeFunc={handleInput}
        />
        <div
          className={`${
            filtered.length > 0 ? "block" : "hidden"
          } bg-white rounded-md p-3 absolute top-[60px] left-[-120px] w-[450px] z-50`}
        >
          {filtered.map((item) => (
            <NavbarSearchItem
              key={item.id}
              img={item.img_url}
              name={item.name}
              text={item.address}
              click={() => navigate(`/restaurant-detail/${item.id}`)}
            />
          ))}

          <p
            onClick={() => navigate("/restaurants-client")}
            className="text-center p-2 text-[2b303] hover:bg-gray-200 cursor-pointer"
          >
            More &#8594;
          </p>
        </div>
      </div>
    </>
  );
};

export default React.memo(NavbarSearch);
