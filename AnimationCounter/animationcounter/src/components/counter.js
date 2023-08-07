import { useState, useEffect } from "react";
import CountUp from "react-countup";

function Counter() {
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    const onFocus = () => {
      setHasFocus(true);
    };

    const onBlur = () => {
      setHasFocus(false);
    };

    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onBlur);

    return () => {
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", onBlur);
    };
  }, []);

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
        // isInView={hasFocus}
        onFocus={hasFocus}
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
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
        isInView={hasFocus}
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </>
  );
}

export default Counter;
