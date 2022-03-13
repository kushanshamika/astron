import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EndpointSchema = new Schema({
  route: {
    type: String,
  },
  method: {
    type: String,
  },
  actions: {
    type: [],
  },
});
