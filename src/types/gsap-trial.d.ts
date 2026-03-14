declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element | Array<string | Element>, vars?: Record<string, unknown>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, unknown>): ScrollSmoother;
    static refresh(safe?: boolean): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(target: string | number | Element | null, smooth?: boolean, position?: string): void;
    kill(): void;
  }
}
