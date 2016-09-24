export interface TmlLanguage {
    id:number;
    locale:string;
    english_name:string;
    native_name:string;
    fallback_language?: TmlLanguage;
    
}