import React from "react";
import MarkdownRender from "../components/MarkdownRender";
export default function Post() {
  const markdown = `
# Markdown 标题

这是一段 **加粗** 和 *斜体* 的文本。

\`\`\`js
console.log("Hello, World!");
\`\`\`


\`\`\`java
console.log("Hello, World!");
\`\`\`

`;
  return (
    <div className="container mx-auto px-4 py-8">
      <MarkdownRender markdown={markdown} />
    </div>
  );
}
