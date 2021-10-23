import React from 'react'

function Ajout() {
    return (
        <div>
            <h2>Ajouter un(e) Argonaute</h2>
                <form class="new-member-form">
                <label for="name">Nom de l'Argonaute</label>
                <input id="name" name="name" type="text" placeholder="Nom du membre" />
                <button type="submit">Envoyer</button>
                </form>

                <h2>Membres de l'équipage</h2>
                <section class="member-list"></section>
        </div>
    )
}

export default Ajout
