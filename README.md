FuzzyMatch
==========

JavaScript proof-of-concept fuzzy match working with RegEx.
[see it in action](http://unamatasanatarai.github.io/FuzzyMatch/test/index.html)

## Usage
__Checking if match is found__
```javascript
fuzzyMatch.prep('Searching');
console.log(fuzzyMatch.match('I was searching for this'));
console.log(fuzzyMatch.match('I failed to find anything ;('));
```

__Highlighting entire blocks__
```javascript
fuzzyMatch.prep('Searching');
console.log(fuzzyMatch.hiblock('I was searching for this'));
console.log(fuzzyMatch.hiblock('I failed to find anything ;('));
```

__Highlighting individual letters__
```javascript
fuzzyMatch.prep('Searching');
console.log(fuzzyMatch.hi('I was searching for this'));
console.log(fuzzyMatch.hi('I failed to find anything ;('));
```

## FAQ
1. Why `prep`?

   That's because you are searching for one string over hundreads of lines of text. `prep` pre-caches the search query to make the script run faster.

2. Why 'regex'?

   Because I can :)