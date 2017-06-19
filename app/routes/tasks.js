import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        const tasks =  this.store.findAll('task');
        console.log(tasks);
        return tasks;
    }
});
