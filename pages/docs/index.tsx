import { getDocPage, getDocs } from '../../lib/docs';
import DocsPage from './[slug]';

export default DocsPage;
export async function getStaticProps({ params }) {
  return {
      props: {
          page: getDocPage(''),
          pages: getDocs()
      },
  };
}