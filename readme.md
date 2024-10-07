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
| Engine | bun | node | deno | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 93M | 110M | 137M | 4.0K | 36M | 7.6M | 5.1M | 1.1M | 1.3M | 396K | 2.1M | 27M |
| Richards | 37996 | 31433 | 33159 | 35577 | 1123 | 634 | 726 | 700 | 695 | 227 | 88.8 | 47.3 |
| DeltaBlue | 48716 | 67063 | 68022 | 26097 | 1058 | 590 | 718 | 677 | 686 | 319 | 163 | 45.2 |
| Crypto | 44812 | 41376 | 41581 | 30577 | 1368 | 785 | 634 | 754 | 621 | 177 | 317 | 55.9 |
| RayTrace | 81547 | 56979 | 57957 | 5723 | 1563 | 1093 | 1057 | 880 | 873 | 471 | 493 | 144 |
| EarleyBoyer | 68478 | 66262 | 68170 | 31554 | 3395 | 1864 | 1756 | 1507 | 1474 | 490 | 343 | 152 |
| RegExp | 17291 | 9047 | 9183 | 1276 | 554 | 193 | 239 | 226 | 242 | 184 | 70.5 | 43.5 |
| Splay | 35220 | 32898 | 22695 | 2317 | 3672 | 1883 | 2064 | 1785 | 1716 | 851 | 392 | 172 |
| NavierStokes | 34280 | 39060 | 38842 | 32698 | 1840 | 1469 | 994 | 1400 | 1086 | 447 | 767 | 120 |
| Score | 41993 | 37400 | 36277 | 12214 | 1544 | 867 | 860 | 848 | 802 | 346 | 252 | 83.3 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs | qjs(ng) | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 110M | 0 | 7.9M | 3.6M | 920K | 1.0M | 7.7M | 432K | 1.6M |
| Richards | 47040 | 44533 | 41632 | 30176 | 1252 | 1321 | 1103 | 1245 | 788 | 379 | 107 |
| DeltaBlue | 61741 | 110787 | 94945 | 39003 | 1185 | 1307 | 1114 | 1235 | 774 | 592 | 184 |
| Crypto | 65599 | 58930 | 57512 | 23129 | 1374 | 1238 | 1337 | 1192 | 684 | 306 | 365 |
| RayTrace | 130090 | 77699 | 76367 | 1355 | 2349 | 2132 | 1192 | 1267 | 1190 | 925 | 580 |
| EarleyBoyer | 102159 | 95237 | 90807 | 28103 | 4955 | 3204 | 2324 | 2354 | 1903 | 1014 | 402 |
| RegExp | 26874 | 13583 | 13221 | 1413 | 684 | 310 | 283 | 275 | 162 | 328 | 180 |
| Splay | 48952 | 38888 | 45611 | 2179 | 4506 | 3586 | 2464 | 2413 | 2090 | 1449 | 424 |
| NavierStokes | 32550 | 40473 | 40432 | 27306 | 1557 | 2150 | 2545 | 2175 | 1314 | 722 | 902 |
| Score | 56805 | 51032 | 49899 | 9829 | 1807 | 1559 | 1298 | 1295 | 897 | 621 | 322 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 102M | 103M | 76M | 352K | 3.1M | 1.1M | 8.4M | 5.8M | 660K | 27M | 1.8M |
| Richards | 31645 | 31546 | 31620 | 36251 | 700 | 554 | 514 | 442 | 229 | 36.7 | 422 |
| DeltaBlue | 39955 | 73450 | 63883 | 33634 | 624 | 515 | 457 | 407 | 324 | 34.2 | 400 |
| Crypto | 41459 | 41884 | 41636 | 18701 | 786 | 764 | 512 | 399 | 181 | 50.5 | 387 |
| RayTrace | 77107 | 57719 | 56091 | 5066 | 1014 | 555 | 670 | 745 | 451 | 114 | 489 |
| EarleyBoyer | 57794 | 67128 | 63307 | 27392 | 2234 | 1005 | 1098 | 1138 | 560 | 106 | 0 |
| RegExp | 14413 | 8828 | 8315 | 1025 | 405 | 197 | 195 | 214 | 199 | 38.5 | 184 |
| Splay | 30518 | 23526 | 30192 | 3042 | 2470 | 1009 | 1089 | 1404 | 736 | 120 | 978 |
| NavierStokes | 34587 | 38990 | 39248 | 25376 | 1087 | 1294 | 1108 | 695 | 484 | 112 | 693 |
| Score | 37054 | 36345 | 36190 | 11216 | 979 | 649 | 617 | 580 | 353 | 66.8 | 0 |
