/**
* Main application routes
*/

'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function(app) {
  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/init', require('./routes/init'));
  app.use('/getTabs', require('./routes/getTabs'));
  app.use('/myoTest', require('./routes/myoTest'));
  app.use('/postMyo', require('./routes/postMyo'));
  app.use('/score', require('./routes/score'));
  app.use('/startSong', require('./routes/startSong'));
  app.use('/getTabsTest', require('./routes/getTabsTest'));
  app.use('/leaderboard', require('./routes/leaderboard'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
  .get(function(req, res) {
    res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  });
};

if (true) {

}
