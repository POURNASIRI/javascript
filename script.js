// count number of each character of string

const srtringCounter = (input) =>{
    const refactor =input.replaceAll(' ','').split(',').join('').split('.').join('').split('?').join('').split('!').join('')
    const RSpace = [...refactor].reduce((prev, cur) =>{prev[cur] = prev[cur] ? prev[cur] + 1 : 1 ;return prev},{})
    return RSpace

}
console.log(srtringCounter("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum impedit possimus, a consequuntur numquam similique nemo dolores dolore rem sunt."));