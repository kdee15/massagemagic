import Head from "next/head";

export default function Layout({ children }) {
  const title =
    "Mobile Massage Therapy in Cape Town - Massages, Manicures & Pedicures";
  const description =
    "Indulge in the luxury of relaxation with our mobile massage therapy services. Our expert therapists bring the spa experience to your doorstep, offering rejuvenating massages in the comfort of your own space.";
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <main className={`main`}>{children}</main>
    </>
  );
}
