import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./TitleImageCopyCTACardGrid.module.scss";

export default function TitleImageCopyCTACardGrid(contentModule) {
  const { title, shortText } = contentModule.contentModule;
  return (
    <section className={classes.introBlock}>
      <h1 className={`${classes.aTitle} fnt-h1`}>{title}</h1>
      <div>{documentToReactComponents(shortText)}</div>
    </section>
  );
}
