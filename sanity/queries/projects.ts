import { MarkdownContent, ThemeColour } from "../shared/types";

export const projectsQuery = `{
  "projects": *[_type == 'project'] {
    _id,
    "slug": slug.current,
    title,
    subtitle,
    "fullLogo": fullLogo.asset->url,
    "heroImage": heroImage.asset->url,
    themeColour,
    textColour,
    startDate,
  } | order(startDate desc)[$start...$end],
   "hasNext":count(*[_type == 'project']{ _id, startDate } | order(startDate desc)[$end...$end+1])
}`
export interface ProjectSummary {
  _id: string;
  slug: string;
  title: string;
  subtitle: string;
  fullLogo: string;
  heroImage: string;
  themeColour: ThemeColour;
  textColour: ThemeColour;
  startDate: string;
}
export interface ProjectsQuery {
  projects: ProjectSummary[];
  hasNext: number;
}

export const projectQuery = `*[_type == 'project' && slug.current == $slug] {
  _id,
  "slug": slug.current,
  startDate,
  title,
  subtitle,
  "fullLogo": fullLogo.asset->url,
  themeColour,
  textColour,
  "heroImage": heroImage.asset->url,
  content
}[0]`

export interface Project {
  _id: string,
  slug: string,
  startDate: string,
  title: string,
  subtitle: string,
  fullLogo: string,
  themeColour: ThemeColour,
  textColour: ThemeColour,
  heroImage: string,
  content: MarkdownContent[]
}
