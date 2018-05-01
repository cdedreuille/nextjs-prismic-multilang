import React from 'react'
import { Router } from '../routes'
import Head from '../components/head'
import Nav from '../components/nav'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';


export default class Index extends React.Component {
  componentDidMount() {
const href = 'en-gb'
const as = href
  
  }
  static async getInitialProps({ req, query }) {
    let lang = req.locale;
    const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query( Prismic.Predicates.at('document.type', 'homepage'),
          { lang : lang }
        );
      })
      .catch(err => console.log(err));

    return { homepage: apiData.results, lang: req.locale };
  }

  render() {
    return (
      <div>
        <p>This info is pulled form Prismic via api</p>
        <p>{this.props.homepage[0].data.home_page_header[0].text}</p>
      </div>
    ); 
  }
}
