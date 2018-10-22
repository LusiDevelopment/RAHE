import { Mongo } from 'meteor/mongo';


export const TasksCollection = new Mongo.Collection('tasksCollection');

export const Tasks = new Mongo.Collection('tasks');

export const Classification = new Mongo.Collection('classification');




