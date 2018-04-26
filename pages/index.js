import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import Prismic from 'prismic-javascript'


const Index = (props) => (
  <div>
    <Head title="Home" />
    <Nav />

    <div>HomePage</div>
  </div>
)

Index.getInitialProps = async function() {
  const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';

  let res = [];
  Prismic.api(apiEndpoint).then(api => {
    api.query(Prismic.Predicates.at('document.type', 'homepage')).then(response => {
      if (response) {
        res = response.results[0];
      }
    });
  });

  return res;

}

export default Index
