export enum Language {
    RU = 'Russian',
    EN = 'English',
}

export interface LanguageInterface{
    language : string; 
    theme: string;
}

const RU: LanguageInterface = {
    language: 'язык - ру',
    theme: 'тема',
};

const EN: LanguageInterface = {
    language: 'language - en',
    theme: 'theme',
};

export const translation = (
    language:string,
    key: keyof LanguageInterface
) => {
    switch(language){
        case Language.RU:
            return RU[key];
        case Language.EN:
            return EN[key];
        default:
            return EN[key];
    }
}