let change_PlayersTie = 0
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        for (let i = 0; i < 4; i++) {
            change_PlayersTie = 0
            change_PlayersTie += 1
        }
    }
})
