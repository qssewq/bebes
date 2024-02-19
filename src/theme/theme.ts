export enum Theme {
    Light = 'Light',
    Dark = 'Dark',
    }
    
    export interface ThemeConfig {
    primaryColor: string;
    secondaryColor: string;
   
    }
    
    export const lightTheme: ThemeConfig = {
    primaryColor: "#e9e5e2",
    secondaryColor: "#181818",
    };
    
    export const darkTheme: ThemeConfig = {
    primaryColor: "#181818",
    secondaryColor: "#e9e5e2",
    };