# Start

```
git clone --single-branch --branch Starter-code-files https://github.com/codebucks27/Agency-website.git
```

Tutorial: https://www.youtube.com/watch?v=aAEfBxcGpJ8&t=12018s

# Note

- Structure:
  Page -> section -> component
- Style component:
  - Using global style: https://styled-components.com/docs/api
- Lazy loading component:
  Help to render component only when user use this component
  - https://reactjs.org/docs/code-splitting.html
- Handle header in component header:
  - add style component with 'styled'
  - border bottom animation of nav
  - hover and focus( focus happen when click on this element)
  - hamburger menu: need a cover div to make cursor pointer work properly
  - transition
  - mobile menu
- Handle Hero Section

  - keyframs of style component: up and down
  - hover mix active css: active happen only when click, when release it not apply. But focus will keep apply to this element

    ```
        &:hover {
            transform: scale(1.1);
        }
        &:active {
            transform: scale(0.9);
        }
    ```

    example:

    ```
        button { font-weight: normal; color: black; }
        button:focus { color: red; }
        button:active { font-weight: bold; }
        </style>

        <button>
        When clicked, my text turns red AND bold!<br />
        But not when focused only,<br />
        where my text just turns red
        </button>
    ```

- Handle About Section
  - create file svg wave: https://getwaves.io/
  - import and export style in seperate file
  - CurvedLine css
- Handle Service Section

  - css centering text border

    ```
    export const Title = styled.h1`
        display: inline-block;
        font-size: 2rem;
        mrgin-top: 1rem;
        position: relative;

        &::before{
            content: "";
            height: 1px;
            border-bottom: 2px solid var(--pink);
            width: 50%;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translate(-50%);
        }
    `;
    ```

  - css triangle
    ```
        export const Triangle = styled.span`
            border-left: 1.2rem  solid transparent;
            border-right: 1.2rem solid transparent;
            border-top: 2rem solid var(--background);
        `;
    ```

- Handle Testimonial
  - Using react lick: https://react-slick.neostack.com/ , add slick css and custom css of slick;
- Hanle Contact
  - Change background color of image:
  ```
  a {
  &:hover {
      img {
          filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
      }
  }
  ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
