# Animation Spike Test

Spike test about figuring out how to animating draggable items in React Native.

Had both a class and a functional style DraggableSquare component. The functional solution would not always get the color of the square right. Don't know if this was a shortcoming in my implementation, or if the animation state handling in this example requires more fine tuned control than what is possible with hooks, but ended up keeping the class version.

I initially thought that splitting up dragging and animating the square into two separate components was a nice solution. This meant that there were two `AnimatedXY` values. Performance wise this shouldn't matter, because the square is either animating or being dragged. The was however one severe shortcoming: At the moment the square is let go, when it's hovering over a new position, the draggable AnimatedXY value has to reset to `0,0` and the move `AnimatedXY` has to be initialized with that value. This would almost certainly have resulted in a brief flash, where the square is restored to the drag start position. It might have been possible to avoid the flash by keeping the drag end position, and then calculating an interim position that the square would move to, and once it was in place, the drag could be reset to 0,0 while setting the position to the correct one. I ended up merging the two separate components into a single one, before going down this rabbit hole.

It turned out that it's possible to set the x and y positions directly in `onPanResponderMove` instead of using `Animated.event()`. I've read the [documentation for `Animated.event()`](https://facebook.github.io/react-native/docs/animated.html#event) several times now, but I still don't understand what the method does. It found it much easier to understand the code without the helper method. Without `Animated.event()` is was a breeze to take account of start position, `this.props.destination`.

## To Do

- Bug: The square flashes lime when moving from one square to another because right after the move is initiated the square it left becomes a drop zone.
