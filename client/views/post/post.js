Template.post.helpers({
    username: function(userId) {
        var user = Meteor.users.findOne(userId);
        if(user)
            return user.username;
    },
    getAvatar: function(userId){

        var user = Meteor.users.findOne(userId);

        if(typeof user !== 'undefined')
            if((typeof  user.profile !== 'undefined' || typeof user.profile.avatar !== 'undefined') && user.profile.avatar != "") {
                return user.profile.avatar;
            } else {
                return true;
            }
    }
})