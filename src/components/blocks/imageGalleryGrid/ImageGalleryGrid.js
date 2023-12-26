import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ImageGalleryGrid.module.scss";

export default function ImageGalleryGrid(contentModule) {
  const { title, copy, images } = contentModule.contentModule;

  return (
    <section className={classes.oImageGalleryGrid}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oCol} col-12 col-md-5`}>
            <div className={`${classes.mBody}`}>
              <h2 className={`${classes.aTitle} fntH2`}>{title}</h2>
              <div className={`${classes.mText} fnt14`}>
                {documentToReactComponents(copy)}
              </div>
            </div>
          </div>
          <div className={`${classes.oCol} col-12 col-md-7`}>
            <div className={`${classes.oImageGrid}`}>
              {images.map((image, index) => (
                <figure
                  key={index}
                  className={classes.mImage}
                  style={{
                    backgroundImage: `url(https:${image.fields.file?.url})`,
                  }}
                ></figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
