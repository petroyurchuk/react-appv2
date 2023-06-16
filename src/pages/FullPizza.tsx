import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DESCRIPTION, HOME_LOCATION } from "../constants/homeLocation";
type PizzaType = {
  imageUrl: string;
  title: string;
  price: number;
};

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<PizzaType>();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://64627c4c4dca1a6613479a2a.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error when u getting pizzas");
        navigate(`${HOME_LOCATION}`);
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return <p>Loading...</p>;
  }
  return (
    <div
      className="container"
      style={{ display: "flex", columnGap: "30px", justifyContent: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          className="pizza-block__image"
          src={pizza.imageUrl}
          alt={pizza.title}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          rowGap: "35px",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3>Назва: {pizza.title}</h3>
          <h3 style={{ marginTop: "15px" }}>Ціна: {pizza.price}₴</h3>
        </div>
        <p className="description">{DESCRIPTION}</p>
        <Link to={HOME_LOCATION} className="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </div>
  );
};
export default FullPizza;
