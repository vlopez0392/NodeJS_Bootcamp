const REQUEST_TIMEOUT = 500;

function encrypt(data){
    return 'encrypted'
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to URL ${url}`)
}

module.exports = {
    send,
    REQUEST_TIMEOUT
}
