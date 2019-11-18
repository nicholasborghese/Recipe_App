import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from 'finalpro/config/environment';

export default Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    },
    health: {
      refreshModel: true
    },
    diet: {
      refreshModel: true
    },
    time: {
      refreshModel: true
    }
  },
  model(params) {
    // return fetch('/potatotomato.json').then(function(response) {
    //   return response.json();
    // });
    let apiwebsite = `https://api.edamam.com/search?&app_key=${ENV.edamam_app_key}&app_id=${ENV.edamam_app_id}&q=${params.q}&time=${params.time}`;
    if(params.health) {
      apiwebsite = apiwebsite + `&health=${params.health}`;
    }
    if(params.diet) {
      apiwebsite = apiwebsite + `&diet=${params.diet}`;
    }
    return fetch(apiwebsite)
      .then(function(response) {
        return response.json();
      });


    // if(params.health) {
    //   if(params.diet) {
    //     if(params.time) {
    //       return fetch(`https://api.edamam.com/search?&app_key=${ENV.edamam_app_key}&app_id=${ENV.edamam_app_id}&q=${params.q}&health=${params.health}&diet=${params.diet}&time=${params.time}`)
    //         .then(function(response) {
    //           return response.json();
    //         });
    //     } else {
    //       return fetch "HEALTH AND DIET"
    //     }
    //   } else if(params.time) {
    //     "HEALTH AND TIME"
    //   } else {
    //     "HEALTH"
    //   }
    // } else if(params.diet) {
    //   if(params.time) {
    //     "DIET AND TIME"
    //   } else {
    //     "DIET"
    //   }
    // } else if(params.time){
    //   "TIME"
    // }
    
    
    // else {
    //   return fetch(`https://api.edamam.com/search?&app_key=${ENV.edamam_app_key}&app_id=${ENV.edamam_app_id}&q=${params.q}`)
    //     .then(function(response) {
    //       return response.json();
    //     });
    // }
  }
});