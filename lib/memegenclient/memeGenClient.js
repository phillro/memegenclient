var querystring = require('querystring'),
    events = require('events'),
    http = require('http');
https = require('https');

module.exports = MemeGenClient;
Generators = require('./calls/generators.js')
Instances = require('./calls/instances.js')
MemeGenCall = require('./calls/memeGenCall.js');

function MemeGenClient(options) {
    this.clientOptions = options || {}
}

MemeGenClient.prototype.createCall = function(params, options) {
    //If options.hosts round robin the hosts
    if (options.hosts) {
        var nextHost = options.hosts.shift();
        options.hosts.push(nextHost);
    }else{
        nextHost=options;
    }
    return new MemeGenCall(params, nextHost);
}

MemeGenClient.prototype.basicCall = function (path, method, params, clientOptions) {
    var qs = '';
    if (params) {
        qs = querystring.stringify(params)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path:path, method:method}, this.clientOptions);
}