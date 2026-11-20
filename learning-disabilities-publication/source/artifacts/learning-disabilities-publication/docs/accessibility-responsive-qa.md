# Accessibility and responsive QA report

**Revision scope note:** The main report records the earlier full-publication QA pass. Subsequent chapter-specific checks are recorded at the end. Earlier Najeeb commentary results describe controls that have since been removed from the publication, not controls in the current Chapter 5.

## Scope and overall result

Application: *Learning Disabilities in the Workplace* interactive publication.

The revision retained the existing design system and six chapters. It includes the subsequent requests for an open legal article in Chapter 2 and a cohesive shared-process section in Chapter 3. The knowledge check application was not changed.

This is a record of checks actually performed, not a WCAG conformance certificate. Native browser zoom, manual assistive-technology use and a complete keyboard traversal remain unverified. Automated contrast evaluation is incomplete for complex backgrounds; selected calculated ratios and visual checks are reported separately.

## Tools and methods

- A real Chromium browser session: DOM measurements, screenshots, clicks and keyboard actions.
- axe-core **4.10.3**, injected for testing without changing application dependencies.
- Computed-style colour calculations with alpha blending for selected text/control combinations.
- TypeScript type check and Vite production build.
- Server-rendered markup checks: heading hierarchy, unique IDs, ARIA references, expected text, original Najeeb samples and absence of data-entry controls.
- Four isolated reveal-hook unit checks using controlled reduced-motion/observer conditions. These are unit checks, not browser media emulation.
- Local HTTP smoke check of the GitHub Pages build at its configured subdirectory path.

## Responsive results

All six requested viewport widths were exercised. A 640px width was additionally used as a reflow equivalent for 200% zoom of a 1280px-wide viewport.

Browser vertical scrollbars occupied 15 CSS pixels in this environment. The client widths below therefore differ from the requested viewport widths.

| Requested viewport width | Final document scroll width | Client width | Horizontal page scroll |
| --- | ---: | ---: | --- |
| 320px | 305px | 305px | None; attempted scrollX remained 0 |
| 375px | 360px | 360px | None; scrollX remained 0 |
| 390px | 375px | 375px | None; scrollX remained 0 |
| 640px | 625px | 625px | None; scrollX remained 0 |
| 768px | 753px | 753px | None; scrollX remained 0 |
| 1024px | 1009px | 1009px | None; scrollX remained 0 |
| 1440px | 1425px | 1425px | None; scrollX remained 0 |

The chapter navigation remains independently scrollable at narrow widths; all six links remain available. It does not require horizontal scrolling of the document.

### Chapter-specific checks

- **Chapter 2:** open legal sections checked at 320, 375, 390, 768, 1024 and 1440px. No disclosures or hidden legal text remain. The three law titles, What/Why subheadings, jurisdiction explanation, collective-agreement guidance, complete BFOR test and disclaimer were present. No section-content overflow was found.
- **Chapter 3 shared process:** checked at the same six widths. Employee/employer headings have equal top coordinates at 1024/1440px and stack in order at smaller widths. All four employee responsibilities, five employer responsibilities and three full-width process-option paragraphs remain. There are no artificial equal-height constraints.
- **Other chapters:** full-page document dimensions and representative content, process, comparison and form states were inspected. This is not a claim that every interaction permutation was manually inspected at every viewport.
- **Illustrations:** all six images rendered in the publication loaded. Seven image files remain in the package; one is available artwork rather than a rendered image. Intrinsic width/height attributes preserve proportions and reduce layout shifts.
- **Small-screen form:** “Accommodation alternatives” now uses normal case and normal letter spacing; it wraps into two lines inside its 171px text box at 320px without horizontal overflow.

## Zoom and reflow

**Native 200% and 400% browser zoom: not tested.** The browser tool did not expose a native zoom control.

640px and 320px CSS viewport widths were used as layout-reflow equivalents to 200%/400% of a 1280px viewport. They passed the document-width checks after the navigation fix. Device scale factor, pinch zoom and CSS zoom were not substituted and misreported as browser zoom.

