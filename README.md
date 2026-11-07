# Maharab Mohammed's Portfolio

Personal portfolio for my Electrical and Computer Engineering Technology studies at New Jersey Institute of Technology, interests, projects, and developing skills.

- Live website: https://mam469.github.io/portfolio/
- Repository: https://github.com/mam469/portfolio

## View locally

Double-click `index.html` to open it in a browser, or open the folder in VS Code and use Live Preview. No installation, backend, or build step is required. Keep the HTML files, `css`, `js`, and `images` together so relative paths work.

## Pages and features

Home has a centered introduction over an AI-generated voxel workshop background. About Me, Education, Interests, Projects, Skills, and Contact are linked from every page. Contact opens an email application through an email link; there is no form or server.

The default style uses near-black backgrounds, vibrant green accents, monospace text, rounded panels, and pill navigation. Light mode switches to a light green palette. The preference is saved when browser storage is available; the control still works if storage is blocked. The Menu button expands navigation on screens up to 760px wide. Escape closes it and returns focus to the button. Navigation remains visible without JavaScript.

Projects contains three playable games:

| Game | Controls | Features |
| --- | --- | --- |
| Space Race | Left/Right or A/D; touch movement buttons | Dodge asteroids, session best score, local game-over overlay; Space restarts after a loss while focused. |
| Pong | Left player W/S; right player Up/Down; touch buttons | Two-player scoring, point overlays, pause/resume, restart. |
| Breakout | Left/Right or A/D; Space or Launch ball; touch buttons | 112 bricks, cleared-brick counter, relaunch after misses, win overlay, pause/resume, restart. |

Start each game before playing. Keyboard controls apply when its canvas has focus; Tab leaves the game. Game messages stay within their own canvas region. Canvas gameplay is visual and is not fully accessible to nonvisual players. Scores last only for the current page session.

## Testing

See `TESTING.md` for the test plan, actual results, and outstanding checks. Local structure, asset paths, image sizes, palette contrast, and simulated JavaScript behavior were checked. Browser tools were unavailable during the latest verification, so visual phone/laptop checks, real keyboard walkthroughs, console inspection, local-file gameplay, and Lighthouse remain Not run. No screenshots or report are included in this task.

## Deployment

GitHub Pages publishes from `main` at the repository root. Commit and push focused changes, then allow Pages to deploy. Stylesheets and scripts use versioned URLs to reduce stale-cache issues. Hard-refresh if an old page persists.

## Credits and acknowledgments

Built with plain HTML, CSS, and JavaScript with Codex assistance. Skills descriptions acknowledge beginner-level, assisted experience. Space Race was adapted from the supplied Python/Pyglet project, using its ship artwork. Pong and Breakout were adapted from supplied HTML/JavaScript examples; their original authors and license details were not supplied. The Home background was generated with OpenAI image generation. Interests images were supplied by the portfolio owner; the Minecraft artwork depicts Minecraft branding. The favicon is a cream MM monogram on forest green.