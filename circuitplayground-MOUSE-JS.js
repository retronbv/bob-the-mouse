let hold = false
let scroll = false
let rclick = false
let lclick = false
input.onGesture(Gesture.Shake, function () {
    hold = !(hold)
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    scroll = !(scroll)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (!(hold)) {
        mouse.setButton(MouseButton.Right, true)
        mouse.setButton(MouseButton.Right, false)
    } else {
        rclick = !(rclick)
        mouse.setButton(MouseButton.Right, rclick)
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (!(hold)) {
        mouse.setButton(MouseButton.Left, true)
        mouse.setButton(MouseButton.Left, false)
    } else {
        lclick = !(lclick)
    }
    mouse.setButton(MouseButton.Left, lclick)
})
input.pinA1.onEvent(ButtonEvent.Down, function () {
    if (!(scroll)) {
        mouse.move(0, -30)
    } else {
        mouse.turnWheel(-10)
    }
})
input.pinA2.onEvent(ButtonEvent.Down, function () {
    mouse.move(-30, 0)
})
input.pinA5.onEvent(ButtonEvent.Down, function () {
    mouse.move(30, 0)
})
input.pinA7.onEvent(ButtonEvent.Down, function () {
    if (!(scroll)) {
        mouse.move(0, 30)
    } else {
        mouse.turnWheel(10)
    }
})
forever(function () {
    if (scroll) {
        light.showRing(
            "red red red red red red red red red red"
        )
    } else {
        light.showRing(
            `black black black black black black black black black black`
        )
    }
    if (hold) {
        light.showRing(
            `green green green green green green green green green green`
        )
    } else {
        light.showRing(
            `black black black black black black black black black black`
        )
    }
})