Native browser zoom and text-only enlargement still warrant a separate manual check.

## Keyboard, navigation and interaction checks

| Check | Observed result |
| --- | --- |
| Skip link | First Tab reached it; Enter moved focus to `#main`. |
| Begin reading | Reached Chapter 1 with its heading below the sticky header. |
| Chapter navigation | Chapter 6 reachable on mobile; click updated the hash and `aria-current`. Heading cleared the header. |
| Current chapter | Programmatic current state plus underline/inset marker, not colour alone. |
| Deep links | Initial `#shared-process` URL retained its hash and reached the section below the header. |
| Four-step explorer | Left/Right/Home/End moved selection and focus correctly, including wraparound. One panel visible; roving tab stop and tab/panel references correct. |
| Condition tabs | Left/Right/Home/End worked after selecting process step 3. |
| Jane explanation | Opened by a real click; the exact requested, non-diagnostic replacement text was visible. |
| Najeeb commentary | Model and audio panels opened with matching expanded state. The third button was not clicked during this run. Source and shared toggle implementation were inspected. |
| Form annotations | Accommodation-alternatives annotation toggled and became visible. The other five buttons were not individually clicked during this run. |
| Reading progress | 0 at the top, approximately 52 midway and 100 at the bottom. |
| Knowledge-check connection | Opened the existing published knowledge check at the intended URL. That separate application was not retested. |
| Data collection | No input, textarea or form submission controls; no employee information is collected by the example. |

The complete Tab/Shift+Tab route through every control and native disclosure Enter/Space behaviour were **not** audited end to end. Focus was exercised for the skip link, chapter links and the custom tab controls. This distinction matters: a passing arrow-key test is not a complete keyboard audit.

**Final navigation focus regression passed at 320 × 800px.** Starting with Chapter 5 focused, one real Tab keypress moved to Chapter 6. Its 3px focus outline was fully visible with 16px right clearance. Only navigation scrolled (342 → 361px); pageY stayed 0 and scrollX stayed 0. Document/client width remained 305/305px. The optional Shift+Tab check at the first link was not performed.

## Semantics and automated accessibility results

In the checked 1440px state, the final axe run reported:

- **0 violations**
- **49 passed rules**
- **Colour-contrast incomplete for 185 nodes**, principally because overlapping shapes/backgrounds could not be resolved automatically.

Earlier violations concerning nested complementary landmarks, duplicate region names and content outside landmarks were corrected:

- Sticky site header uses a banner landmark containing the title link, chapter navigation and progress indicator.
- Supplementary privacy and form annotations use note semantics rather than nested complementary landmarks.
- Repeated What/Why regions include the legislation title in their accessible names.

Markup/browser checks found one h1 and no skipped heading levels. ARIA IDs and references were checked. Decorative graphics are hidden directly or by an aria-hidden shape layer; meaningful illustrations have alternative text.

**No manual NVDA, JAWS, VoiceOver or TalkBack session was performed.** Programmatic semantics checks are not equivalent to a screen-reader test.

## Selected contrast checks

Ratios calculated from browser-computed colours, including alpha blending where applicable:

| Checked combination | Approximate ratio |
| --- | ---: |
| Selected chapter link / Begin reading | 11.25:1 |
| Unselected chapter labels / example-form note | 8.8:1 |
| Darkened accent numeral on light background | 4.83:1 |
| Closing gold CTA / active annotation control | 8.25:1 |
| Privacy note checked text | 5.75:1 |
| Expanded FAQ body | 14.41:1 |

These sampled ratios exceed 4.5:1. They do **not** establish contrast compliance for every pixel, state or decorative overlap. Source-level refinements include stable reading surfaces, darkened text-only accent colour, reduced shape opacity on indigo and high-contrast icons/labels. The original accent field colour is retained.

