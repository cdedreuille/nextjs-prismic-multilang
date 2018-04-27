import React from 'react'
import {Link} from '../../routes'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';

export default class Index extends React.Component {
  static async getInitialProps({ req, query }) {
    const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query( Prismic.Predicates.at('document.type', 'blog_post'));
      })
      .catch(err => console.log(err));

    return { blog: apiData.results };
  }

  render() {
    return (
      <div>
        <Link route='/'>
          <p>Link to home</p>
        </Link>
        <Link route='faq'>
          <p>Link to FAQ</p>
        </Link>
      </div>
    ); 
  }
}
