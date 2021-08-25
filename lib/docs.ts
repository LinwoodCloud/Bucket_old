import fs from 'fs';
import path from 'path';

// Get all markdown files in the docs folder and subfolders as json objects
export function getDocs() {
  const docs = [];
  const docsPath = path.join(process.cwd(), 'docs');
  const files = fs.readdirSync(docsPath);

  files.forEach(file => {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(docsPath, file), 'utf8');
      const data = {
        fileName: file.replace('/\.md$/', ''),
        content: content
      };
      docs.push(data);
    }
  });
  return docs;
}
