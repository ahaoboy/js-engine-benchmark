fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

## Note

### graaljs

Need lib and modules

```
Could not canonicalize /root/.easy-install/graaljs/../wasm.jar
Could not canonicalize /root/.easy-install/graaljs/../../ruby/jline3.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/graaljs-launcher.jar
Could not canonicalize /root/.easy-install/graaljs/../../../lib/graalvm/launcher-common.jar
Error while loading /root/.easy-install/graaljs/../../../lib/server/libjvm.so:
/root/.easy-install/graaljs/../../../lib/server/libjvm.so: cannot open shared object file: No such file or directory
Could not load JVM.
```

### ChakraCore

Need libChakraCore.so or libChakraCore.dylib

```
dlopen() failed; dlerror says 'dlopen(/Users/runner/.easy-install/libChakraCore.dylib, 0x0001)

dlopen() failed; dlerror says '/home/runner/.easy-install/libChakraCore.so
```


## Engine & Runtime

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46236<br>36.2M<br>1275/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46112<br>94.3M<br>488/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45778<br>53.3M<br>859/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 39900<br>123.4M<br>323/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 38290<br>118.9M<br>322/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20308<br>19.4M<br>1046/M | ✅unix<br>❌macArm<br>✅macAmd<br>❌windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18590<br>38.6M<br>481/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11108<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1544<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 894<br>11.9M<br>75/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 861<br>4.7M<br>182/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 828<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 768<br>857K<br>917/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 712<br>1.3M<br>528/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 629<br>2.1M<br>302/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 383<br>685K<br>572/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 371<br>414.5K<br>916/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 366<br>45.1M<br>8/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 259<br>2.2M<br>120/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| boa | [boa](https://github.com/boa-dev/boa) | 106<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>6.8K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
3/26/2025, 1:06:05 PM

### ubuntu
| Engine | jsc | bun | v8 | deno | node | ChakraCore | spidermonkey | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | mujs(one) | mujs | ladybird | xst | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.6 | 13.6.0 | 2.2.5 | 23.10.0 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2024.02.14 | 24.12.0 | 0 | 0 | 0.9.0 | 0 | 1.3.5 | 0 | 16.8.1 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 36.2M | 94.3M | 53.3M | 123.4M | 118.9M | 19.4M | 38.6M | 199.7M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 414.5K | 45.1M | 2.2M | 27M | 454.2K | 6.8K |
| Exe size | 36.2M | 94.3M | 937.8K | 123.4M | 118.9M | 571K | 38.6M | 1M | 36M | 11.9M | 4.7M | 5.2M | 857K | 1.3M | 2.1M | 685K | 414.5K | 45.1M | 2.2M | 27M | 454.2K | 6.8K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41127 | 42196 | 34864 | 31016 | 33106 | 23515 | 13305 | 35214 | 1126 | 807 | 698 | 703 | 610 | 595 | 547 | 244 | 229 | 297 | 89 | 60.6 | 273 | 0 |
| DeltaBlue | 53932 | 52147 | 99679 | 70092 | 74826 | 26243 | 12840 | 25184 | 1062 | 718 | 673 | 662 | 623 | 569 | 562 | 350 | 320 | 254 | 160 | 54.8 | 276 | 0 |
| Crypto | 51976 | 49604 | 42709 | 41736 | 41259 | 31904 | 20606 | 13966 | 1369 | 676 | 751 | 576 | 571 | 546 | 353 | 189 | 183 | 831 | 312 | 80.3 | 296 | 0 |
| RayTrace | 107002 | 107298 | 102266 | 67043 | 61863 | 36111 | 26788 | 7592 | 1573 | 1239 | 915 | 1056 | 944 | 886 | 700 | 517 | 484 | 322 | 490 | 164 | 342 | 0 |
| EarleyBoyer | 67360 | 67585 | 80000 | 74721 | 62433 | 7061 | 36866 | 24396 | 3367 | 2015 | 1530 | 1789 | 1392 | 1323 | 1203 | 509 | 485 | 404 | 319 | 194 | 0 | 0 |
| RegExp | 19780 | 20436 | 10294 | 10092 | 9065 | 7765 | 8659 | 1386 | 552 | 198 | 247 | 224 | 231 | 224 | 181 | 212 | 195 | 46.2 | 92.9 | 49.1 | 0 | 0 |
| Splay | 36663 | 36695 | 39759 | 36125 | 33501 | 20128 | 22712 | 2437 | 3632 | 1804 | 1801 | 1993 | 1822 | 1464 | 1653 | 1099 | 1190 | 744 | 388 | 227 | 0 | 0 |
| NavierStokes | 34656 | 34439 | 38803 | 38765 | 38545 | 36878 | 20862 | 29917 | 1859 | 1167 | 1371 | 973 | 1004 | 934 | 897 | 467 | 488 | 1150 | 807 | 175 | 0 | 0 |
| Score | 46236 | 46112 | 45778 | 39900 | 38290 | 20308 | 18590 | 11108 | 1544 | 894 | 861 | 828 | 768 | 712 | 629 | 383 | 371 | 366 | 259 | 106 | 0 | 0 |
| Score/MB | 1275 | 488 | 859 | 323 | 322 | 1046 | 481 | 55 | 42 | 75 | 182 | 160 | 917 | 528 | 302 | 572 | 916 | 8 | 120 | 3 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | node | v8 | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | primjs | rquickjs | mujs | ladybird | xst | JerryScript | ChakraCore | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.6 | 2.2.5 | 23.10.0 | 13.6.0 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2024.02.14 | 0 | 0 | 1.3.5 | 0 | 16.8.1 | 3.0.0 | 1.13.0.0.beta | 0.0.1 |
| Total size | 92.4M | 54M | 107.2M | 108.7M | 861K | 128.1M | 194M | 15.7M | 3.6M | 10.3M | 4.1M | 1.1M | 1.5M | 1.2M | 429.1K | 42.6M | 1.6M | 575.4K | 17.8M | 6.8K |
| Exe size | 913.2K | 54M | 107.2M | 108.7M | 861K | 64M | 147.4K | 7.9M | 3.6M | 10.3M | 2.1M | 1.1M | 1.5M | 1.2M | 429.1K | 42.6M | 1.6M | 575.4K | 554.3K | 6.8K |
| Dll size | 91.5M | 0 | 0 | 0 | 0 | 64M | 193.8M | 7.9M | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17.3M | 0 |
| Richards | 52822 | 52794 | 48240 | 43432 | 36213 | 15310 | 37388 | 1356 | 1344 | 1177 | 1323 | 1017 | 826 | 1118 | 410 | 469 | 120 | 214 | 0 | 0 |
| DeltaBlue | 77682 | 77702 | 103415 | 97253 | 100228 | 17415 | 57073 | 1250 | 1346 | 1245 | 1251 | 1002 | 934 | 1146 | 611 | 436 | 224 | 243 | 0 | 0 |
| Crypto | 78648 | 74684 | 60117 | 60237 | 36732 | 26582 | 43895 | 1475 | 1239 | 972 | 1227 | 1249 | 1120 | 1009 | 313 | 1365 | 546 | 271 | 0 | 0 |
| RayTrace | 189585 | 186921 | 92055 | 74887 | 97753 | 51947 | 5401 | 2562 | 2181 | 2078 | 1597 | 1281 | 1333 | 1497 | 1017 | 602 | 756 | 337 | 0 | 0 |
| EarleyBoyer | 105224 | 102985 | 106210 | 91425 | 81318 | 51171 | 53743 | 5305 | 3336 | 3128 | 2656 | 2375 | 2381 | 2380 | 1134 | 780 | 454 | 0 | 0 | 0 |
| RegExp | 32854 | 32067 | 15198 | 13701 | 12013 | 13130 | 2064 | 738 | 318 | 317 | 282 | 289 | 236 | 282 | 360 | 78.9 | 340 | 0 | 0 | 0 |
| Splay | 54909 | 51030 | 56310 | 46923 | 45374 | 30771 | 5435 | 4767 | 3667 | 3139 | 2404 | 2573 | 4022 | 2396 | 1345 | 1426 | 610 | 0 | 0 | 0 |
| NavierStokes | 32648 | 33620 | 40688 | 40513 | 36582 | 21348 | 30985 | 1640 | 2169 | 1652 | 2205 | 2580 | 2684 | 1742 | 793 | 1705 | 1581 | 0 | 0 | 0 |
| Score | 66428 | 65147 | 56381 | 50944 | 46304 | 25198 | 17658 | 1934 | 1592 | 1405 | 1376 | 1285 | 1275 | 1235 | 657 | 631 | 449 | 0 | 0 | 0 |
| Score/MB | 718 | 1205 | 525 | 468 | 55069 | 196 | 91 | 123 | 441 | 136 | 333 | 1204 | 842 | 1046 | 1568 | 14 | 273 | 0 | 0 | 0 |
### macos-amd64
| Engine | v8 | bun | jsc | deno | node | ChakraCore | spidermonkey | graaljs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | primjs | xst | mujs | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.0 | 1.2.6 | 0 | 2.2.5 | 23.10.0 | 1.13.0.0.beta | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2024.02.14 | 0.8.0 | 0 | 0 | 16.8.1 | 1.3.5 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 861K | 59.3M | 89.6M | 114M | 111.6M | 19.9M | 64M | 194.4M | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K | 6.8K |
| Exe size | 861K | 59.3M | 1016.1K | 114M | 111.6M | 569.8K | 64M | 148.8K | 7.9M | 3.7M | 12.1M | 1.2M | 2.1M | 1.2M | 693.4K | 1.6M | 441.8K | 25.3M | 570.8K | 6.8K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.4M | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 22134 | 28506 | 28891 | 30243 | 23289 | 25474 | 9422 | 43390 | 495 | 431 | 402 | 417 | 390 | 335 | 217 | 91.7 | 145 | 25.8 | 112 | 0 |
| DeltaBlue | 79943 | 45773 | 36900 | 48365 | 52273 | 22394 | 10652 | 54541 | 544 | 513 | 456 | 472 | 418 | 426 | 269 | 143 | 201 | 22.8 | 127 | 0 |
| Crypto | 41491 | 42077 | 38044 | 34510 | 34335 | 26180 | 15994 | 24902 | 555 | 292 | 238 | 310 | 264 | 234 | 177 | 184 | 111 | 39 | 138 | 0 |
| RayTrace | 105892 | 105596 | 98641 | 69411 | 37073 | 34927 | 31080 | 6660 | 1093 | 809 | 701 | 392 | 423 | 297 | 224 | 443 | 340 | 74.3 | 216 | 0 |
| EarleyBoyer | 67606 | 61359 | 56000 | 64797 | 54483 | 5988 | 33481 | 40615 | 1813 | 1253 | 1103 | 747 | 826 | 633 | 472 | 319 | 413 | 84 | 0 | 0 |
| RegExp | 8646 | 16695 | 16654 | 8766 | 5977 | 5322 | 7501 | 1440 | 292 | 91.3 | 85.8 | 78.1 | 73.5 | 73.6 | 70.1 | 130 | 104 | 22.8 | 0 | 0 |
| Splay | 41552 | 31481 | 34316 | 13731 | 32882 | 19411 | 22312 | 2428 | 2426 | 1628 | 1276 | 799 | 761 | 652 | 524 | 300 | 509 | 134 | 0 | 0 |
| NavierStokes | 36322 | 32615 | 32550 | 36582 | 36841 | 35214 | 24265 | 33242 | 893 | 658 | 554 | 752 | 603 | 487 | 332 | 514 | 271 | 74.2 | 0 | 0 |
| Score | 40228 | 39641 | 37800 | 31622 | 29736 | 18069 | 16941 | 14404 | 811 | 532 | 461 | 412 | 387 | 332 | 246 | 226 | 224 | 48.9 | 0 | 0 |
| Score/MB | 47843 | 669 | 421 | 277 | 266 | 906 | 264 | 74 | 103 | 142 | 38 | 357 | 187 | 269 | 363 | 137 | 519 | 1 | 0 | 0 |
### windows
| Engine | v8 | bun | node | deno | spidermonkey | graaljs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | mujs | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 1.2.6 | 23.10.0 | 2.2.5 | 137.0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 0 | 1.3.5 | 0.20.0 | 0 | 0.0.1 |
| Total size | 52.5M | 128.6M | 113.7M | 135.1M | 50.2M | 196.1M | 86.6M | 38M | 41.8M | 9M | 8M | 7.5M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 108.8M | 82.7M | 103.1M | 32.9M | 349.1K | 3M | 5.7M | 12.7M | 1.7M | 1.3M | 665.3K | 27.4M | 1.3M | 0.4K |
| Dll size | 24.9M | 19.8M | 31M | 32M | 17.3M | 195.8M | 83.5M | 32.3M | 29.1M | 7.3M | 6.7M | 6.9M | 15M | 4.7M | 0 |
| Richards | 33904 | 36583 | 30617 | 33477 | 12977 | 36086 | 698 | 455 | 431 | 437 | 381 | 233 | 49.7 | 0 | 0 |
| DeltaBlue | 91964 | 42474 | 67824 | 69900 | 13012 | 30586 | 611 | 389 | 383 | 403 | 417 | 324 | 42 | 0 | 0 |
| Crypto | 42872 | 45224 | 41774 | 42122 | 21525 | 16521 | 789 | 429 | 415 | 362 | 318 | 185 | 74.7 | 0 | 0 |
| RayTrace | 101378 | 91759 | 60753 | 55351 | 27990 | 7770 | 1008 | 737 | 585 | 585 | 553 | 460 | 134 | 0 | 0 |
| EarleyBoyer | 79735 | 55286 | 62352 | 68133 | 38343 | 24430 | 2216 | 1110 | 956 | 981 | 881 | 560 | 137 | 0 | 0 |
| RegExp | 9556 | 16472 | 8487 | 9790 | 8883 | 903 | 401 | 194 | 183 | 187 | 155 | 203 | 42.4 | 0 | 0 |
| Splay | 39108 | 32833 | 32808 | 12660 | 22606 | 3578 | 2437 | 1376 | 1050 | 962 | 952 | 721 | 168 | 0 | 0 |
| NavierStokes | 38881 | 34098 | 38694 | 39029 | 21980 | 18976 | 1063 | 740 | 698 | 667 | 727 | 502 | 166 | 0 | 0 |
| Score | 44616 | 40015 | 37037 | 34029 | 19032 | 10986 | 969 | 577 | 518 | 507 | 476 | 357 | 87.3 | 0 | 0 |
| Score/MB | 849 | 311 | 325 | 251 | 379 | 56 | 11 | 15 | 12 | 56 | 59 | 47 | 2 | 0 | 0 |
