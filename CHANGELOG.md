# Changelog

## [1.1.0] - 2023-10-01

### Added
- Improved value handling for different element types
  - `textarea`: Uses `appendChild`
  - `input`/`select`: Uses `value` property
  - Other elements: Uses `setAttribute`
- Additional validation for value property usage
- More detailed error messages for value handling

### Fixed
- Value property not being displayed in input elements
- Inconsistent value handling across different element types

## [1.0.0] - 2023-09-15

### Added
- Initial release of JTE library
- Basic element creation from JSON
- Support for common HTML attributes
- Event handler support
- Basic error handling and validation 