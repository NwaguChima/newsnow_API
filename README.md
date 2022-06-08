# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `solution`

The folder structure includes the src and the public directories.
The src contains the components where the various logics are implemented, the context directory for initiaiting a global context, the globalStyles directory for variable and the index styling, the Pages for the pages rendered in the dom, the utils to help us fetch data.

The getNews function is used to fetch the news from the API and the latest news are fetched using the country code for Nigeria (ng). the default page is 1 and the pagcount rendered is 6 articles per page for pagination. The funtion is fetched on the mainpage and the cards are rendered with the data. clicking on a page number takes you to that page and an anchor tage is used to take you to another tab for the full article. The Header component contains the document title, for SEO purposes.
