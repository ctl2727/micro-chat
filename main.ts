input.onButtonPressed(Button.A, function () {
    radio.sendString("move rg")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("move left")
})
radio.setGroup(1)
