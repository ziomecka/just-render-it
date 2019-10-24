export {};
declare type ComponentProps = import('./common/').ComponentProps;
declare global {
    namespace NodeJS {
        interface Global {
            createComponent({ ...args }: Partial<ComponentProps>): string;
            helpers: import('./common/').Helpers;
            window: object;
            document: object;
        }
    }
    function createComponent({ ...args }: Partial<ComponentProps>): string;
}
