const input = [19, 2, 42, 18]

function sumMaxAlt(input) {
    let evenMax = 0
    let oddMax = 0
    input.forEach(num => {
        if (num > evenMax && num % 2 === 0) evenMax = num
        if (num > oddMax && num % 2 !== 0) oddMax = num
    })
    return evenMax + oddMax
}

console.log(sumMaxAlt(input))