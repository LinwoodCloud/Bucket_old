import { getDocPage, getDocs } from '../../lib/docs';
import markdownToHtml from '../../lib/markdownToHtml';
import DocsPage from './[slug]';

export default DocsPage;
export async function getStaticProps({ params }) {
  var page = getDocPage('');
  page.content = await markdownToHtml(page.content);
  return {
      props: {
          page: page,
          pages: getDocs()
      },
  };
}