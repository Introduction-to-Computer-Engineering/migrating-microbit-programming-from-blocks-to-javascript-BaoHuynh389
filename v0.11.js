let recev = 0
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("Hello!")
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.ScreenDown, function () {
    let change_PlayersTie = 0
    led.stopAnimation()
    basic.pause(100)
    if (change_PlayersTie) {
        recev += 1
    } else {
        game.gameOver()
    }
})
