import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  process.env.MAIL_URL = "smtp://postmaster%40sandbox5a13e70668bf4f09be05db8cc0089778.mailgun.org:d205dc27b68b7bf06507b1a5eb4646e5@smtp.mailgun.org:587";
})
