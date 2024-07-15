import { BlogSummary } from "./blogs";
import { ProjectSummary } from "./projects";

export const notFoundPageQuery = `{
  "project": *[_type == 'project'] {
    _id,
    "slug": slug.current,
    title,
    subtitle,
    "fullLogo": fullLogo.asset->url,
    "heroImage": heroImage.asset->url,
    themeColour,
    textColour,
    startDate,
  } | order(startDate desc)[0],
  "blog": *[_type == 'blog'] {
    _id,
    "slug": slug.current,
    date,
    title,
    "logo": logo.asset->url,
    "heroImage": heroImage.asset->url,
    themeColour,
  } | order(date desc)[0],
}`

export interface NotFoundPageQuery {
  project: ProjectSummary;
  blog: BlogSummary;
}