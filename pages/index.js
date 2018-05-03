import React from 'react'
import {Router}  from '../routes'
import Head from '../components/head'
import Nav from '../components/nav'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';


export default class Index extends React.Component {
  static async getInitialProps({ res, req }) {
    const lang = req.language

    let newLang = 'en-gb'
    switch(req.language) {
      case 'fr':
        newLang = 'fr-fr'
        break;
      case 'en-GB':
        newLang = 'en-gb'
        break;
      case 'en-US':
        newLang = 'en-us'
        break;
      default:
        newLang = 'en-gb'
    }

    const apiData = await Prismic.getApi(apiEndpoint)
    .then(api => {
      return api.query( Prismic.Predicates.at('document.type', 'homepage'),
        { lang: newLang}
      );
    })
    .catch(err => console.log(err));

    return { homepage: apiData.results, newLang };
  }

  render() {
    return (
      <div>
        <p>This info is pulled from Prismic via api</p>
        <p>{this.props.homepage[0].data.home_page_header[0].text}</p>
        <p>req.language: {this.props.newLang}</p>
      </div>
    );
  }
}
