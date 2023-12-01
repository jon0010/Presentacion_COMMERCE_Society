import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import "./landing.css";

interface IOptions {}

export const LandingPage = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  const particlesOptions: IOptions = {
    background: {
      color: {
        value: "#40005D",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const getFontSizeAndMargin = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 576) {
      return { fontSize: "2.2em", marginTop: "4em" };
    } else {
      return { fontSize: "3.5em", marginTop: "5em" };
    }
  };

  return (
    <div
      className="particles-container"
      style={{ width: "100%", overflowX: "hidden" }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
      <div className="content-container1">
        <div className="row p-0 m-0">
          <div
            className="col-md-7 col-sm-12 fw-semibold text-white ms-3 text-sm"
            style={{ ...getFontSizeAndMargin() }}
          >
            <p>
              Desafío Commerce Society
              <br />
              NODE JS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
