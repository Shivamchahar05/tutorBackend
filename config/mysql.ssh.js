const mysql = require('mysql2');
const { Client } = require('ssh2');
const sshClient = new Client();

const CONFIG = require('./config');


const dbServer = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database:'RR_GROUP',
}


const tunnelConfig = {
    host: process.env.BASTION_IP_ADDRESS,
    username: process.env.BASTION_USERNAME,
    password: process.env.BASTION_PASSWORD,
    database: CONFIG.DB_CONFIG.DATABASE,
    supportBigNumbers: true,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    multipleStatements: true,
    charset: 'utf8mb4',
    readyTimeout: 99999,
}


const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 3306,
    dstHost: dbServer.host,
    dstPort: dbServer.port
};

const SSHConnection = new Promise((resolve, reject) => {

    sshClient.on('ready', () => {
        sshClient.forwardOut(
            forwardConfig.srcHost,
            forwardConfig.srcPort,
            forwardConfig.dstHost,
            forwardConfig.dstPort,
            (err, stream) => {
                if (err) reject(err);
                const updatedDbServer = {
                    ...dbServer,
                    stream
                };

                const connection = mysql.createPool(updatedDbServer);
                resolve(connection);
            });
    }).connect(tunnelConfig);
});


module.exports = SSHConnection;