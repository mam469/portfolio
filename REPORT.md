Repository: https://github.com/mam469/portfolio  
Live website: https://mam469.github.io/portfolio/

# Personal Portfolio Website Report

**Maharab Mohammed**  
Electrical and Computer Engineering Technology  
New Jersey Institute of Technology

## Website overview

I created a personal portfolio to introduce myself, share my interests, and showcase projects and developing skills. I am interested in how the individual parts inside computers and smart devices work together. My career goal is to eventually work for a technology company helping design and test power or smart devices.

The website has seven pages: Home, About Me, Education, Interests, Projects, Skills, and Contact. Home displays a centered greeting over a voxel-style workshop image. About Me explains my interest in technology, while Education presents my school, major, and career goal. Interests includes images for technology, soccer, and Minecraft. Skills describes my beginner-level technical experience and developing problem-solving and attention-to-detail skills. Contact provides a clickable email address.

The Projects page contains three playable browser games. Space Race challenges the player to dodge asteroids and records a session best score. Pong supports two players, scoring, and pause and restart controls. Breakout lets the player clear bricks, relaunch the ball after a miss, and restart after winning. The games include keyboard and on-screen movement controls. Result messages appear inside each game's area so they do not cover another game.

## Development and design

I used Codex to build the website one task at a time, review the results, and request specific changes. The site uses plain HTML, an external CSS stylesheet, and JavaScript without frameworks or a backend. It can open locally through `index.html` and is published through GitHub Pages. Git commits record focused changes throughout development.

The design evolved from soft pastel greens to a hacker-inspired style with dark backgrounds, vibrant green accents, monospace fonts, and rounded panels. Centered pill-shaped navigation connects every page. A mobile menu supports smaller screens, and a light-mode toggle provides an alternate palette. The theme preference is saved when browser storage is available. Semantic headings, a skip link, image descriptions, and visible keyboard focus help make the site easier to use.

## Challenges and solutions

One challenge was organizing the information. The first Home page contained my education and interests as well as my introduction. I requested separate pages and simplified Home to a greeting. This made the navigation more useful and gave each topic its own space.

Another challenge was that returning to Home sometimes showed an older version. The live site was checked, and the behavior was consistent with a cached page. Versioned navigation and asset URLs were added to request updated content. Layout changes also reduced excess spacing and kept natural scrolling available on smaller screens.

Game feedback needed improvement too. Messages below the canvases were easy to miss, so I requested centered overlays inside each game. Space Race also gained a Space-key restart shortcut, making it easier to try again after losing.

## A Codex mistake and its correction

When I supplied the Space Race Python project, Codex initially created a description and artwork instead of a playable game. I clarified that I wanted visitors to play it on the website. Codex then adapted the gameplay to JavaScript and Canvas, adding movement, asteroid collisions, scoring, and restart controls. This showed me why reviewing the result and explaining the intended behavior clearly are important when working with a coding agent.

## Testing and reflection

`TESTING.md` contains 30 priority test cases covering navigation, phone and laptop layouts, keyboard use, themes, games, and accessibility. The supplied Lighthouse report for the live Home page measured an Accessibility score of 100, with 17 passing automated audits and no failed scored audits. This report supports Home's automated result; it does not independently verify every page or replace manual testing. The test document also contains my recorded results.

This project gave me practice communicating requirements, reviewing generated code and layouts, and refining a website through small changes. The games were adapted with coding assistance from supplied projects and examples, and the Home background was AI-generated. My next learning goal is to strengthen my understanding of the code so I can explain and modify its behavior more independently.
