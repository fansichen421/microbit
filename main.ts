input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    mn = 1
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    mn = 6
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
let mn = 0
basic.clearScreen()
basic.forever(function () {
    if (input.temperature() >= 45) {
        basic.showLeds(`
            # # . . .
            # . . # .
            # # . # #
            # . . # .
            # . . # .
            `)
        while (input.temperature() >= 50) {
            for (let index = 0; index < 15; index++) {
                music.playTone(988, music.beat(BeatFraction.Half))
                music.rest(music.beat(BeatFraction.Half))
            }
        }
    } else {
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.Strength) == 10 && !(input.buttonIsPressed(Button.B))) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.OnceInBackground)
    } else {
        music.stopMelody(MelodyStopOptions.Background)
    }
    basic.pause(100)
})
