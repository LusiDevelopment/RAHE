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
  