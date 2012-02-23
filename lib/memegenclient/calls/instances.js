//Core
var querystring = require('querystring'),
    MemeGenClient = require('../memeGenClient')
var host = 'version1.api.memegenerator.net'


MemeGenClient.prototype.instancesSelectByPopular = function (params) {
    if (!params)
        params = {pageIndex:0, pageSize:12}
    var methodClientOptions = this.clientOptions
    methodClientOptions.host = host
    return this.basicCall('/Instances_Select_ByPopular', 'GET', params, methodClientOptions)
}

MemeGenClient.prototype.instancesSelectByNew = function (params) {
    if (!params)
        params = {pageIndex:0, pageSize:12}
    var methodClientOptions = this.clientOptions
    methodClientOptions.host = host
    return this.basicCall('/Instances_Select_ByNew', 'GET', params, methodClientOptions)
}


MemeGenClient.prototype.instanceCreate = function (params) {
    if (!params) {
        {
        }
    }
    params.username = this.clientOptions.username
    params.password = this.clientOptions.password
    var methodClientOptions = this.clientOptions
    methodClientOptions.host = host
    return this.basicCall('/Instance_Create', 'GET', params, methodClientOptions)
}
