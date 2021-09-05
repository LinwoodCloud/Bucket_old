import {remark} from 'remark'
import remarkHtml from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  return remark()
    .use(remarkHtml)
    .process(markdown)
    .then((contents) => contents.toString());
}