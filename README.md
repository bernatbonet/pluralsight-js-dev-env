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


