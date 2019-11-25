See https://tillsc.github.io/component-frameworks-test/ for results

## Build dist

    npm install

    ./node_modules/.bin/faucet

### Not natively buildable stuff

Build stencil component by running

    npm run stencil

Build Angular component:


    cd cli_based_builds/angular
    npm run build
    npm run package

Build svelte component:

    cd cli_based_builds/svelte
    npm run build
