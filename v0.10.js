input.onButtonPressed(Button.A, function () {
    radio.sendString("")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("")
})
radio.onReceivedNumber(function (receivedNumber) {
    let recev = 0
    basic.showString("" + recev)
})
radio.setGroup(1)
