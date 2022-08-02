function concatenateData(input) { 
    let FirstName = input[0]
    let LastName = input[1]
    let age = Number(input[2])
    let town = input[3]
    console.log(`You are ${FirstName} ${LastName}, a ${age}-years old person from ${town}.`)
}
concatenateData(['Maria', 'Ivanova', 20, 'Sofia'])