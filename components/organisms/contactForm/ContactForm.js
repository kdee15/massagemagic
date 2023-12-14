import classes from "./ContactForm.module.scss";

export default function ContactForm(contentModule) {
  const { image } = contentModule.contentModule;
  return (
    <section className={classes.oContactForm}>
      <h1 className={`${classes.aTitle} fnt-h1`}></h1>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oColImage} col-12 col-md-6`}>
            <figure
              className={classes.mImage}
              style={{
                backgroundImage: `url(${image?.fields?.file?.url})`,
              }}
            ></figure>
          </div>
          <div className={`${classes.oColForm} col-12 col-md-6`}>
            <div className={classes.mContactForm}>
              <iframe src="https://cdn.forms-content-1.sg-form.com/e99c2f81-9a8a-11ee-8fd0-1e9da3da27b9" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
