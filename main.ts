input.onButtonPressed(Button.A, function () {
    pet.change(LedSpriteProperty.X, 1)
    pet1.change(LedSpriteProperty.X, 1)
    pet2.change(LedSpriteProperty.X, 1)
})
function markqiuqiu () {
    MARKQIUQIU.set(LedSpriteProperty.X, randint(0, 4))
    MARKQIUQIU.set(LedSpriteProperty.Y, 0)
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (mark))
    basic.pause(10000)
})
input.onButtonPressed(Button.B, function () {
    pet.change(LedSpriteProperty.Y, 1)
    pet1.change(LedSpriteProperty.Y, 1)
    pet2.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        hunger += 1
        basic.pause(100)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (boolean1 == true) {
        start_time = input.runningTime()
        basic.showString("" + (start_time))
    }
})
function pets () {
    pet = game.createSprite(3, 3)
    pet1 = game.createSprite(2, 3)
    pet2 = game.createSprite(1, 3)
}
input.onLogoEvent(TouchButtonEvent.Released, function () {
    if (boolean1 == true) {
        time_elapsed = input.runningTime() - start_time
        time_elapsed = time_elapsed / 1000
        max_time += time_elapsed
        if (max_time > 1) {
            music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
            hunger = 10
        } else if (max_time > 2) {
            music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
            hunger = 10
        } else if (max_time > 3) {
            music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
            tried += 10 - mark
        } else {
            tried += -1
            basic.showString("" + (tried))
            basic.pause(500)
        }
    }
})
let temperature = 0
let gogogo = 0
let start_time = 0
let pet2: game.LedSprite = null
let pet1: game.LedSprite = null
let pet: game.LedSprite = null
let boolean1 = false
let MARKQIUQIU: game.LedSprite = null
let max_time = 0
let time_elapsed = 0
let tried = 0
let hunger = 0
let mark = 0
pets()
mark = 10
hunger = 100
tried = 20
time_elapsed = 0
max_time = 0
MARKQIUQIU = game.createSprite(randint(0, 4), 0)
boolean1 = false
basic.forever(function () {
    if (boolean1 == true) {
        gogogo = randint(0, 2)
        if (pet.get(LedSpriteProperty.X) == 0) {
            pet.change(LedSpriteProperty.X, 1)
            pet1.change(LedSpriteProperty.X, 1)
            pet2.change(LedSpriteProperty.X, 1)
        }
        if (gogogo == 1) {
            pet.change(LedSpriteProperty.X, 1)
            pet1.change(LedSpriteProperty.X, 1)
            pet2.change(LedSpriteProperty.X, 1)
            basic.pause(1000)
        } else if (gogogo == 2) {
            pet.change(LedSpriteProperty.Y, 1)
            pet1.change(LedSpriteProperty.Y, 1)
            pet2.change(LedSpriteProperty.Y, 1)
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    if (hunger < 0) {
        mark = -1
    }
})
basic.forever(function () {
    if (hunger < 0) {
        boolean1 = true
        basic.showIcon(IconNames.Skull)
        basic.pause(1000)
        basic.showIcon(IconNames.Ghost)
        basic.pause(1000)
        basic.showIcon(IconNames.Skull)
    } else {
        boolean1 = false
    }
})
basic.forever(function () {
    MARKQIUQIU.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    if (MARKQIUQIU.get(LedSpriteProperty.Y) == 4) {
        markqiuqiu()
    } else if (MARKQIUQIU.isTouching(pet)) {
        mark += 1
        basic.pause(100)
        markqiuqiu()
    } else if (MARKQIUQIU.isTouching(pet1)) {
        mark += 1
        basic.pause(100)
        markqiuqiu()
    } else if (MARKQIUQIU.isTouching(pet2)) {
        mark += 1
        basic.pause(100)
        markqiuqiu()
    }
})
basic.forever(function () {
    if (pet.get(LedSpriteProperty.X) == 4) {
        pet.set(LedSpriteProperty.X, 0)
    } else if (pet.get(LedSpriteProperty.Y) == 4) {
        pet.set(LedSpriteProperty.Y, 0)
    }
    if (pet1.get(LedSpriteProperty.X) == 4) {
        pet1.set(LedSpriteProperty.X, 0)
    } else if (pet1.get(LedSpriteProperty.Y) == 4) {
        pet1.set(LedSpriteProperty.Y, 0)
    }
    if (pet2.get(LedSpriteProperty.X) == 4) {
        pet2.set(LedSpriteProperty.X, 0)
    } else if (pet2.get(LedSpriteProperty.Y) == 4) {
        pet2.set(LedSpriteProperty.Y, 0)
    }
})
basic.forever(function () {
    if (hunger > 50) {
        hunger += -1
        basic.pause(1000)
    } else if (hunger < 50) {
        hunger += -2
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (mark < 0) {
        pet.delete()
        pet1.delete()
        pet2.delete()
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
basic.forever(function () {
    temperature = input.temperature()
    if (temperature < 0) {
        music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
        radio.setGroup(139)
        radio.sendString("COLD!!!")
        basic.showString("COLD!!!")
        basic.pause(1000)
        if (tried > 5) {
            tried += -1
        } else {
            hunger += -1
            mark += -1
        }
    } else if (temperature > 40) {
        music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
        radio.setGroup(139)
        radio.sendString("HOT!!!")
        basic.showString("COLD!!!")
        basic.pause(1000)
        if (tried > 5) {
            tried += -1
            basic.pause(1000)
        } else {
            hunger += -1
            mark += -1
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    if (boolean1 == true) {
        tried += -1
        basic.showIcon(IconNames.Heart)
        basic.showString("" + (tried))
        basic.pause(1000)
    } else if (tried == 0) {
        mark = 0
    }
})
