import { api } from "../../util/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [dishes, setDishes] = useState([]);

  //Fazer requisição GET na API
  useEffect(() => {
    async function fetchDishes() {
      //Tentar fazer a requisição GET na API
      try {
        const response = await api.get("/dishes"); //AQUI ESTA "api.get" por causa da instancia (VER --> /util/api)
        setDishes(response.data.data); //Estou pegando os dados da API e colocando no array dishes
      } catch (err) {
        // ^^^^^ --> se acontecer erro
        console.log(err); // --> da um console do erro
      }
    }
    fetchDishes();
  }, []);

  console.log(dishes);
  return (
    <>
      <h1>Restaurante</h1>
      <Link to={"/create"}>
        <button>Criar</button>
      </Link>

      {dishes.map((dish) => {
        return (
          <div key={dish.id}>
            <strong>{dish.attributes.name}</strong>
            <img src={dish.attributes.image} />
          </div>
        );
      })}
    </>
  );
}
