# get-new-name
`getNewName` is a function that return unique name from names array.

<br>

### Install
```
npm i get-new-name
```

<br>

### How to use
```javascript
import getNewName from 'get-new-name'

getNewName('abc', ['abc', 'abc(2)'])    // You will get 'abc(3)' as a newName
getNewName('abc', ['abc', 'abc(2)', 'abc(3)'])    // You'll get 'abc(4)'
getNewName('abc', ['abc', 'abc2', 'abc3'])    // You'll get 'abc(2)'
getNewName('abc', ['abc2', 'abc3'])    // You'll get 'abc'
```
# get-new-name
