// Each game keeps separate state and responds only to its own controls.
const canvas = document.querySelector('#space-race');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const startButton = document.querySelector('#start-game');
  const status = document.querySelector('#game-status');
  const scoreDisplay = document.querySelector('#game-score');
  const keys = new Set();
  const shipImage = new Image();
  shipImage.src = 'images/space-race-ship.png';
  let running = false;
  let score = 0;
  let best = 0;
  let shipX = 320;
  let asteroids = [];
  let lastTime = 0;
  let spawnTime = 0;
  let frameId;
  const stars = Array.from({ length: 45 }, () => ({ x: Math.random() * 640, y: Math.random() * 400 }));

  function draw() {
    ctx.fillStyle = '#030704';
    ctx.fillRect(0, 0, 640, 400);
    ctx.fillStyle = '#91c49a';
    for (const star of stars) ctx.fillRect(star.x, star.y, 2, 2);
    for (const rock of asteroids) {
      ctx.fillStyle = '#87958a';
      ctx.beginPath();
      ctx.arc(rock.x, rock.y, rock.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#4a5b4e';
      ctx.beginPath();
      ctx.arc(rock.x - 5, rock.y - 4, rock.r * 0.3, 0, Math.PI * 2);
      ctx.fill();
    }
    if (shipImage.complete && shipImage.naturalWidth) {
      ctx.drawImage(shipImage, shipX - 22, 338, 44, 44);
    } else {
      ctx.fillStyle = '#39ff14';
      ctx.beginPath();
      ctx.moveTo(shipX, 338);
      ctx.lineTo(shipX - 18, 382);
      ctx.lineTo(shipX + 18, 382);
      ctx.fill();
    }
  }

  function endGame() {
    running = false;
    keys.clear();
    startButton.textContent = 'Play again';
    status.textContent = `Collision! Final score: ${Math.floor(score)}. Press Play again to restart.`;
  }

  function tick(time) {
    if (!running) return;
    const dt = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;
    shipX += ((keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0)) * 340 * dt;
    shipX = Math.max(22, Math.min(618, shipX));
    score += dt * 10;
    best = Math.max(best, Math.floor(score));
    scoreDisplay.textContent = `Score: ${Math.floor(score)} · Session best: ${best}`;
    spawnTime += dt;
    if (spawnTime >= Math.max(0.25, 0.8 - score / 1000)) {
      spawnTime = 0;
      const r = 14 + Math.random() * 12;
      asteroids.push({ x: r + Math.random() * (640 - 2 * r), y: -r, r });
    }
    for (const star of stars) star.y = (star.y + dt * 70) % 400;
    for (const rock of asteroids) {
      rock.y += (150 + score * 0.5) * dt;
      const nearX = Math.max(shipX - 18, Math.min(rock.x, shipX + 18));
      const nearY = Math.max(342, Math.min(rock.y, 378));
      if ((rock.x - nearX) ** 2 + (rock.y - nearY) ** 2 < rock.r ** 2) endGame();
    }
    asteroids = asteroids.filter(rock => rock.y < 440);
    draw();
    if (running) frameId = requestAnimationFrame(tick);
  }

  startButton.addEventListener('click', () => {
    cancelAnimationFrame(frameId);
    keys.clear();
    shipX = 320;
    asteroids = [];
    score = 0;
    spawnTime = 0;
    scoreDisplay.textContent = `Score: 0 · Session best: ${best}`;
    running = true;
    startButton.textContent = 'Restart game';
    status.textContent = 'Dodge the asteroids. Use Left and Right arrows, A and D, or the movement buttons.';
    canvas.focus();
    lastTime = performance.now();
    frameId = requestAnimationFrame(tick);
  });

  function direction(key) {
    if (key === 'ArrowLeft' || key.toLowerCase() === 'a') return 'left';
    if (key === 'ArrowRight' || key.toLowerCase() === 'd') return 'right';
  }
  canvas.addEventListener('keydown', event => {
    const move = direction(event.key);
    if (move) { event.preventDefault(); if (running) keys.add(move); }
  });
  canvas.addEventListener('keyup', event => { keys.delete(direction(event.key)); });
  canvas.addEventListener('blur', () => keys.clear());
  window.addEventListener('blur', () => keys.clear());
  document.addEventListener('visibilitychange', () => {
    keys.clear();
    lastTime = performance.now();
  });
  for (const button of document.querySelectorAll('[data-move]')) {
    const move = button.dataset.move;
    button.addEventListener('pointerdown', event => {
      if (!running) return;
      button.setPointerCapture(event.pointerId);
      keys.add(move);
    });
    for (const eventName of ['pointerup', 'pointercancel', 'lostpointercapture', 'blur']) {
      button.addEventListener(eventName, () => keys.delete(move));
    }
    button.addEventListener('keydown', event => {
      if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); if (running) keys.add(move); }
    });
    button.addEventListener('keyup', event => {
      if (event.key === ' ' || event.key === 'Enter') keys.delete(move);
    });
  }
  shipImage.addEventListener('load', () => { if (!running) draw(); });
  draw();
}

