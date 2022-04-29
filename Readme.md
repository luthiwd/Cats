Game rules:
Target: Avoiding Cthulus and capturing cans

Characters: 
Cat : You will be able to move around the screen, avoiding cthulus and picking up cans and congas. They give one point
Cthulu : Appear randomly from left to right
Conga : When you take it you can eliminate a Cthulu which will give 5 points.
Cans : Fall from the top and add one point in score.
# CATS

NOTE: https://luthiwd.github.io/Cats/

## Description
You are a cat and you must avoid getting caught. Collect cans of food and avoid the Cthulus. Ride the conga to eliminate one cthulu at a time.

## Main Functionalities
Movement with the mouse.
Cthulus appear randomly on the axis and move to the right.
Cans fall from the top.
The conga appears randomly.

# Proyect Structure

## main.js
    Structure of startgame.
    Movement.
    Buttons.
    Input Name.
### startGame
    Star game in middle of canvas, and 
## game.js
    Game ()
    gameRun () // Cat gets on the conga and could kill a cthulu
    gameOver () // If the cat collides with a cthulu you lose
    checkCollisions () with Cans & Chtulus
## cat.js
    Cat class with src parameter to change the image in condicional of the game () 
    drawCat () // Cat draw 
    Movements cat. Cat will move with the mouse
## cthulu.js
    drawCthulu () // Cthulu is draw.
    moveCthulu () // Cthulu moves left to right with interval
## redcthulu.js
    Is equal 
## cnas.js
    drawCans () // Cans is draws
    moveCans () // Cans move up to down.
## States and Transitions
    Start Screen, Game Screen, Final Screen.
# Tasks 

Trello
    https://trello.com/b/hijdJl9A/cats

Slides
Link https://docs.google.com/presentation/d/1x8EL21YL9Ufr3fvkT32t-A-3Fw4Up8obCXtyCzRS700/edit?usp=sharing