# React Breadcrumb Router

A collection of [React][1] components used to generate a breadcrumb trail, for use with [React Router][2].

## Installation

```sh
npm install --save react-breadcrumb-router
```

Note: this package has peer dependencies of `react-router-dom` v4+ and `react` v15+.
Its only direct dependency is `uuid`.

## Usage

This package's `<BreadcrumbRouter>` component should be used in place of the
`<BrowserRouter>` component from `react-router-dom`.

Routes that should generate breadcrumbs should use the `<BreadcrumbRoute>` component
instead of the `<Route>` component.

The `<Breadcrumb>` component can also be used for a crumb that doesn't directly
relate to a react-router `<Route>`.

Breadcrumbs are rendered by the `<Breadcrumbs>` component. The single "breadcrumb"
for the current page can be rendered by the `<Title>` component.

See the [`/demo`][3] directory for a complete example.

### Non-display components

#### BreadcrumbRouter

This component renders a `<BrowserRouter>` along with a react context that
`react-breadcrumb-router` needs in order to function.

#### BreadcrumbRoute

A convenience component that combines a `<Route>` component from `react-router-dom`
with a `<Breadcrumb>` component.

Its props match that of the `<Route>` component, with the following additions:

- `title` (string|component): Value to display for this breadcrumb when this breadcrumb is being rendered.
- `includeSearch` (bool): Whether search string (aka parameters) should be included in links to this breadcrumb.

#### Breadcrumb

Though it renders nothing directly, a `<Breadcrumb>` declaratively adds a crumb into the breadcrumb trail.
It can occasionally be convenient to render one sepaseparately to any `<Route>` components.

- `title` (string|component) Text or componet to display for this breadcrumb.
- `pathname` (string): URL path represented by this breadcrumb.
- `search` (string): Optional URL search (query string) represented by this breadcrumb.
- `hidden` (bool): Hide an individual breadcrumb (rarely needed).

The fact that the `title` can be any valid `PropTypes.node` allows for a huge
amount of customization. The following values are all valid:

``` jsx
title: 'Home'
title: <span title="Hovered!">Home</span>
title: <CustomComponent title="Home" icon="house" />
```

### Display components

#### Breadcrumbs

This component displays currently active breadcrumbs. Its various elements use [BEM][6] css classes,
with the root block name set to `breadcrumbs`.

- `className` (string): CSS class to apply to the breadcrumb container.
- `separator` (string|component): Optional content to render between breadcrumbs.
- `includeLast` (bool): Whether the last breadcrumb should be rendered here. Defaults to true, set to false if a `<Title>` component is also being used.
- `rootElement`: (string|component type): Element to use for rendering the breadcrumb container.
- `itemElement`: (string|component type): Element to use for rendering individual breadcrumbs.
  
#### Title

This component displays only the lowest-level breadcrumb that is currently active.

- `className` (string): CSS class to be applied to this element.
- `itemElement`: (string|component type): Element to use for rendering this single item.

## Authors

This project was adapted from [`react-breadcrumbs`][4], and would not have been possible without the contributions of [that package's authors][5].

[1]: https://facebook.github.io/react
[2]: https://github.com/rackt/react-router
[3]: https://github.com/FTWinston/react-breadcrumb-router/tree/master/demo
[4]: https://github.com/svenanders/react-breadcrumbs
[5]: https://github.com/svenanders/react-breadcrumbs/tree/master/AUTHORS
[6]: http://getbem.com/
