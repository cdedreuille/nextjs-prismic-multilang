export default class Getlang extends React.Component {
  static async getInitialProps({ req }) {
    const lang = req.language; 

    const newLang = '';
  switch(lang) {
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

  return newLang;
  }

}
