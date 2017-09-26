# pluralsight-js-dev-env

# 1.Testing frameworks:
- [X] Mocha
- [ ] Jasmine
- [ ] Tape
- [ ] QUnit
- [ ] AVA
- [ ] Jest

# 2.Assertion Library: 
- Is a way to declare what expect to happen: 
```jsx 
  expect(2+2).to.equal(4)
  assert(2+2).equals(4)
```

- [X] Chai
- [ ] Should
- [ ] Expect

# 3.Helper Library:
- [X] JsDOM: simulate browser's DOM
- [ ] Cheerio: jQuery for the server

# 4.Where to Run Tests:
- [ ] Browser: Karma, testem
- [ ] Headless Browser: PhantomJS
- [ ] In-memory DOM: JsDOM

# 5.Where do test files belong:
- [ ] Centrelized: less noise in src folder
- [X] Alongside: easy import, clear visibility

# 6.When should tests run:
- [X] On save (unit test): show red or green

. Unit Test:
- [ ] Test a small unit
- [ ] Often single funcion
- [ ] Fast
- [ ] Run on save

. Integration Tests:
- [ ] Test multiple files
- [ ] Often includes clicking & waiting
- [ ] Slow
- [ ] Run on demand or in QA

# Continuos Integration (CI):
- [X] TravisCI for MAC & Linux
- [X] Appveyor for Windows
- [ ] Jenkins 
- [ ] CircleCI
- [ ] Semaphore
- [ ] SnapCI

# HTTP Calls:
- [ ] Node: 
- http, request

- [ ] Browser:
- XMLHttpRequest
- jQuery
- Framework-based
- Fetch (*)

- [ ] Node & Browser
- isomorphic-fetch
- xhr
- SuperAgent
- Axios (*)

Mock HTTP
- Static JSON (mock-api)
- JSON Server
- JSON Server + JSON Schema Faker
- Browsersync, Express

1) Declare our schema
- JSON Schema Faker: http://json-schema.org

2) Generate Random Data
- faker.js: github.com/Marak/faker.js/wiki marak.guthub.io/faker.js/index.html
- chance.js
- randexp.js

3) Server Data via API
- JSON Server


# Project Structure Tips
- Directory structure and file naming
- Framework usage
- Testing
- Mock API
- Automated deployment

Codifes decisions
Interactive example of working with starter

# Tips
- Put JS in a .js file
- Consider organizing by feature
- Extract logic into "POJOs" (Plain Old Javascript Objects)

# Production Build
- Minification
- Sourcemaps (debugging)
- Dynamic HTML
- Cache busting
- Bundle splitting
- Error logging

# Minification
Speed page loads
- Shortens variable and function names
- Removes comments
- Removes whitespaces and new lines
- Dead code elimination / Tree-shaking
- Debug via sourcemap

# HTML Dynamic:
- Hard code
- Manipulate via Node
- html-webpack-plugin

# Bundle/Code Splitting:
- Speed initial page load
- Avoid re-downloading all libraries

# Cache Busting
- Save HTTP Requests: can avoid download files until 1 year.
. Hash bundle filename
. Generate HTML dynamically

# Error Logging
- TrackJS (*)
- Sentry
- New Relic
- Raygun

# Error Metadata
- Browser
- Stack trace
- Previous actions
- Custom API for enhanced tracking

# Concerns due error
- Notifications & integrations
- Analytic and filtering
- Pricing

# Production Deployment
- Separating the UI from the API
- Hosting providers
- Automated deployment
- Handling starter kit updates
- Inspiration
- Challenge

# Separating the UI from the API
- Simple, low-risk, UI only deploys
- Separate concerns
  - Separate teams
  - Less to understand
  - Scale back-end separately
- Cheap UI hosting
- Serve UI via a content delivery network
- Use the API tech you like

# Automated Deployment
- Amazon web services
- Microsoft azure
- Heroku (Host API)
- Firebase
- Google cloud platform
- Static files only (github, ... Host UI)

# Production Deploy
- Yeoman
- GitHub
- NPM

# Others
- React
  - andrewhfarmer.com/starter-project/
- Angular
  - github.com/gianarb/awesome-angularjs

# Search:
- Framework +
  - Development environment
  - Boilerplate
  - Starter kit
  - Starter project
  - Seed

# Final challange
  - Send meetinf invite to your team.
    - Would we benefit for a starter kit ?
    - What are our JS pain points ?
    - Would we benefit for a demo app ?
  
