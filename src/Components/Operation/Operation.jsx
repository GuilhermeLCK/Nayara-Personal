import React from "react";
import "./Operation.scss";
import Nayara from "../../Img/NayaraShape.jpg";
function Operation() {
  return (
    <div className="container-Operation">
      <div className="content-Operation">
        <div className="content-Operation-Logo">
          <img src={Nayara} alt="Logo" />
        </div>
        <div className="content-Operation-Inf">
          <h1>
            CONSULTORIA <span>PERSONALIZADA</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            ullam tenetur voluptate incidunt laborum adipisci dolores mollitia
            iste cumque ut, repellat sint libero explicabo laboriosam totam
            repellendus in animi et! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur ullam tenetur voluptate incidunt
            laborum adipisci dolores mollitia iste cumque ut, repellat sint
            libero explicabo laboriosam totam repellendus in animi et!
          </p>

          <a href="">QUERO MUDAR DE VIDA!</a>
        </div>
      </div>
    </div>
  );
}

export default Operation;
