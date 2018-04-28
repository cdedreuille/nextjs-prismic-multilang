import React from 'react'
import {Link} from '../routes'
import Head from '../components/head'
import Nav from '../components/nav'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';

export default class FAQ extends React.Component {
  static async getInitialProps({ req, query }) {
    let lang = req.locale;
    const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query(Prismic.Predicates.at('document.type', 'faq'),
          { lang : lang }
        );
      })
      .catch(err => console.log(err));

    return { faq: apiData.results, lang, urllang: query.slug  };
  }

  render() {
    return (
      <div>
        FAQ
        <h2>
          {this.props.faq[0].data.main_title[0].text}
        </h2>
        <h4>

        </h4>
        <p>
          {this.props.lang}
        </p>
      </div>
    ); 
  }
}
