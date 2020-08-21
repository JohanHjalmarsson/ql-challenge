const input = 'jjjkkeeeewwqwerrgragkoallllseda'

function removeQuadruples(input) {
    let count = 0
    let prev = ''
    let result = ''
    for (c in input) {
        if (input[c] === prev) count += 1
        else count = 0
        if (count !== 3) result = result+input[c]
        prev = input[c]
    }
    return result
}

console.log(removeQuadruples(input))

// For larger values I would probably use classic for with defined length 
// instead of for...in loop. Or maybe write in C? =)