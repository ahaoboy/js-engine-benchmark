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
- [ ] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
## bench

### ubuntu
| Engine | bun | node | deno | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 93M | 110M | 137M | 4.0K | 36M | 5.1M | 7.6M | 1.1M | 1.3M | 396K | 2.1M | 27M |
| Richards | 37240 | 32139 | 33378 | 35397 | 1120 | 714 | 640 | 704 | 675 | 210 | 89.1 | 47.3 |
| DeltaBlue | 48881 | 64491 | 73728 | 39598 | 1060 | 705 | 592 | 660 | 658 | 319 | 162 | 45.4 |
| Crypto | 44887 | 41555 | 41588 | 27285 | 1371 | 645 | 798 | 762 | 607 | 176 | 314 | 56.5 |
| RayTrace | 86653 | 56091 | 56313 | 4197 | 1548 | 1100 | 1137 | 891 | 895 | 470 | 500 | 144 |
| EarleyBoyer | 66712 | 65263 | 67234 | 23168 | 3406 | 1785 | 1845 | 1453 | 1442 | 495 | 340 | 153 |
| RegExp | 17218 | 9065 | 8992 | 810 | 560 | 247 | 194 | 220 | 224 | 188 | 70.2 | 43.9 |
| Splay | 35481 | 32662 | 23184 | 2050 | 3512 | 1934 | 1701 | 1654 | 1724 | 751 | 379 | 157 |
| NavierStokes | 34246 | 39029 | 38842 | 22615 | 1875 | 1041 | 1496 | 1378 | 1054 | 451 | 763 | 124 |
| Score | 42107 | 37170 | 36482 | 10426 | 1540 | 866 | 865 | 832 | 783 | 339 | 251 | 83.2 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 110M | 0 | 7.9M | 3.5M | 1.0M | 920K | 7.7M | 432K | 1.6M |
| Richards | 48254 | 45225 | 36866 | 29978 | 1361 | 1330 | 1244 | 1064 | 784 | 411 | 103 |
| DeltaBlue | 64108 | 106377 | 92010 | 33727 | 1260 | 1347 | 1236 | 1089 | 787 | 613 | 183 |
| Crypto | 66439 | 60075 | 57912 | 24773 | 1481 | 1237 | 1210 | 1302 | 699 | 315 | 355 |
| RayTrace | 129054 | 80437 | 82361 | 1279 | 2508 | 2194 | 1323 | 1218 | 1193 | 1019 | 595 |
| EarleyBoyer | 102295 | 97417 | 93052 | 25048 | 5289 | 3367 | 2320 | 2252 | 1974 | 1128 | 410 |
| RegExp | 27603 | 13959 | 13533 | 1328 | 740 | 319 | 282 | 276 | 143 | 362 | 190 |
| Splay | 49001 | 40688 | 49221 | 1662 | 4767 | 3667 | 2445 | 2513 | 2054 | 1339 | 430 |
| NavierStokes | 33835 | 39544 | 40729 | 28316 | 1668 | 2182 | 2180 | 2523 | 1332 | 794 | 893 |
| Score | 57777 | 51678 | 50279 | 9173 | 1937 | 1595 | 1308 | 1281 | 891 | 658 | 323 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 102M | 103M | 76M | 352K | 3.1M | 1.1M | 8.4M | 5.7M | 656K | 27M | 1.8M |
| Richards | 31881 | 32375 | 32192 | 36025 | 701 | 561 | 517 | 434 | 229 | 36.7 | 410 |
| DeltaBlue | 39076 | 70330 | 62984 | 29036 | 621 | 536 | 470 | 406 | 324 | 34.5 | 392 |
| Crypto | 40280 | 41871 | 41249 | 25504 | 783 | 720 | 518 | 374 | 181 | 50.5 | 398 |
| RayTrace | 76515 | 58311 | 55444 | 3478 | 1013 | 552 | 678 | 717 | 461 | 114 | 503 |
| EarleyBoyer | 60292 | 69030 | 65423 | 30533 | 2243 | 1044 | 1130 | 1148 | 572 | 113 | 0 |
| RegExp | 15153 | 8883 | 8331 | 976 | 409 | 197 | 194 | 221 | 203 | 39.3 | 194 |
| Splay | 31790 | 23698 | 30690 | 2524 | 2450 | 1027 | 1102 | 1417 | 593 | 127 | 1018 |
| NavierStokes | 34622 | 39060 | 39326 | 25351 | 1091 | 1300 | 1098 | 664 | 476 | 112 | 669 |
| Score | 37440 | 36508 | 36353 | 10740 | 979 | 652 | 623 | 571 | 346 | 68 | 0 |
