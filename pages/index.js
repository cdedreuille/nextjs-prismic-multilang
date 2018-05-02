import React from 'react'
import Router  from 'next/router'
import Head from '../components/head'
import Nav from '../components/nav'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';


export default class Index extends React.Component {
  static async getInitialProps(context) {
    const { req } = context;

    const pathname = req.url;
    const language = req.locale;

    if (pathname === '/') {
      context.res.writeHead(301, {Location: req.locale})
      context.res.end()
    } 


    if (language === 'en_GB') {
      const langNormal = 'en-gb';
    } else if (language === 'en_US') {
      const langNormal = 'en-us';
    }  else {
      const langNormal = 'en-us';
    }
      const langNormal = 'en-gb';

    console.log('langNormal ' + langNormal)
      const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query( Prismic.Predicates.at('document.type', 'homepage'),
          { lang: langNormal }
        );
      })
      .catch(err => console.log(err));

    return { homepage: apiData.results, langNormal, language, pathname };
  }

  render() {
    return (
      <div>
        <p>This info is pulled from Prismic via api</p>
        <p>{this.props.homepage[0].data.home_page_header[0].text}</p>
        <p>Normalized language: {this.props.langNormal}</p>
        <p>req.locale: {this.props.language}</p>
      </div>
    ); 
  }
}
