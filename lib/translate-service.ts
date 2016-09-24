declare var require: any;
var tml = require('tml-js-browser');

import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class TranslateService {
    currentLanguage() {
        return tml.tml.getCurrentLanguage();
    }

    isRtl() {
        return !!this.currentLanguage().right_to_left;
    }

    constructor() {
        this.languageChanged$ = new EventEmitter();

        tml.tml.on('language-change', (language:Language) => {
            this.languageChanged$.emit(language);
        });
    }

    public languageChanged$: EventEmitter<Language>;
}

export interface Language {
    locale: string;
}

