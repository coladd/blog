import React from "react";
import ReactMarkdown from "react-markdown";
// import markdown from "../README.md";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeCopyBtn from "../codeCopyBtn";

export default function MarkdownRender({ markdown }) {
  const Pre = ({ children }) => (
    <pre className="mb-3">
      <CodeCopyBtn>{children}</CodeCopyBtn>
      {children}
    </pre>
  );

  return (
    <>
      <ReactMarkdown
        className="prose"
        components={{
          pre: Pre,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            console.log(match[1]);
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={atelierCaveLight}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </>
  );
}
