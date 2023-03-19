import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../../configs/clConfig";
import { Format, Quality } from "@cloudinary/url-gen/qualifiers";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

export const generateImageUrl = (imagePublicId, width = 0) =>
  cld
    .image(imagePublicId)
    .resize(fill())
    .delivery(format("auto"))
    .delivery(quality("auto"));
