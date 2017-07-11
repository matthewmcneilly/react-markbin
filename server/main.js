// best practice to modularize/seperate the meteor methods
// to deal with any unique cases (bins and sharedbins)

import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  // find and return all the bins only created by this (current) user
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId });
  });

  Meteor.publish('sharedBins', function() {
    const user = Meteor.users.findOne(this.userId);

    // if user not logged in return early
    // they have no bins
    if (!user) { return; }

    // if user does exist
    // pull of first email for the user
    const email = user.emails[0].address;

    // NASTY 
    // look through all the bins
    // walk through sharedWith array
    // find record of this email
    // return shared with bins
    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email }}
    });
  });
});
