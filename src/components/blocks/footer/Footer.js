import classes from "./Footer.module.scss";

export default function Footer(contentModule) {
  const { title } = contentModule.contentModule;
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section className={classes.oFooter}>
      <h3 className={`${classes.aTitle} fntH3`}>{title}</h3>
      <p className={`${classes.aText} fnt14`}>copyright {year}</p>
    </section>
  );
}
