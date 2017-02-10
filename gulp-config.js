module.exports = function () {
  var projectDir = process.env.PWD = process.cwd() + '/',
    npmDir = 'node_modules/',
    srcDir = 'src/',
    srcScriptDir = srcDir + 'scripts/',
    srcStylesDir = srcDir + 'styles/',
    destDir = 'www/';

  var scripts = {
    src: [
      srcScriptDir + 'components/modal/modal-model.js',
      srcScriptDir + 'components/veil/veil-model.js',
      srcScriptDir + 'components/modal/modal.js',
      srcScriptDir + 'components/veil/veil.js',
      srcScriptDir + 'main.js'
    ],
    vendors: [
      npmDir + 'signals/dist/signals.js'
    ]
  };

  var pipelines = {
    build: {
      src: {
        app: scripts.src,
        vendors: scripts.vendors
      },
      dest: destDir + 'scripts'
    },
    server: {
      src: destDir,
      options: {
        host: 'localhost',
        port: 8080,
        directoryListing: false,
        open: true
      }
    },
    styles: {
      src: srcStylesDir + 'main.scss',
      dest: destDir + 'styles'
    }
  };
  return pipelines;
}
