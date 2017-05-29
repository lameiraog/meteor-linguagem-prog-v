import { Template } from 'meteor/templating';

Template.coffee_list.helpers({
    coffees(){
        return Coffee.find();
    }
});
