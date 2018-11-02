/* 
 *  Author: Annick K
 *  Created on: 2018-10-26
 *  Component: Miscelenious Collection
 * 
 *  Description: Db collection of the Tasks 
 * 
 *  Changes and updates: 
 * 
*/

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Misc = new Mongo.Collection('misc');

const MiscSchema = new SimpleSchema({

    priority:{
        type: String,
        label:"priority",   
   },

   category:{
    type: String,
    label:"category",   
    },

    status:{
        type: String,
        label:"status",   
   },
  
  });


  Misc.attachSchema(MiscSchema);