function encrypt(str1, str2) {
    const obj = {};
    let result = 'true';
    for (let ix = 0 ; ix < str1.length; ix++) {
        if(!obj[str1[ix]]) {
            obj[str1[ix]] = str2[ix];

        } else if(obj[str1[ix]] !== str2[ix]) {
             result = 'false';
             break;
        }
    }
    return result;
}

console.log( encrypt('EGG', 'FOO'));
console.log( encrypt('ABBCD', 'APPLE'));
console.log( encrypt('AAB', 'FOO'));