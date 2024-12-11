# ScrollTo Directive Documentation

## Table of Contents

* [1. Overview](#1-overview)
* [2. Directive Definition](#2-directive-definition)
* [3. `currentYPosition()` Function](#3-currentyposition-function)
* [4. `elmYPosition()` Function](#4-elmyposition-function)
* [5. `smoothScroll()` Function](#5-smoothscroll-function)


## 1. Overview

The `scrollTo` directive provides smooth scrolling functionality to a specified element on a webpage when the directive's host element is clicked.  It handles cross-browser compatibility for retrieving the current scroll position and element position, and implements a smooth scrolling algorithm to avoid jarring transitions.

## 2. Directive Definition

The directive is defined using Angular's `@Directive` decorator, targeting elements with the attribute `[scrollTo]`. The `scrollTo` attribute value should be the ID of the element to scroll to.

```typescript
@Directive({ selector: '[scrollTo]' })
export class ScrollToDirective implements OnInit {
  constructor(@Attribute('scrollTo') public elmID: string, private el: ElementRef) { }
  ngOnInit() { }
  // ... other functions ...
}
```

## 3. `currentYPosition()` Function

This function determines the current vertical scroll position of the page. It accounts for variations in how different browsers report this information:

| Browser             | Method                                         |
|----------------------|-------------------------------------------------|
| Firefox, Chrome, Opera, Safari | `self.pageYOffset`                            |
| IE6 (standards mode) | `document.documentElement.scrollTop`            |
| IE6, 7, 8           | `document.body.scrollTop`                       |

If none of these methods return a value, it defaults to 0.

```typescript
  currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  };
```

## 4. `elmYPosition()` Function

This function calculates the vertical position of an element with a given ID relative to the top of the document.  It iterates through the element's offset parents, accumulating their `offsetTop` values to account for nested positioning.

```typescript
  elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node: any = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }
    return y;
  };
```

## 5. `smoothScroll()` Function

This function performs the smooth scrolling animation.  The algorithm works as follows:

1. **Determine Scroll Distance:** It calculates the distance between the current scroll position (`startY`) and the target element's position (`stopY`).

2. **Handle Short Distances:** If the distance is less than 100 pixels, it uses the browser's built-in `scrollTo` function for immediate scrolling.

3. **Calculate Speed and Step:** For longer distances, it calculates a `speed` and `step` value to control the animation's smoothness. The speed is capped at 20 to prevent excessively fast scrolling.

4. **Iterative Scrolling:** It uses a `for` loop and `setTimeout` to incrementally scroll the page towards the target position.  Each iteration moves the scroll position by `step` pixels, with a delay determined by `speed`. The `leapY` variable ensures the final scroll position is exactly at `stopY`.

5. **Direction Handling:** The code handles scrolling both up and down by adjusting the loop's increment/decrement and the `leapY` calculation.

```typescript
  @HostListener('click', ['$event'])
  smoothScroll() {
    if (!this.elmID)
      return;
    var startY = this.currentYPosition();
    var stopY = this.elmYPosition(this.elmID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    var speed = Math.round(distance / 50);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (var i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
    return false;
  };
```
