import React from 'react'
import {Router}  from '../routes'
import Head from '../components/head'
import Nav from '../components/nav'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';


export default class Index extends React.Component {
  static async getInitialProps({ res, req }) {
    const userLang = req ? req.headers["accept-language"] : navigator.acceptLanguage
    if (userLang[0] === 'en_US') {
      const newLang = 'en-GB'
    } else {
      const newLang = userLang[0]
    }
      const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query( Prismic.Predicates.at('document.type', 'homepage'),
          { lang: 'en-GB'}
        );
      })
      .catch(err => console.log(err));

    return { homepage: apiData.results, userLang };
  }

  render() {
    return (
      <div>
        <p>This info is pulled from Prismic via api</p>
        <p>{this.props.homepage[0].data.home_page_header[0].text}</p>
        <p>Accept Headers: {this.props.userLang}</p>
      </div>
    ); 
  }
}
