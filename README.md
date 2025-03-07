# Portfolio

This is the **v2** of my personal portfolio website, built using **Next.js**. The project includes multi-language support, custom styling, and dynamic features. Below are the details and instructions for setting up and using the project.

## Features
- **Internationalization (i18n)**: The site supports multiple languages: **Portuguese (pt)**, **English (en)**, and **Dutch (nl)** using the [next-intl](https://github.com/amannn/next-intl) library for handling translations.
- **Styling**: The styling is done using **Panda CSS**, a utility-first CSS framework, which ensures that the styles are minimal and highly customizable.
- **Layout**: The layout design was created by me on **Figma**. You can check out the [design here](https://www.figma.com/design/nRnZvPyJaeL7yUPRVkAbcH/New-Portfolio?node-id=2901-526).
- **Carousel**: Dynamic carousels are implemented using **Swiper** to showcase projects and testimonials.
- **Static Data**: All project and page data is stored statically in `.ts` files inside the `src/data` folder, making it easy to edit and manage.
- **Pages**: The project consists of a **Home page** and individual pages for each project.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/asjuanguilherme/portfolio-next.git
```

### 2. Install dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

After the dependencies are installed, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 4. Modify the content

The data for each project and other sections of the site are stored in `.ts` files within the `src/data` directory. 

### 5. Translations

The internationalization (i18n) is managed using the `next-intl` library. Translations for each language are stored in separate files within the `src/i18n/translations` folder.

To add or edit translations:
1. Navigate to the corresponding language file (`pt.json`, `en.json`, `nl.json`).
2. Update the `{locale}.ts` file with the required translations.

## Folder Structure

```plaintext
/src
  /data                   # Static data for projects and other resources
  /i18n/translations       # Translation files for i18n (pt, en, nl)
  /components             # Reusable components
  /components/pages       # Sections for pages
  /styles                 # Global styles and Panda CSS configurations
  /app                    # Next.js pages and structure
```