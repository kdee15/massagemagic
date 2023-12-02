import Link from "next/dist/client/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ThreeColumnTitleCopyCta.module.scss";

export default function ThreeColumnTitleCopyCta(contentModule) {
  console.log("ThreeColumnTitleCopyCta", contentModule);
  const { title, copy, copy2, moreLink } = contentModule.contentModule;
  return (
    <section className={classes.oThreeColumnTitleCopyCta}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oCol} col-12 col-md-4`}>
            <div className={`${classes.oBox}`}>
              <h2 className={`${classes.aTitle} fntH2`}>{title}</h2>
            </div>
          </div>
          <div className={`${classes.oCol} col-12 col-md-4`}>
            <div className={`${classes.mText}`}>
              {documentToReactComponents(copy2)}
              {moreLink?.fields?.label && (
                <Link href={moreLink.fields.url}>
                  <a className={`${classes.aLink} aBtn`}>
                    {moreLink.fields.label}
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className={`${classes.oCol} col-12 col-md-4`}>
            <div className={`${classes.mText}`}>
              {documentToReactComponents(copy)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
