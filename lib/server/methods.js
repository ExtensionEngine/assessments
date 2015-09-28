
Meteor.methods({
  'assessment.insert': function(params) {
    return Nodes.insert({
      type: params.type,
      components: params.components
    });
  },
  'assessment.update': function(params) {
    Meteor.users.update({ _id: params._id }, {
      $set: {
        "components": params.components
      }
    });
  }
});
