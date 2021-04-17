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
lineb1
lineb2
```

## Sample output
```json
{ "foo": "line1\nline2", "bar": "lineb1\nlineb2" }
```