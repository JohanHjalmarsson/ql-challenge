const input = 'jjjkkeeeewwqwerrgragkoallllseda'

function removeQuadruples(input) {
    let count = 0
    let prev = ''
    let result = ''
    for (i=0;i<input.length;i++) {
        if (input[i] === prev) count += 1
        else count = 0
        if (count !== 3) result = result+input[i]
        if ((count === 3 && input[i+1] === input[i])) result = result+input[i]
        prev = input[i]
    }
    return result
}

console.log(removeQuadruples(input))

// For larger values I would probably use for with defined length 
// Or maybe write in C? =)