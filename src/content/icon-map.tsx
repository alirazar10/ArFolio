import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoPersonCircleSharp,
  IoBriefcaseSharp,
  IoCodeSlashSharp,
  IoMailSharp,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import ResumeIcon from "@/assets/icons/resume-icon";

export interface IconComponentProps {
  className?: string;
  size?: number;
  color?: string;
}

export type IconComponent = (props: IconComponentProps) => React.ReactNode;

export const ICONS: Record<string, IconComponent> = {
  facebook: IoLogoFacebook,
  github: IoLogoGithub,
  linkedin: IoLogoLinkedin,
  twitter: FaXTwitter,
  instagram: IoLogoInstagram,
  fiverr: SiFiverr,
  person: IoPersonCircleSharp,
  briefcase: IoBriefcaseSharp,
  code: IoCodeSlashSharp,
  mail: IoMailSharp,
  resume: ResumeIcon,
};
