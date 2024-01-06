# Text-to-HTML Converter: Persistence-Focused React Learning Project

Welcome to my inaugural React project, a simple web app designed to compose rich text and turn it into HTML. This app is the first step of my journey in learning React, and it does not adhere to best practices.

## Project essence

The point of this app is offering a feature not commonly found in similar online tools: _persistently save and load texts_, allowing the user to have templates, and save/load ongoing work. It also aims to offer a more minimal and good-looking experience compared to alternatives like [HTML Cleaner](https://html-cleaner.com/). It's important to note that, as my first React endeavor, it has room for improvement in terms of coding standards.

## Core features

- **Persistent template management**: Enables saving, loading, and deleting texts in your browser's local storage, as well as downloading and uploading a backup JSON file, ensuring your work is not lost and can be easily retrieved.
- **Intuitive rich text editing**: Leverages [Quill](https://quilljs.com/) to provide a familiar word processing experience, allowing you to format your text effortlessly.
- **Real-time HTML conversion**: Transforms your formatted text into HTML code, enhanced with syntax highlighting from [Prism](https://prismjs.com/).
- **Elegant and minimalist UI**: Designed with simplicity in mind, the interface incorporates elements from [Material Design components](https://mui.com/).
- **Efficient clipboard integration**: Offers a convenient feature to instantly copy generated HTML code to your clipboard with just one click.

## Possible future features

- Alternate Quill's "snow" and "bubble" themes using a button in the main menu
- Make sections resizable on mouse drag
- Add a "light mode" option
- Keyboard navigation:
  - Save on Control+S
  - Load on Control+O
  - In dialog boxes, confirm on Enter and cancel on Escape
