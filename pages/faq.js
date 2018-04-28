import React from 'react'
import {Link} from '../routes'
import Head from '../components/head'
import Nav from '../components/nav'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';

export default class FAQ extends React.Component {
  static async getInitialProps({ req, query }) {
    const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query('');
        console.log(api.query);
      })
      .catch(err => console.log(err));

    return { faq: apiData.results };
  }

  render() {
    return (
      <div>
        FAQ
      </div>
    ); 
  }
}
