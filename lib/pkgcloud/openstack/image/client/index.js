/*
 * index.js: Compute client for OpenStack
 *
 * (C) 2013 Charlie Robbins, Ken Perkins, Ross Kukulinski & the Contributors.
 *
 */

var util = require('util'),
    openstack = require('../../client'),
    ComputeClient = require('../computeClient').ComputeClient,
    _ = require('lodash');

var Client = exports.Client = function (options) {
  openstack.Client.call(this, options);
  
  _.extend(this, require('./images'));


  this.serviceType = 'compute';
};

util.inherits(Client, openstack.Client);
_.extend(Client.prototype, ComputeClient.prototype);
