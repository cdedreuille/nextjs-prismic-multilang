import React from 'react'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';

export default class FAQ extends React.Component {
  static async getInitialProps({ req, query }) {
    const userLang = req ? req.headers["accept-language"] : navigator.acceptLanguage
    const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query(Prismic.Predicates.at('document.type', 'faq'),
          { lang : 'en-GB' }
        );
      })
      .catch(err => console.log(err));

    return { faq: apiData.results, userLang  };
  }

  render() {
    return (
      <div>
        FAQ
        <h2>
          {this.props.faq[0].data.main_title[0].text}
        </h2>
        <h4>
          Accept Language Headers: {this.props.userLang}
        </h4>
      </div>
    ); 
  }
}
