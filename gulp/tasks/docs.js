const gulp = require('gulp');
const fs = require('fs-then-native')
const jsdoc2md = require('jsdoc-to-markdown')
const rename = require('gulp-rename');

const paths = require('../paths');

/**
 * Create markdown documentation from jsdocs
 */
module.exports = function docsTask() {

  return jsdoc2md.render({ files: paths.src.js })
    .then(output => fs.writeFile('docs/api.md', output))
};
