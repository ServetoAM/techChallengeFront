import React, { useState, useEffect } from "react";
import axios from "axios";

function Ajout() {
  const [membres, setMembres] = useState([]);

  const [nameToAdd, setNameToAdd] = useState("");

  useEffect(() => {
    refresh();
  }, []);

  const add = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/equipages", { Nom: nameToAdd })
      .then(refresh)
      .then(() => {
        setNameToAdd("");
        console.log("Ajout réussi!");
      });
  };

  const supp = (id) => {
    axios
      .delete(`http://localhost:1337/equipages/${id}`)
      .then(refresh)
      .then(() => {
        console.log("Suppression réussie!");
      });
  };

  const refresh = () => {
    axios
      .get("http://localhost:1337/equipages")
      .then((res) => {
        setMembres(res.data);
        // console.log(res.data);
        setTimeout(() => {
          console.log(membres);
        }, 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div class=" flex flex-col justify-center m-2">
        <h2 class="flex  justify-center m-9 p-4 text-4xl font-medium border-2 border-red-200 rounded-lg">
          Ajouter un(e) Argonaute
        </h2>
        <form className="new-member-form" class=" flex flex-row justify-center">
          <label htmlFor="name" class="flex justify-center m-2 p-2">
            Nom de l'Argonaute :
          </label>
          <input
            class="flex justify-center w-50 m-2 p-2"
            id="name"
            name="name"
            type="text"
            placeholder="Nom du membre"
            value={nameToAdd}
            onChange={(e) => setNameToAdd(e.target.value)}
          />
          <button
            onClick={add}
            class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 border border-yellow-200 rounded"
          >
            Envoyer
          </button>
        </form>
      </div>
      <div class="flex m-9 justify-center">
        <h2 class="flex  justify-center m-9 text-xl font-medium">
          Membres de l'équipage
        </h2>
      </div>
      <section class="flex grid gap-x-2 gap-y-4 grid-cols-3 grid-flow-row">
        {membres.map((membre, i) => (
          <p class="flex justify-center m-2" key={membre.id}>
            {membre.Nom}
            <span
              onClick={() => {
                supp(membre.id);
              }}
            >
              &nbsp;X
            </span>
          </p>
        ))}
      </section>
    </div>
  );
}

export default Ajout;
