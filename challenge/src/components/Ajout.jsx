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
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form">
        <label htmlFor="name">Nom de l'Argonaute</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nom du membre"
          value={nameToAdd}
          onChange={(e) => setNameToAdd(e.target.value)}
        />
        <button onClick={add}>Envoyer</button>
      </form>

      <h2>Membres de l'équipage</h2>
      <section className="member-list">
        {membres.map((membre, i) => (
          <p key={membre.id}>
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
