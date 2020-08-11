import React, { useRef } from "react";

export default function ProgressBar({ progress }) {
  const color = useRef("#7A11FF");
  if (progress === 1) {
    color.current = "green-400";
  }
  console.log(progress);

  return (
    <div className="progress-bar">
      <div className="bar-outline">
        <div
          className="bar"
          style={{
            width: `${progress * 100}%`,
            // background: `${color.current}`,
          }}
        />
      </div>
      {/* //! Percentage here */}
      {/* <span className={`m-auto text-${color.current}`}>{`${
				progress * 100
			}%`}</span> */}
    </div>
  );
}

// const [scrollPosition, setScrollPosition] = useState(0);

// useEffect(() => {
//   document.addEventListener("scroll", () => {
//     requestAnimationFrame(() => {
//       const scrollTop = window.pageYOffset; // how much the user has scrolled by
//       const winHeight = window.innerHeight;
//       const docHeight = Math.max(
//         document.body.scrollHeight,
//         document.documentElement.scrollHeight,
//         document.body.offsetHeight,
//         document.documentElement.offsetHeight,
//         document.body.clientHeight,
//         document.documentElement.clientHeight
//       );

//       const totalDocScrollLength = docHeight - winHeight;
//       const currentScroll = Math.floor(
//         (scrollTop / totalDocScrollLength) * 100
//       );

//       setScrollPosition(currentScroll);
//     });
//   });
//   return () => {
//     console.log("return");
//   };
// }, []);
