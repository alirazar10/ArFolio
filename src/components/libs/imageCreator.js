import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../../configs/clConfig";

export const generateImageUrl = (imagePublicId, width = 0) =>
  cld.image(imagePublicId).quality("auto").format("auto").resize(fill());
