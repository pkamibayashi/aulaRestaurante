import { useState } from "react";
import { useNavigate } from "react-router-dom"; // PERMITE NAVEGAR ENTRE ROTAS DA SEÇÃO SEM O USUARIO PRECISAR CLICAR NUM LINK
import { api } from "../../util/api";

export function CreateFood() {
  const [dish, setDish] = useState({
    name: "",
    description: "",
    image: "",
    price: 0,
  });

  const navigate = useNavigate(); //useNavigate precisa SEMPRE estar numa variavel para poder usar

  function handleChange(e) {
    setDish({ ...dish, [e.target.name]: e.target.value });
  }

  // ENVIAR FORM PARA A API
  async function handleSubmit(e) {
    // ^^^^ --> aqui esta async pois api é baseado no axios, e é uma promise.

    try {
      e.preventDefault();
      const infosForAPI = { data: { ...dish } };
      await api.post("/dishes", infosForAPI); // PARAMETRO--> ("path da api", O QUE SERA ENVIADO AO BODY DA REQUISIÇÃO). TUDO o que vai para a API, é colocado no body da requisição do axios
      navigate("/"); // depois que o post terminar, vou navegar para a home
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Criar um novo prato</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome do prato:</label>
        <input
          id="name"
          placeholder="Ex: Panquecas"
          value={dish.name}
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="description">Descrição:</label>
        <input
          id="description"
          placeholder="Diga algo criativo"
          value={dish.description}
          name="description"
          onChange={handleChange}
        />
        <label htmlFor="image">Link da imagem:</label>
        <input
          id="image"
          placeholder="Ex: https://imagem.link.jpg"
          value={dish.image}
          name="image"
          onChange={handleChange}
        />
        <label htmlFor="price">Valor:</label>
        <input
          type="number"
          id="prince"
          placeholder="0"
          value={dish.price}
          name="price"
          onChange={handleChange}
        />

        <button>Enviar!</button>
      </form>
    </>
  );
}
