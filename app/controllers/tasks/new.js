import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTask: function(){
            const title = this.get('title');
            const description = this.get('description');
            const date = this.get('date');

            const newTask = this.store.createRecord('task', {
                title: title,
                description: description,
                date: new Date(date)
            });

            newTask.save();

            this.setProperties({
                title: '',
                description: '',
                date: ''
            });
        }
    }
});
