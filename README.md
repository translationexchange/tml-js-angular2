<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/1316274?v=3&s=200">
</p>

# TML for Angular2
[![Build Status](https://travis-ci.org/translationexchange/tml-js-angular2.svg?branch=master)](https://travis-ci.org/translationexchange/tml-js-angular2)
[![Coverage Status](https://coveralls.io/repos/translationexchange/tml-js-angular2/badge.png?branch=master)](https://coveralls.io/r/translationexchange/tml-js-angular2?branch=master)


This adds angular2 directives and services that allow you to perform seamless and advanced translations using TML from TranslationExchange.

Learn more about [TML](http://translationexchange.com/docs/tml/basics)

## Requirements

- Angular2
- TranslationExchange account


## Getting started

Get it from [NPM](http://npmjs.org/)

```sh
npm install tml-angular2
```

### Include it in your angular app
```js
    //--- main.ts ---

    //import the init 
    import {init} from "tml-angular2";
    
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { enableProdMode } from '@angular/core';
    import { AppModule } from './app.module';
    if (process.env.ENV === 'production') {
        enableProdMode();
    }
    
    //init tml.js
    init({
        key: "YOUR_APP_KEY",
        onLoad: function(app: any) {
            
            //bootstrap angular app after tml starts
            platformBrowserDynamic().bootstrapModule(AppModule);
        }
    });
    
    //--- app.module.ts ---
    
    import { NgModule } from '@angular/core';
    import { BrowserModule }  from '@angular/platform-browser';
    
    //import the main module
    import {TmlAngularModule} from "tml-angular2";

    //add it to your module imports
    @NgModule({
        imports: [
            BrowserModule,
            TmlAngularModule,
            // more modules
        ],
        declarations: [
          // ...
        ]
    })
    
    export class AppModule { }
```

## Usage

#### Simple string translation
    
    //plain string
    <h1 tmlTr>Hello World</h1>
    
    //variable
    <h1 [tmlTr]='greetings.hello'></h1>
    <h1 tmlTr>{{greetings.hello}}</h1>
        
#### With token data
    
    <h1 tmlTr tmlValues="{ user: username.name }">Welcome {user}</h1>

#### Phrase description ####

The description of a phrase is not mandatory, but it should be used in cases when the label alone is not sufficient enough to determine the meaning of the sentence being translated. As a general rule, you should always provide description to words, phrases and sentences that are only meaningful within a specific context. TML uses label and description together to create a unique key for each phrase. The description serves two purposes: it creates a unique key for each label and it also gives a hint to the translators for the context in which the label is used.

    <h3 tmlTr tmlDescription="Link to invite your friends to join the site">Invite</h3>
    
    <span tmlTr="Invite" tmlDescription="An invitation you received from your friend"></span>

#### Simple string translation with a pipe (for attributes, alts, titles)
    
    <img alt="{{ 'amazing art' | trl }}"" src='amazing-art.jpg' />
    
    <input name='username' placeholder="{{ 'Enter username' | trl }}"" />
    
    
#### Pipe with token data
    
    <input type='number' name='age' 
     min='{{limits.minimalAge}}' 
     placeholder="{{ 'Enter your age (must be over {age})' | trl:{ age: limits.minimalAge }}" />
    
    
#### Pipe with token data and description
    
    <input type='number' name='age' 
     min='{{limits.minimalAge}}' 
     placeholder="{{ 'Enter your age (must be over {age})' | trl:"Person age in years":{ age: limits.minimalAge }}" />
    
    
<a name="js-api"></a>
### JS API ###

There is an injectable service called `TranslateService` which exposes some useful methods:

`currentLanguage()` - Currently selected language

`changeLanguage(locale, callback)` - Change language by locale

`isRtl()` - Is the currently selected language right-to-left

`languageChanged$ : EventEmitter<Language>` - event emitter that's triggered on language change

```js
  //in your component
  import {TranslateService} from "tml-angular2";
  
  constructor(translateService: TranslateService) {
      
      translateService.currentLanguage();
      // { locale: 'en', native_name: 'English',  .... }
      
      translateService.isRtl();
      // false
      
      translateService.changeLanguage('ru', (language) => {
        console.log(language);
        // {locale: 'ru', native_name: 'Русский', .... } 
      }
      
      translateService.languageChanged$.subscribe(language => { 
        console.log(language)
        // {locale: 'ru', native_name: 'Русский', .... }
      });
            

  }
```


     
Links
==================

* Register on TranslationExchange.com: http://translationexchange.com

* Read TranslationExchange's documentation: http://docs.translationexchange.com

* Follow TranslationExchange on Twitter: https://twitter.com/translationx

* Connect with TranslationExchange on Facebook: https://www.facebook.com/translationexchange

* If you have any questions or suggestions, contact us: feedback@translationexchange.com


Copyright and license
==================

Copyright (c) 2016 Translation Exchange, Inc

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.     
