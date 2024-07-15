import { PortableTextBlock } from "@portabletext/types";

export interface ThemeColour {
  alpha: number;
  _type: string;
  hex: string;
  hsv: {
    v: number;
    _type: string;
    h: number;
    a: number;
    s: number;
  };
  rgb: {
    r: number;
    g: number;
    b: number;
    a: number;
    _type: string;
  },
  hsl: {
    h: number;
    s: number;
    l: number;
    a: number;
    _type: string;
  }
}

export interface PortableImageField {
  asset: {
    _ref: string;
    _type: string;
  }
  _type: string;
}

export interface PortableImageBlock {
  _type: string;
  _key: string;
  imageCaption: string;
  image: PortableImageField
}

export type MarkdownContent = PortableTextBlock | PortableImageBlock