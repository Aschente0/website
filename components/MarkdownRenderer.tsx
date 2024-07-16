import { sanityImageUrlBuilder } from "@/sanity/utils";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import stackoverflowDark from "react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-dark";

const components: Partial<PortableTextReactComponents | object> = {
  block: {
    h1: ({ children }: { children?: React.ReactNode[] }) => {
      if (children && typeof children[0] === 'string' && children[0].trim() === '') {
        return <p className="invisible">newline</p>
      }
      return (
        <p className="font-bold text-h1">{children}</p>
      )
    },
    h2: ({ children }: { children?: React.ReactNode[] }) => {
      if (children && typeof children[0] === 'string' && children[0].trim() === '') {
        return <p className="invisible">newline</p>
      }
      return (
        <p className="font-bold text-h2">{children}</p>
      )
    },
    h3: ({ children }: { children?: React.ReactNode[] }) => {
      if (children && typeof children[0] === 'string' && children[0].trim() === '') {
        return <p className="invisible">newline</p>
      }
      return (
        <p className="font-bold text-h3">{children}</p>
      )
    },
    h4: ({ children }: { children?: React.ReactNode[] }) => {
      if (children && typeof children[0] === 'string' && children[0].trim() === '') {
        return <p className="invisible">newline</p>
      }
      return (
        <p className="font-bold text-h4">{children}</p>
      )
    },
    h5: ({ children }: { children?: React.ReactNode[] }) => {
      if (children && typeof children[0] === 'string' && children[0].trim() === '') {
        return <p className="invisible">newline</p>
      }
      return (
        <p className="font-bold text-h5">{children}</p>
      )
    },
    h6: ({ children }: { children?: React.ReactNode[] }) => {
      if (children && typeof children[0] === 'string' && children[0].trim() === '') {
        return <p className="invisible">newline</p>
      }
      return (
        <p className="font-bold text-h6">{children}</p>
      )
    },
    span: ({ children }: { children?: React.ReactNode[] }) => {
      if (children && typeof children[0] === 'string' && children[0].trim() === '') {
        return <p className="invisible">newline</p>
      }
      return (
        <p className="font-bold text-md">{children}</p>
      )
    },
    blockquote: ({ children }: { children?: React.ReactNode }) => <p className="text-md text-blue-500">{children}</p>,
    normal: ({ children }: { children?: React.ReactNode[] }) => {
      if (children && typeof children[0] === 'string' && children[0].trim() === '') {
        return <p className="invisible">newline</p>
      }
      return (
        <p className="text-lg">{children}</p>
      )
    },
  },
  types: {
    halfWidthImage: ({ value }) => {
      return (
       <div className="my-12">
         <div className="relative w-[50%] tablet:w-[30%] mx-auto">
           <Image src={sanityImageUrlBuilder(value.image)} alt={value.imageCaption} width={900} height={900}/>
         </div>
         {value.imageCaption && <p className="mx-8 my-4 text-center">{value.imageCaption}</p>}
       </div>
     )
   },
    fullWidthImage: ({ value }) => {
       return (
        <div className="my-12">
          <div className="relative w-full">
            <Image src={sanityImageUrlBuilder(value.image)} alt={value.imageCaption} width={1600} height={900}/>
          </div>
          {value.imageCaption && <p className="mx-8 my-4">{value.imageCaption}</p>}
        </div>
      )
    },
    code: ({ value }) => {
      const highlightedLines = new Set();
      value?.highlightedLines?.forEach((line: object) => highlightedLines.add(line));

      return (
        <>
          <div className="w-full bg-gray-900 my-8">
            <SyntaxHighlighter
              style={stackoverflowDark}
              showLineNumbers
              wrapLines
              showInlineLineNumbers
              lineNumberStyle={{
                marginRight: '15px',
              }}
              lineProps={(lineNumber: number) => {
                const style: { display: string; width: string; paddingLeft: string; backgroundColor?: string; borderLeft?: string; marginLeft?: string} = {
                  display: 'block',
                  width: '100%',
                  paddingLeft: '10px',
                };
                if (highlightedLines?.has(lineNumber)) {
                  style.backgroundColor = 'rgba(236, 167, 44, 0.07)';
                  style.borderLeft = '6px solid rgba(236, 167, 44, 0.4)';
                  style.marginLeft = '-5px';
                }
                return { style };
              }}
              language={value.language || 'text'}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        </>
      );
    },
    image: ({ value }) => (
      <img src={sanityImageUrlBuilder(value)} alt={value?.imageCaption} />
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className='callToAction'>{value.text}</div>
      ),
  },
  list: {
    bullet: ({ children }: { children:  React.ReactNode }) => <ul className="text-lg list-disc ml-16 my-4">{children}</ul>,
    number: ({ children }: { children:  React.ReactNode }) => <ol className="text-lg list-decimal ml-16 my-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children:  React.ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children:  React.ReactNode }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode, value: { href: string }}) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <a href={value.href} rel={rel} target='_blank' className="text-blue-500 cursor-pointer">
          {children}
        </a>
      );
    },
  },
};

export default function MarkdownRenderer({content}: {content: any}) {
  return (
    <PortableText value={content} components={components} />
  )
}


