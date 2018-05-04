import React from 'react'
import getlang from '../components/getlang'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';

export default class FAQ extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const lang = req.locale
    console.log('this is locale ' + req.locale)

    const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query(Prismic.Predicates.at('document.type', 'faq'),
          { lang : lang }
        );
      })
      .catch(err => console.log(err));

    return { faq: apiData.results, lang  };
  }

  render() {
    return (
      <div>
        FAQ
        <h2>
          {this.props.faq[0].data.main_title[0].text}
        </h2>
        <h4>
          req.language {this.props.lang}
        </h4>
      </div>
    ); 
  }
}
