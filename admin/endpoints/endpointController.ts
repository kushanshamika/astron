import * as mongoose from 'mongoose';
import { EndpointSchema } from './endpointModel';

const Endpoint = mongoose.model('Endpoint', EndpointSchema);

export const addNewEndpoint = (req, res) => {
  let newEndpoint = new Endpoint(req.body);

  newEndpoint.save((err, endpoint) => {
    if (err) {
      console.log(err);

      res.send(err);
    }
    res.json(endpoint);
  });
};

export const getEndpoints = (req, res) => {
  Endpoint.find({}, (err, endpoint) => {
    if (err) {
      res.send(err);
    }
    res.json(endpoint);
  });
};

export const designEndpoint = (req, res) => {
  Endpoint.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, endpoint) => {
      if (err) {
        console.log(err);

        res.send(err);
      }
      res.json(endpoint);
    }
  );
};
