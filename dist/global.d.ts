declare type Value = string | number;
interface Return {
    [key: string]: {
        [key: string]: Value;
    };
}
export declare const createReset: ({ typography }: {
    typography: {
        fonts: {
            base: string;
            mono: string;
        };
        weight: {
            regular: number;
            bold: number;
            black: number;
        };
        size: {
            s1: number;
            s2: number;
            s3: number;
            m1: number;
            m2: number;
            m3: number;
            l1: number;
            l2: number;
            l3: number;
            code: number;
        };
    };
}) => Return;
export declare const createGlobal: ({ color, background, typography, }: {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
        ancillary: string;
        orange: string;
        gold: string;
        green: string;
        seafoam: string;
        purple: string;
        ultraviolet: string;
        lightest: string;
        lighter: string;
        light: string;
        mediumlight: string;
        medium: string;
        mediumdark: string;
        dark: string;
        darker: string;
        darkest: string;
        border: string;
        positive: string;
        negative: string;
        warning: string;
        critical: string;
        defaultText: string;
        inverseText: string;
    };
    background: {
        app: string;
        bar: string;
        content: string;
        gridCellSize: number;
        hoverable: string;
        positive: string;
        negative: string;
        warning: string;
        critical: string;
    };
    typography: {
        fonts: {
            base: string;
            mono: string;
        };
        weight: {
            regular: number;
            bold: number;
            black: number;
        };
        size: {
            s1: number;
            s2: number;
            s3: number;
            m1: number;
            m2: number;
            m3: number;
            l1: number;
            l2: number;
            l3: number;
            code: number;
        };
    };
}) => Return;
export {};