A comprehensive manual contrast audit of all overlaps and states remains outstanding; axe's incomplete checks are not reported as passes.

## Motion and reveal resilience

Source inspection confirmed reduced-motion styles and the reduced-motion branch of the reveal hook.

Four isolated hook checks passed:

1. Reduced-motion preference: content is immediately visible.
2. IntersectionObserver unavailable: content is visible.
3. Observer construction fails: content is visible.
4. Observer never delivers: 1.8-second fallback exposes content.

Reveal content is visible by default before enhancement. No browser reduced-motion emulation was available, so actual media-preference rendering was **not** claimed as tested. Disabling JavaScript for the whole React application was not tested; the unit checks concern reveal enhancement failure, not a no-JavaScript version of the site.

## Issues identified and disposition

| Finding | Disposition |
| --- | --- |
| Page widened to 552px at a 320px viewport | Fixed. Width constraints alone did not resolve it. Absolutely positioned screen-reader labels needed the scrolling navigation as their containing block. `position: relative` on navigation removed page overflow at every measured width without root-level clipping. |
| Last navigation focus ring partly clipped | Fixed. Larger inline gutters and navigation-only focus scrolling left 16px clearance in the final real-Tab check; the ring was fully visible without moving the page. |
| Landmark/region violations | Fixed; no violations in the subsequent axe run. |
| Dense all-capitals form title on mobile | Fixed with sentence case, normal tracking and more useful text space. Browser measured two-line wrapping without overflow. |
| “Alearning” text-extraction appearance | Not missing source text: browser `textContent` contains “A learning”. The large first-letter float accounts for the visual/extraction observation. |
| Temporary Chapter 2 map error during hot update | Did not recur after a clean reload; subsequent session had no page/console errors. The source and production build passed checks. |
| Diagnoses mentioned in Sue/Joe examples | Reviewed, not changed solely to remove a diagnosis. These scenarios supply known/documented circumstances; they do not teach managers to diagnose. Nearby framing explicitly prohibits assumptions. |
| Native zoom, screen-reader and full keyboard audit | Not completed; see limitations, not recorded as passes. |

## Editorial, source and build checks

- Both exact Jane replacements and the requested CHRC resource sentence were checked in rendered markup.
- Original Najeeb scenario, sample responses, commentary and order matched the pre-revision data.
- All six chapters were source-copyedited; significant changes are in `editorial-change-log.md`.
- Internal provenance/review notes remain outside the client bundle and built website.
- Type check, production build and whitespace check passed.
- Built local asset URLs were tested under `/portfolio/learning-disabilities-publication/`; index and local assets returned HTTP 200.
- The build was **not published** by this work. An actual new GitHub Pages deployment was not browser-tested; the existing knowledge-check destination was.
- Legal/scientific checks used the retrieved sources in `content-review.md`; unresolved expert questions remain there. No comprehensive legal or clinical verification is claimed.

## Remaining manual work

1. Native 200%/400% browser zoom and text-only enlargement.
2. Manual screen-reader use and a complete keyboard route through all controls.
3. Complete manual contrast evaluation across all decorative overlaps and interaction states.
4. Individual activation of the unvisited form-annotation controls and a browser reduced-motion preference check. The Najeeb commentary controls were subsequently removed from the publication.
5. Browser verification of the publication's actual GitHub Pages deployment after the user publishes it.

The specific Chapter 2 open-article and Chapter 3 shared-process layout requests passed the six-width checks. This report intentionally does not turn the broader unperformed checks into a claim of complete WCAG AA compliance.

## Subsequent Chapter 5 revision: Daniel

The three Najeeb alternatives and expandable commentary have been replaced with a static, five-part worked example using the author's supplied Daniel text.

Checks performed for this bounded revision:

