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
    const { locale, messages } = req || windows.__NEXT_DATA__.props;

      let lang = req.locale;

      const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query( Prismic.Predicates.at('document.type', 'homepage'),
          { lang : lang }
        );
      })
      .catch(err => console.log(err));

    return { homepage: apiData.results, lang };
  }

  render() {
    return (
      <div>
        <p>This info is pulled from Prismic via api</p>
        <p>{this.props.homepage[0].data.home_page_header[0].text}</p>
        <p>{this.props.lang}</p>
      </div>
    ); 
  }
}
