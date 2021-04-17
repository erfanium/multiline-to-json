# Usage
```sh
node parse.js sample.txt
```

## Sample input
```txt
#foo
line1
line2

#bar
la1
lb2

lb3

```

## Sample output
```json
{ "foo" : "line1\nline2", "bar" : "la1\nlb2\n\nlb3" }
```