- TypeScript type check and production build passed.
- Rendered-markup assertions confirmed exactly five evaluation items in logical heading/list order, with no buttons, disclosures, inputs or hidden evaluation text.
- Each scenario paragraph, criterion title, question, explanation and the complete takeaway matched the supplied brief exactly.
- The five original framework questions remain byte-for-byte unchanged.
- Checksums confirmed that the knowledge-check source, complete Chapters 2/3 component, global styles, shared illustration component and chapter navigation were unchanged.
- Surrounding Chapter 4/6 content and all unrelated shared data matched their pre-revision versions.
- Desktop visual inspection at 1440px showed the scenario alongside the reused illustration, followed by open numbered evaluations with dividers and readable columns.
- Mobile visual inspection at 375px showed stacked criterion headings, questions and explanations, including the long union heading, without visible text clipping or horizontal overflow. Individual criterion anchors received a sticky-header scroll margin after this check.
- Clean screenshot sessions showed no application console errors. Intermediate hot-update import/export errors while the old component was being removed did not recur after restart/reload.
- Conditional legal wording was retained and case-specific review flags were recorded internally, not added as learner-facing warnings.

No new browser-testing subagent, axe audit, native zoom check or manual screen-reader pass was run for this static revision. The earlier six-width measurements must not be represented as a new six-width audit of Daniel's content. Previously documented manual verification limits still apply.

## Subsequent Chapter 1 layout and category-list correction

Only Chapter 1's application markup/classes changed. Protected-file and source-boundary checks confirmed that the cover, other chapters, global styles, shared components, illustration files and separate knowledge-check source were unchanged.

### Content, hierarchy and visual checks

- Every original paragraph, term/description, category label and FAQ question was compared with pre-change rendered markup. All were retained; the seven labels and three FAQ questions remained in the same order.
- The chapter heading, number and eyebrow remain. The definition is a smaller standfirst without the former underline/italic accent.
- Explanatory/reference, processing and FAQ content use consistent top-aligned desktop column proportions and gutters.
- The drop-cap class is absent from Chapter 1's rendered HTML; the only first-letter rule in the stylesheet is scoped to that absent class. The tester's conflicting first-letter measurements were therefore not treated as evidence of a remaining drop-cap style.
- Desktop opening and reference content were visually inspected at 1440px. Corrected category-list screenshots were inspected at desktop and mobile sizes, with tablet evidence from the tester.
- All numbering was removed from the category list. It remains a semantic, explicitly named unordered list. No pills, badges, cards, controls or new font families were introduced.

### Actual rendered category-list results

| Viewport width | Document/client width | List columns | Horizontal page scroll |
| --- | --- | --- | --- |
| 320px | 305/305px | 1 | None |
| 375px | 360/360px | 1 | None |
| 390px | 375/375px | 1 | None |
| 768px | 753/753px | 2 | None |
| 1024px | 1009/1009px | 2 | None |
| 1440px | 1425/1425px | 2 | None |

The containing section places introduction and list side by side at desktop widths and stacks them below that breakpoint. At 1440px the section columns measured 526/642px and the two list columns were 305px each.

All seven labels stayed within their entries at every measured width. “expression – mathematics” and “temporal/organizational” fitted on a single line, including at 320px; neither required an internal word break. The final unpaired item was left-aligned. Dividers were consistent 1px top borders with matching entry spacing.

These six-width measurements specifically cover the corrected processing-area section, its bounds and document overflow; they are not a new six-width audit of every state in the publication.

### Keyboard and contrast

The existing native `details`/`summary` component was retained unchanged. Enter toggling was observed, and the focused summary had a visible focus indicator.

**Space-key result remains unverified.** On a precisely focused summary, the browser tool sent keydown/keypress events with empty key/code values and only supplied the proper Space values on keyup. The disclosure did not toggle with that dispatch. This does not establish a product bug or prove a tool-only defect. No JavaScript workaround was added to replace standard native keyboard behavior. Proper physical-keyboard Space activation still needs manual confirmation.

Source-token contrast calculations for the unchanged light theme:

