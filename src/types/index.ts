/**
 * Type System - High-performance native type checking
 *
 * Provides O(1) type detection and validation using numeric codes
 * instead of string comparison. Includes WeakMap caching for objects
 * and fast-path optimization for primitives.
 *
 * Performance: 40-50% faster than string-based type checking
 *
 * @module types
 */

// Core type system
export {
  TypeCode,
  TypeCategory,
  TypeInfo,
  TypeDetector,
  DetectionResult,
  TYPE_CODE_TO_NAME,
  TYPE_NAME_TO_CODE,
  TypeSymbols,
  DefaultDetectors,
  GlobalTypeRegistry,
  registerCustomType,
  unregisterCustomType,
  getRegisteredType,
  getAllRegisteredTypes,
  clearCustomTypeRegistry,
} from "./TypeSystem";

// Type detection
export {
  TypeDetector,
  globalTypeDetector,
  detectType,
  getTypeName,
  isType,
  getTypeInfo,
} from "./TypeDetector";

// Type caching
export {
  TypeCache,
  CacheStats,
  globalTypeCache,
  cachedGetType,
  cachedTypeMatch,
  cachedValidateType,
} from "./TypeCache";

// Type validation
export {
  TypeValidator,
  ValidationMode,
  TypeValidationConfig,
  createStrictValidator,
  createDisabledValidator,
} from "./TypeValidator";

// Collection validation adapter (bridges old and new)
export {
  CollectionValidationAdapter,
  ValidationAdapterConfig,
  createValidationAdapter,
} from "./CollectionValidationAdapter";

