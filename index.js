'use strict';

/**
 * 
 * @function handler
 * 
 * @description Intercept viewer-requests to an AWS Cloudfront distribution and rewriting 
 * requests to default directory indexes.
 * 
 * @param {*} evt 
 * @param {*} ctx 
 * @param {*} cb 
 * 
 * @returns {function} cb
 * 
 */
exports.handler = (evt, ctx, cb) => {
    var req = evt.Records[0].cf.request;
    var oldUri = req.uri;
    var newUri = oldUri.replace(/\/$/, '\/index.html'); 
    
    console.log(`Old URI: ${oldUri}`);
    console.log(`New URI: ${newUri}`);
    
    req.uri = newUri;
    
    return cb(null, req);
};