# Frontend assessment - Terry Lau

## Contact

Email: [terrylhmwork@gmail.com](mailto:terrylhmwork@gmail.com)
<br>
LinkedIn: [terrylauhm](https://www.linkedin.com/in/terrylauhm)

## Introduction

This is a demonstration of the assessment.

This application constructed by React, Vite, Typescript and Tailwind CSS, Antd, and some ESLint rules,.

## Getting Started

Execute the folling CLI commands in this directory:

```
npm install
```

Execute the following commands to run the development server:

```
yarn dev
```

## Source File Directory Structure

```sh
src
|
|
|_____  assets      # Storage of files like SVG, PNG, JPEG
|
|
|
|_____  components      # React Components
|
|
|_____  constants      # Variables constantly used
|
|
|_____  hoc      # Higher order components, including React context
|
|
|_____  hooks      # Custom hooks
|
|
|_____  types      # interfaces of React components or constants

```

## Coding Best practices

- Symbol code
  <br>For non-ASCII characters, unicode character (e.g. ∞), the equivalent hex or Unicode escape (e.g. \u221e). Please add comment for easier to read and understand.

  ```Javascript
  // Good
  const units = '\u03bcs'; // 'μs'

  // Not suggest
  const units = '\u03bcs';
  ```

### Valuable Naming

- File, Component & props naming

  ```typescript
  // Pascal Case for file name and Component name
  // Camel case for props name

  // Example:
  // <rootdir>/src/components/TitleWrapper.tsx

  // Good
  export function TitleWrapper(titleField) {}

  // Not suggest
  export function titlewrapper(title) {}
  ```

- **`Class Name`**

  ```typescript
  // Kebab Case

  // Good
  textSize - lg;

  // Not suggest
  textsizelg;
  ```

## Further Development

1. Implement data validation
2. Define mandatory fields
3. Develop diverse types of fields (e.g. text input, captcha, etc)
4. Unit testing
