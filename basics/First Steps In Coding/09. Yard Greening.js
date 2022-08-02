function greening(input) {
    let meters = Number(input[0])
    let discount = 0.18 * (meters * 7.61) 
    let money = meters * 7.61 - discount
    console.log(`The final price is: ${money} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
greening(['550'])