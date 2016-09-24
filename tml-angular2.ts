declare var require: any;
var tml = require('tml-js-browser');

function init(config:any) {
    tml.tml.init(config);
    tml.tml.config.refreshHandled = true;
}

import {NgModule}      from '@angular/core';

import {TranslateLabelPipe} from "./lib/tml-pipe";
import {TranslateService} from "./lib/translate-service";
import {Translate} from "./lib/tml-directive";

@NgModule({
    imports:      [  ],
    declarations: [ Translate, TranslateLabelPipe ],
    exports:      [ Translate, TranslateLabelPipe ],
    providers:    [ TranslateService ]
})

export class TmlAngularModule { }

export {TranslateService, init};