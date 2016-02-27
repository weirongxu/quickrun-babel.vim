"=============================================================================
" FILE: quickrun_babel.vim
" AUTHOR:  WeiRong Xu <weirongxu.raidou@gmail.com>
" License: MIT license
"=============================================================================

let s:save_cpo = &cpo
set cpo&vim
if exists('g:loaded_quickrun_babel')
  let &cpo = s:save_cpo
  unlet s:save_cpo
  finish
endif



if ! exists('g:quickrun_config')
  let g:quickrun_config = {}
endif

if get(g:, 'quickrun_babel#enable', 1)
  let g:quickrun_config['javascript'] = {
        \ 'type': 'javascript/babel'
        \ }
endif

let s:script_path = expand('<sfile>:p:h:h') . '/scripts'

let g:quickrun_config['javascript/babel'] = {
      \ 'command': 'node',
      \ 'cmdopt': s:script_path . '/runner.js',
      \ 'exec': [
      \   '%c %o %s',
      \ ],
      \ 'tempfile': '%{tempname()}.js',
      \ }

let g:quickrun_config['javascript/babel-compile'] = {
      \ 'command': 'node',
      \ 'cmdopt': s:script_path . '/compile.js',
      \ 'exec': [
      \   '%c %o %s',
      \ ],
      \ 'tempfile': '%{tempname()}.js',
      \ 'outputter/buffer/filetype': 'javascript',
      \ }



let g:loaded_quickrun_babel = 1
let &cpo = s:save_cpo
unlet s:save_cpo
" vim: fdm=marker
