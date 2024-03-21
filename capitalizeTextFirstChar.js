exports.capitalizeTextFirstChar = (text) => {
    if (typeof text !== 'string') {
      throw new Error('Parameter should be a string');
    }
    return text.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
  };
  