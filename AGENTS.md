# Personal Portfolio

## Purpose and scope

Build a personal portfolio that showcases my background, education, interests, projects, and technical skills. This is a public class assignment deployed through GitHub Pages at the `/portfolio/` repository path.

Work on one small, requested task at a time. Do not build the entire website in one task. Keep code simple enough for me to review and explain during a three-minute class demo. Explain changes and testing briefly after each task.

## Pages and content

Create five separate pages, with all five linked from the navigation on every page:

- `index.html`: Home, with only the centered greeting “Hello, I’m Maharab Mohammed” in the main content and navigation to the other pages.
- `education.html`: Education and career goals, including my school, major, labs, and club aspirations.
- `interests.html`: Technology, soccer, and Minecraft interests.
- `about.html`: About Me, with my background, education, and interests.
- `projects.html`: At least three real projects, each with a description, image or screenshot, and a relevant link when available. Class projects count.
- `skills.html`: Technical skills and honest descriptions of my proficiency.
- `contact.html`: Approved public contact information, preferably an email link.

Ask me for missing personal details, project content, screenshots, and contact information when needed. Do not invent my biography, qualifications, projects, or contact details. Do not leave placeholder text, empty sections, or fake links in completed pages.

## Design direction

Use a hacker-inspired terminal style with near-black backgrounds, electric green headings and accents, monospace type, angular panels, generous spacing, and consistent layouts across all pages. The design direction is:

- Background: near-black (`#030704`). Use the voxel workshop illustration as the Home page background with a strong dark gradient overlay.
- Main text: pale green (`#CFFFD7`).
- Accent and links: electric green (`#39FF14`), with clearly visible hover and keyboard focus states. Use near-black text on filled green buttons.
- Surfaces: black-green (`#071009`, `#0A170B`, `#09130A`), with green borders (`#287D25`), small corner radii, and subtle green panel shadows.
- Keep content panels opaque so text remains readable over the Home page background. The background image is decorative; keep essential information in HTML.
- Home is an exception to panel styling: show the centered greeting without a box, using a subtle text shadow over the darkened background. Every page has centered navigation in a pill-shaped header with no name badge. Only Home has a matching pill-shaped footer with a centered back-to-top link. About Me, Education, and Interests use compact spacing to fit typical laptop screens; allow natural scrolling on smaller screens or when zoomed rather than clipping content.
- Use bright green selectively for headings, links, buttons, and small accents. Avoid glowing body text and excessive effects.
- Dark is the default theme. A Light mode toggle offers an accessible light green palette and saves the choice when browser storage is available. On screens at or below 760px, a Menu button expands the navigation; without JavaScript all navigation links remain visible.
- Fonts: a local monospace stack, `"Cascadia Code", Consolas, "Courier New", monospace`; no external font dependency.
- Layout: a centered content area, readable line lengths, and project cards that stack on small screens.
- About Me, Education, Interests, and Contact center their content and text horizontally, and center the main content vertically below navigation when viewport space allows. Preserve natural scrolling when content exceeds the viewport.

Verify contrast for actual color combinations. Use mobile-first CSS and media queries so every page works on phone and laptop screens without horizontal scrolling. Update this file if we change the design.

## Technical rules

- Use only plain HTML5, CSS, and JavaScript. No React, Vue, Tailwind, Bootstrap, other frameworks, npm, package managers, or build tools.
- This must remain a static site: no server code, databases, logins, or services requiring secrets.
- The site must work when `index.html` is opened by double-clicking it, as well as on GitHub Pages.
- Use relative paths such as `about.html`, `css/styles.css`, `js/main.js`, and `images/project-name.webp`. Do not use root-relative paths beginning with `/` or local machine paths.
- Keep shared styling in one external stylesheet, `css/styles.css`. Do not use inline styles.
- Keep JavaScript in `js/main.js`, load it with `defer`, and safely handle elements that are absent on some pages. Avoid module loading or fetch-based page includes that break under `file://`.
- Store images in `images/`, use descriptive filenames, and keep every image under 500 KB.
- Do not commit API keys, passwords, tokens, private information, my phone number, or my home address. Only publish personal information I have approved.
- Use descriptive names and straightforward code. Comment only where it helps me understand the behavior.

## Structure, accessibility, and interaction

- Use semantic elements such as `header`, `nav`, `main`, `section`, and `footer`.
- Include one `h1` per page and a logical heading order, a descriptive page title, and `lang="en"`.
- Give every image an appropriate `alt` attribute; use empty alt text for purely decorative images.
- Provide a skip link, visible focus indicators, descriptive links, and labeled form controls when present.
- Make all controls usable by keyboard. Links activate with Enter; buttons support Enter and Space. Do not rely on hover alone.
- Implement at least two JavaScript features: a responsive navigation menu and a light/dark theme toggle.
- The mobile menu must open and close with a real button, expose its state with `aria-expanded` and `aria-controls`, and avoid leaving hidden links in the keyboard tab order.
- Keep navigation usable when JavaScript is unavailable. Ensure the theme toggle preserves readable contrast and does not fail if browser storage is unavailable.
- Respect reduced-motion preferences if adding motion.
- Use a direct email link for contact by default. If I request a contact form, validate valid and invalid input with JavaScript and direct visitors to email. Never claim the static form sends a message.
- Aim for a Lighthouse Accessibility score of at least 90 on every page and fix browser console errors.

## Testing and documentation

After each website change, check the affected behavior locally in VS Code Live Preview, at phone and laptop sizes, and with the keyboard. Check relative links, images, and browser console errors. Also confirm that local file opening continues to work. Report what was actually tested and what remains unverified; never invent passing results.

Create and maintain `TESTING.md` with at least 12 test cases. Each case must include an ID, what is being tested, steps, expected result, and actual result (Pass or Fail once executed; mark unexecuted tests as Not run). Include enough cases to cover:

- Every navigation link on every page.
- Every page at phone and laptop widths.
- Every JavaScript feature, including valid and invalid input if a form is added.
- Keyboard navigation with Tab and Enter on every page.
- Lighthouse Accessibility on every page, with the measured score.

Run final tests against the live GitHub Pages website, not only local preview. Record the tested URL and date, preserve failed results, document fixes, and record retest outcomes. Do not mark live checks complete without running them.

Maintain `README.md` with the project description, live website link, local viewing instructions, and acknowledgments. Use the actual repository and deployment URLs once known.

For the final assignment, help prepare a one-to-two-page report with repository and live links at the top, a feature overview, challenges and solutions, one real Codex mistake and its correction, and phone/laptop screenshots. Do not fabricate an incident or screenshots.

## Git and deployment workflow

- Review the existing working tree before editing and preserve unrelated work.
- Keep each task focused and show a concise summary so I can review and understand it.
- After each completed task and its applicable checks, make a small commit with a clear, descriptive message, then push to GitHub. Follow any required push approval prompt.
- Never commit secrets or unrelated files. Never reset shared history or force push. Use a revert commit to undo committed changes.
- GitHub Pages should publish from `main`, folder `/` (repository root). Keep `index.html` at the root.
- Verify deployment and live links when access is available; report access limitations honestly.
- Work should accumulate naturally over multiple days. Do not backdate commits or manufacture activity to satisfy the grading rubric.
