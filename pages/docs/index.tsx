import { getDocs } from '../../lib/docs';


export async function getStaticProps() {
    return {
        props: {
            docs: JSON.stringify(getDocs())
        }
    };
}


const DocsPage = ({ docs }: { docs: string }) => {
    return (
        <div className="page">
            <h1>Docs</h1>
            <p>
                {"Entries: " + docs}
            </p>
        </div>
    );
}
export default DocsPage;