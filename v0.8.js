let index = 0
input.onButtonPressed(Button.A, function () {
    index = Math.randomRange(0, 10)
    index = Math.randomRange(0, 10)
    index = Math.randomRange(0, 10)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    index = Math.randomRange(0, 10)
    index = Math.randomRange(0, 10)
    if (true) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
    } else if (false) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
