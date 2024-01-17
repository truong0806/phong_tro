function convertToAcronym(str) {
  var words = str.split('-');
  var acronym = '';

  for (var i = 0; i < words.length; i++) {
    acronym += words[i].charAt(0).toUpperCase();
  }

  return acronym;
}

export default convertToAcronym;
