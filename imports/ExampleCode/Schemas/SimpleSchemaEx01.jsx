Meteor.users.masterProfile.schema = new SimpleSchema({
    userId: {
      type: String,
      index: 1,
      unique: true,
      regEx: SimpleSchema.RegEx.Id,
    },
    accountEdited: {
      type: Boolean,
      defaultValue: false,
    },
    'name.first': {
      type: String,
      max: 256,
    },
    'name.last': {
      type: String,
      max: 256,
    },
    'organization.name': {
      type: String,
      max: 256,
      optional: true,
    },
    'organization.role': {
      type: String,
      max: 256,
      optional: true,
    },
    slug: {
      type: String,
      index: 1,
      unique: true,
      denyUpdate: true,
      autoValue: function() {
        const first = this.field('name.first');
        const last = this.field('name.last');
        if (this.isInsert) {
          if (first.isSet && last.isSet) {
            const userSlug = slugify(`${first.value} ${last.value}`);
            const usersCount = parseInt(Meteor.users.masterProfile.find({ slug: userSlug }).count());
            return `${userSlug}${usersCount > 0 ? '-' + usersCount + 1 : ''}`;
          }
        } else {
          this.unset();
        }
      }
    },
    avatarUrl: {
      type: String,
      optional: true,
    },
    birthDay: {
      type: Date,
      optional: true,
    },
    contactEmails: {
      type: [Object],
      optional: true,
      custom: function() {
        if (this.isSet) {
          if (this.value.length !== _.uniq(_.pluck(this.value, 'address')).length) {
            return 'notUnique';
          }
        }
      },
    },
    'contactEmails.$.address': {
      type: String,
      optional: true,
      regEx: SimpleSchema.RegEx.Email,
    },
    'timeZone.identifier': {
      type: String,
      allowedValues: TIME_ZONE,
    },
    'timeZone.setManually': {
      type: Boolean,
      defaultValue: false,
    },
    'phones.$.countryDialCode': {
      type: String,
      allowedValues: DIAL_CODE,
      optional: true,
    },
    'phones.$.number': {
      type: String,
      max: 256,
      optional: true,
    },
    'address.street': {
      type: String,
      max: 256,
      optional: true,
    },
    'address.city': {
      type: String,
      max: 256,
      optional: true,
    },
    'address.zipCode': {
      type: String,
      max: 256,
      optional: true,
    },
    'address.country': {
      type: String,
      allowedValues: _.pluck(COUNTRY, 'name'),
      optional: true,
    },
    'siteLinks.$.name': {
      type: String,
      max: 256,
      optional: true,
    },
    'siteLinks.$.url': {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
      optional: true,
    },
    'socialLinks.facebook': {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
      optional: true,
    },
    'socialLinks.linkedIn': {
      label: 'LinkedIn',
      type: String,
      regEx: SimpleSchema.RegEx.Url,
      optional: true,
    },
    'socialLinks.twitter': {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
      optional: true,
    },
    'socialLinks.googlePlus': {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
      optional: true,
    },
  })
  

  /*
  
  Old Code
  
  */

 import { Meteor } from 'meteor/meteor';
 import { Mongo } from 'meteor/mongo';
 
 import SimpleSchema from 'simpl-schema';
 import { Classification } from '../Collections/Collections';
 
 // 
 // Create Schemas
 //
 
 
 // 
 // Tasks Schema
 //
 
 function getClassification(classification) {
     
  //return   db.Classification.find({classification}).toArray();
 
  var sportsArray = Sports.find({classification}).fetch(); // fetch() returns a collection as an array
 console.log(sportsArray);
  // convert sportArray into an array format autoForm can understand for selection options
  
  var sportsOptions = sportsArray.map( function (obj) {
      return {'label': obj.name, 'value': obj.name};
  });
 
 }
 
 
 const tasksSchema = new SimpleSchema({
 
     taskTitle:{
       type:String,
       label:"Title",
       defaultValue:'',
       min:3,
     },
     text: {
         type: String,
         label:"Task text",
         defaultValue:'',
         min:3,
         max:100,
     }, 
     taskId:{
         type:Number,
         defaultValue:3,
         optional:true
     },
     creator:{
         type:String,
         defaultValue:'',
         label:"Created By",
     },
     responsible:{
         type:String,
         defaultValue:'',
         label:"Responsible",
     },
     status:{
         type: String,
         allowedValues: ['Done', 'Open','Ongoing'],
         defaultValue: 'Open'
     },
     comments:{
         type:String, 
         defaultValue:'',
         label:"Comments here",
         optional:true
         
     },
     priority:{
         type: String,
         allowedValues: [ 'High','Low','Normal'],
         defaultValue: 'Normal'
    },
     category:{
         type:String,
         label:"Categoty",
         allowedValues: [ 'Personal','Family','Private','Public','Work','Children'],
         defaultValue: 'Personal'
     },
     createdAt:{
         type:Date,
         optional:true,
        autoValue: () => new Date 
     },
     targetCompletionDate:{
         type:Date,
         optional:true
     },
     
   });
 
 // 
 // Classification Schema
 //
 const classificationSchema = tasksSchema.pick(['status', 'priority','category']);
 
 
 
 // 
 // Attach Schemas
 //
 
 
 Classification.attachSchema(classificationSchema)
 
 // 
 // Export Schemas
 //
 
   export { Classification};

   /* 
   End of Old Code
   */