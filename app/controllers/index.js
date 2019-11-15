import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submit(search) {
      debugger;
      this.transitionToRoute('results', {queryParams: {q: search}})
    }
  }
});
