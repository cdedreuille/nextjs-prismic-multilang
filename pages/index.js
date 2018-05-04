import React from 'react'
import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://charles-test-nextjs.cdn.prismic.io/api/v2';


export default class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const lang = req.locale
    console.log('this is locale ' + req.locale)
    const apiData = await Prismic.getApi(apiEndpoint)
    .then(api => {
      return api.query( Prismic.Predicates.at('document.type', 'homepage'),
        {lang: lang}
      );
    })
    .catch(err => console.log(err));

    return { homepage: apiData.results, lang};
  }

  render() {
    return (
      <div>
        <p>This info is pulled from Prismic via api</p>
        <p>{this.props.homepage[0].data.home_page_header[0].text}</p>
        <p>req.language: {this.props.lang}</p>
      </div>
    );
  }
}
