# Website testing

Date: November 6, 2026. Live base URL: https://mam469.github.io/portfolio/. Use current deployed pages. No report or screenshots are part of this task.

## Execution notes

Browser access failed before testing: browser host unavailable and native pipe unavailable. Real browser checks below are Not run; simulated logic and HTTP checks do not substitute for those checks. No Lighthouse score has been measured. Local static checks passed for links/assets, one h1 and one deferred script per page, image sizes below 500 KB, and representative text contrast above 4.5:1 in both themes.

Simulated checks passed: menu open/close, Escape/focus return, link close, desktop resize, theme toggle, saved preference, blocked storage; earlier game checks covered controls, collisions, scores, restart, pause/resume, and isolated overlays. These are logic checks, not live-browser results.

## Live-site test cases

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | index.html Navigation | Open index.html on live site; click every navigation link, returning after each. | All seven destinations load; exactly one current-page link is marked. | Not run — browser unavailable |
| T2 | index.html Phone layout | Open index.html at 390 x 844 and 320 x 568 in both themes; open menu. | Readable content, no horizontal scrolling, working controls; vertical scrolling allowed. | Not run — browser unavailable |
| T3 | index.html Laptop layout | Open index.html at 1366 x 768 in both themes. | Consistent layout, readable panels, all content available without clipping. | Not run — browser unavailable |
| T4 | index.html Keyboard | Open index.html; Tab and Shift+Tab through every link/button; activate with Enter/Space. | Visible focus, usable controls, skip link works, no keyboard trap. | Not run — browser unavailable |
| T5 | index.html Accessibility | Open index.html in Chrome DevTools; run Lighthouse Accessibility in both themes. | Score at least 90 in each theme; record measured scores and fix findings. | Not run — browser unavailable |
| T6 | about.html Navigation | Open about.html on live site; click every navigation link, returning after each. | All seven destinations load; exactly one current-page link is marked. | Not run — browser unavailable |
| T7 | about.html Phone layout | Open about.html at 390 x 844 and 320 x 568 in both themes; open menu. | Readable content, no horizontal scrolling, working controls; vertical scrolling allowed. | Not run — browser unavailable |
| T8 | about.html Laptop layout | Open about.html at 1366 x 768 in both themes. | Consistent layout, readable panels, all content available without clipping. | Not run — browser unavailable |
| T9 | about.html Keyboard | Open about.html; Tab and Shift+Tab through every link/button; activate with Enter/Space. | Visible focus, usable controls, skip link works, no keyboard trap. | Not run — browser unavailable |
| T10 | about.html Accessibility | Open about.html in Chrome DevTools; run Lighthouse Accessibility in both themes. | Score at least 90 in each theme; record measured scores and fix findings. | Not run — browser unavailable |
| T11 | education.html Navigation | Open education.html on live site; click every navigation link, returning after each. | All seven destinations load; exactly one current-page link is marked. | Not run — browser unavailable |
| T12 | education.html Phone layout | Open education.html at 390 x 844 and 320 x 568 in both themes; open menu. | Readable content, no horizontal scrolling, working controls; vertical scrolling allowed. | Not run — browser unavailable |
| T13 | education.html Laptop layout | Open education.html at 1366 x 768 in both themes. | Consistent layout, readable panels, all content available without clipping. | Not run — browser unavailable |
| T14 | education.html Keyboard | Open education.html; Tab and Shift+Tab through every link/button; activate with Enter/Space. | Visible focus, usable controls, skip link works, no keyboard trap. | Not run — browser unavailable |
| T15 | education.html Accessibility | Open education.html in Chrome DevTools; run Lighthouse Accessibility in both themes. | Score at least 90 in each theme; record measured scores and fix findings. | Not run — browser unavailable |
| T16 | interests.html Navigation | Open interests.html on live site; click every navigation link, returning after each. | All seven destinations load; exactly one current-page link is marked. | Not run — browser unavailable |
| T17 | interests.html Phone layout | Open interests.html at 390 x 844 and 320 x 568 in both themes; open menu. | Readable content, no horizontal scrolling, working controls; vertical scrolling allowed. | Not run — browser unavailable |
| T18 | interests.html Laptop layout | Open interests.html at 1366 x 768 in both themes. | Consistent layout, readable panels, all content available without clipping. | Not run — browser unavailable |
| T19 | interests.html Keyboard | Open interests.html; Tab and Shift+Tab through every link/button; activate with Enter/Space. | Visible focus, usable controls, skip link works, no keyboard trap. | Not run — browser unavailable |
| T20 | interests.html Accessibility | Open interests.html in Chrome DevTools; run Lighthouse Accessibility in both themes. | Score at least 90 in each theme; record measured scores and fix findings. | Not run — browser unavailable |
| T21 | projects.html Navigation | Open projects.html on live site; click every navigation link, returning after each. | All seven destinations load; exactly one current-page link is marked. | Not run — browser unavailable |
| T22 | projects.html Phone layout | Open projects.html at 390 x 844 and 320 x 568 in both themes; open menu. | Readable content, no horizontal scrolling, working controls; vertical scrolling allowed. | Not run — browser unavailable |
| T23 | projects.html Laptop layout | Open projects.html at 1366 x 768 in both themes. | Consistent layout, readable panels, all content available without clipping. | Not run — browser unavailable |
| T24 | projects.html Keyboard | Open projects.html; Tab and Shift+Tab through every link/button; activate with Enter/Space. | Visible focus, usable controls, skip link works, no keyboard trap. | Not run — browser unavailable |
| T25 | projects.html Accessibility | Open projects.html in Chrome DevTools; run Lighthouse Accessibility in both themes. | Score at least 90 in each theme; record measured scores and fix findings. | Not run — browser unavailable |
| T26 | skills.html Navigation | Open skills.html on live site; click every navigation link, returning after each. | All seven destinations load; exactly one current-page link is marked. | Not run — browser unavailable |
| T27 | skills.html Phone layout | Open skills.html at 390 x 844 and 320 x 568 in both themes; open menu. | Readable content, no horizontal scrolling, working controls; vertical scrolling allowed. | Not run — browser unavailable |
| T28 | skills.html Laptop layout | Open skills.html at 1366 x 768 in both themes. | Consistent layout, readable panels, all content available without clipping. | Not run — browser unavailable |
| T29 | skills.html Keyboard | Open skills.html; Tab and Shift+Tab through every link/button; activate with Enter/Space. | Visible focus, usable controls, skip link works, no keyboard trap. | Not run — browser unavailable |
| T30 | skills.html Accessibility | Open skills.html in Chrome DevTools; run Lighthouse Accessibility in both themes. | Score at least 90 in each theme; record measured scores and fix findings. | Not run — browser unavailable |
| T31 | contact.html Navigation | Open contact.html on live site; click every navigation link, returning after each. | All seven destinations load; exactly one current-page link is marked. | Not run — browser unavailable |
| T32 | contact.html Phone layout | Open contact.html at 390 x 844 and 320 x 568 in both themes; open menu. | Readable content, no horizontal scrolling, working controls; vertical scrolling allowed. | Not run — browser unavailable |
| T33 | contact.html Laptop layout | Open contact.html at 1366 x 768 in both themes. | Consistent layout, readable panels, all content available without clipping. | Not run — browser unavailable |
| T34 | contact.html Keyboard | Open contact.html; Tab and Shift+Tab through every link/button; activate with Enter/Space. | Visible focus, usable controls, skip link works, no keyboard trap. | Not run — browser unavailable |
| T35 | contact.html Accessibility | Open contact.html in Chrome DevTools; run Lighthouse Accessibility in both themes. | Score at least 90 in each theme; record measured scores and fix findings. | Not run — browser unavailable |
| T36 | Mobile menu | On every page at 390px, open/close Menu with click and keyboard; press Escape; activate a link; resize to laptop. | State matches aria-expanded; hidden links leave tab order; Escape returns focus; desktop links visible. | Not run — browser unavailable |
| T37 | Theme persistence | On every page toggle Light mode, navigate and reload; toggle back. | Both themes render correctly; choice persists and aria-pressed matches. | Not run — browser unavailable |
| T38 | Blocked storage | Block site storage then toggle themes and navigate. | No script error; toggle works for current page even if preference cannot persist. | Not run — browser unavailable |
| T39 | No JavaScript | Disable JS and reload every page. | Navigation stays visible, main content accessible, game noscript messages visible. | Not run — browser unavailable |
| T40 | Space Race | Start, steer by arrows/A/D and touch; collide; press Space; repeat with Play again. | Movement, score, collision message and restart work; overlay stays in Space Race. | Not run — browser unavailable |
| T41 | Pong | Start; use W/S and arrows and touch; score on each side; pause/resume; restart. | Correct score/point overlay, paddle bounds, paused ball, clean restart. | Not run — browser unavailable |
| T42 | Breakout | Start; launch with Space/button; steer, hit bricks, miss, relaunch; clear all bricks; restart. | Brick count updates, misses and win show local overlays; restart restores 112 bricks. | Not run — browser unavailable |
| T43 | Game focus and input | Switch between games and Tab away; hold/release touch controls; change tabs. | No stuck movement or scrolling from game arrows; input does not move other games. | Not run — browser unavailable |
| T44 | Console | On every page inspect console while using menu, themes, and all game controls. | No uncaught errors, missing asset errors, or warnings requiring fixes. | Not run — browser unavailable |
| T45 | Local opening | Double-click index.html; visit every page; test menu/themes and all games without a server. | Relative assets load and all browser-local features work under file://. | Not run — browser unavailable |
| T46 | Contact email | Open Contact and activate email link. | Link targets mailto:mohammedmaharab@gmail.com; configured email client handles it. | Not run — browser unavailable |
| T47 | Home footer | Open Home and use Back to top; check all other pages. | Home anchor works; no footer bar on other pages. | Not run — browser unavailable |

