Coffee = new Meteor.Collection('coffee');

CoffeeSchema = new SimpleSchema({
    "name":{
        type: String,
        label: "Coffee Name"
    },
    "farm": {
        type: String,
        label: "Coffee Farm Name",
        optional: true
    },
    "region": {
        type: String,
        label: "Coffee Origin Region"
    },
    "country": {
        type: String,
        label: "Coffee Origin Country"
    }
});

Coffee.attachSchema(CoffeeSchema);
