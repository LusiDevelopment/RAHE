import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';



//SimpleSchema.extendOptions(['autoform']);

//import {TasksCollection} from '../Collections/Tasks.jsx';

export const TasksCollection = new Mongo.Collection('tasksCollection');

//export const Tasks = new Mongo.Collection('tasks');

