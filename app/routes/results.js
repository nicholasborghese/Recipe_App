import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from 'finalpro/config/environment';

export default Route.extend({
  model(params) {
    // return fetch('/potatotomato.json').then(function(response) {
    //   return response.json();
    // });
    return fetch(`https://api.edamam.com/search?&app_key=${ENV.edamam_app_key}&app_id=${ENV.edamam_app_id}&q=${params.q}`)
      .then(function(response) {
        return response.json();
      });
  }
});