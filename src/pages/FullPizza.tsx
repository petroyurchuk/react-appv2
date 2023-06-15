import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
        navigate("/");
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₴</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};
export default FullPizza;
