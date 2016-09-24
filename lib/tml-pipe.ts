import {PipeTransform, Injectable} from "@angular/core";
import {Pipe} from "@angular/core/src/metadata/directives";

declare var require: any;
var tml = require('tml-js-browser');

function translateLabel(label: string, description?:string, values?:any) {
    var args = [label];
    if (description) {
        if (typeof description === 'object') {
            values = description;
        }
        else if (typeof description === 'string') {
            args.push(description);
        }
    }
    if (values)
        args.push(values);
    
    return tml.trl.apply(tml, args);
}


@Injectable()
@Pipe({
    name: 'trl',
    pure: false // required to update the value when the promise is resolved
})
export class TranslateLabelPipe implements PipeTransform {
    transform (value: any, ...args: any[]): any {
        return translateLabel.apply(null, [value].concat(args));
    }
}
