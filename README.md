# Ultra 10th

A custom black-and-white presentation website for Ultra 10th, a channel that helps students prepare for Class 10 board exams through cartoon-based chapter explanations and simple language. It explains the mission, teaching method and video study approach, introduces the planned app resources, and includes common questions and support contact details.

The supplied Ultra 10th logo is used unchanged in the header, footer, app panel, favicon and touch icon. Support email: **ultra10th@gmail.com**.

## Preview locally

No framework or package installation is required. With Python 3 installed:

```sh
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080.

## Connect the Install App button

Edit `dist/config.js` and set `playStoreUrl` to your **exact, live Google Play app listing URL**:

```js
playStoreUrl: "https://play.google.com/store/apps/details?id=YOUR_REAL_PACKAGE_NAME"
```

Publish the updated files. The install buttons then open the store listing in a new tab. Until a valid listing URL is configured, the site honestly shows the release as coming soon. No package name or store listing has been invented. The release note is automatically hidden once the real link is present.

The same configuration file controls all YouTube links.

## Files

- `dist/index.html` — page content, navigation, resource and FAQ accordions, and email contact.
- `dist/styles.css` — responsive monochrome visual system, including large-display styling.
- `dist/app.js` — mobile navigation, resource/FAQ accordion fallback and install link behavior.
- `dist/config.js` — editable destination URLs.
- `dist/assets/ultra-10th-logo.jpg` — the exact user-supplied logo.
- `dist/assets/cartoon-learning.webp` — original monochrome learning illustration; it is clearly identified as an illustration, not a channel screenshot.
- `dist/assets/study-art.webp` — retained artwork from the earlier design.
- `.openai/hosting.json` — static Sites publishing configuration.

## Publish anywhere

Serve the `dist` folder as the site root. The site works with any static host. No build command, database, secrets, runtime services or paid API is needed. For Netlify, choose `dist` as the publish directory and leave the build command blank. GitHub Pages can serve the `dist` directory through a Pages workflow if enabled later.

## Design and accessibility

- Fluid layout for phones, tablets, laptops, desktops and large displays.
- Semantic HTML, a skip link, keyboard focus states and native disclosure controls.
- Mobile navigation with Escape support and expanded-state labels.
- Reduced-motion support, local system fonts and no third-party tracking.
- Core content remains readable without JavaScript.

No student counts, success rates, testimonials or app screenshots are fabricated. Resource copy describes the intended offering and can be revised to match the final app.
