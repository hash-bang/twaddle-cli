twaddle-cli
===========
CLI for the [twaddle API](https://github.com/hash-bang/twaddle).

```
  Usage: twaddle [file or twaddle id...]

  Options:

    -h, --help                                       output usage information
    -V, --version                                    output the version number
    -l, --list                                       Output the available Twaddle IDs
    -w, --words [count]                              Try to output this many words
    -s, --sentences [count]                          Try to output this many sentences
    -p, --paragraphs [count]                         Try to output this many paragraphs
    --minspp, --min-sentences-per-paragraph [count]  Set the minimum number of sentences which make up a paragraph
    --maxspp, --max-sentences-per-paragraph [count]  Set the maximum number of sentences which make up a paragraph
    --noFixTrim                                      Disable the trimming of paragraphs
    --noFixCapitalFirst                              Disable the correction of sentences to always have a leading capital letter
    -v, --verbose                                    Be verbose
    --no-color                                       Force disable color
```

Examples
--------

```
> twaddle --list
 - politics-au-gillard-julia
 - politics-us-kennedy-f-john
2 libraries in total
```


```
> twaddle --paragraphs 2 politics-us-kennedy-f-john
And yet the United there is always been committed and to invoke the burden of law where the first 1 000 days nor in the master of human life.

And so my fellow citizens of strength and the common enemies a call to abolish all our forebears prescribed nearly a grand and the first 100 days. Nor will do for all forms of terror that we are rich.
```
