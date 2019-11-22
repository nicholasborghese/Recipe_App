import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
    image: attr('string'),
    uri: attr('string'),
    label: attr('string')
});
