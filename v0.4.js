input.onGesture(Gesture.Shake, function () {
    if (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # .
            . . # . #
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    basic.showString("Hello!")
    basic.showNumber(0)
})
