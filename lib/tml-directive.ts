declare var require: any;
var tml = require('tml-js-browser');

import {TmlLanguage} from "./tml-language";
import {
    Directive, ElementRef, Renderer, OnChanges
} from '@angular/core';

@Directive({
    selector: '[tmlTr]',
    inputs: ['tmlTr', 'tmlDescription', 'tmlValues'],
})
export class Translate implements OnChanges {
    
    private tmlTr:any;
    private tmlDescription:string;
    private tmlValues:any;
    
    private _cachedOrig:string;
    private _initOccured:boolean;

    ngOnChanges(): void {
        if (!this._initOccured)
            return;
        
        this.performTranslation();
    }

    constructor(public el: ElementRef, public renderer: Renderer) {
        tml.tml.on('language-change', (language:TmlLanguage) => {
            this.performTranslation();
        });
    }

    strToTranslate() {
        if (this._cachedOrig)
            return this._cachedOrig;
        
        let elem = this.el.nativeElement;
        var translate = this.tmlTr || elem.getAttribute('tmlTr');
        if (translate && translate != 'tmlTr')
            return translate;

        //if taking from innerHTML - caching the original, because we'll never see it again.
        this._cachedOrig = elem.innerHTML;
        return this._cachedOrig;
    }

    performTranslation() {
        let translate = this.strToTranslate();
        let elem = this.el.nativeElement;

        var args = [translate];
        if (this.tmlDescription) {
            args.push(this.tmlDescription);
        }
        if (this.tmlValues && typeof this.tmlValues === 'object') {
            args.push(this.tmlValues);
        }
        var result = tml.tr.apply(tml, args);
        if (result)
            elem.innerHTML = result;

    }

    //doing this here because innerHTML is not available until after view init.
    ngAfterViewInit() {
        this._initOccured = true;
        this.performTranslation();
    }
}
