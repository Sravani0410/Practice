// import "./App.css";
import CountUp from "react-countup";
function Counter() {
  return (
    <>
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
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button onClick={start}>Start</button>
          </div>
        )}
      </CountUp>
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
        {({ countUpRef, start }) => (
          <div onScroll={start}>
            <span ref={countUpRef} />
            <button onClick={start}>Start</button>
          </div>
        )}
      </CountUp>
      {/* <AnimationComponent /> */}
    </>
  );
}

export default Counter;
