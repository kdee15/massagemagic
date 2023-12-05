import { createClient } from "contentful";
import ComponentSimpleTitle from "../components/organisms/componentSimpleTitle/ComponentSimpleTitle";
import HeroBanner from "../components/organisms/heroBanner/HeroBanner";
import ThreeColumnTitleCopyCta from "../components/organisms/threeColumnTitleCopyCta/ThreeColumnTitleCopyCta";
import ThreeColumnTitleImages from "../components/organisms/threeColumnTitleImages/ThreeColumnTitleImages";
import TitleImageCopyCTACardGrid from "../components/organisms/titleImageCopyCTACardGrid/TitleImageCopyCTACardGrid";
import ImageGalleryGrid from "../components/blocks/imageGalleryGrid/ImageGalleryGrid";
import ThreeColumnTitleImageCopy from "../components/organisms/threeColumnTitleImageCopy/ThreeColumnTitleImageCopy";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps(context) {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "pageHome",
      include: 10,
    })

    .then((entries) => entries.items);

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ Page }) {
  const heroBanner = Page[0].fields.components[0].fields;
  const spaServices = Page[0].fields.components[1].fields;
  const threeImages = Page[0].fields.components[2].fields;
  const skincare = Page[0].fields.components[3].fields;
  const facials = Page[0].fields.components[4].fields;
  const skincareEveryday = Page[0].fields.components[5].fields;
  const manicures = Page[0].fields.components[6].fields;
  const therapists = Page[0].fields.components[7].fields;

  return (
    <div className="anchor" id="top">
      <HeroBanner contentModule={heroBanner} />
      <ThreeColumnTitleCopyCta contentModule={spaServices} />
      <ThreeColumnTitleImages contentModule={threeImages} />
      <TitleImageCopyCTACardGrid contentModule={skincare} />
      <ImageGalleryGrid contentModule={facials} />
      <HeroBanner contentModule={skincareEveryday} />
      <ThreeColumnTitleImageCopy contentModule={manicures} />
      <TitleImageCopyCTACardGrid contentModule={therapists} />
    </div>
  );
}
