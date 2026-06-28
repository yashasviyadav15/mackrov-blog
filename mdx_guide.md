# MDX Guide for Mackrov

This document lists everything that can be used while writing articles on Mackrov.

---

# ✅ Standard Markdown

## Headings

```md
# H1
## H2
### H3
#### H4
```

---

## Paragraphs

Simply leave a blank line between paragraphs.

---

## Bold / Italic / Strikethrough

```md
**Bold**

*Italic*

~~Strikethrough~~
```

---

## Blockquotes

```md
> This is a quote.
```

---

## Lists

### Unordered

```md
- Apple
- Banana
- Orange
```

### Ordered

```md
1. First
2. Second
3. Third
```

### Task Lists

```md
- [x] Completed
- [ ] Pending
```

---

## Horizontal Rule

```md
---
```

---

## Inline Code

```md
Use `npm install`
```

---

## Code Blocks

````md
```tsx
function App() {
  return <div>Hello</div>;
}
```
````

Supports syntax highlighting.

---

## Tables

```md
| Name | Age |
|------|----:|
| Yash | 26 |
| John | 30 |
```

---

## Links

```md
[Google](https://google.com)
```

---

## Images

```mdx
<Image
  src="/images/articles/my-post/image.webp"
  alt="Description"
/>
```

---

# ✅ HTML (Works without React)

## Collapsible Section

```mdx
<details>

<summary>Click to expand</summary>

Hidden content

</details>
```

---

## Keyboard Keys

```html
<kbd>Ctrl</kbd> + <kbd>C</kbd>
```

---

## Highlight

```html
<mark>Important</mark>
```

---

## Superscript

```html
x<sup>2</sup>
```

---

## Subscript

```html
H<sub>2</sub>O
```

---

## Line Break

```html
<br />
```

---

## Video

```html
<video controls width="100%">
  <source src="/videos/demo.mp4" />
</video>
```

---

## Audio

```html
<audio controls>
  <source src="/audio/song.mp3" />
</audio>
```

---

## Embedded YouTube

```html
<iframe
  width="100%"
  height="450"
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowfullscreen>
</iframe>
```

---

# ✅ Custom MDX Components

These are React components registered globally.

## Tip

```mdx
<Tip>

Drink plenty of water.

</Tip>
```

---

## Warning

```mdx
<Warning>

Consult a doctor immediately if symptoms worsen.

</Warning>
```

---

## Future Components

### Accordion

```mdx
<Accordion title="Common Myths">

...

</Accordion>
```

---

### Info

```mdx
<Info>

Useful information.

</Info>
```

---

### Note

```mdx
<Note>

Additional notes.

</Note>
```

---

### Danger

```mdx
<Danger>

Critical information.

</Danger>
```

---

### Callout

```mdx
<Callout>

Highlighted content.

</Callout>
```

---

### YouTube

```mdx
<YouTube id="dQw4w9WgXcQ" />
```

---

### GitHub Gist

```mdx
<Gist id="..." />
```

---

### Image Gallery

```mdx
<Gallery>

<Image ... />

<Image ... />

<Image ... />

</Gallery>
```

---

### Tabs

```mdx
<Tabs>

<Tab title="React">

...

</Tab>

<Tab title="Vue">

...

</Tab>

</Tabs>
```

---

### Steps

```mdx
<Steps>

<Step title="Install">

...

</Step>

<Step title="Run">

...

</Step>

</Steps>
```

---

### File Tree

```mdx
<FileTree>

src/
  components/
  app/

</FileTree>
```

Perfect for technical articles.

---

### Terminal

```mdx
<Terminal>

npm install

npm run dev

</Terminal>
```

---

### Mermaid Diagrams

```md
graph TD
A --> B
```

Useful for architecture diagrams.

---

### Math (KaTeX)

```md
$$
E = mc^2
$$
```

---

# Good Practices

✅ One topic per article

✅ Use H2 for major sections

✅ Use H3 for subsections

✅ Add images only where they improve understanding

✅ Use tables for comparisons

✅ Use Tip for best practices

✅ Use Warning for important cautions

✅ Use Accordion only for optional content

---

# Folder Convention

```
content/
└── article-name/
    index.mdx

public/
└── images/
    └── articles/
        └── article-name/
            cover.webp
            image-1.webp
            image-2.webp
```

---

# Checklist Before Publishing

* Frontmatter completed
* Cover image added
* Headings structured correctly
* Images optimized
* Internal links added
* Grammar checked
* Preview reviewed
* Build passes
* Commit & Push
