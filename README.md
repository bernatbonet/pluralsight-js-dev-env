# pluralsight-js-dev-env

1.Testing frameworks:
[*] Mocha (*)
[*] Jasmine
[*] Tape
[*] QUnit
[*] AVA
[*] Jest

2.Assertion Library:
Def: Is a way to declare what expect to happen: 
  expect(2+2).to.equal(4)
  assert(2+2).equals(4)

[*] Chai (*)
[*] Should
[*] Expect

3.Helper Library:
[*] JsDOM: simulate browser's DOM (*)
[*] Cheerio: jQuery for the server

4.Where to Run Tests:
[*] Browser: Karma, testem
[*] Headless Browser: PhantomJS
[*] In-memory DOM: JsDOM

5.Where do test files belong:
[*] Centrelized: less noise in src folder
[*] Alongside: easy import, clear visibility (*)

6.When should tests run:
[*] On save (unit test): show red or green

Unit Test (*):
[*] Test a small unit
[*] Often single funcion
[*] Fast
[*] Run on save

Integration Tests:
[*] Test multiple files
[*] Often includes clicking & waiting
[*] Slow
[*] Run on demand or in QA

Continuos Integration (CI):
[*] TravisCI (*) MAC & Linux
[*] Appveyor (*) Windows
[*] Jenkins 
[*] CircleCI
[*] Semaphore
[*] SnapCI