## Live HTTP audit

| Page | HTTP | Navigation | New controls deployed |
| --- | --- | --- | --- |
| index.html | 200 | Pass — all seven links | Not yet — deployment pending |
| about.html | 200 | Pass — all seven links | Not yet — deployment pending |
| education.html | 200 | Pass — all seven links | Not yet — deployment pending |
| interests.html | 200 | Pass — all seven links | Not yet — deployment pending |
| projects.html | 200 | Pass — all seven links | Not yet — deployment pending |
| skills.html | 200 | Pass — all seven links | Not yet — deployment pending |
| contact.html | 200 | Pass — all seven links | Not yet — deployment pending |
Asset HTTP pass: `css/styles.css` (200).
Asset HTTP pass: `images/favicon.svg` (200).
Asset HTTP pass: `images/tech.jpg` (200).
Asset HTTP pass: `images/soccer.jpg` (200).
Asset HTTP pass: `images/minecraft.jpg` (200).
Asset HTTP pass: `js/main.js` (200).
Current light-theme CSS detected: False. Current menu/theme JS detected: False.
Verified by HTTP on November 6, 2026. Navigation links were parsed and destinations fetched; actual clicking, rendering, and Lighthouse were not tested.

## Failures and retests

Keep failed results here rather than overwriting them. Record test ID, date, observed failure, fix/commit, and retest outcome. Browser checks have not been executed, so no pass is claimed for them.

### Deployment retest

All seven live pages now return the new menu/theme markup and versioned assets. Initial audit saw the previous deployment; retest passed after Pages updated. Browser interaction and Lighthouse remain Not run.

Retest also confirmed the live light-theme CSS and menu/theme JavaScript are the current versions (HTTP 200).
