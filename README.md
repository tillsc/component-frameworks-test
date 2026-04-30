A comparison of Web Component frameworks, measuring bundle size for a minimal custom element implementation each.

See https://tillsc.github.io/component-frameworks-test/ for results.

## Frameworks compared

- Vanilla (no framework)
- Lit Element
- Preact (manual + via `preact-custom-element`)
- Stencil
- Angular Elements
- Svelte

## Build

```
npm install
npm run compile
```

### CLI-based builds

These frameworks require their own build toolchain and must be built separately:

**Stencil:**
```
npm run stencil
```

**Angular:**
```
cd cli_based_builds/angular
npm run build
npm run package
```

**Svelte:**
```
cd cli_based_builds/svelte
npm run build
```
