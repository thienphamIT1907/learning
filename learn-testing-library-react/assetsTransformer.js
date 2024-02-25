const path = require('path');

module.exports = {
  // eslint-disable-next-line max-params
  process(src, filename, config, options) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
