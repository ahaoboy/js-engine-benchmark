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
- [x] [v8](https://v8.dev/): V8 is Google’s open source high-performance JavaScript and WebAssembly engine
- [ ] [spidermonkey](https://spidermonkey.dev/): SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox
- [ ] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
## bench

### ubuntu
| Engine | jsc | bun | node | deno | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 41550 | 40643 | 31436 | 33194 | 35556 | 1077 | 751 | 740 | 697 | 717 | 218 | 88.4 | 47.1 |
| DeltaBlue | 49734 | 49450 | 62845 | 68835 | 39180 | 1053 | 699 | 733 | 678 | 690 | 320 | 162 | 45.7 |
| Crypto | 45490 | 44571 | 41245 | 41583 | 16450 | 1360 | 808 | 610 | 754 | 600 | 181 | 317 | 56.2 |
| RayTrace | 115586 | 112552 | 56091 | 57719 | 5920 | 1564 | 1203 | 1107 | 926 | 996 | 498 | 497 | 144 |
| EarleyBoyer | 67311 | 67587 | 65519 | 66156 | 19847 | 3383 | 2012 | 1815 | 1498 | 1570 | 522 | 341 | 156 |
| RegExp | 16274 | 16968 | 8719 | 9074 | 855 | 558 | 193 | 229 | 240 | 216 | 201 | 71.1 | 43.7 |
| Splay | 36426 | 34039 | 31227 | 21905 | 2404 | 3480 | 1858 | 2043 | 1755 | 1711 | 1312 | 383 | 158 |
| NavierStokes | 34577 | 34132 | 39029 | 38803 | 28790 | 1874 | 1428 | 1040 | 1311 | 1024 | 458 | 768 | 124 |
| Score | 44359 | 43754 | 36546 | 35963 | 10600 | 1528 | 923 | 868 | 850 | 805 | 375 | 252 | 83.4 |
| Executable size | 35M | 97M | 112M | 137M | 4.0K | 36M | 8.2M | 5.2M | 1.1M | 1.3M | 408K | 2.1M | 27M |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 51509 | 45031 | 44276 | 30286 | 1373 | 1344 | 1338 | 1107 | 791 | 413 | 108 |
| DeltaBlue | 65496 | 106609 | 89173 | 37945 | 1231 | 1371 | 1258 | 1134 | 822 | 612 | 191 |
| Crypto | 65234 | 59388 | 57689 | 21758 | 1484 | 1241 | 1222 | 1325 | 660 | 314 | 385 |
| RayTrace | 177967 | 80067 | 79475 | 3090 | 2567 | 2155 | 1554 | 1274 | 1067 | 1022 | 618 |
| EarleyBoyer | 102589 | 95245 | 93876 | 28076 | 5237 | 3228 | 2606 | 2377 | 1895 | 1128 | 422 |
| RegExp | 27029 | 13806 | 13261 | 1221 | 733 | 318 | 279 | 284 | 178 | 333 | 190 |
| Splay | 51993 | 40746 | 46784 | 1849 | 4795 | 3749 | 2499 | 2464 | 2088 | 1442 | 416 |
| NavierStokes | 33687 | 40769 | 40580 | 28316 | 1650 | 2176 | 2205 | 2564 | 1190 | 789 | 930 |
| Score | 60941 | 51549 | 50572 | 10418 | 1934 | 1592 | 1376 | 1317 | 887 | 657 | 333 |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | node | deno | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 37169 | 32104 | 38458 | 35729 | 695 | 561 | 505 | 441 | 219 | 35.4 | 425 |
| DeltaBlue | 36993 | 61992 | 74865 | 28422 | 615 | 527 | 470 | 405 | 317 | 33 | 402 |
| Crypto | 42750 | 41679 | 40977 | 17851 | 787 | 767 | 515 | 393 | 181 | 47.2 | 399 |
| RayTrace | 99085 | 52243 | 53205 | 3256 | 1001 | 557 | 675 | 747 | 396 | 109 | 504 |
| EarleyBoyer | 56502 | 61796 | 63470 | 30224 | 2214 | 1028 | 1110 | 1135 | 501 | 92.6 | 0 |
| RegExp | 14183 | 8182 | 8685 | 943 | 398 | 200 | 195 | 217 | 195 | 38 | 179 |
| Splay | 31236 | 29117 | 21106 | 2141 | 2151 | 1018 | 1115 | 1360 | 618 | 116 | 901 |
| NavierStokes | 33950 | 38655 | 33027 | 27751 | 1056 | 1294 | 1058 | 696 | 484 | 109 | 691 |
| Score | 38621 | 35400 | 35302 | 9999 | 952 | 656 | 617 | 577 | 331 | 63.5 | 0 |
| Executable size | 106M | 77M | 103M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
