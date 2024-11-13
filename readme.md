fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

qjs-ng  ./dist/bench.js
qjs     ./dist/bench.js
llrt    ./dist/bench.js
mujs    ./dist/bench.js
boa     ./dist/bench.js
node    ./dist/bench.js
deno    ./dist/bench.js
jer     ./dist/bench.js
hermes  ./dist/bench.js
xst     ./dist/bench.js
tjs run ./dist/bench.js

or

npm run update
```

## Engine & Runtime

- [x] [bun](https://github.com/oven-sh/bun): Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one
- [x] [node](https://github.com/nodejs/node): Node.js JavaScript runtime
- [x] [deno](https://github.com/denoland/deno): A modern runtime for JavaScript and TypeScript.
- [x] [graaljs](https://github.com/oracle/graaljs): A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications!
- [x] [hermes](https://github.com/facebook/hermes): A JavaScript engine optimized for running React Native.
- [x] [llrt](https://github.com/awslabs/llrt): LLRT (Low Latency Runtime) is a lightweight JavaScript runtime
- [x] [txiki.js](https://github.com/saghul/txiki.js): A tiny JavaScript runtime
- [x] [QuickJS](https://bellard.org/quickjs/): version 2019-07-09, qjs executable, 64 bits, compiled with -O2.
- [x] [QuickJS-ng](https://github.com/quickjs-ng/quickjs): QuickJS, the Next Generation: a mighty JavaScript engine
- [x] [MuJS](https://github.com/ccxvii/mujs): An embeddable Javascript interpreter in C.
- [x] [XS](https://github.com/Moddable-OpenSource/moddable): Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers.
- [x] [Hermes](https://github.com/facebook/hermes): version 0.1.0, 64 bit Linux binary downloaded from here. The benchmark was run with the -O option (=enable expensive optimizations).
- [x] [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore): JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ​ECMAScript as in ​ECMA-262 specification.
- [ ] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
## bench

### ubuntu
| Engine | jsc | bun | node | deno | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 39697 | 42539 | 32111 | 33325 | 35676 | 1116 | 753 | 741 | 687 | 719 | 229 | 89.1 | 45.5 |
| DeltaBlue | 50627 | 47321 | 64247 | 68849 | 27003 | 1068 | 704 | 730 | 647 | 675 | 322 | 162 | 44.2 |
| Crypto | 45779 | 44912 | 41173 | 41496 | 14904 | 1364 | 797 | 646 | 737 | 599 | 180 | 294 | 49.9 |
| RayTrace | 114698 | 116030 | 55943 | 57440 | 11840 | 1530 | 1217 | 1089 | 894 | 1019 | 491 | 476 | 139 |
| EarleyBoyer | 66983 | 65320 | 65219 | 64687 | 11546 | 3384 | 2006 | 1832 | 1510 | 1551 | 507 | 341 | 148 |
| RegExp | 16514 | 17109 | 9092 | 9164 | 794 | 551 | 192 | 228 | 231 | 214 | 198 | 70.9 | 43.3 |
| Splay | 37923 | 35074 | 33175 | 23029 | 1938 | 3590 | 1903 | 1984 | 1765 | 1698 | 1236 | 368 | 166 |
| NavierStokes | 34577 | 34360 | 38881 | 38842 | 21793 | 1825 | 1419 | 1003 | 1304 | 1036 | 467 | 610 | 109 |
| Score | 44474 | 44031 | 37158 | 36124 | 9490 | 1532 | 925 | 866 | 835 | 803 | 373 | 240 | 79.7 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 53087 | 45628 | 43372 | 30201 | 1315 | 1298 | 1292 | 1112 | 799 | 401 | 108 |
| DeltaBlue | 65933 | 103600 | 91078 | 39367 | 1206 | 1316 | 1197 | 1128 | 841 | 597 | 190 |
| Crypto | 64701 | 59304 | 57045 | 24403 | 1406 | 1202 | 1189 | 1349 | 672 | 305 | 341 |
| RayTrace | 181149 | 80807 | 79401 | 3837 | 2462 | 2103 | 1514 | 1266 | 1204 | 960 | 609 |
| EarleyBoyer | 102118 | 97251 | 94693 | 32097 | 5090 | 3261 | 2489 | 2328 | 1996 | 1065 | 403 |
| RegExp | 27512 | 13819 | 13429 | 1407 | 708 | 308 | 272 | 280 | 184 | 347 | 190 |
| Splay | 51902 | 37429 | 44461 | 2361 | 4441 | 3341 | 2310 | 2339 | 2200 | 1244 | 423 |
| NavierStokes | 33586 | 40729 | 40513 | 28260 | 1477 | 2119 | 2159 | 2510 | 1265 | 774 | 834 |
| Score | 61358 | 51089 | 50301 | 11633 | 1837 | 1534 | 1323 | 1301 | 929 | 630 | 322 |
### windows
| Engine | bun | node | deno | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 37872 | 30699 | 32877 | 35697 | 698 | 558 | 489 | 447 | 221 | 36.9 | 422 |
| DeltaBlue | 37158 | 67030 | 71037 | 32186 | 620 | 522 | 460 | 423 | 311 | 34.2 | 392 |
| Crypto | 42030 | 41838 | 41859 | 19362 | 775 | 770 | 511 | 390 | 183 | 49.2 | 385 |
| RayTrace | 97803 | 53670 | 55499 | 3105 | 1017 | 555 | 666 | 759 | 448 | 114 | 494 |
| EarleyBoyer | 58928 | 65958 | 66965 | 28849 | 2231 | 1050 | 1103 | 1154 | 574 | 112 | 0 |
| RegExp | 15456 | 8315 | 8837 | 1160 | 407 | 196 | 196 | 218 | 200 | 38.6 | 190 |
| Splay | 32376 | 30518 | 23078 | 3272 | 2445 | 1034 | 1134 | 1423 | 1164 | 119 | 998 |
| NavierStokes | 34804 | 39356 | 39099 | 25376 | 1062 | 1299 | 1106 | 704 | 488 | 109 | 686 |
| Score | 39509 | 36343 | 36120 | 10849 | 973 | 656 | 616 | 587 | 372 | 66.8 | 0 |
