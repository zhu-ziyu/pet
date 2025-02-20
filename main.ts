input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (mark))
    basic.pause(10000)
})
let mark = 0
mark = 10
basic.forever(function () {
    if (mark < 0) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showString("GAME OVER")
        basic.pause(100)
        basic.showString("DIE~")
    } else if (mark > 100) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        basic.showString("GAME OVER")
        basic.pause(100)
        basic.showString("win!")
    }
})
