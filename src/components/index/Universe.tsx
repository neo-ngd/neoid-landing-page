import { ComponentProps, FC, useLayoutEffect, useRef } from 'react';

class Star {
  static random(canvasWidth: number, canvasHeight: number): Star {
    return new Star(
      Math.random(),
      Math.random(),
      Math.random() * canvasWidth,
      Math.random() * canvasHeight,
      (Math.random() * 2 - 1) * 0.02,
      (Math.random() * 2 - 1) * 0.02,
      canvasWidth,
      canvasHeight,
    );
  }

  constructor(
    public radius: number,
    public opacity: number,
    public x: number,
    public y: number,
    public velocityX: number,
    public velocityY: number,
    public canvasWidth: number,
    public canvasHeight: number,
  ) {}

  update(duration: number, canvasWidth: number, canvasHeight: number) {
    this.x = (this.x / this.canvasWidth) * canvasWidth;
    this.y = (this.y / this.canvasHeight) * canvasHeight;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.x += this.velocityX * duration;
    this.y += this.velocityY * duration;

    if (this.x < 0 || this.x > this.canvasWidth) {
      this.velocityX = -this.velocityX;
      this.x = this.x < 0 ? -this.x : 2 * this.canvasWidth - this.x;
    }
    if (this.y < 0 || this.y > this.canvasHeight) {
      this.velocityY = -this.velocityY;
      this.y = this.y < 0 ? -this.y : 2 * this.canvasHeight - this.y;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = `rgba(255,255,255,${this.opacity}`;
    context.fill();
  }
}

export const Universe: FC<ComponentProps<'canvas'>> = props => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const stars: Star[] = [];
    let lastTime = performance.now();
    let handle = 0;
    const observer = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      canvas.width = width;
      canvas.height = height;

      if (stars.length === 0) {
        const starsCount = Math.round(width * height * 0.0004);
        for (let i = 0; i < starsCount; i++) {
          stars.push(Star.random(width, height));
        }
      }
      const render = () => {
        const time = performance.now();
        stars.forEach(star => star.update(time - lastTime, width, height));
        lastTime = time;
        const context = canvas.getContext('2d');
        if (context) {
          context.clearRect(0, 0, width, height);
          stars.forEach(star => star.draw(context));
        }
        cancelAnimationFrame(handle);
        handle = requestAnimationFrame(render);
      };
      render();
    });

    observer.observe(canvas);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(handle);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};
