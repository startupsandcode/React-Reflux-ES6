#Boilerplate for React/Reflux/Enzyme

##Steps to create:
1. Create GitHub (clone from BoilerPlate)
2. Create .gitignore
3. npm init
4. npm install --save-dev babel-cli babel-loader babel-core babel-preset-es2015 babel-preset-react less
5. npm install --save-dev enzyme react-addons-test-utils webpack colors webpack-dev-server file-loader npm-run-all
6. npm install --save react react-dom react-router immutable reflux

7. Create Folder Structure

```
.gitignore
.babelrc
package.json
webpackDev.config.js
webpackPrd.config.js
|
└──tools
|  └──testSetup.js
|
└──tests
|  └──index.test.js
|
└──src
   └── app.jsx
   └── index.html
   └── main.jsx
   |
   └── fonts
   |
   └── images
   |
   └── less
   |
   └── libs
   |
   └── views
       |
       └──home
       |    |
       |    └── actions
       |    |
       |    └── components
       |    |
       |    └── stores
       |    |
       |    └── constants
       |    |
       |    └── route.js
       |
       └── shared
           |
           └── actions
           |
           └── components
           |
           └── stores
           |
           └── constants
```
