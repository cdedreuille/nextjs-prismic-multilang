import React from 'react'
import {Link} from '../routes'
import Head from '../components/head'
import Nav from '../components/nav'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';

export default class Index extends React.Component {
  static async getInitialProps({ req, query }) {
    const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query( Prismic.Predicates.at('document.type', 'homepage'));
      })
      .catch(err => console.log(err));

    return { homepage: apiData.results };
  }

  render() {
    return (
      <div>
        <p>This info is pulled form Prismic via api</p>
        <p>{this.props.homepage[0].data.home_page_header[0].text}</p>
        <Link route='blog' params={{slug: 'first-article'}}>
          <p>Link to blog</p>
        </Link>
        <Link route='faq'>
          <p>Link to FAQ</p>
        </Link>
      </div>
    ); 
  }
}
