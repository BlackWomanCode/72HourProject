
# Objective 
1. Utilize team git, create a develop branch and sub-branches for project collaborators. 
2. Grab the user's location upon running the application. 
3. Using the location, use GET requests to fetch information from two APIs. 
* NASA: https://api.nasa.gov/planetary/earth/imagery
* Open Weather: https://openweathermap.org/current
   * Based on your location, from the NASA Earth api grab a satellite image matching your location and the weather in your current location.
   * Additionally, add a button that toggles between Fahrenheit and Centigrade when pulling from the weather api.
   * Use Material UI, Reactstrap, or styled components to style out the project however your team decides. 
<br />

# Getting Started
Getting the code
```bash
git clone https://github.com/swftdev/base.git
```

After cloning change terminal location
into the folder
```bash
cd base
```

Installing Needed Node modules so the app
can run
```bash
npm install
```

Opening your editor
```bash
code .
```

Starting the server
```bash
npm start
```

<br />

# Files without comments

`./node_modules/*`
    - a folder to hold all installs done by npm. npm knows what to install based on the package.json / package-lock.json 
    - we don't push all the installs to github because a simple npm install will get them from the internet when we need.

`./public/favicon.ico`
    - an icon to place in the title tab, it is linked in `./public/index.html`

`./public/manifest.json`
    - this file holds metadata for phones/browsers that helps them understand our app. We won't be working in this file much.

`./public/robots.txt`
    - this file holds info for web crawlers and aids with things like seo (search engine optimization)

`./.eslintcache`
    - this file is used to aid the linter in remembering it's prior config, and should be added to the .gitignore *it is already for us* 

`./.gitignore`
    - contains a list of patterns for git to lookout for and not consider versioning. ie .. node_modules/

`./package-lock.json`
    - this is where we "pin" our versions of all the dependencies we are using. 
    - dependencies for our app are added at time of creation or when we npm install something.
    - npm install will update this file and the package.json for us.

`./package.json`
    - this is where npm will add a dependency after you type npm install
    - this is where we declare "scripts" short words we want mapped to a longer command.
    <br/>

```javascript

    // in package.json

        "scripts": {
            "start": "react-scripts start"
        }


    // in terminal

            v---v Key           v-----------------v  Value
    npm run start      ->       react-scripts start
    ^-----------^               ^-----------------^ 
    What we type                What actually runs
```


`./README.md`
    - A file to spin new people up on the app/project. You will usually find things like install instructions
    and other resources here.

`*.css`
    - Imported as needed in to components; allows us to style a component.
