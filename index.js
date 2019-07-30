export function OutsideControls(Glide, Components, Events) {
    const {
      controls: { scope, prevButton, nextButton, disableClass }
    } = Glide.settings;
    const [prev, next] = [
      scope.querySelector(prevButton),
      scope.querySelector(nextButton)
    ];
  
    function updateState(prev, next, start, end) {
      if (start) {
        prev.classList.add(disableClass);
      } else {
        prev.classList.remove(disableClass);
      }
  
      if (end) {
        next.classList.add(disableClass);
      } else {
        next.classList.remove(disableClass);
      }
    }
  
    const Controls = {
      init() {
        const start = Components.Run.isStart();
        const end = Components.Run.isEnd();
  
        updateState(prev, next, start, end);
        prev.addEventListener("click", () => {
          const start = Components.Run.isStart();
          if (!start) {
            Glide.go("<");
          }
        });
        next.addEventListener("click", () => {
          const end = Components.Run.isEnd();
          if (!end) {
            Glide.go(">");
          }
        });
      },
      update() {
        const start = Components.Run.isStart();
        const end = Components.Run.isEnd();
        updateState(prev, next, start, end);
      }
    };
  
    Events.on("mount.after", () => {
      Controls.init();
    });
  
    Events.on("move", () => {
      Controls.update();
    });
  
    return Controls;
}  