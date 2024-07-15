import { MarkdownContent, ThemeColour } from "../shared/types";

export const blogsQuery = `{
  "blogs": *[_type == 'blog'] {
    _id,
    "slug": slug.current,
    date,
    title,
    "logo": logo.asset->url,
    "heroImage": heroImage.asset->url,
    themeColour,
  } | order(date desc)[$start...$end],
   "hasNext":count(*[_type == 'blog']{ _id, date } | order(date desc)[$end...$end+1])
}`
export interface BlogSummary {
  _id: string;
  slug: string;
  title: string;
  logo: string;
  heroImage: string;
  themeColour: ThemeColour;
  startDate: string;
}
export interface BlogsQuery {
  blogs: BlogSummary[];
  hasNext: number;
}

export const blogQuery = `*[_type == 'blog' && slug.current == $slug] {
  _id,
  "slug": slug.current,
  date,
  title,
  "logo": logo.asset->url,
  themeColour,
  "heroImage": heroImage.asset->url,
  content
}[0]`

export interface Blog {
  _id: string,
  slug: string,
  date: string,
  title: string,
  logo: string,
  themeColour: ThemeColour,
  heroImage: string,
  content: MarkdownContent[]
}
