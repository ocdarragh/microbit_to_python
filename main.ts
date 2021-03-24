radio.setGroup(80)
basic.forever(function () {
    radio.sendNumber(input.lightLevel())
    basic.showNumber(input.lightLevel())
    basic.pause(60000)
})
