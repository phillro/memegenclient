assert = require('assert');
MemeGenClient = require('../lib/memegenclient/memeGenClient.js');
var serverOptions = {
    username:'username',
    password:'password'
};


var memeGenClient = new MemeGenClient(serverOptions);


testInstancesSelectByPopular = function () {
    memeGenClient.instancesSelectByPopular({})
        .on('data', function (data) {
            console.log(data);
        })
        .exec()
}

testInstancesSelectByPopular = function () {
    memeGenClient.instancesSelectByPopular({
        q:'happy',
        pageIndex:0,
        pageSize:12
    })
        .on('data', function (data) {
            console.log(data);
        })
        .exec()
}

testCreateInstance = function () {
    memeGenClient.instanceCreate({
        languageCode:'en',
        generatorId:'45',
        imageId:20,
        text0:'test my generator',
        text1:'it seems to be working'
    }).on('data', function (data) {
            console.log(data);
        })
        .exec()
}
testCreateInstance()