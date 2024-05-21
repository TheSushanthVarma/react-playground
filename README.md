# react-playground

# Call methods from another file
1st

If you are going to create multiple functions in that file

```javascript
export const one = () => {
let i = 0;
    if (this === that) {
        i = 0;
    } else {
       i = 1;
    }
}

export const two = () => {
let i = 0;
    if (this === that) {
        i = 0;
    } else {
       i = 1;
    }
}
```

And then import and use it

```javascript
import { 
one, 
two 
} from "./functions"
```

### 2nd

You can use `export defualt`

```javascript
export default = function() {
  let i = 0;
  if (this === that) {
    i = 0;
  } else {
    i = 1;
  }
}
```

and then simply use it by doing this

```javascript
import function from "./function";
```