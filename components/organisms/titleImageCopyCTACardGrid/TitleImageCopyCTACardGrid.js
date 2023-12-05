import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./TitleImageCopyCTACardGrid.module.scss";

export default function TitleImageCopyCTACardGrid(contentModule) {
  const { title, copy, cards, desktopColumns } = contentModule.contentModule;

  return (
    <section className={classes.oTitleImageCopyCTACardGrid}>
      <div className={classes.mTitleRegion}>
        <h2 className={`${classes.aTitle} fntH2`}>{title}</h2>
        <div>{documentToReactComponents(copy)}</div>
      </div>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${classes.oCol} col-12 ${desktopColumns}`}
            >
              <div
                className={`${classes.oCard} ${
                  classes[card.fields.customClass]
                }`}
              >
                {
                  (card.fields.customCLass = "imageBackground" && (
                    <figure
                      className={classes.mImage}
                      style={{
                        backgroundImage: `url(https:${card.fields.image?.fields?.file?.url})`,
                      }}
                    ></figure>
                  ))
                }
                <h3 className={`${classes.aTitle} fntH3`}>
                  {card.fields.title}
                </h3>
                <div className={`${classes.mText} fnt14`}>
                  {documentToReactComponents(card.fields.copy)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
