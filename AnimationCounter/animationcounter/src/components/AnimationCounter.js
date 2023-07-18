import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import { Waypoint } from "react-waypoint";
import "../App.css";
const AnimationComponent = () => {
  const countersRef = useRef(null);

  useEffect(() => {
    const countersElement = countersRef.current;

    if (countersElement) {
      const $counters = countersElement.querySelectorAll(".js-count-up");
      const options = {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
      };

      $counters.forEach((item) => {
        const value = item.dataset.value;
        const counter = new CountUp(item, value, options);
        counter.start();
      });
    }
  }, []);

  const handleWaypointEnter = () => {
    const countersElement = countersRef.current;

    if (countersElement) {
      const $counters = countersElement.querySelectorAll(".js-count-up");
      const options = {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
      };

      $counters.forEach((item) => {
        const value = item.dataset.value;
        const counter = new CountUp(item, value, options);
        counter.start();
      });
    }
  };

  return (
    <div>
      <div className="bg is-size-1">Scroll down</div>
      <nav className="level" ref={countersRef}>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Tweets</p>
            <p className="title js-count-up" data-value="3456"></p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Following</p>
            <p className="title js-count-up" data-value="123"></p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Followers</p>
            <p className="title js-count-up" data-value="460000"></p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Likes</p>
            <p className="title js-count-up" data-value="789"></p>
          </div>
        </div>
      </nav>
      <div className="bg is-size-1">Scroll up</div>
      <Waypoint onEnter={handleWaypointEnter} bottomOffset="50%" />
    </div>
  );
};

export default AnimationComponent;
