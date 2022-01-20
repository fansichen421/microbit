def on_button_pressed_a():
    music.play_melody("C5 B A G F E D C ", 120)
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.clear_screen()

def on_forever():
    if input.temperature() >= 45:
        basic.show_leds("""
            # # . . .
                        # . . # .
                        # # . # #
                        # . . # .
                        # . . # .
        """)
        while input.temperature() >= 50:
            for index in range(15):
                music.play_tone(988, music.beat(BeatFraction.HALF))
                music.rest(music.beat(BeatFraction.HALF))
    else:
        basic.clear_screen()
    basic.pause(100)
basic.forever(on_forever)
