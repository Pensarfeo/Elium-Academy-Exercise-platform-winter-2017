// The text only uses letters, comma, point, questionmar and appostrofe

// Methods for Endripting
var characters = "abcdefghijklmnopqrstuvwxyz.?,' " 
var encryption = "1234567890-=!@#$%^&*()_+<>HG:DQ" 


// Populates Encryption maps
var encryptionMap = {}
function createEncryptionMap (value, index, array ){
    encryptionMap[value] = encryption[index]
}

characters.split("").map(createEncryptionMap)

// Encryptors

function encryptCharacter(val){
    return encryptionMap[val]
}

function encrypt (string, map){
    return  string.split("").map( encryptCharacter ).join("")
}


// Populates Encryption maps

var decryptionMap = {}
function createdecrytionMap (value, index, array ){
    decryptionMap [value] = characters[index]
}

encryption.split("").map(createdecrytionMap)

// Encryptors

function decryptCharacter(val){
    return decryptionMap[val]
}

function decrypt (string, map){
    return  string.split("").map( decryptCharacter ).join("")
}
