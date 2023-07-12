// get the absolute file paths of the input files

const fs = require('fs');
const path = require('path');

function getFilesWithAbsolutePaths(folderPath, callback) {
    fs.readdir(folderPath, (err, files) => { // read directory
      if (err) { // catch errors
        callback(err, null);
        return;
      }
  
      // map absolute path to the filenames
      const absolutePaths = files.map(file => path.join(folderPath, file));
  
      // return array of filepaths
      callback(null, absolutePaths);
    });
  }

  module.exports = getFilesWithAbsolutePaths;