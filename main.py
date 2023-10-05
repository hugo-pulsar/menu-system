basic.show_leds("""
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    . . . . .
    """)
menuItem = 2

def on_forever():
    blinkCounter = 0
    led.unplot(0, menuItem)
    led.plot(1 + blinkCounter % 5, 4 + blinkCounter)
basic.forever(on_forever)
