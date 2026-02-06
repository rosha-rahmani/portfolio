import {
  Code2,
  FileCode,
  FileType,
  Zap,
  Palette,
  Server,
  GitBranch,
  Database,
  Globe,
  Smartphone,
  Figma,
  Rocket,
  Layout,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Star,
} from "lucide-react";

export const ICONS = {
  Code2,
  FileCode,
  FileType,
  Zap,
  Palette,
  Server,
  GitBranch,
  Database,
  Globe,
  Smartphone,
  Figma,
  Rocket,
  Layout,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Star,
};

export const getIcon = (name) => {
  if (!name) return null;
  return ICONS[name] || null;
};
