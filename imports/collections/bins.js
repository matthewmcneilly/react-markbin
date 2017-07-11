import { Mongo } from 'meteor/mongo';

Meteor.methods({

  // new Data().valueOf() can also be used which stores a string
  // however mongodb works well with date objects
  // sharedWith is an empty array
  // this refers to the context of the function
  // a fat arrow function would break this
  // meteor is fantastic with auth a userID can be easily pulled from
  // the context of the function at runtime
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },

  // update the bin with this id
  // set its content with the newcontent (overwrite)
  'bins.update': function(bin, content) {
    return Bins.update(bin._id, { $set: { content } });
  },

  // add new email into the sharedWith array
  'bins.share': function(bin, email) {
    return Bins.update(bin._id, { $push: { sharedWith: email } });
  }
});

export const Bins = new Mongo.Collection('bins');
