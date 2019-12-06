import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from 'finalpro/config/environment';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    let uri = encodeURIComponent(params.uri);
    let apiwebsite = `https://api.edamam.com/search?&app_key=${ENV.edamam_app_key}&app_id=${ENV.edamam_app_id}&r=${uri}`;
    // return fetch(apiwebsite)
    //   .then(function(response) {
    //     return response.json();
    //   }).then(function(response) {
    //     return response.firstObject;
    //   });
    debugger;
    return RSVP.hash({
      recipe: fetch(apiwebsite)
        .then(function(response) {
          return response.json();
        }).then(function(response) {
          return response.firstObject;
        }),
      favorites: this.store.query('favorites', {filter: {
          uri: params.uri
        }
      }).then(favorites =>{
        return favorites.get('firstObject');
      })
    })
  }
});
