const { Client } = require('@opensearch-project/opensearch');
const Config = require('./config')

const client = new Client({
    auth: { username: Config.ELASTIC_SEARCH.USER_NAME, password: Config.ELASTIC_SEARCH.PASSWORD },
    node: Config.ELASTIC_SEARCH.URL
});


module.exports = client;