const pongCanvas = document.querySelector('#pong');
if (pongCanvas) {
  const context = pongCanvas.getContext('2d');
  const start = document.querySelector('#pong-start');
  const pause = document.querySelector('#pong-pause');
  const status = document.querySelector('#pong-status');
  const scoreLabel = document.querySelector('#pong-score');
  const grid = 15;
  const paddleHeight = 75;
  const keys = new Set();
  const left = { x: 30, y: 255, width: grid, height: paddleHeight };
  const right = { x: 705, y: 255, width: grid, height: paddleHeight };
  const ball = { x: 375, y: 292, width: grid, height: grid, dx: 300, dy: -300 };
  let leftScore = 0;
  let rightScore = 0;
  let running = false;
  let previous = 0;
  let serveDelay = 0;
  let frame;

  function collides(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
  }
  function serve(direction) {
    ball.x = 375;
    ball.y = 292;
    ball.dx = direction * 300;
    ball.dy = Math.random() < 0.5 ? -300 : 300;
    serveDelay = 0.4;
  }
  function draw() {
    context.fillStyle = '#030704';
    context.fillRect(0, 0, 750, 585);
    context.fillStyle = '#287d25';
    context.fillRect(0, 0, 750, grid);
    context.fillRect(0, 570, 750, grid);
    for (let y = grid; y < 570; y += 30) context.fillRect(370, y, 10, 15);
    context.fillStyle = '#39ff14';
    for (const item of [left, right, ball]) context.fillRect(item.x, item.y, item.width, item.height);
  }
  function loop(time) {
    if (!running) return;
    const dt = Math.min((time - previous) / 1000, 0.04);
    previous = time;
    left.y += ((keys.has('s') ? 1 : 0) - (keys.has('w') ? 1 : 0)) * 360 * dt;
    right.y += ((keys.has('ArrowDown') ? 1 : 0) - (keys.has('ArrowUp') ? 1 : 0)) * 360 * dt;
    for (const paddle of [left, right]) paddle.y = Math.max(grid, Math.min(495, paddle.y));
    if (serveDelay > 0) serveDelay -= dt;
    else {
      ball.x += ball.dx * dt;
      ball.y += ball.dy * dt;
      if (ball.y < grid) { ball.y = grid; ball.dy = Math.abs(ball.dy); }
      if (ball.y > 555) { ball.y = 555; ball.dy = -Math.abs(ball.dy); }
      if (ball.dx < 0 && collides(ball, left)) { ball.dx = Math.abs(ball.dx); ball.x = left.x + left.width; }
      if (ball.dx > 0 && collides(ball, right)) { ball.dx = -Math.abs(ball.dx); ball.x = right.x - ball.width; }
      if (ball.x + ball.width < 0 || ball.x > 750) {
        const rightWon = ball.x < 0;
        if (rightWon) rightScore++; else leftScore++;
        scoreLabel.textContent = `Left: ${leftScore} · Right: ${rightScore}`;
        status.textContent = `${rightWon ? 'Right' : 'Left'} player scores! Next serve coming up.`;
        serve(rightWon ? -1 : 1);
      }
    }
    draw();
    frame = requestAnimationFrame(loop);
  }
  start.addEventListener('click', () => {
    cancelAnimationFrame(frame);
    keys.clear();
    left.y = right.y = 255;
    leftScore = rightScore = 0;
    scoreLabel.textContent = 'Left: 0 · Right: 0';
    serve(1);
    running = true;
    start.textContent = 'Restart Pong';
    pause.disabled = false;
    pause.textContent = 'Pause';
    status.textContent = 'Game started. Left: W/S. Right: Up/Down.';
    pongCanvas.focus();
    previous = performance.now();
    frame = requestAnimationFrame(loop);
  });
  function pauseGame() {
    running = false;
    cancelAnimationFrame(frame);
    keys.clear();
    pause.textContent = 'Resume';
    status.textContent = 'Pong paused.';
  }
  pause.addEventListener('click', () => {
    if (running) pauseGame();
    else {
      running = true;
      pause.textContent = 'Pause';
      status.textContent = 'Pong resumed.';
      previous = performance.now();
      pongCanvas.focus();
      frame = requestAnimationFrame(loop);
    }
  });
  function controlKey(key) { return key.length === 1 ? key.toLowerCase() : key; }
  pongCanvas.addEventListener('keydown', event => {
    const key = controlKey(event.key);
    if (['w', 's', 'ArrowUp', 'ArrowDown'].includes(key)) {
      event.preventDefault();
      if (running) keys.add(key);
    }
  });
  pongCanvas.addEventListener('keyup', event => keys.delete(controlKey(event.key)));
  pongCanvas.addEventListener('blur', () => keys.clear());
  window.addEventListener('blur', () => { if (running) pauseGame(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && running) pauseGame(); });
  for (const button of document.querySelectorAll('[data-pong]')) {
    const key = button.dataset.pong;
    button.addEventListener('pointerdown', event => {
      if (!running) return;
      button.setPointerCapture(event.pointerId);
      keys.add(key);
    });
    for (const name of ['pointerup', 'pointercancel', 'lostpointercapture', 'blur']) button.addEventListener(name, () => keys.delete(key));
    button.addEventListener('keydown', event => {
      if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); if (running) keys.add(key); }
    });
    button.addEventListener('keyup', event => { if (event.key === ' ' || event.key === 'Enter') keys.delete(key); });
  }
  draw();
}

