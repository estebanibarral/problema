input.onButtonPressed(Button.A, function () {
    SUMA = N1 + N2
    basic.showNumber(SUMA)
    palabra_2 = "sumaste"
})
input.onButtonPressed(Button.AB, function () {
    MULTIPLICACION = N1 * N2
    basic.showNumber(MULTIPLICACION)
    palabra_3 = "multiplicaste"
})
input.onButtonPressed(Button.B, function () {
    RESTA = N1 - N2
    basic.showNumber(RESTA)
    PALABRA1 = "restaste"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(N1)
    basic.showNumber(N2)
    basic.showString(PALABRA1)
})
let palabra_3 = ""
let palabra_2 = ""
let MULTIPLICACION = 0
let RESTA = 0
let SUMA = 0
let PALABRA1 = ""
let N2 = 0
let N1 = 0
N1 = randint(1, 5)
N2 = randint(1, 5)
PALABRA1 = "-"
SUMA = 0
RESTA = 0
MULTIPLICACION = 0
basic.forever(function () {
	
})
