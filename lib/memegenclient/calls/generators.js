//Core
var querystring = require('querystring'),
    MemeGenClient = require('../memeGenClient')



host = 'version1.api.memegenerator.net'

MemeGenClient.prototype.generatorsSearch = function (params) {
    var methodClientOptions=this.clientOptions
    methodClientOptions.host=host
    return this.basicCall('/Generators_Search','GET',params,methodClientOptions)
}


MemeGenClient.prototype.generatorsSelectByTrending = function (params) {
    var methodClientOptions=this.clientOptions
    methodClientOptions.host=host
    return this.basicCall('/Generators_Select_ByTrending','GET',params,methodClientOptions)
}

MemeGenClient.prototype.generatorsSelectByUrlNameOrGeneratorId = function (params) {
    var methodClientOptions=this.clientOptions
    methodClientOptions.host=host
    return this.basicCall('/Generator_Select_ByUrlNameOrGeneratorID','GET',params,methodClientOptions)
}

MemeGenClient.prototype.generatorsSelectByNew = function (params) {
    var methodClientOptions=this.clientOptions
    methodClientOptions.host=host
    return this.basicCall('/Generators_Select_ByNew','GET',params,methodClientOptions)
}

MemeGenClient.prototype.generatorsSelectRelatedByDisplayName = function (params) {
    var methodClientOptions=this.clientOptions
    methodClientOptions.host=host
    return this.basicCall('/Generators_Select_Related_ByDisplayName','GET',params,methodClientOptions)
}


