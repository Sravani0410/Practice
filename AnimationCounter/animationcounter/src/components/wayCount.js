// import "./App.css";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

function Way() {
  const handleWaypointEnter = (countUp) => {
    if (countUp && !countUp.isStarted()) {
      countUp.start();
    }
  };

  return (
    <>
      <Waypoint onEnter={handleWaypointEnter} bottomOffset="50%">
        <CountUp
          start={-875.039}
          end={160527.012}
          duration={2.75}
          separator=" "
          decimals={3}
          decimal=","
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </Waypoint>

      <Waypoint onEnter={handleWaypointEnter} bottomOffset="50%">
        <CountUp
          start={0}
          end={160527.012}
          duration={1}
          separator=" "
          decimals={3}
          decimal=","
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </Waypoint>
    </>
  );
}

export default Way;
