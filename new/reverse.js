function reverseWord(str) {
    let list = str.split(' ');
    const result = [];
    list.forEach((d) => {
        result.push(d.split('').reverse().join(''));
    });


    return result.join(' ');
}


console.log(reverseWord('abc 123 apple'));