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
| Richards | 38073 | 31613 | 33262 | 35683 | 1113 | 712 | 644 | 691 | 659 | 229 | 88.9 | 47.2 |
| DeltaBlue | 48610 | 66766 | 71738 | 39334 | 1048 | 695 | 582 | 694 | 653 | 325 | 162 | 45.2 |
| Crypto | 44903 | 41525 | 41358 | 19638 | 1374 | 643 | 794 | 775 | 625 | 179 | 317 | 56.2 |
| RayTrace | 81029 | 55203 | 56683 | 4489 | 1568 | 1105 | 1083 | 959 | 893 | 472 | 498 | 144 |
| EarleyBoyer | 67977 | 66564 | 66530 | 22151 | 3391 | 1783 | 1872 | 1526 | 1462 | 481 | 341 | 152 |
| RegExp | 17404 | 9119 | 9083 | 872 | 553 | 250 | 197 | 226 | 225 | 186 | 70 | 43.6 |
| Splay | 35163 | 33020 | 22769 | 2276 | 3610 | 1960 | 1828 | 1757 | 1701 | 1277 | 359 | 163 |
| NavierStokes | 34360 | 39029 | 38803 | 23797 | 1857 | 1062 | 1470 | 1436 | 1036 | 455 | 771 | 124 |
| Score | 41969 | 37347 | 36257 | 10328 | 1540 | 869 | 867 | 864 | 782 | 367 | 249 | 83.2 |
### macos
| Engine | bun | node | deno | graaljs | hermes | tjs | llrt | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 93M | 110M | 137M | 4.0K | 36M | 5.1M | 7.6M | 1.1M | 1.3M | 396K | 2.1M | 27M |
| Richards | 38073 | 31613 | 33262 | 35683 | 1113 | 712 | 644 | 691 | 659 | 229 | 88.9 | 47.2 |
| DeltaBlue | 48610 | 66766 | 71738 | 39334 | 1048 | 695 | 582 | 694 | 653 | 325 | 162 | 45.2 |
| Crypto | 44903 | 41525 | 41358 | 19638 | 1374 | 643 | 794 | 775 | 625 | 179 | 317 | 56.2 |
| RayTrace | 81029 | 55203 | 56683 | 4489 | 1568 | 1105 | 1083 | 959 | 893 | 472 | 498 | 144 |
| EarleyBoyer | 67977 | 66564 | 66530 | 22151 | 3391 | 1783 | 1872 | 1526 | 1462 | 481 | 341 | 152 |
| RegExp | 17404 | 9119 | 9083 | 872 | 553 | 250 | 197 | 226 | 225 | 186 | 70 | 43.6 |
| Splay | 35163 | 33020 | 22769 | 2276 | 3610 | 1960 | 1828 | 1757 | 1701 | 1277 | 359 | 163 |
| NavierStokes | 34360 | 39029 | 38803 | 23797 | 1857 | 1062 | 1470 | 1436 | 1036 | 455 | 771 | 124 |
| Score | 41969 | 37347 | 36257 | 10328 | 1540 | 869 | 867 | 864 | 782 | 367 | 249 | 83.2 |
### windows
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs | qjs(ng) | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 110M | 0 | 7.9M | 3.5M | 920K | 1.0M | 7.7M | 432K | 1.6M |
| Richards | 46348 | 45261 | 44304 | 29791 | 1373 | 1335 | 1112 | 1174 | 815 | 415 | 108 |
| DeltaBlue | 63334 | 105253 | 95137 | 39148 | 1258 | 1355 | 1136 | 1222 | 803 | 619 | 191 |
| Crypto | 66388 | 59376 | 54095 | 24826 | 1473 | 1239 | 1341 | 1215 | 689 | 315 | 367 |
| RayTrace | 129054 | 81473 | 82657 | 3258 | 2564 | 2219 | 1268 | 1323 | 1233 | 1018 | 618 |
| EarleyBoyer | 101878 | 97303 | 95321 | 30535 | 5110 | 3410 | 2389 | 2445 | 1982 | 1133 | 413 |
| RegExp | 27120 | 13429 | 13391 | 1433 | 741 | 319 | 288 | 283 | 153 | 328 | 189 |
| Splay | 49327 | 41169 | 43834 | 2042 | 4824 | 3729 | 2518 | 2502 | 2214 | 1103 | 419 |
| NavierStokes | 33768 | 40836 | 40688 | 26362 | 1662 | 2128 | 2573 | 2184 | 1262 | 793 | 854 |
| Score | 57271 | 51647 | 50590 | 11050 | 1937 | 1600 | 1326 | 1311 | 910 | 636 | 327 |
