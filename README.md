[vim-quickrun](https://github.com/thinca/vim-quickrun) babel support

# Dependencies
* [vim-quickrun](https://github.com/thinca/vim-quickrun)
* [nodejs](https://github.com/nodejs/node)

# Configuration
```vim
let g:quickrun_babel#enable = 1
```
Default: 1

run babel in javascript filetype when g:quickrun_babel#enable is 1.

# Manual usage
```vim
let g:quickrun_babel#enable = 0

:Quickrun javascript/babel
```
