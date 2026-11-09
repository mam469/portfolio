# Website test plan

Live site: https://mam469.github.io/portfolio/

| ID | Testing | Steps | Expected | Result |
| :--- | :--- | :--- | :--- | :--- |
| T1 | index.html navigation | Open index.html; click each of the seven navigation links. | Each link loads its corresponding page. | Pass |
| T2 | about.html navigation | Open about.html; click each of the seven navigation links. | Each link loads its corresponding page. | Pass |
| T3 | education.html navigation | Open education.html; click each of the seven navigation links. | Each link loads its corresponding page. | Pass |
| T4 | interests.html navigation | Open interests.html; click each of the seven navigation links. | Each link loads its corresponding page. | Pass |
| T5 | projects.html navigation | Open projects.html; click each of the seven navigation links. | Each link loads its corresponding page. | Pass |
| T6 | skills.html navigation | Open skills.html; click each of the seven navigation links. | Each link loads its corresponding page. | Pass |
| T7 | contact.html navigation | Open contact.html; click each of the seven navigation links. | Each link loads its corresponding page. | Pass |
| T8 | index.html layouts | Open index.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Pass |
| T9 | about.html layouts | Open about.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Pass |
| T10 | education.html layouts | Open education.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Pass |
| T11 | interests.html layouts | Open interests.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Pass |
| T12 | projects.html layouts | Open projects.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Pass |
| T13 | skills.html layouts | Open skills.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Pass |
| T14 | contact.html layouts | Open contact.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Pass |
| T15 | index.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in index.html; test skip link. | Visible focus, working controls, logical order, no traps. | Pass |
| T16 | about.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in about.html; test skip link. | Visible focus, working controls, logical order, no traps. | Pass |
| T17 | education.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in education.html; test skip link. | Visible focus, working controls, logical order, no traps. | Pass |
| T18 | interests.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in interests.html; test skip link. | Visible focus, working controls, logical order, no traps. | Pass |
| T19 | projects.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in projects.html; test skip link. | Visible focus, working controls, logical order, no traps. | Pass |
| T20 | skills.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in skills.html; test skip link. | Visible focus, working controls, logical order, no traps. | Pass |
| T21 | contact.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in contact.html; test skip link. | Visible focus, working controls, logical order, no traps. | Pass |
| T22 | Mobile menu | Open/close Menu on every page at phone width; press Escape, select a link, resize to laptop. | All links appear; Escape returns focus; closed links not focusable; desktop links visible. | Pass |
| T23 | Themes | Toggle Light mode on every page; navigate/reload; repeat with storage blocked. | Palettes update; preference persists where supported; no storage error. | Pass |
| T24 | Space Race | Start; move via keyboard/touch; collide; press Space and Play again. | Movement/scoring work; local loss overlay; clean restart and session best. | Pass |
| T25 | Pong | Use both players and touch controls; score both sides; pause/resume/restart. | Correct points and local overlays; pause freezes motion; restart clears scores. | Pass |
| T26 | Breakout | Launch; steer by keyboard/touch; hit bricks; miss/relaunch; clear all bricks; pause/resume/restart. | Brick count, loss/win overlays, relaunch, pause, and restart work. | Pass |
| T27 | Contact email | Activate Contact email link. | Targets mailto:mohammedmaharab@gmail.com; configured mail client handles link. | Pass |
| T28 | Home Accessibility | Read supplied Lighthouse JSON for live index.html. | Accessibility ≥90. | Pass |
| T29 | Other pages Accessibility | Run Lighthouse on About Me, Education, Interests, Projects, Skills, Contact in both themes; record scores. | Each page scores ≥90; measured scores recorded. | Pass |
| T30 | Console and local opening | Inspect console on every live page while using all features; double-click index.html and test links/games locally. | No errors/missing assets; works without server. | Pass |
