import anime from "animejs";

import { useCallback, useEffect } from "react";

const AnimatedHeroSvgSideTukTuk = () => {
  const animateIn = useCallback(() => {
    anime({
      targets: ".animated-hero-tuktuk .tuktuk-container",
      transformOrigin: ["50%", "50%"], // Set the rotation center to the center of the object
      translateX: [200, 0],
      scale: [0.75, 1.0],
      easing: "easeInOutQuad",
    });
  }, []);

  const animate = useCallback(() => {
    animateIn();

    anime({
      targets: ".animated-hero-tuktuk .tuktuk",
      // rotate: '1turn',
      transformOrigin: ["50%", "50%"], // Set the rotation center to the center of the object
      keyframes: [
        { translateX: 0, translateY: 0 },
        { translateX: 0, translateY: 0 },
        { translateX: 0, translateY: 0, rotateZ: -0 },
        { translateX: 0, translateY: 5, rotateZ: -0.1 },
        { translateX: 0, translateY: 8, rotateZ: -0.25 },
        { translateX: 0, translateY: 10, rotateZ: -0.5 },
        { translateX: 0, translateY: 8, rotateZ: -0.25 },
        { translateX: 0, translateY: 5, rotateZ: -0 },
        { translateX: 0, translateY: 0 },
        { translateX: 0, translateY: 0 },
      ],
      loop: true,
      easing: "linear",
      duration: 5000,
    });

    anime({
      targets: ".animated-hero-tuktuk .tuktuk .light",
      // rotate: '1turn',
      transformOrigin: ["50%", "50%"], // Set the rotation center to the center of the object
      keyframes: [
        { scale: 1 },
        { scale: 1.0125 },
        { scale: 1.1 },
        { scale: 1.0125 },
        { scale: 1 },
      ],
      loop: true,
      easing: "linear",
      duration: 5000,
    });

    anime({
      targets: ".animated-hero-tuktuk .tuktuk .sm-wheel",
      // rotate: '1turn',
      transformOrigin: ["50%", "50%"], // Set the rotation center to the center of the object
      translateY: [0, -10, 0],
      rotateZ: [0, -2, 0],
      loop: true,
      easing: "linear",
      duration: 7000,
    });
  }, [animateIn]);

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <svg
      className="animated-hero-tuktuk"
      viewBox="0 0 257 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M257 0.130859H0V520H257V0.130859Z" fill="#5F01D1" />
      <g className="tuktuk-container">
        <g className="tuktuk" clipPath="url(#clip0_574_46369)">
          <path
            d="M256.915 53.9468H86.3916V96.781H256.915V53.9468Z"
            fill="#FF9934"
          />
          <path
            d="M256.914 0.0795898H182.043V42.9139H256.914V0.0795898Z"
            fill="#FFC801"
          />
          <path
            d="M234.799 42.9136H204.142V54.1857H234.799V42.9136Z"
            fill="#FF9934"
          />
          <path
            d="M256.914 273.72H76.8398L118.195 96.7812H256.914V273.72Z"
            fill="#FFC801"
          />
          <path
            d="M256.914 250.817H99.4688L135.621 111.042H256.914V250.817Z"
            fill="#075A82"
          />
          <path
            d="M256.914 273.72H76.8398L118.195 450.676H256.914V273.72Z"
            fill="#00B4D5"
          />
          <path
            className="sm-wheel"
            d="M155.305 467.208H113.505V508.916H155.305V467.208Z"
            fill="#C93AC9"
          />
          <path
            d="M256.914 450.676H76.8398V467.209H256.914V450.676Z"
            fill="#FFC801"
          />
          <path
            className="light"
            d="M134.405 345.674C151.356 345.674 165.097 331.964 165.097 315.051C165.097 298.139 151.356 284.429 134.405 284.429C117.455 284.429 103.714 298.139 103.714 315.051C103.714 331.964 117.455 345.674 134.405 345.674Z"
            fill="#5F01D1"
          />
          <path
            d="M256.915 365.776H216.381V520H256.915V365.776Z"
            fill="#C93AC9"
          />
          <path
            d="M243.032 328.578H256.915V402.974H168.486C168.486 361.916 201.899 328.578 243.05 328.578H243.032Z"
            fill="#075A82"
          />
          <path
            d="M226.223 315.051C226.223 298.143 239.968 284.428 256.914 284.428V264.326H206.127V365.759H256.914V345.657C239.968 345.657 226.223 331.942 226.223 315.034V315.051Z"
            fill="#FFC801"
          />
          <path
            d="M226.223 315.051C226.223 331.96 239.968 345.674 256.915 345.674V284.429C239.968 284.429 226.223 298.143 226.223 315.051Z"
            fill="#5F01D1"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_574_46369">
          <rect width="257" height="520" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AnimatedHeroSvgSideTukTuk;