const breakoutCanvas = document.querySelector('#breakout');
if (breakoutCanvas) {
  const ctx = breakoutCanvas.getContext('2d');
  const start = document.querySelector('#breakout-start');
  const launch = document.querySelector('#breakout-launch');
  const pause = document.querySelector('#breakout-pause');
  const status = document.querySelector('#breakout-status');
  const score = document.querySelector('#breakout-score');
  const keys = new Set();
  const paddle = { x: 170, y: 440, width: 60, height: 12 };
  const ball = { x: 196, y: 430, width: 8, height: 8, dx: 0, dy: 0 };
  let bricks = [];
  let running = false;
  let started = false;
  let previous = 0;
  let frame;
  function makeBricks() {
    const colors = ['#ff7186', '#ffa54a', '#39ff14', '#f5e56b'];
    bricks = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 14; col++) {
        bricks.push({ x: 12 + 27 * col, y: 96 + 14 * row, width: 25, height: 12, color: colors[Math.floor(row / 2)] });
      }
    }
  }
  function resetBall() { ball.x = paddle.x + 26; ball.y = 430; ball.dx = ball.dy = 0; }
  function collides(a, b) { return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y; }
  function draw() {
    ctx.fillStyle = '#030704'; ctx.fillRect(0, 0, 400, 500);
    ctx.fillStyle = '#287d25';
    ctx.fillRect(0, 0, 400, 12); ctx.fillRect(0, 0, 12, 500); ctx.fillRect(388, 0, 12, 500);
    for (const brick of bricks) { ctx.fillStyle = brick.color; ctx.fillRect(brick.x, brick.y, brick.width, brick.height); }
    ctx.fillStyle = '#39ff14'; ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = '#cfffd7'; ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
  }
  function launchBall() {
    if (!running || ball.dx || ball.dy) return;
    ball.dx = 150; ball.dy = -180;
    status.textContent = 'Break the bricks. Keep the ball above the paddle!';
  }
  function loop(time) {
    if (!running) return;
    const dt = Math.min((time - previous) / 1000, 0.025); previous = time;
    paddle.x += ((keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0)) * 280 * dt;
    paddle.x = Math.max(12, Math.min(328, paddle.x));
    if (!ball.dx && !ball.dy) resetBall();
    const oldY = ball.y;
    ball.x += ball.dx * dt; ball.y += ball.dy * dt;
    if (ball.x < 12) { ball.x = 12; ball.dx = Math.abs(ball.dx); }
    if (ball.x > 380) { ball.x = 380; ball.dx = -Math.abs(ball.dx); }
    if (ball.y < 12) { ball.y = 12; ball.dy = Math.abs(ball.dy); }
    if (ball.dy > 0 && collides(ball, paddle)) {
      ball.y = paddle.y - ball.height; ball.dy = -Math.abs(ball.dy);
      ball.dx = ((ball.x + 4 - (paddle.x + 30)) / 30) * 190;
    }
    for (let i = 0; i < bricks.length; i++) {
      const brick = bricks[i];
      if (!collides(ball, brick)) continue;
      if (oldY + ball.height <= brick.y || oldY >= brick.y + brick.height) ball.dy *= -1;
      else ball.dx *= -1;
      bricks.splice(i, 1);
      score.textContent = `Bricks cleared: ${112 - bricks.length} / 112`;
      if (!bricks.length) {
        running = false; keys.clear(); launch.disabled = pause.disabled = true;
        status.textContent = 'You cleared every brick! Press Start / restart to play again.';
      }
      break;
    }
    if (ball.y > 500) { resetBall(); status.textContent = 'Missed! Press Space or Launch ball to try again.'; }
    draw();
    if (running) frame = requestAnimationFrame(loop);
  }
  start.addEventListener('click', () => {
    cancelAnimationFrame(frame); keys.clear(); makeBricks(); paddle.x = 170; resetBall();
    started = running = true; launch.disabled = pause.disabled = false; pause.textContent = 'Pause';
    score.textContent = 'Bricks cleared: 0 / 112'; status.textContent = 'Press Space or Launch ball to serve.';
    breakoutCanvas.focus(); previous = performance.now(); frame = requestAnimationFrame(loop);
  });
  launch.addEventListener('click', () => { launchBall(); breakoutCanvas.focus(); });
  function pauseGame() { running = false; cancelAnimationFrame(frame); keys.clear(); pause.textContent = 'Resume'; status.textContent = 'Breakout paused.'; launch.disabled = true; }
  pause.addEventListener('click', () => {
    if (!started || !bricks.length) return;
    if (running) pauseGame();
    else { running = true; launch.disabled = false; pause.textContent = 'Pause'; status.textContent = 'Breakout resumed.'; breakoutCanvas.focus(); previous = performance.now(); frame = requestAnimationFrame(loop); }
  });
  function direction(key) {
    if (key === 'ArrowLeft' || key.toLowerCase() === 'a') return 'left';
    if (key === 'ArrowRight' || key.toLowerCase() === 'd') return 'right';
  }
  breakoutCanvas.addEventListener('keydown', event => {
    const move = direction(event.key);
    if (move || event.key === ' ') { event.preventDefault(); if (running && move) keys.add(move); if (event.key === ' ') launchBall(); }
  });
  breakoutCanvas.addEventListener('keyup', event => keys.delete(direction(event.key)));
  breakoutCanvas.addEventListener('blur', () => keys.clear());
  window.addEventListener('blur', () => { if (running) pauseGame(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && running) pauseGame(); });
  for (const button of document.querySelectorAll('[data-breakout]')) {
    const move = button.dataset.breakout;
    button.addEventListener('pointerdown', event => { if (running) { button.setPointerCapture(event.pointerId); keys.add(move); } });
    for (const name of ['pointerup', 'pointercancel', 'lostpointercapture', 'blur']) button.addEventListener(name, () => keys.delete(move));
    button.addEventListener('keydown', event => { if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); if (running) keys.add(move); } });
    button.addEventListener('keyup', event => { if (event.key === ' ' || event.key === 'Enter') keys.delete(move); });
  }
  makeBricks(); draw();
}
