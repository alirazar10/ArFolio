import { Cloudinary } from "@cloudinary/url-gen";

interface HeroImage {
  imagePublicId: string;
  imagePublicId1: string;
  metaTagImage: string;
}

export const heroImage: HeroImage = {
  imagePublicId: "portfolio/4E6A5969_ghdm1c",
  imagePublicId1: "portfolio/4E6A5969_eep9nh",
  metaTagImage: "portfolio/home_page_e3ajei",
};

// Create a Cloudinary instance and set your cloud name.
export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME || "arfolio",
  },
});
