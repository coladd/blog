import React, { useEffect, useState } from "react";
import { FaCheckSquare, FaCopy } from "react-icons/fa";
export default function CodeCopyBtn({ children }) {
  const [language, setLanguage] = useState("");
  const [copyOk, setCopyOk] = React.useState(false);

  const iconColor = "#ddd";

  useEffect(() => {
    console.log(children);
    const match = /language-(\w+)/.exec(children[0].props.className || "");
    setLanguage(match[1]);
  }, []);

  const handleClick = async (e) => {
    // navigator.clipboard.writeText(children[0].props.children[0]);
    try {
      await copyToClipboard(children[0].props.children[0]);
    } catch (error) {
      console.error(error);
    }

    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  async function copyToClipboard(textToCopy) {
    // Navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(textToCopy);
    } else {
      // Use the 'out of viewport hidden text area' trick
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;

      // Move textarea out of the viewport so it's not visible
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";

      document.body.prepend(textArea);
      textArea.select();

      try {
        document.execCommand("copy");
      } catch (error) {
        console.error(error);
      } finally {
        textArea.remove();
      }
    }
  }

  return (
    <div className="flex rounded-t-md bg-gray-700 p-2 text-white">
      <div className="text-xs">{language}</div>
      <div className="ml-auto flex items-center">
        <span onClick={handleClick}>
          {copyOk ? (
            <FaCheckSquare size={15} color={iconColor} />
          ) : (
            <FaCopy size={15} color={iconColor} />
          )}
        </span>
      </div>
    </div>
  );
}
