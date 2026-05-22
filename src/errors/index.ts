// Base error classes and interfaces
export { BaseCollectionError } from './BaseCollectionError';
export type { ICollectionError } from './ICollectionError';
export type { ErrorContext } from './ErrorContext';

// Specific error classes
export { ValidationError, type ValidationIssue } from './ValidationError';
export { IndexOutOfBoundsError } from './IndexOutOfBoundsError';
export { CollectionEmptyError } from './CollectionEmptyError';
export { TypeMismatchError } from './TypeMismatchError';
export { DuplicateKeyError } from './DuplicateKeyError';
export { InvalidOperationError } from './InvalidOperationError';
export { ComparatorRequiredError } from './ComparatorRequiredError';

// Logger
export type { IErrorLogger } from './IErrorLogger';
export { ConsoleErrorLogger } from './ConsoleErrorLogger';
