import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from 'finalpro/config/environment';

export default Route.extend({
  model(params) {
    let uri = encodeURIComponent(params.uri);
    let apiwebsite = `https://api.edamam.com/search?&app_key=${ENV.edamam_app_key}&app_id=${ENV.edamam_app_id}&r=${uri}`;
    return fetch(apiwebsite)
      .then(function(response) {
        return response.json();
      }).then(function(response) {
        return response.firstObject;
      });
  }
});
