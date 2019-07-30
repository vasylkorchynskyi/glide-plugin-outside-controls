# Glide Plugin Outside Controls

## Use
```
new Glide(sliderRoot, {
        type: "slider",
        // controls optionss
        controls: {
          scope: sliderRoot.parentNode,
          prevButton: "[data-control='prev']",
          nextButton: "[data-control='next']",
          disableClass: "is-disabled"
        }
      }).mount({
        // Add mount
        OutsideControls
      });
    });
```