const input = [19, 2, 42, 18]

function findMax(arr) {
    let max = arr[0]
    let maxIndex = 0
    for (i in arr) {
        if (arr[i] > max) {
            maxIndex = i
            max = arr[i]
        }
    }
    return maxIndex
}

function sumMax(input) {
    let indexOfMax = findMax(input)
    let max = input[indexOfMax]
    let result = 0
    input.forEach((num, index) => {
        if (index !== indexOfMax) {
            let sum = num + max
            if (sum % 2 != 0 && sum > result) {
                result = sum
            }
        }
    })
    return result
}

console.log(sumMax(input))

// alternative (improvement)

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