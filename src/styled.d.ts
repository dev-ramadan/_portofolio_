import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        bg: string;
        text_primary: string;
        primary: string;
        bgLight:string,
        text_secondary: string,
        card:string,
        card_light: string,
        button: string,
        white: string,
        black: string,
    }
}
