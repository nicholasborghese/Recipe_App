import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(){
            alert('Saved to favorites');
            const newFavorite = this.store.createRecord('favorites',{
                label: this.get('model.recipe.label'),
                uri: this.get('model.recipe.uri'),
                image: this.get('model.recipe.image')
            });
            newFavorite.save().then(()=> {
                this.set('model.favorites', newFavorite)
            });
        },
        unsave() {
            alert('Removed from favorites');
            this.get('model.favorites')
            .destroyRecord()
            .then(() => {
                this.set('model.favorites', undefined);
            });
        }
    }
});