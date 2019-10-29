declare const controlInternalState: <T>(initialValue: T) => [() => T, (value: T) => void];
export default controlInternalState;
