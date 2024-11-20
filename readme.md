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
- [x] [spidermonkey](https://spidermonkey.dev/): SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox
- [ ] [JerryScript](https://github.com/jerryscript-project/jerryscript): Ultra-lightweight JavaScript engine for the Internet of Things.
- [ ] [DukTape](https://github.com/svaarala/duktape): embeddable Javascript engine with a focus on portability and compact footprint
- [ ] [ChakraCore](https://github.com/chakra-core/ChakraCore): ChakraCore is an open source Javascript engine with a C API.
- [ ] [nova](https://github.com/trynova/nova): Nova is a JavaScript and WebAssembly engine written in Rust.

## bench

### ubuntu
| Engine | jsc | bun | v8 | node | deno | spidermonkey | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 42055 | 41325 | 34282 | 38747 | 31701 | 13122 | 41851 | 1134 | 752 | 718 | 694 | 712 | 216 | 87.7 | 46.3 |
| DeltaBlue | 49694 | 49390 | 98430 | 66667 | 74184 | 13065 | 27598 | 1073 | 705 | 692 | 672 | 694 | 320 | 157 | 45.7 |
| Crypto | 46108 | 44758 | 42725 | 41564 | 41423 | 17906 | 15748 | 1355 | 833 | 608 | 752 | 610 | 180 | 289 | 57.1 |
| RayTrace | 115882 | 117436 | 79401 | 55425 | 57497 | 27750 | 6560 | 1550 | 1202 | 1128 | 912 | 1044 | 494 | 464 | 144 |
| EarleyBoyer | 69941 | 67021 | 70634 | 65958 | 67380 | 36119 | 23700 | 3434 | 2030 | 1794 | 1488 | 1576 | 512 | 330 | 156 |
| RegExp | 17075 | 17092 | 10032 | 9101 | 8965 | 8659 | 732 | 555 | 193 | 246 | 242 | 223 | 202 | 70.5 | 43.5 |
| Splay | 38317 | 35685 | 37404 | 34251 | 22606 | 22834 | 2112 | 3636 | 1889 | 2035 | 1783 | 1704 | 1307 | 390 | 166 |
| NavierStokes | 34508 | 33882 | 38655 | 38990 | 38912 | 22024 | 21963 | 1865 | 1495 | 993 | 1359 | 1013 | 470 | 770 | 123 |
| Score | 45268 | 44310 | 43018 | 38443 | 36242 | 18445 | 9949 | 1548 | 936 | 862 | 853 | 813 | 375 | 245 | 83.7 |
| Executable size | 35M | 92M | 484K | 112M | 137M | 295M | 4.0K | 36M | 8.2M | 5.2M | 1.1M | 1.3M | 408K | 2.1M | 27M |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 51191 | 39987 | 42715 | 29890 | 1296 | 1337 | 1324 | 1105 | 815 | 397 | 101 |
| DeltaBlue | 63110 | 101154 | 82376 | 31459 | 1159 | 1312 | 1248 | 1128 | 834 | 585 | 182 |
| Crypto | 63700 | 58971 | 53444 | 23961 | 1300 | 1130 | 1215 | 1345 | 673 | 302 | 343 |
| RayTrace | 161170 | 75849 | 65637 | 1535 | 1907 | 2080 | 1587 | 1270 | 1187 | 1025 | 593 |
| EarleyBoyer | 99307 | 84172 | 83688 | 27418 | 4291 | 2871 | 2635 | 2318 | 1983 | 1132 | 373 |
| RegExp | 26911 | 12080 | 11922 | 1425 | 651 | 293 | 279 | 288 | 181 | 326 | 177 |
| Splay | 50639 | 26509 | 31284 | 2086 | 3610 | 3357 | 2534 | 2537 | 2145 | 1285 | 377 |
| NavierStokes | 32171 | 37952 | 38359 | 27899 | 1550 | 2132 | 2167 | 2561 | 1109 | 792 | 869 |
| Score | 58877 | 45543 | 44280 | 9704 | 1662 | 1494 | 1376 | 1320 | 909 | 637 | 308 |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | deno | node | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 34169 | 30596 | 29883 | 35517 | 686 | 547 | 501 | 437 | 226 | 35.6 | 427 |
| DeltaBlue | 35314 | 64082 | 60438 | 32709 | 606 | 508 | 460 | 410 | 324 | 34.2 | 397 |
| Crypto | 40613 | 39167 | 37851 | 21115 | 780 | 750 | 507 | 390 | 180 | 50.1 | 385 |
| RayTrace | 97235 | 56313 | 50763 | 3179 | 992 | 528 | 662 | 737 | 439 | 112 | 571 |
| EarleyBoyer | 53752 | 63818 | 57307 | 28506 | 2204 | 994 | 1092 | 1153 | 540 | 107 | 0 |
| RegExp | 14015 | 8339 | 7328 | 952 | 394 | 190 | 191 | 209 | 192 | 37.2 | 183 |
| Splay | 26648 | 21913 | 28538 | 2291 | 2392 | 969 | 1070 | 1312 | 570 | 105 | 944 |
| NavierStokes | 32648 | 36322 | 36101 | 23596 | 1068 | 1275 | 1074 | 662 | 481 | 110 | 681 |
| Score | 36460 | 34108 | 33271 | 10170 | 959 | 633 | 607 | 567 | 336 | 64.8 | 0 |
| Executable size | 103M | 103M | 77M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
