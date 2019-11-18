import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['q', 'health', 'diet', 'time'],
  actions: {
    changeHealth(selected) {
      this.set('health', selected)
    },
    changeDiet(selected) {
      this.set('diet', selected)
    },
    changeCookTime(selected) {
      this.set('cookTime', selected)
    },
    submit(search) {
      this.transitionToRoute('results', {queryParams: {q: search, health: this.health, diet: this.diet, time: this.cookTime}})
    }
  }
});
