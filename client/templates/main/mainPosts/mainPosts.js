Template.mainPosts.onCreated(function(){


    this.autorun(function(){

        var user = Meteor.user();

        Session.set('feedType', user.profile.feedType);

    });



});


Template.mainPosts.onRendered(function(){
    $('.ui.dropdown').dropdown({ onChange: function(value, text, $selectedItem) {


        if(text.indexOf("Live") > -1){
            Session.set('feedType', 'liveFeed');
        }else if(text.indexOf("Regular") > -1){
            Session.set('feedType', 'regularFeed');
        }

    }
    });

});


Template.mainPosts.events({

});

Template.mainPosts.helpers({
    feedType: function(){
        return Session.get('feedType');
    }

});


Template.mainPosts.onDestroyed(function(){

});