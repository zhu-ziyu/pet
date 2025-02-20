input.onButtonPressed(Button.A, function () {
    if (boolean1 > true) {
        tried = 100
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (mark))
    basic.pause(10000)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        hunger += 1
    }
})
function pets () {
    pet = game.createSprite(1, 2)
    pet1 = game.createSprite(2, 2)
    pet2 = game.createSprite(3, 2)
    if (pet.get(LedSpriteProperty.X) < 0) {
        pet.set(LedSpriteProperty.X, 4)
    } else if (pet.get(LedSpriteProperty.X) > 4) {
        pet.set(LedSpriteProperty.X, 0)
    } else if (pet.get(LedSpriteProperty.Y) < 0) {
        pet.set(LedSpriteProperty.Y, 4)
    } else if (pet.get(LedSpriteProperty.Y) > 4) {
        pet.set(LedSpriteProperty.Y, 0)
    }
    if (pet1.get(LedSpriteProperty.X) < 0) {
        pet1.set(LedSpriteProperty.X, 4)
    } else if (pet1.get(LedSpriteProperty.X) > 4) {
        pet1.set(LedSpriteProperty.X, 0)
    } else if (pet1.get(LedSpriteProperty.Y) < 0) {
        pet1.set(LedSpriteProperty.Y, 4)
    } else if (pet1.get(LedSpriteProperty.Y) > 4) {
        pet1.set(LedSpriteProperty.Y, 0)
    }
    if (pet2.get(LedSpriteProperty.X) < 0) {
        pet2.set(LedSpriteProperty.X, 4)
    } else if (pet2.get(LedSpriteProperty.X) > 4) {
        pet2.set(LedSpriteProperty.X, 0)
    } else if (pet2.get(LedSpriteProperty.Y) < 0) {
        pet2.set(LedSpriteProperty.Y, 4)
    } else if (pet2.get(LedSpriteProperty.Y) > 4) {
        pet2.set(LedSpriteProperty.Y, 0)
    }
}
let pet2: game.LedSprite = null
let pet1: game.LedSprite = null
let pet: game.LedSprite = null
let boolean1 = false
let tried = 0
let mark = 0
pets()
mark = 10
let hunger = 100
tried = 20
boolean1 = false
basic.forever(function () {
    if (hunger > 50) {
        hunger += 1
        basic.pause(1000)
    } else if (hunger < 50) {
        hunger += 2
        basic.pause(1000)
    }
})
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
basic.forever(function () {
    hunger += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (hunger < 0) {
        boolean1 = true
        basic.showIcon(IconNames.Skull)
        basic.pause(1000)
        basic.showIcon(IconNames.Ghost)
        basic.pause(1000)
        basic.showIcon(IconNames.Skull)
    }
})
basic.forever(function () {
    if (hunger < 0) {
        mark = -1
    }
})
basic.forever(function () {
    if (boolean1 > true) {
    	
    }
})
