import React from 'react'
import Link from 'next/link'
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
        <h1>{this.props.homepage[0].data.home_page_header[0].text}</h1>
      </div>
    ); 
  }
}
