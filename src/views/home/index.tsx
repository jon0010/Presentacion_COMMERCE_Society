import React from "react";
import { Link } from "react-router-dom";
import jon from "../../assets/jon.png";
import stackoverNode from "../../assets/stackoverNode.png";
import "./home.css";
import { NodeBanner } from "../../components";

export const Home = () => {
  return (
    <div className="contenedor" style={{ marginBottom: "70px" }}>
      <div className="title1">
        <h1 className="text-white fw-semibold">
          ¿Por qué los aspirantes a desarrollo web deberían aprender Node.js?
        </h1>
      </div>
      <div className="row contenedor2">
        <div className="col-8 mt-3 ms-5">
          <h2 className="fw-semibold">
            Razones por las que eleji y deberías elejir NODE
          </h2>
          <p className="mt-3">
            Bienvenido/as a este espacio donde juntos reflexionaremos sobre
            estrategias para instruirnos de la manera más óptima en NODE y por
            que lo deberiamos tener en cuenta al momento de empezar con el arte
            del desarrollo back end. En primer lugar, para hacer una buena
            elección cabe destacar el &nbsp;
            <Link to="https://survey.stackoverflow.co/2023/#section-most-popular-technologies-web-frameworks-and-technologies">
              Informe Survey stack overflow 2023.
            </Link>{" "}
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;Stack Overflow publica anualmente una
            encuesta conocida como Stack{" "}
            <b className="bold-custom">Overflow Developer Survey</b>. Este
            informe es una recopilación extensa de datos sobre la industria de
            desarrollo de software, basada en las respuestas de miles de
            desarrolladores de todo el mundo. La encuesta aborda una amplia
            variedad de temas, como tecnologías preferidas, salarios, educación,
            preferencias de trabajo remoto, entre otros.
          </p>{" "}
          <div className="mx-auto" style={{ width: "55em" }}>
            {" "}
            <figure>
              <img
                src={stackoverNode}
                className="img-fluid"
                alt="stackoverNode"
              />
              <figcaption className="fw-bold mt-1">
                Fragmento de encuesta Stack overflow mayo 2023
              </figcaption>
            </figure>
          </div>
          <p>
            {" "}
            <br />
            En mayo de 2023, más de 90 000 desarrolladores respondieron a la
            encuesta anual sobre cómo aprenden y suben de nivel, qué
            herramientas utilizan y cuáles desean. Esta fuente de información es
            sumamente valiosa ya que al momento de decidir la forma de construir
            APIs, tenemos que optar por el conjunto de herramientas que en
            primera instancia nos van a acompañar. Quizas herramientas como
            Postman, un confiable editor de codigo y una terminal de comandos
            sean la base para hacer pruebas y ver como cobran vida nuestros
            proyectos, pero el entorno de ejecucion y el framework que vamos a
            usar es lo principal a tener en cuenta. <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;En 2023 continúa la racha de JavaScript como
            el undécimo año consecutivo como{" "}
            <b className="bold-custom">
              el lenguaje de programación más utilizado
            </b>{" "}
            y como ya sabemos, JavaScript es un lenguaje multiparadigma que se
            puede ejecutar del lado del cliente y del servidor, si aprendiste JS
            como lenguaje para hacer front end, a esta altura conoceras que los
            tres pilares del front usan JavaScript por detras (Angular, React,
            Vue) ahora, la principal razon para enfocarse en una
            profesionalizacion con Node y frameworks como Express, Nest, etc. es
            que{" "}
            <b className="bold-custom">
              no tendrias la necesidad de aprender un nuevo lenguaje de
              programacion ya que escribirias JS del lado del cliente y el
              servidor!
            </b>
            ... pero, en que me afectaria aprender otro lenguaje para hacer back
            end??.. la respuesta es "en el tiempo". Tengamos en cuenta que a
            veces el tiempo nos juega en contra ya sea por prisas para conseguir
            ese tan anhelado primer empleo y de esa manera insertarse en el
            mundo IT. Ya sabemos que JavaScript a fecha de diciembre 2023 es el
            lenguaje de programacion mas utilizado podemos hacer una plataforma
            completa desde front end, back end y queries a bases de datos con
            ayuda de ORM basados en JavaScript, gracias a esa{" "}
            <b className="bold-custom">
              flexibilidad, popularidad y versatilidad
            </b>{" "}
            es que en nuestra ruta de aprendizaje se vuelve tan util aprender
            JavaScript, para que luego de las bases y habernos instruido en el
            front end mediante angular, react o vue, podemos pasar de manera muy
            sencilla al lado del servidor gracias a Node.js sin necesidad de
            aprender un nuevo lenguaje de programacion.
          </p>
          <NodeBanner />
          <h2 className="fw-semibold mt-3">Marcos y tecnologías web</h2>
          <p>
            Node.js y React.js son las dos tecnologías web más comunes
            utilizadas por todos los encuestados. Los desarrolladores
            profesionales utilizan ambos de forma bastante equitativa y aquellos
            que aprenden a codificar utilizan Node.js más que React (52 % frente
            a 48 %). jQuery y Express son las siguientes dos tecnologías web
            populares para todos los encuestados, y jQuery es utilizado más por
            los desarrolladores profesionales que por aquellos que aprenden a
            codificar (24% frente a 18%), mientras que Express es utilizado más
            por aquellos que aprenden que por los profesionales (25% frente a
            18%) aunque los numeros estan muy parejos lo que refleja un gran
            repartimiento entre developers profesionales y amateurs que utilizan
            Node.js para desarrollar proyectos.
          </p>
        </div>
        <div className="col-3 mt-3 ms-5 d-flex justify-content-around">
          <div
            className="card border border-dark"
            style={{
              width: "15em",
              height: "18em",
            }}
          >
            <span>
              <img
                src={jon}
                style={{ height: "80px", width: "87px" }}
                className="card-img-top"
                alt="Nombre del autor"
              />
              <span className="ms-3 fs-3 fw-semibold">Redactor</span>
            </span>

            <div className="card-body">
              <h5 className="card-title fw-semibold">Jon Nahuel Pereyra</h5>
              <h6 className="card-title fw-semibold headerCard">
                Desarrollador full stack /<br /> diseñador UX/UI
              </h6>
              <p className="card-text">
                Articulo sobre beneficios de aprender Node.js
              </p>
              <Link to="url-del-link" className="btn btn-dark">
                Descargar en PDF
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
