Test Application

GENERAL NOTES
--------------

## Task 1

We filter the lowercase chars from the input strings using the custom filter `lowercase` using regular expressions. We find the occurrences of each lowercase character using the values table `lowerCaseTable` and `count()` of `helpers.js` and we keep an object containing only the occurrences of the chars that are not null at the first string. Then we use that object to find the occurrences of those chars at the second string using `count()` of `helpers.js` and we construct an array of objects where each object represents the char (with occurrences at both strings and at least two at one of those), the string with the maximum frequency and the number of its occurrences at that string. Then we sort by the maximum frequency, string and alphabetically. At the end we construct the output string.

## Task 2

The function `compoundArray()` in `task2.js` receives the list of the input and transforms the string numbers (because of the use of ng-list) in numbers (chars are not accepted using ng-pattern). The function is tested with inputs arrays with integers too. Then we find the array with the smaller length and we create a subarray parsing the length of the smaller array and we push each time in a loop the elements with same index of the two input arrays. In the end we concat the rest elements of the bigger array.

## Task 3

### With Controller

The function `reverseString()` in task3.js receives the input string. Then we create an array with substrings of the input string of length 3 and we use `reverse()` of `helpers.js` to reverse them. Then we concat the rest chars of the initial string in case that its length is not multiply of 3. Then we join all substrings in one.

### With Directive
The directive with the same functionality is in `reverse-odd-directive.js` file and we can call that as `<reverse-odd></reverse-odd>`.

Install and Test
----------------------
### Clone angular-seed

Clone the application repository using [git][git]:

```
git clone https://github.com/angular/angular-seed.git
cd angular-seed
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

## Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Testing

There is one kinds of test in the application: Unit tests.

### Running Unit Tests

The application comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

To run the unit tests is to use the supplied npm script:

```
npm test
```
