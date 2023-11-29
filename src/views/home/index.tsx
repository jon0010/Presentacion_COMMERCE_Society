import React from "react";
import { Link } from "react-router-dom";
import jon from "../../assets/jon.png";
import stackoverNode from "../../assets/stackoverNode.png";
import "./home.css";
import { NodeBanner } from "../../components";
import nodeFrameworks from "../../assets/NodeFrameworks.jpg";

export const Home = () => {
  return (
    <div className="row contenedor" style={{ marginBottom: "70px" }}>
      <div className="title1">
        <h1 className="text-white fw-semibold">
          ¿Por qué los aspirantes a desarrollo web deberían aprender Node.js?
        </h1>
      </div>
      <div className="col-md-7 col-sm-12 text-start m-0">
        <div className="mt-3 ms-3">
          <h2 className="fw-semibold">
            Razones por las que elegí y deberías elegir NODE
          </h2>
          <p className="mt-3">
            Bienvenido/as a este espacio donde juntos reflexionaremos sobre
            estrategias para instruirnos de la manera más óptima en Node.js y
            por qué deberíamos tenerlo en cuenta al momento de empezar con el
            arte del desarrollo backend. En primer lugar, para hacer una buena
            elección, cabe destacar el &nbsp;
            <Link to="https://survey.stackoverflow.co/2023/#section-most-popular-technologies-web-frameworks-and-technologies">
              Informe Survey stack overflow 2023.
            </Link>{" "}
            <br />
            Stack Overflow publica anualmente una encuesta conocida como Stack{" "}
            <b className="bold-custom">Overflow Developer Survey</b>. Este
            informe es una recopilación extensa de datos sobre la industria de
            desarrollo de software, basada en las respuestas de miles de
            desarrolladores de todo el mundo. La encuesta aborda una amplia
            variedad de temas, como tecnologías preferidas, salarios, educación,
            preferencias de trabajo remoto, entre otros. Aca también.
          </p>{" "}
          <div className="mx-auto">
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
            En mayo de 2023, más de 90,000 desarrolladores respondieron a la
            encuesta anual sobre cómo aprenden y suben de nivel, qué
            herramientas utilizan y cuáles desean. Esta fuente de información es
            sumamente valiosa, ya que al decidir la forma de construir APIs,
            debemos optar por el conjunto de herramientas que, en primera
            instancia, nos van a acompañar. Quizás herramientas como Postman, un
            confiable editor de código y una terminal de comandos sean la base
            para hacer pruebas y ver cómo cobran vida nuestros proyectos, pero
            el entorno de ejecución y el framework que vamos a usar son lo
            principal a tener en cuenta <br />
            En 2023 continúa la racha de JavaScript como el undécimo año
            consecutivo como{" "}
            <b className="bold-custom">
              el lenguaje de programación más utilizado
            </b>{" "}
            Y como ya sabemos, JavaScript es un lenguaje multiparadigma que se
            puede ejecutar del lado del cliente y del servidor. Si aprendiste JS
            como lenguaje para hacer frontend, a esta altura conocerás que los
            tres pilares del frontend usan JavaScript por detrás (Angular,
            React, Vue). Ahora, la principal razón para enfocarse en una
            profesionalización con Node y frameworks como Express, Nest, etc.,
            es que{" "}
            <b className="bold-custom">
              No tendrías la necesidad de aprender un nuevo lenguaje de
              programación, ya que escribirías JavaScript tanto del lado del
              cliente como del servidor.
            </b>
            ... pero, ¿en qué me afectaría aprender otro lenguaje para hacer
            backend? La respuesta es "en el tiempo". Tengamos en cuenta que a
            veces el tiempo para aprender un nuevo lenguaje de programación para
            desarrollar backend nos podría jugar en contra, ya sea por prisas
            para conseguir ese tan anhelado primer empleo y de esa manera
            insertarse en el mundo IT. Ya sabemos que JavaScript, a fecha de
            diciembre de 2023, es el lenguaje de programación más utilizado.
            Podemos hacer una plataforma completa desde frontend, backend y
            queries a bases de datos con ayuda de ORM basados en JavaScript,
            gracias a esa.{" "}
            <b className="bold-custom">
              flexibilidad, popularidad y versatilidad
            </b>{" "}
            es que en nuestra ruta de aprendizaje se vuelve tan útil aprender
            JavaScript. Luego de establecer las bases y haberse instruido en el
            frontend mediante Angular, React o Vue, podemos pasar de manera muy
            sencilla al lado del servidor gracias a Node.js, sin necesidad de
            aprender un nuevo lenguaje de programación.
          </p>
          <NodeBanner />
          <h2 className="fw-semibold mt-3">Marcos y tecnologías web</h2>
          <p>
            Node.js y React.js son las dos tecnologías web más comunes
            utilizadas por todos los encuestados. Los desarrolladores
            profesionales utilizan ambos de forma bastante equitativa, y
            aquellos que aprenden a codificar utilizan Node.js más que React
            (52% frente a 48%). jQuery y Express son las siguientes dos
            tecnologías web populares para todos los encuestados, y jQuery es
            utilizado más por los desarrolladores profesionales que por aquellos
            que aprenden a codificar (24% frente a 18%), mientras que Express es
            utilizado más por aquellos que aprenden que por los profesionales
            (25% frente a 18%). Aunque los números están muy parejos, lo que
            refleja un gran repartimiento entre developers profesionales y
            amateurs que utilizan Node.js para desarrollar proyectos.
          </p>
          <img className="mb-5" src="" alt="" />
        </div>
      </div>
      <div className="col-md-3 col-sm-12 d-flex flex-column align-items-center m-0">
        <img
          className="img-fluid"
          style={{ border: "solid 3px" }}
          src={nodeFrameworks}
          alt="nodeFrameworks"
        />
        <div
          className="card border border-dark mt-4 mb-5"
          style={{
            width: "15em",
            height: "21em",
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
  );
};
