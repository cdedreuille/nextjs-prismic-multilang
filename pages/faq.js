import React from 'react'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'


const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';

export default class FAQ extends React.Component {
  static async getInitialProps({ req, query }) {
    const lang = req.language

		let newLang = 'en-gb'                                                          
		if (req.language === 'fr') {
			newLang = 'fr-fr'
		} else {
			newLang = 'en-GB'
		}
    const apiData = await Prismic.getApi(apiEndpoint)
      .then(api => {
        return api.query(Prismic.Predicates.at('document.type', 'faq'),
          { lang : newLang }
        );
      })
      .catch(err => console.log(err));

    return { faq: apiData.results, newLang  };
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
