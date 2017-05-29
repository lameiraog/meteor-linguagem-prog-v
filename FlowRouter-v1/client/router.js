
FlowRouter.route('/',{
    name: 'home',
    action() {
        //BlazeLayout.render('HomeLayout');
        BlazeLayout.render('Layout', {main: 'HomeLayout'});
    }
});

FlowRouter.route('/outro_template',{
    action(){
        //BlazeLayout.render('OutroTemplate');
        BlazeLayout.render('Layout', {main: 'OutroTemplate'});
    }
});


//autoform + collection2
FlowRouter.route('/coffee_new',{
    action(){
        BlazeLayout.render('Layout', {main: 'coffee_new'});
    }
});

FlowRouter.route('/coffee_list',{
    action(){
        BlazeLayout.render('Layout', {main: 'coffee_list'});
    }
});
