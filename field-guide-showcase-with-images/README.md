# Field Guide Learning — Demo Showcase

## Overview

The Field Guide Learning Demo Showcase is a central library of interactive learning experiences, educational media and resources that can be used during client meetings, proposal interviews and business development activities.

The website is designed to be easy to maintain and expand. New demos can be added without modifying the website's layout or functionality.

The showcase is a static website that can be hosted for free using GitHub Pages. It does not require a database, subscription, backend server or build process.

## 1. Website structure

| File or folder | Purpose |
|---|---|
| `index.html` | Website layout, visual styling and gallery functionality. |
| `data.js` | Demo inventory, including titles, descriptions, categories, images and links. |
| `assets/` | Screenshots, thumbnails and branding assets. |
| `README.md` | Instructions for maintaining and publishing the showcase. |

Most routine updates only require changes to `data.js` and the `assets/` folder.

## 2. Previewing the website

To preview the website on your computer:

1. Download the website files.
2. Extract the ZIP folder, if applicable.
3. Open `index.html` in a web browser.
4. Test the demo links and category filters.

An internet connection is required to launch externally hosted demos and load the Archivo typeface.

## 3. Adding a new demo

### Step 1 — Prepare the learning experience

The learning experience must be accessible through a URL. It can be hosted independently of the showcase.

Supported resources include:

- Interactive web experiences
- E-learning prototypes
- Google Slides presentations
- Digital publications
- PDF documents
- Educational videos
- Downloadable learning resources
- Other browser-accessible content

There is no need to relocate or rebuild an existing learning experience.

### Step 2 — Prepare a thumbnail

Capture a screenshot that clearly demonstrates what the learning experience looks like.

Recommended image specifications:

| Property | Recommendation |
|---|---|
| Aspect ratio | 16:9 landscape |
| Dimensions | 1280 × 720 pixels |
| File format | WebP preferred; PNG or JPEG accepted |
| File size | Ideally under 300 KB |
| File name | Lowercase, with hyphens instead of spaces |

Avoid including browser toolbars, unrelated interface elements or confidential information in screenshots.

Save the image in the `assets/` folder.

Example:

`assets/workplace-knowledge-check.webp`

### Step 3 — Add the demo information

Open `data.js` in a text editor or directly in GitHub.

Copy an existing demo entry and replace its information with the details of the new learning experience.

Example:

```javascript
{
  id: "workplace-knowledge-check",
  title: "Learning Disabilities in the Workplace",
  category: "Assessment & feedback",
  description: "An interactive knowledge check featuring selected-response questions, written reflections and explanatory feedback.",
  thumbnail: "assets/workplace-knowledge-check.webp",
  thumbnailAlt: "Knowledge check interface showing a workplace scenario and response options.",
  url: "https://example.com/knowledge-check/",
  launchLabel: "Launch demo"
},
```

### Demo configuration fields

| Field | Required | Description |
|---|---|---|
| `id` | Yes | A unique identifier for the demo. Use lowercase letters and hyphens. |
| `title` | Yes | The title displayed on the card. |
| `category` | Yes | The category used to organize and filter demos. |
| `description` | Yes | A short description of the learning experience. |
| `thumbnail` | No | The path to the screenshot or thumbnail. |
| `thumbnailAlt` | No | Alternative text when the image communicates additional information. |
| `url` | Yes | The primary URL for launching the experience. |
| `launchLabel` | No | Custom text for the primary launch button. |
| `secondaryUrl` | No | A URL for an alternative version or companion resource. |
| `secondaryLabel` | No | Text for the secondary launch link. |

Each demo must have a unique ID.

### Step 4 — Test the new entry

Save the file and refresh the website in your browser.

Confirm that:

- The new card appears in the gallery.
- The screenshot displays correctly.
- The title and description are accurate.
- The category filter works.
- The launch link opens the correct resource.
- Any required sharing permissions are configured.

## 4. Writing demo descriptions

Demo descriptions should communicate the instructional design or educational media capabilities being demonstrated, rather than simply describe the subject matter.

Aim for one or two concise sentences.

**Less effective:**

A quiz about learning disabilities.

**More effective:**

An interactive knowledge check combining scenario-based questions, written responses and explanatory feedback to reinforce workplace learning.

Use consistent terminology and Canadian English throughout the showcase.

## 5. Organizing demos into categories

Categories are generated automatically from the demo inventory. No changes to the website layout are required when adding a category.

Use the following category names where appropriate:

| Category | Suitable resources |
|---|---|
| Assessment & feedback | Knowledge checks, quizzes and formative assessment |
| Scenarios & simulations | Branching scenarios and simulated conversations |
| Interactive learning | Quote galleries, reflection activities and interactive exercises |
| Digital publications | Digital guides and educational publications |
| Learning resources | Job aids, workbooks, worksheets and checklists |
| Educational media | Videos, animations and multimedia resources |
| Courses & modules | E-learning courses and course prototypes |

Use existing categories whenever possible to avoid unnecessary fragmentation.

Category names must be written consistently. Differences in spelling or capitalization may result in separate filters.

## 6. Adding multiple versions of a demo

A single portfolio card can provide access to two versions of the same learning experience.

This is useful for:

- Short demonstrations and complete experiences
- English and French versions
- Interactive and printable versions
- Learning experiences with companion resources

For example, the Learning Disabilities in the Workplace knowledge check has a two-question version for client presentations and a five-question version for more detailed exploration.

```javascript
{
  id: "workplace-knowledge-check",
  title: "Learning Disabilities in the Workplace",
  category: "Assessment & feedback",
  description: "An interactive knowledge check featuring scenario-based questions, written responses and explanatory feedback.",
  thumbnail: "assets/workplace-knowledge-check.webp",
  url: "https://emilysheepy.github.io/portfolio/knowledge-check-quick-demo/",
  launchLabel: "Launch quick demo (2 questions)",
  secondaryUrl: "https://emilysheepy.github.io/portfolio/learning-disabilities-knowledge-check/",
  secondaryLabel: "Explore full experience (5 questions)"
},
```

Avoid creating separate cards for different versions of the same experience unless they demonstrate substantially different capabilities.

## 7. Updating existing demos

### Edit a demo

Locate its entry in `data.js` and update the relevant fields.

### Replace a screenshot

Either replace the existing image using the same file name or upload a new image and update the `thumbnail` field.

### Reorder demos

Move the complete demo entry to the desired position in `data.js`.

Cards appear in the same order as their entries in the configuration file.

### Remove a demo

Delete its
