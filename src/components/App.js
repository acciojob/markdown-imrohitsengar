import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/App.css";

const defaultMarkdown = `# Welcome to Markdown Previewer!

## This is a sub-heading

### Here are some things you can do:

You can write **bold** text and *italic* text.

You can create [links](https://www.example.com).

> This is a blockquote.

Here's some inline \`code\`.

\`\`\`
// This is a code block
function greet(name) {
  return "Hello, " + name;
}
\`\`\`

- Item 1
- Item 2
- Item 3

1. First
2. Second
3. Third
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    const saved = localStorage.getItem("markdown-content");
    if (saved) {
      setMarkdown(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("markdown-content", markdown);
  }, [markdown]);

  return (
    <div className="app App">
      <h1 className="app-title">Markdown Previewer</h1>
      <div className="container editor-container">
        <div className="panel editor-panel">
          <h2 className="panel-header">Editor</h2>
          <textarea
            id="editor"
            className="textarea editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
          />
        </div>
        <div className="panel preview-panel preview-container">
          <h2 className="panel-header">Preview</h2>
          <div id="preview" className="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
