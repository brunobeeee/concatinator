// merge all input files together into one result.txt

const fs = require('fs');
const path = require('path');
const mergeFiles = require('merge-files');
const getFilePaths = require('./getFilePaths');

const inputFolderPath = '/com.docker.devenvironments.code/input';
const outputPath = '/com.docker.devenvironments.code/dist/concat-result.txt'; // paste into dist folder to make it accessible for pasteConcat.js

// get absolute file paths of the input files
getFilePaths(inputFolderPath, (err, filePathList) => {
  if (err) {
    console.error('Error when reading the directory: ', err);
    return;
  }
  
  // merge
  mergeFiles(filePathList, outputPath).then((status) => {
      console.log("Concatenated files sucessfully");
  });
});
