// layout-menu-utils.ts

// These functions are responsible for managing the menu state,
// specifically controlling the visibility of the menu by adding or removing
// classes on the main element.
// It's important to note that these functions manipulate the DOM directly,
// without using state hooks like useState, to avoid making the root layout interactive,
// which would turn the entire layout into client-side components.

// Problem with `useState` and Server Components
// If i was to use `useState` or any other state hook directly on the root layout,
// it would force all child components to become client-side components.
// This would defeat the purpose of Server Components, which are ideal for static rendering
// and code splitting on the server-side. To maintain the benefits of Server Components,
// it’s important to avoid interactivity at the root layout level, delegating it only to client components.

export const mainElementID = 'app-main'

export const menuOpenClass = 'menu-open'

export const openMenu = () => {
  const main = document.getElementById(mainElementID)

  if (!main)
    throw new Error(
      'Main element was not found. Ensure that the main element has id=mainElementID.'
    )

  main.classList.add(menuOpenClass)
}

export const closeMenu = () => {
  const main = document.getElementById(mainElementID)

  if (!main)
    throw new Error(
      'Main element was not found. Ensure that the main element has id=mainElementID.'
    )

  main.classList.remove(menuOpenClass)
}

export const menuToggle = () => {
  const main = document.getElementById(mainElementID)

  if (!main)
    throw new Error(
      'Main element was not found. Ensure that the main element has id="app-main".'
    )

  const isMenuOpen = main.classList.contains(menuOpenClass)

  if (isMenuOpen) {
    main.classList.remove(menuOpenClass)
  } else {
    main.classList.add(menuOpenClass)
  }
}

export const isMenuOpen = () => {
  const main = document.getElementById(mainElementID)

  if (!main)
    throw new Error(
      'Main element was not found. Ensure that the main element has id=mainElementID.'
    )

  return main.classList.contains(menuOpenClass)
}
