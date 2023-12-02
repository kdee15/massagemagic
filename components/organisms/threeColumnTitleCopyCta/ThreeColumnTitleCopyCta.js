import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ThreeColumnTitleCopyCta.module.scss";

export default function ThreeColumnTitleCopyCta(contentModule) {
  const { title, shortText } = contentModule.contentModule;
  return (
    <section className={classes.introBlock}>
      <h1 className={`${classes.aTitle} fnt-h1`}>{title}</h1>
      <div>{documentToReactComponents(shortText)}</div>
    </section>
  );
}
