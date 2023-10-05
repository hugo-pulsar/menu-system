/**
 * http://multiwingspan.co.uk/micro.php?page=menu
 */
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
let menuItem = 0
let blinkCounter = 0
basic.forever(function () {
    led.unplot(0, menuItem)
    if (input.buttonIsPressed(Button.A)) {
        menuItem += 1
        if (menuItem == 5) {
            menuItem = 0
        }
        while (input.buttonIsPressed(Button.A)) {
            basic.pause(1)
        }
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(menuItem)
        while (input.buttonIsPressed(Button.B)) {
            basic.pause(1)
        }
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    blinkCounter += 1
    if (blinkCounter == 20) {
        blinkCounter = 0
    }
    if (blinkCounter < 10) {
        led.plot(0, menuItem)
    }
    basic.pause(10)
})
