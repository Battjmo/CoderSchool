## @keyframes


## animation timing function
    - ease - Specifies an animation with a slow start, then fast, then end slowly (this is default)
    - linear - Specifies an animation with the same speed from start to end
    - ease-in - Specifies an animation with a slow start
    -  ease-out - Specifies an animation with a slow end
    - ease-in-out - Specifies an animation with a slow start and end
    - cubic-bezier(n,n,n,n) - Lets you define your own values in a cubic-bezier function

## animation-fill-mode

    none - Default value. Animation will not apply any styles to the element before or after it is executing
    forwards - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)
    backwards - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period
    both - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions

## animation-direction
    
    normal 	Default value. The animation is played as normal (forwards) 	
    reverse 	The animation is played in reverse direction (backwards) 	
    alternate 	The animation is played forwards first, then backwards 	
    alternate-reverse 	The animation is played backwards first, then forwards 	
    initial 	Sets this property to its default value. Read about initial 	
    inherit 	Inherits this property from its parent element. Read about inherit




