import { MarkdownContent } from "../shared/types";
import { BlogSummary } from "./blogs";
import { ProjectSummary } from "./projects";

export const homePageQuery = `{
  "featuredProject": *[_type == 'project'] {
    title,
    "slug": slug.current,
    subtitle,
    "fullLogo": fullLogo.asset->url,
    "heroImage": heroImage.asset->url,
    themeColour,
    textColour,
    startDate
  } | order(startDate desc)[0],
  "aboutSection": *[_type == 'about'] {
    name,
    title,
    "image": image.asset->url,
    content
  }[0],
  "workHistorySection": *[_type == 'experience'] {
    name,
    "fullLogo": fullLogo.asset->url,
    startDate
  } | order(startDate desc),
  "partnershipSection": *[_type == 'partnership'] {
    name,
    "fullLogo": fullLogo.asset->url,
    _updatedAt
  } | order(_updatedAt desc),
  "featuredBlog": *[_type == 'blog'] {
    _id,
    "slug": slug.current,
    date,
    title,
    "logo": logo.asset->url,
    "heroImage": heroImage.asset->url,
    themeColour,
  } | order(date desc)[0],
}`
export type HomePageQueryType = {
  featuredProject: ProjectSummary;
  aboutSection: {
    name: string;
    title: string;
    image: string;
    content: MarkdownContent[];
  };
  workHistorySection: {
    name: string;
    fullLogo: string;
  }[];
  partnershipSection: {
    name: string;
    fullLogo: string;
  }[],
  featuredBlog: BlogSummary;
}