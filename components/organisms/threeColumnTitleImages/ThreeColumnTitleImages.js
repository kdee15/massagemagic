import Image from "next/image";
import classes from "./ThreeColumnTitleImages.module.scss";

export default function ThreeColumnTitleImages(contentModule) {
  console.log("ThreeColumnTitleImages", contentModule);
  const { title, images } = contentModule.contentModule;
  return (
    <section className={classes.oThreeColumnTitleImages}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          {images.map(
            (image, index) => (
              console.log("image", image),
              (
                <div key={index} className={`${classes.oCol} col-12 col-md-4`}>
                  <figure
                    className={classes.mImage}
                    style={{
                      backgroundImage: `url(https:${image?.fields?.file?.url})`,
                    }}
                  ></figure>
                </div>
              )
            )
          )}
          <div className={`${classes.oCol} col-12 col-md-4`}>
            <div className={`${classes.oBox}`}>
              <h2 className={`${classes.aTitle} fntH2`}>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
