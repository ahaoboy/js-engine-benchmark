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
| Richards | 37748 | 31941 | 32746 | 35415 | 1130 | 644 | 728 | 709 | 681 | 215 | 89.2 | 47.1 |
| DeltaBlue | 47334 | 66971 | 68128 | 26546 | 1069 | 598 | 693 | 676 | 692 | 313 | 162 | 44.7 |
| Crypto | 45252 | 41632 | 41642 | 16587 | 1365 | 804 | 634 | 779 | 635 | 177 | 315 | 56.9 |
| RayTrace | 85987 | 57144 | 57867 | 9227 | 1554 | 1130 | 1116 | 902 | 873 | 453 | 497 | 143 |
| EarleyBoyer | 68974 | 63619 | 67824 | 31534 | 3357 | 1872 | 1807 | 1485 | 1504 | 435 | 339 | 145 |
| RegExp | 17149 | 9092 | 9146 | 1185 | 550 | 196 | 236 | 221 | 239 | 184 | 70.3 | 43.9 |
| Splay | 35698 | 34047 | 22834 | 2464 | 3370 | 1824 | 1923 | 1768 | 1687 | 1251 | 398 | 161 |
| NavierStokes | 34178 | 39029 | 38655 | 30657 | 1831 | 1475 | 1037 | 1407 | 1024 | 428 | 831 | 125 |
| Score | 42187 | 37501 | 36191 | 11915 | 1525 | 875 | 862 | 851 | 797 | 351 | 255 | 82.7 |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 0 | 105M | 110M | 0 | 7.9M | 3.6M | 1.0M | 920K | 7.7M | 432K | 1.6M |
| Richards | 48261 | 45405 | 42811 | 30727 | 1352 | 1345 | 1264 | 1125 | 836 | 414 | 106 |
| DeltaBlue | 63804 | 106496 | 98476 | 39625 | 1258 | 1374 | 1254 | 1140 | 814 | 618 | 186 |
| Crypto | 68136 | 60164 | 57799 | 24262 | 1488 | 1253 | 1257 | 1351 | 576 | 317 | 301 |
| RayTrace | 129498 | 81325 | 77625 | 1142 | 2577 | 2213 | 1325 | 1278 | 1227 | 1018 | 594 |
| EarleyBoyer | 102773 | 93926 | 95566 | 29814 | 5302 | 3409 | 2458 | 2396 | 2023 | 1134 | 410 |
| RegExp | 27639 | 13883 | 13483 | 1477 | 741 | 320 | 283 | 289 | 159 | 367 | 193 |
| Splay | 49294 | 41397 | 44787 | 2244 | 4803 | 3773 | 2521 | 2559 | 2161 | 1485 | 416 |
| NavierStokes | 33653 | 40810 | 40513 | 27492 | 1658 | 2216 | 2224 | 2586 | 1086 | 799 | 695 |
| Score | 57998 | 51835 | 50781 | 9891 | 1944 | 1617 | 1338 | 1336 | 881 | 670 | 308 |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executable size | 102M | 103M | 76M | 352K | 3.1M | 1.1M | 8.4M | 5.8M | 656K | 27M | 1.8M |
| Richards | 31736 | 31789 | 32361 | 35966 | 692 | 568 | 488 | 443 | 215 | 36.5 | 418 |
| DeltaBlue | 38296 | 73854 | 65054 | 33244 | 622 | 528 | 456 | 424 | 306 | 33.9 | 399 |
| Crypto | 41988 | 41179 | 41815 | 23790 | 789 | 767 | 505 | 397 | 180 | 49.5 | 396 |
| RayTrace | 68301 | 56535 | 54537 | 4472 | 979 | 555 | 665 | 749 | 451 | 113 | 502 |
| EarleyBoyer | 56351 | 67452 | 63059 | 30062 | 2238 | 1032 | 1117 | 1154 | 557 | 107 | 0 |
| RegExp | 15001 | 8938 | 8265 | 913 | 402 | 199 | 194 | 215 | 197 | 38.5 | 191 |
| Splay | 30795 | 23029 | 28856 | 3027 | 2383 | 1026 | 1098 | 1388 | 1149 | 119 | 990 |
| NavierStokes | 34622 | 38990 | 39060 | 21963 | 1082 | 1299 | 1106 | 703 | 487 | 109 | 700 |
| Score | 36487 | 36215 | 35999 | 11110 | 968 | 657 | 612 | 584 | 367 | 66.2 | 0 |