| Text token | On background | On background with the 8% decorative green |
| --- | --- | --- |
| Foreground | 14.39:1 | 13.01:1 |
| Muted foreground | 8.78:1 | 7.94:1 |
| Primary | 10.77:1 | 9.74:1 |

These are HSL-token calculations, not browser pixel sampling or a comprehensive contrast audit. The decorative shape is restricted to the desktop opening margin and hidden on narrow screens.

Type check, production build and whitespace check passed.

**Native 200%/400% browser zoom and manual screen-reader use were not tested.** The available browser tool still lacks native zoom control. The measured CSS viewport widths are not reported as native browser zoom. No new claim of full WCAG conformance is made.

## Subsequent Chapter 2 light editorial revision

The dark background was replaced with the existing warm off-white theme. Legislation titles/numerals were reduced and aligned consistently, open What/Why explanations were retained, the three concluding practices were stacked, and the processed three-workstation illustration was added between the introduction and legislation.

### Build and content preservation

- Type check, production build and whitespace check passed.
- The complete rendered Chapter 2 text, including its order, legal qualifications, three BFOR elements and disclaimer, matched the pre-change text exactly.
- Source-boundary/checksum comparisons confirmed that the cover, Chapters 1/3/4/5/6, shared components, other illustrations and knowledge-check source were unchanged. CSS changes were confined to the Chapter 2-scoped block.
- Chapter 2 contains no buttons, summaries, details or newly hidden legal text.

### Real-browser responsive results

| Viewport | Document/client width | Layout outcome |
| --- | --- | --- |
| 320px | 305/305px | Stacked What/Why; legislation titles 3/2/2 lines; no overflow |
| 375px | 360/360px | Stacked What/Why; titles 2/2/1 lines; no overflow |
| 390px | 375/375px | Stacked What/Why; titles 2/2/1 lines; no overflow |
| 768px | 753/753px | Stacked What/Why; titles each one line; no overflow |
| 1024px | 1009/1009px | Two-column What/Why; titles each one line; no overflow |
| 1440px | 1425/1425px | Two-column What/Why; titles each one line; no overflow |

At every measured width, scrollX stayed 0 and visible content stayed inside the document. The same What/Why guides were used across all three laws. Concluding practice sections were vertically stacked at all widths.

The accessibility tree confirmed this order: introduction → workstation figure → the three laws, each What followed by Why → three concluding practices → disclaimer.

### Illustration

- Exact alt: “Three office workstations configured with different equipment and arrangements.”
- Intrinsic size 1324 × 416px; rendered aspect ratio matched. No cover-cropping was applied.
- Width was 705.3/1216px at 1440px and 548/945px at 1024px: **58%** in each case.
- At 768px and smaller the image occupied the full available content width.
- Browser pixel inspection found 272,500 transparent pixels of 550,784, and alpha 0 in all four corners. Only one fully opaque white pixel was reported; no white rectangle/checkerboard remained.
- Visual inspection confirmed the furniture/equipment floated on the warm chapter background, without coloured circle backdrops, a card, border or shadow container.
- The additional image brings the publication artwork files to eight; earlier seven-file counts describe the prior package.

### Contrast and visual hierarchy

Selected browser-computed ratios:

- Chapter/legislation headings: approximately 14.41:1.
- Accent section numbers and What/Why subheadings: 4.83:1.
- BFOR text/list items: approximately 14.41:1.
- Subordinate disclaimer: approximately 8.8:1.
- Checked normal-text samples met at least 4.83:1.

Legislation titles measured at most 32px, while the existing large chapter heading was retained. Decorative pebble/arc fill opacities were 0.08/0.07 and stayed outside the reading text. These measurements and the six-width inspection found no Chapter 2 issue.

### Limits

Native 200%/400% browser zoom remained unavailable in the browser tool and was **not tested**. The optional 640px equivalent was not run, and no viewport/device-scale check was relabelled as native zoom. Manual screen-reader, keyboard and reduced-motion checks were outside this static Chapter 2 pass. This is not a new full-publication accessibility certification.
