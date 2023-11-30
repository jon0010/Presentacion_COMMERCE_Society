import "./eval.css";

export const Evaluacion = () => {
  return (
    <div className="row p-0 m-3">
      <div className="title1">
        <h1 className="text-white fw-semibold">
          Enfoque de evaluación y oportunidades de mejora
        </h1>
      </div>
      <div className="col-md-8 col-sm-12 p-4 title2 d-flex flex-column align-items-center">
        <div className="ms-1">
          <h2 className="fw-semibold">
            ¿Cómo medir las habilidades de un estudiante de desarrollo backend?
          </h2>
          <p className="mt-3">
            Lo que nos enseñan las diferentes casas de estudio, ya sea
            universidad, institutos, bootcamps, semilleros, academias
            E-learning, etc., es que al momento de probar las habilidades que
            adquirió nuestro alumno es mediante un proyecto que se asemeje lo
            más posible al trabajo que se realiza en un{" "}
            <b className="bold-custom">entorno de trabajo real</b>. Pero la
            pregunta es: ¿cómo asegurarnos de que comprendieron todo lo
            enseñado?
            <br /> Teniendo en cuenta que{" "}
            <b className="bold-custom">
              detrás de cada estudiante hay una personalidad distinta
            </b>
            , el proceso de aprendizaje varía y ahí es donde comienzan las
            preguntas: ¿el alumno es introvertido? ¿teme hablar en público?
            ¿cuál será su facilidad para integrarse a un equipo? Una buena forma
            de asegurarnos es dividir los conocimientos impartidos en categorías
            y luego de esto comenzar una etapa de planificación donde se evalúe
            si cada campo tiene la cobertura necesaria, por ejemplo:
            <ol className="circle-list">
              <li>Conceptos clave</li>
              <li>Resolución de problemas</li>
              <li>Participación</li>
              <li>Inteligencia emocional</li>
              <li>Comunicación alumno/profesor</li>
            </ol>
          </p>
          <h4 className="fw-semibold">Conceptos clave</h4>
          <p className="mt-3">
            La comprensión de los conceptos clave del contenido suele ser la
            parte más sencilla debido a que es lo que se demuestra realizando un
            proyecto integrando todos los conceptos y profundizando en estos
            llevándolos a la práctica. Entre ellos tenemos: <br />
            <ol>
              <li>Node.js: Entorno de ejecución del lado del servidor.</li>
              <li>Express: Framework web para Node.js.</li>
              <li>Middleware: Funciones intermedias en Express.</li>
              <li>
                Middlewares comunes: body-parser, cookie-parser, morgan, cors.
              </li>
              <li>API RESTful: Estilo arquitectónico REST.</li>
              <li>WebSocket: Comunicación bidireccional en tiempo real.</li>
              <li>Routing (Rutas): Manejo de URL en Express.</li>
              <li>HTTP Methods (Métodos HTTP): GET, POST, PUT, DELETE, etc.</li>
            </ol>
            Es importante resaltar que con solo entregar el proyecto no nos
            aseguramos de que el alumno haya comprendido, sino que&nbsp;
            <b className="bold-custom">
              lo sustancial es analizar cómo defiende el proyecto
            </b>{" "}
            dando una explicación de lo que hizo, desde la planificación hasta
            el resultado final.
          </p>
          <h4 className="fw-semibold">Resolución de problemas</h4>
          <p className="mt-3">
            Una manera muy útil que en mis primeros pasos en backend me costó
            muchísimo pero ahora veo la importancia para tener en cuenta es
            algún agregado de dificultad sobre la tarea principal, por ejemplo:
            El trabajo final es realizar una API que realice funciones CRUD con
            una temática. Es un reto interesante, pero sería bueno ver cómo el
            alumno reacciona, por ejemplo, a la{" "}
            <b className="bold-custom">integración de APIs de terceros</b>. Esto
            ayudará a que, además de comprender el flujo de una request desde
            que llega al servidor hasta que se resuelve en el controlador, a
            manejar endpoints que creó otro equipo, leer documentación,{" "}
            <b className="bold-custom">
              adaptarse a código elaborado por otros desarrolladores
            </b>
            , investigar, manejar lógica para limpiar las propiedades del objeto
            que recibo y quedarme con las que necesito devolver al cliente, etc.
          </p>
          <h4 className="fw-semibold">Participación</h4>
          <p className="mt-3">
            Hay algunas estrategias que pueden ayudar a la participación de los
            alumnos, como tener a una persona en la sección del chat Q&A para
            que cuando alguien tenga consultas las evacúe por ese espacio para
            evitar interrupciones,{" "}
            <b className="bold-custom">
              facilitar la exposición al profesor y al mismo tiempo, el alumno
              se sienta escuchado
            </b>{" "}
            y su duda sea evacuada sobre la marcha de la clase. Dividir la clase
            en dos secciones:&nbsp;
            <b className="bold-custom">Lecture</b>
            (una presentación con la teoría y conceptos mostrados en gráficas
            que luego se pueden enviar como notas y recursos de la clase) y{" "}
            <b className="bold-custom">Práctica</b> (codeo en vivo llevando a la
            práctica lo expuesto en la lecture con ejemplos sencillos).
          </p>
          <h4 className="fw-semibold">Inteligencia emocional</h4>
          <p className="mt-3">
            Sabemos que las soft skills son muy importantes para que un
            aspirante a desarrollador integre un equipo, se adapte al entorno
            laboral, practique empatía, habilidades sociales, tolerancia a la
            frustración o liderazgo emocional, entre otras. Un buen medio para
            lograr desarrollar esas soft skills es realizar un{" "}
            <b className="bold-custom">proyecto grupal</b>. Asignar un proyecto
            que requiera colaboración y comunicación, promueva la diversidad en
            los grupos para que los estudiantes aprendan a trabajar con
            diferentes estilos y perspectivas es fundamental para que logren
            descubrir ese lado de las organizaciones,&nbsp;
            <b className="bold-custom">
              despertar la pasión por llegar a un objetivo en común y generar
              comunidad
            </b>{" "}
            es un gran potenciador de las habilidades blandas.
          </p>
          <h4 className="fw-semibold">Comunicación alumno/profesor</h4>
          <p className="mt-3">
            Uno de los aspectos vitales en una capacitación es la{" "}
            <b className="bold-custom">
              comunicación efectiva entre el alumno y el profesor
            </b>
            , pero a veces ciertos alumnos ven al profesor en un rol de
            superioridad, lo que provoca que se inhiba y no se comunique
            abiertamente sobre problemas de comprensión de los temas brindados u
            otra dificultad que haya enfrentado. Una buena táctica para
            solucionar ese problema es asignar cohortes a alumnos avanzados y
            programar reuniones de 30 minutos a 1 hora donde el objetivo es
            el&nbsp;
            <b className="bold-custom">acompañamiento</b>. Es así que el alumno
            avanzado les preguntará a la cohorte cómo estuvo la clase del día,
            si entendieron los temas dictados, si se sintieron cómodos con la
            clase, la plataforma, etc. Por ejemplo, el día de la fecha
            estudiaron qué es un handler y cómo modularizar los
            middlewares/handlers/controllers. Si más de 10 alumnos dicen "yo no
            entendí", entonces lo tomará como{" "}
            <b className="bold-custom">red flag</b> y seguido a ello, informará
            al profesor que una parte del curso no entendió cierto tema para que
            la siguiente clase repasen los temas que no se llegaron a comprender
            del todo. Es una buena forma de llegar a los alumnos y que estos
            expongan más abiertamente cómo abordan los desafíos propuestos en la
            cursada.
          </p>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
};
