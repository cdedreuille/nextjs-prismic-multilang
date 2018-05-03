import React from 'react'

function getlang(lang) {

  let newLang = 'en-gb'
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

  return newLang
}

export default getlang;


