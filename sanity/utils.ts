import createImageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import { PortableImageField } from "./shared/types";

/**
 * https://www.sanity.io/docs/image-url
 */
export const sanityImageUrlBuilder = (source: PortableImageField) => source ? createImageUrlBuilder(client).image(source).url() : '';

export enum RevalidationTag {
  blog = "blog",
  experience = "experience",
  project = "project",
  partnership = "partnership",
  about = "about",
  global = "global",
}