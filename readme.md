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
| Engine | jsc | bun | v8 | node | deno | graaljs | hermes | llrt | tjs | qjs | qjs(ng) | mujs | xst | boa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 42369 | 39785 | 34197 | 38779 | 32958 | 35853 | 1127 | 752 | 723 | 690 | 700 | 226 | 87.2 | 47.7 |
| DeltaBlue | 50772 | 49602 | 98827 | 67182 | 74898 | 26784 | 1029 | 693 | 714 | 670 | 698 | 327 | 156 | 45.7 |
| Crypto | 46135 | 44736 | 42741 | 41408 | 41265 | 16193 | 1370 | 815 | 607 | 755 | 607 | 180 | 292 | 56.8 |
| RayTrace | 114180 | 116104 | 79697 | 56239 | 58385 | 8427 | 1553 | 1202 | 1115 | 921 | 1032 | 495 | 459 | 144 |
| EarleyBoyer | 69646 | 68485 | 66664 | 66440 | 68756 | 11542 | 3389 | 2011 | 1830 | 1529 | 1585 | 535 | 332 | 158 |
| RegExp | 17001 | 17240 | 9981 | 9001 | 9183 | 882 | 557 | 194 | 247 | 242 | 239 | 204 | 70.7 | 43.7 |
| Splay | 38276 | 36589 | 37282 | 32588 | 22524 | 2267 | 3651 | 1927 | 2062 | 1767 | 1768 | 1242 | 414 | 169 |
| NavierStokes | 34656 | 34394 | 38732 | 39099 | 38803 | 33142 | 1820 | 1475 | 998 | 1385 | 1005 | 458 | 807 | 124 |
| Score | 45321 | 44446 | 42704 | 38293 | 36687 | 10002 | 1536 | 931 | 869 | 857 | 821 | 377 | 248 | 84.4 |
| Executable size | 35M | 97M | 484K | 112M | 137M | 4.0K | 36M | 8.2M | 5.2M | 1.1M | 1.3M | 408K | 2.1M | 27M |
### macos
| Engine | bun | deno | node | graaljs | hermes | tjs | qjs(ng) | qjs | llrt | mujs | xst |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 52621 | 44639 | 44389 | 30158 | 1359 | 1338 | 1293 | 1103 | 680 | 407 | 98.6 |
| DeltaBlue | 64386 | 105035 | 81927 | 37846 | 1260 | 1317 | 1234 | 1124 | 716 | 607 | 181 |
| Crypto | 63952 | 59267 | 57273 | 22324 | 1437 | 1209 | 1211 | 1339 | 610 | 314 | 380 |
| RayTrace | 176561 | 80955 | 84729 | 3900 | 2575 | 2167 | 1512 | 1271 | 1021 | 984 | 608 |
| EarleyBoyer | 101250 | 97179 | 94865 | 32625 | 5187 | 3339 | 2490 | 2375 | 1693 | 1130 | 413 |
| RegExp | 27393 | 13234 | 13274 | 1424 | 737 | 316 | 263 | 286 | 159 | 327 | 187 |
| Splay | 52195 | 40640 | 46474 | 1799 | 4771 | 3472 | 2332 | 2318 | 2062 | 1010 | 417 |
| NavierStokes | 32879 | 40769 | 40432 | 26712 | 1662 | 2215 | 2225 | 2550 | 1249 | 779 | 893 |
| Score | 60609 | 51296 | 50419 | 11047 | 1929 | 1573 | 1332 | 1306 | 823 | 621 | 323 |
| Executable size | 0 | 105M | 114M | 0 | 7.9M | 3.6M | 1.0M | 920K | 8.2M | 432K | 1.6M |
### windows
| Engine | bun | node | deno | graaljs | hermes | qjs | llrt | tjs | mujs | boa | qjs(ng) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Richards | 37632 | 31366 | 32538 | 35806 | 700 | 564 | 513 | 434 | 229 | 36.8 | 438 |
| DeltaBlue | 38567 | 69391 | 74356 | 28345 | 623 | 528 | 469 | 410 | 324 | 34.8 | 403 |
| Crypto | 43013 | 41870 | 41935 | 22341 | 781 | 738 | 512 | 386 | 183 | 50.1 | 388 |
| RayTrace | 98937 | 54167 | 54463 | 3108 | 999 | 523 | 682 | 734 | 456 | 113 | 589 |
| EarleyBoyer | 59461 | 64507 | 66938 | 28754 | 2246 | 1045 | 1119 | 1177 | 573 | 114 | 0 |
| RegExp | 15153 | 8331 | 8892 | 1036 | 401 | 198 | 195 | 212 | 202 | 38.8 | 188 |
| Splay | 32385 | 29492 | 23526 | 2653 | 2420 | 1043 | 1130 | 1410 | 594 | 122 | 1010 |
| NavierStokes | 34691 | 39356 | 35657 | 27009 | 1101 | 1294 | 1070 | 702 | 481 | 112 | 704 |
| Score | 39765 | 36396 | 35900 | 10523 | 975 | 650 | 621 | 578 | 346 | 67.7 | 0 |
| Executable size | 106M | 77M | 103M | 352K | 3.1M | 1.1M | 9.0M | 5.8M | 660K | 27M | 1.8M |
