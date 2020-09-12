import {
  Directive,





  ElementRef, EventEmitter,

  HostListener,
  Input, Output,





  Renderer2
} from "@angular/core";

@Directive({
  selector: '[longPress]'
})
export class LongPressDirective {

  private enabled = true;
  @Input() set longPress(enable: boolean) {
    if (enable === false) {
      this.endPress();
    }
    this.enabled = enable;
  }
  @Input() longPressDuration = 1000;
  @Input() longPressingInterval = 50;
  pressing: boolean;
  longPressing: boolean;
  timeout: any;
  interval: any;

  @Output()
  onLongPress = new EventEmitter();

  @Output()
  onLongPressing = new EventEmitter();

  @HostListener("touchstart", ["$event"])
  @HostListener("mousedown", ["$event"])
  onMouseDown(event) {
    if (this.enabled) {
      // this.renderer.addClass(this.elRef.nativeElement, "ripple-press");
      this.pressing = true;
      this.longPressing = false;
      this.timeout = setTimeout(() => {
        this.longPressing = true;
        this.onLongPress.emit(event);
        if (this.longPressingInterval > 0) {
          this.interval = setInterval(() => {
            this.onLongPressing.emit(event);
          }, this.longPressingInterval);
        }
      }, this.longPressDuration);
    }
  }

  @HostListener("touchend")
  @HostListener("mouseup")
  @HostListener("mouseleave")
  // @HostListener("touchmove")
  // @HostListener("mousemove")
  endPress() {
    try {
      clearTimeout(this.timeout);
      clearInterval(this.interval);
    } catch (e) {}
    this.longPressing = false;
    this.pressing = false;
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

}
