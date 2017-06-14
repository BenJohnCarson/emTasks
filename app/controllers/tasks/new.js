import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTask: function(){
            const title = this.get('title');
            const description = this.get('description');
            const date = this.get('date');

            //TODO Create new task
            // const newTask = this.store.createRecord();
        }
    }
});
