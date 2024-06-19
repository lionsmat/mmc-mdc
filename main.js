let numero1
let numero2

process.stdin.on("data", function(data) {
    let input = +data.toString().trim()

    if(!numero1) {

        numero1 = input
    } else {
        numero2 = input
    }
})