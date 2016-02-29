[vim-quickrun](https://github.com/thinca/vim-quickrun) babel support

# Dependencies
* [vim-quickrun](https://github.com/thinca/vim-quickrun)
* [nodejs](https://github.com/nodejs/node)

# Usage
run es6
```vim
:QuickRun
or
:QuickRun javascript/babel
```
compile es6 to javascript
```vim
:QuickRun javascript/babel-compile
```

# Configuration
```vim
let g:quickrun_babel#enable = 1
```
Default: 1

run babel in javascript filetype when g:quickrun_babel#enable is 1.
