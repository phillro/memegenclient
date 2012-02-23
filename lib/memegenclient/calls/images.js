//Core
var querystring = require('querystring'),
    MemeGenClient = require('../memeGenClient')
var host = 'images.memegenerator.net'
var port = 80


MemeGenClient.prototype.imageUrl = function (instanceId, dimensions, params) {
    var methodClientOptions = this.clientOptions
    methodClientOptions.host = host
    return this.basicCall('/images/' + dimensions + '/' + instanceId, 'GET', params,methodClientOptions)
}


MemeGenClient.prototype.instanceImageUrl = function (instanceId, dimensions, params) {
    var methodClientOptions = this.clientOptions
    methodClientOptions.host = host
    return this.basicCall('/instances/' + dimensions + '/' + instanceId, 'GET',params,methodClientOptions)
}
