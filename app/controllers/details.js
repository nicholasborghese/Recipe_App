import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(){
            alert('Saved to favorites');
            const newFavorite = this.store.createRecord('favorites',{
                name: this.get('model.business.name'),
                yelpid: this.get('model.business.id')
                
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