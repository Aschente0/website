import { ThemeColour } from "../shared/types";

export const experienceAndPartnershipsQuery = `{
  "experience": *[_type == 'experience'] {
    _id,
    name,
    "condensedLogo": condensedLogo.asset->url,
    title,
    startDate,
    projects[]-> {
      _id,
      slug,
      title,
      "condensedLogo": condensedLogo.asset->url,
      startDate
    }
  } | order(startDate desc),
  "partnerships": *[_type == 'partnership'] {
    _id,
    name,
    "fullLogo": fullLogo.asset->url,
    description
  }
}

`
export interface ProjectBreakdown {
  _id: string;
  slug: string;
  title: string;
  condensedLogo: string;
  startDate: string;
}
export interface Experience {
  _id: string;
  name: string;
  title: string;
  condensedLogo: string;
  startDate: string;
  projects: ProjectBreakdown[];
}
export interface Partnership {
  _id: string,
  name: string,
  fullLogo: string,
  description: string
}
export interface ExperienceAndPartnershipsQuery {
  experience: Experience[];
  partnerships: Partnership[];
}
