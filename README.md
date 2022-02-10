# Old.St Labs React-Typescript Web App Template

## TODO
- set `animation={false}` to Modal and add a transition. This will fix the error `Warning: findDOMNode is deprecated in StrictMode`
- UI testing

## Available Scripts

Clone repo
### `git clone https://github.com/idajimenez/react-typescript.git`

Install packages
### `npm install` or `yarn install`

In the project directory, you can run:
### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Code-generation

The project comes with code creation to speed things up.

**Routes**

`npm run create route MyNewRoute` or `yarn run create route MyNewRoute`

This will create 
```
├── routes
|   ├── MyNewRoute (New)
    |   ├── index.tsx
    |   ├── MyNewRouteContainer.tsx
    |   ├── MyNewRouteScreen.tsx
    |   ├── my-new-route.scss
└── ... other routes
```

also import the route and add an entry in `routes` array of `/src/routes/index.tsx`

**Components**

`npm run create component MyNewComponent` or `yarn run create component MyNewComponent`

When asked: 
- `What is the type of the component? (m)odules or (b)ase:` enter either `m` or `b`
- `Create a (smart) container for the Comp? (Y/n)` enter either `y` or `n`

This will create 
```
├── components
|   ├── <modules or base>
    |   ├── MyNewComponent (New)
        |   ├── index.tsx
        |   ├── MyNewComponent.tsx
        |   ├── MyNewComponent.stories.tsx
        |   ├── my-new-component.scss
    └── ... other components
```
