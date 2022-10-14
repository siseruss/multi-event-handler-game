controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Asteroid projectile`, fighterPlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    aliens.destroy(effects.ashes, 2000)
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
let aliens: Sprite = null
let projectile: Sprite = null
let fighterPlane: Sprite = null
scene.setBackgroundImage(assets.image`Universe`)
fighterPlane = sprites.create(img`
    5 8 . . . . . . . . . . . . . . 
    c 5 8 . . . . . . . . . . . . . 
    5 8 f c 8 . . . . . . . . . . . 
    8 c 8 f 5 8 . . . . . . . . . . 
    6 8 5 f 5 8 . . . . . . . . . . 
    5 f f f 5 c 8 . . . . . . . . . 
    f c 8 c 6 c 5 8 5 8 5 c c 5 . . 
    5 5 6 5 9 9 9 6 8 5 c f f 5 . . 
    f f f 5 9 f 9 9 f f f f f f f . 
    f f f 5 9 9 9 8 6 8 c 5 f 5 . . 
    5 6 6 b 6 8 c 5 8 8 5 c c 5 . . 
    6 8 5 6 8 5 8 . . . . . . . . . 
    8 6 6 8 b 8 . . . . . . . . . . 
    5 c 8 5 8 . . . . . . . . . . . 
    f 8 f . . . . . . . . . . . . . 
    8 8 . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(fighterPlane, 200, 200)
fighterPlane.setStayInScreen(true)
info.setLife(7)
game.onUpdateInterval(500, function () {
    aliens = sprites.create(assets.image`alien ship`, SpriteKind.Enemy)
    aliens.setVelocity(-50, 0)
    aliens.setPosition(160, randint(0, 120))
})
