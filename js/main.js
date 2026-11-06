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
