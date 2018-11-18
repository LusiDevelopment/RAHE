import { Meteor } from 'meteor/meteor';

import '../imports/api/Publications/Publications.jsx';
Meteor.startup(() => {
    // code to run on server at startup
 //  console.log(Meteor.settings.hello);
 //  console.log(Meteor.settings.public.pub);
        console.log(Meteor.settings.public.ga.account);
  });



