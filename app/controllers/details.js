import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(){
            alert('Saved to favorites');
            debugger;
            const newFavorite = this.store.createRecord('favorites',{
                label: this.get('model.label'),
                uri: this.get('model.uri'),
                image: this.get('model.image')
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