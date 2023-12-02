import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { isMobile } from "react-device-detect";
import classes from "./HeroBanner.module.scss";

export default function HeroBanner(contentModule) {
  const [mobileView, setMobileView] = useState();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  const { title, image, imageForMobile, boxPosition, logo, tagLine } =
    contentModule.contentModule;
  console.log("HeroBanner", contentModule);
  return (
    <section
      className={`${classes.oHeroBanner} ${
        boxPosition ? classes[boxPosition] : null
      }`}
    >
      {mobileView ? (
        <div
          className={classes.mBackground}
          style={{
            backgroundImage: `url(${imageForMobile?.fields?.file?.url})`,
          }}
        ></div>
      ) : (
        <div
          className={classes.mBackground}
          style={{
            backgroundImage: `url(${image?.fields?.file?.url})`,
          }}
        ></div>
      )}
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row no-gutters`}>
          <div className={`${classes.oBox}`}>
            <h1 className={`${classes.aTitle} fntH1`}>{title}</h1>
            <p className={`${classes.aText} fnt30f`}>{tagLine}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
