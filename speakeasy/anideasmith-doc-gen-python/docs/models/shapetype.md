# ShapeType

The shape of the area of effect.

* `cone` - Cone
* `cube` - Cube
* `cylinder` - Cylinder
* `line` - Line
* `sphere` - sphere

## Example Usage

```python
from open5e.models import ShapeType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: ShapeType = "cone"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"cone"`
- `"cube"`
- `"cylinder"`
- `"line"`
- `"sphere"`
- `""`
