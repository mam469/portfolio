# Website test plan

Live site: https://mam469.github.io/portfolio/

These 30 priority cases cover all page links, phone/laptop layouts, keyboard use, JavaScript features, and Lighthouse Accessibility. No contact form exists, so valid/invalid form-input tests are not applicable.

Only the Home automated Accessibility result is supported by the supplied JSON (`lighthouse/lighthouse_report`): URL `https://mam469.github.io/portfolio/index.html?v=centered-home-1`, November 6, 2026, 8:22 PM EST (`2026-11-07T01:22:25.514Z`). Manual checks and alternate-theme audit remain unverified. Earlier simulated/HTTP checks do not constitute browser execution of the remaining cases.

| ID | Testing | Steps | Expected | Result |
| :--- | :--- | :--- | :--- | :--- |
| T1 | index.html navigation | Open index.html; click each of the seven navigation links. | Each link loads its corresponding page. | Not run |
| T2 | about.html navigation | Open about.html; click each of the seven navigation links. | Each link loads its corresponding page. | Not run |
| T3 | education.html navigation | Open education.html; click each of the seven navigation links. | Each link loads its corresponding page. | Not run |
| T4 | interests.html navigation | Open interests.html; click each of the seven navigation links. | Each link loads its corresponding page. | Not run |
| T5 | projects.html navigation | Open projects.html; click each of the seven navigation links. | Each link loads its corresponding page. | Not run |
| T6 | skills.html navigation | Open skills.html; click each of the seven navigation links. | Each link loads its corresponding page. | Not run |
| T7 | contact.html navigation | Open contact.html; click each of the seven navigation links. | Each link loads its corresponding page. | Not run |
| T8 | index.html layouts | Open index.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Not run |
| T9 | about.html layouts | Open about.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Not run |
| T10 | education.html layouts | Open education.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Not run |
| T11 | interests.html layouts | Open interests.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Not run |
| T12 | projects.html layouts | Open projects.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Not run |
| T13 | skills.html layouts | Open skills.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Not run |
| T14 | contact.html layouts | Open contact.html at 390×844 and 1366×768 in both themes. | Readable content; no horizontal scrolling or clipped controls. | Not run |
| T15 | index.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in index.html; test skip link. | Visible focus, working controls, logical order, no traps. | Not run |
| T16 | about.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in about.html; test skip link. | Visible focus, working controls, logical order, no traps. | Not run |
| T17 | education.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in education.html; test skip link. | Visible focus, working controls, logical order, no traps. | Not run |
| T18 | interests.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in interests.html; test skip link. | Visible focus, working controls, logical order, no traps. | Not run |
| T19 | projects.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in projects.html; test skip link. | Visible focus, working controls, logical order, no traps. | Not run |
| T20 | skills.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in skills.html; test skip link. | Visible focus, working controls, logical order, no traps. | Not run |
| T21 | contact.html keyboard | Use Tab/Shift+Tab, Enter, and Space on every control in contact.html; test skip link. | Visible focus, working controls, logical order, no traps. | Not run |
| T22 | Mobile menu | Open/close Menu on every page at phone width; press Escape, select a link, resize to laptop. | All links appear; Escape returns focus; closed links not focusable; desktop links visible. | Not run |
| T23 | Themes | Toggle Light mode on every page; navigate/reload; repeat with storage blocked. | Palettes update; preference persists where supported; no storage error. | Not run |
| T24 | Space Race | Start; move via keyboard/touch; collide; press Space and Play again. | Movement/scoring work; local loss overlay; clean restart and session best. | Not run |
| T25 | Pong | Use both players and touch controls; score both sides; pause/resume/restart. | Correct points and local overlays; pause freezes motion; restart clears scores. | Not run |
| T26 | Breakout | Launch; steer by keyboard/touch; hit bricks; miss/relaunch; clear all bricks; pause/resume/restart. | Brick count, loss/win overlays, relaunch, pause, and restart work. | Not run |
| T27 | Contact email | Activate Contact email link. | Targets mailto:mohammedmaharab@gmail.com; configured mail client handles link. | Not run |
| T28 | Home Accessibility | Read supplied Lighthouse JSON for live index.html. | Accessibility ≥90. | Pass — 100/100; 17 automated audits passed, 0 failed. |
| T29 | Other pages Accessibility | Run Lighthouse on About Me, Education, Interests, Projects, Skills, Contact in both themes; record scores. | Each page scores ≥90; measured scores recorded. | Not run — six page scores pending |
| T30 | Console and local opening | Inspect console on every live page while using all features; double-click index.html and test links/games locally. | No errors/missing assets; works without server. | Not run |

## Failures and retests

Record test ID, date, observed failure, fix/commit, and retest outcome here. Preserve failed attempts. No failed automated audits appear in the supplied Home report. Mark unexecuted cases Not run; change to Pass or Fail only after execution.

