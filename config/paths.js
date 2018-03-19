'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

const appJsList = (()=>{
    let srcPath = resolveApp('src/pages');
    let files = fs.readdirSync(srcPath);
    let result = [];
    files.forEach((fileName) =>{
      result.push({name: fileName, path: `${srcPath}/${fileName}/index.js`});
    });
    return result;
})();

const appHtmlList = (()=>{
    let htmlPath = resolveApp('public');
    let files = fs.readdirSync(htmlPath);
    let result = [];
    files.forEach((fileName) =>{
      if(fileName.match(/(.+)\.html$/)){
        result.push({name: fileName.replace(/(\.html)/, ""), path: `${htmlPath}/${fileName}`});
      }
    });
    return result;
})();

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('public'),
  // appHtml: resolveApp('public/index.html'),
  // appIndexJs: resolveApp('src/index.js'),
  appHtmlList,
  appJsList,
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
};
