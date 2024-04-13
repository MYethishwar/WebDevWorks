# HTML elements

HTML elements consist of an opening tag, content, and a closing tag, such as:

```html
<h1>This is heading</h1>
```

## HTML Attributes

Attributes are enclosed inside the opening tag. For example:

```html
<a href="www.google.com"> Click here to open Google browser </a>
```

## HTML Headings

Headings are essential HTML tags, such as `<h1>`, `<p>`, etc.

## HTML VOID elements

Void elements don't have a closing tag. Examples include:

- `<hr/>`: Horizontal Rule Element
- `<br/>`: Line Break Element

## List Elements

There are two types of lists:

1. Ordered Lists:

   ```html
   <ol>
     <li>First item</li>
     <li>Second item</li>
   </ol>
   ```

2. Unordered Lists:
   ```html
   <ul>
     <li>First item</li>
     <li>Second item</li>
   </ul>
   ```

Nested lists are also possible:

```html
<ul>
  <li>
    A
    <ol>
      <li>A1</li>
      <li>A2</li>
    </ol>
  </li>
  <li>B</li>
  <li>C</li>
</ul>
```

## Comments

Comments are written as:

```html
<!-- Content Here -->
```

## Anchor Elements

Anchor elements create hyperlinks:

```html
<a href="www.google.com"> Click here to browse Google </a>
```

## Image Element

Images are inserted using the `<img>` tag:

```html
<img src="Image URL" alt="Alternative text description" />
```

## File Paths

1. **Relative File Paths**:

   - Used for accessing files within the same directory or navigating to parent directories.
   - Example: `./rabbit.png` or `../Folder1/cat.png`

2. **Absolute File Paths**:
   - Complete paths including the root directory.
