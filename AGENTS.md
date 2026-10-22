# Personal Portfolio

## Purpose and scope

Build a personal portfolio that showcases my background, education, interests, projects, and technical skills. This is a public class assignment deployed through GitHub Pages at the `/portfolio/` repository path.

Work on one small, requested task at a time. Do not build the entire website in one task. Keep code simple enough for me to review and explain during a three-minute class demo. Explain changes and testing briefly after each task.

## Pages and content

Create five separate pages, with all five linked from the navigation on every page:

- `index.html`: Home, with a brief introduction and clear links to the other pages.
- `about.html`: About Me, with my background, education, and interests.
- `projects.html`: At least three real projects, each with a description, image or screenshot, and a relevant link when available. Class projects count.
- `skills.html`: Technical skills and honest descriptions of my proficiency.
- `contact.html`: Approved public contact information, preferably an email link.

Ask me for missing personal details, project content, screenshots, and contact information when needed. Do not invent my biography, qualifications, projects, or contact details. Do not leave placeholder text, empty sections, or fake links in completed pages.

## Design direction

Use a soft, springtime style with pastel greens, generous spacing, and consistent layouts across all pages. Green should be a prominent part of the backgrounds and surfaces, creating a calm, easy-on-the-eyes feel. The design direction is:

- Background: very pale mint (`#F1F8EF`).
- Main text: deep forest green (`#243D2E`), keeping body copy dark and readable.
- Accent and links: leafy green (`#356B46`), with clearly visible hover and keyboard focus states. Use cream text (`#FFFEF7`) on filled green buttons.
- Surfaces: alternate soft sage (`#E1EEDC`), pastel mint (`#E5F3E8`), and warm cream (`#FFFEF7`) for cards and sections, with subtle sage borders and softly rounded corners.
- Small decorative accents: pale butter yellow (`#F6EDC9`) or blush (`#F3E3E0`) used sparingly to complement the greens.
- Keep shadows gentle and avoid neon greens or harsh color blocks. Pastel colors belong on backgrounds and decorations; use dark greens for text and functional controls.
- Fonts: a local system stack such as `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`; no external font dependency.
- Layout: a centered content area, readable line lengths, and project cards that stack on small screens.

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
