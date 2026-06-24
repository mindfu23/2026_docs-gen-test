# DocumentSummaryType

Whether this Document is a published data source, or general resources

* `SOURCE` - Source
* `MISC` - Miscellaneous

## Example Usage

```python
from open5e.models import DocumentSummaryType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: DocumentSummaryType = "SOURCE"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"SOURCE"`
- `"MISC"`
