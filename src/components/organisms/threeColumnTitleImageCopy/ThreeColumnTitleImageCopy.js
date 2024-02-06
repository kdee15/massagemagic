import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ThreeColumnTitleImageCopy.module.scss";

export default function ThreeColumnTitleImageCopy(contentModule) {
  const { title, copy, image } = contentModule.contentModule;
  return (
    <section className={classes.oThreeColumnTitleImageCopy}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oCol} col-12 col-md-4`}>
            <div className={`${classes.oBox}`}>
              <h2 className={`${classes.aTitle} fntH2`}>{title}</h2>
            </div>
          </div>
          <div className={`${classes.oCol} col-12 col-md-4`}>
            <div className={`${classes.mText} fnt16`}>
              {documentToReactComponents(copy)}
            </div>
          </div>
          <div className={`${classes.oCol} col-12 col-md-4`}>
            <figure
              className={classes.mImage}
              style={{
                backgroundImage: `url(https:${image?.fields?.file?.url})`,
              }}
            ></figure>
          </div>
        </div>
      </div>
    </section>
  );
}
