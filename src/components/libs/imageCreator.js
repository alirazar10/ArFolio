import { fill, limitFill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../../configs/clConfig";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

export const generateImageUrl = (imagePublicId, width = 0) =>
  cld
    .image(imagePublicId)
    .resize(fill().width("0.5").gravity(autoGravity()))
    .delivery(format("auto"))
    .delivery(quality("auto"));
