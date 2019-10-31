# Animation Spike Test

Spike test about figuring out how to animating draggable items in React Native.

Created both a class and a functional style solution. The functional solution does not always get the color of the square right. Don't know if this is a shortcoming in my implementation, or if the animation state handling in this example requires more fine tuned control than what is possible with hooks. It is not because the class version is prioritized because it is above the functional one.

It turned out that splitting up dragging an animating the square into two separate components was a nice solution. This means that there are two AnimatedXY values, but performance wise, it shouldn't matter, because the square is either animating or being dragged.

## To Do

- Highlight drop zones when they are hovered.
- When letting go over a drop zone, then don't snap back.
- Dropping the card moves it.
- Join PositionedSquare and DraggableSquare, since this is probably required to get the animation right when dropping a card.
