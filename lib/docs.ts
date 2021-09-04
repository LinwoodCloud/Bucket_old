import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const docsPath = path.join(process.cwd(), 'docs');
// Get all markdown files in the docs folder and subfolders as json objects
export function getDocs() : Array<DocsElement> {
  const files = fs.readdirSync(docsPath);

  return files.map(file => getDocPage(file)).filter((page) => page) as Array<DocsElement>;
}

export function getDocPage(file: string) : DocsElement | null {
  if(file == '')
    file = 'index.md';
  if (file.endsWith('.md')) {
    const content = fs.readFileSync(path.join(docsPath, file), 'utf8');
    const data = matter(content);
    var page = {} as DocsElement;
    page.title = data.data.title;
    page.content = data.content;
    page.fileName = file.replace('/\.md$/', '');
    page.slug = data.data.slug || page.fileName.replace(/\.[^/.]+$/, "");
    if(page.slug == 'index') {
      page.slug = '';
    }
    return page;
  }
  console.log(`${file} is not a markdown file`);
  return null;
}

export default interface DocsElement {
  fileName: string;
  title: string;
  slug: string;
  content: string;
}