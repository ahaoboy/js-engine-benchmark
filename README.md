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


## Engine & Runtime (28)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46971<br>37.4M<br>1254/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46426<br>96.4M<br>481/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45788<br>53.3M<br>859/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40349<br>101.1M<br>399/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39842<br>121.4M<br>328/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20104<br>19.4M<br>1035/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18884<br>39.7M<br>475/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17140<br>35.2M<br>486/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9647<br>199.7M<br>48/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| hermes | [hermes](https://github.com/facebook/hermes) | 1518<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 883<br>11.9M<br>74/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 834<br>4.3M<br>195/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 820<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 768<br>857K<br>917/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 717<br>1.3M<br>532/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 646<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 566<br>45.8M<br>12/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 374<br>685K<br>559/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 342<br>414.5K<br>844/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 279<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 268<br>2.1M<br>129/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 190<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 105<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| DukTape | [duktape](https://github.com/svaarala/duktape) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | embeddable Javascript engine with a focus on portability and compact footprint |
| nova | [nova](https://github.com/trynova/nova) | <br> | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |

## bench
6/17/2025, 3:07:11 AM

### ubuntu
| Engine | jsc | bun | v8 | deno | node | ChakraCore | spidermonkey | mozjs | graaljs | hermes | llrt | quickjs | txiki.js | primjs | rquickjs | qjs(ng) | ladybird | mujs(one) | mujs | goja | xst | jint | boa | kiesel | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 13.6.0 | 2.3.6 | 24.2.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 0.12.0 | 0.5.1.beta | 2025.04.26 | 24.12.0 | 0 | 0 | 0.10.1 | 0 | 0 | 1.3.5 | 0 | 16.9.1 | 0 | 0.20.0 | 0 | 3.0.0 | 0.0.1 |
| Total size | 37.4M | 96.4M | 53.3M | 101.1M | 121.4M | 19.4M | 39.7M | 35.2M | 199.7M | 36M | 11.9M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 7.3K |
| Exe size | 37.4M | 96.4M | 937.8K | 101.1M | 121.4M | 571K | 39.7M | 35.2M | 1M | 36M | 11.9M | 4.3M | 5.2M | 857K | 1.3M | 2M | 45.8M | 685K | 414.5K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 7.3K |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 18.8M | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41123 | 41459 | 34928 | 32979 | 32167 | 23335 | 12663 | 12786 | 35397 | 1092 | 792 | 688 | 712 | 611 | 588 | 577 | 508 | 246 | 227 | 204 | 90.1 | 98.8 | 60.2 | 60.2 | 0 | 0 |
| DeltaBlue | 55612 | 52676 | 97094 | 73920 | 75097 | 24887 | 12999 | 12986 | 27141 | 1048 | 719 | 658 | 666 | 608 | 596 | 583 | 467 | 361 | 321 | 252 | 162 | 111 | 55.2 | 56.7 | 0 | 0 |
| Crypto | 52069 | 49766 | 42542 | 41647 | 41480 | 31266 | 20427 | 17662 | 16421 | 1314 | 662 | 758 | 523 | 579 | 544 | 378 | 874 | 188 | 184 | 121 | 339 | 98.1 | 80.7 | 62.5 | 0 | 0 |
| RayTrace | 118990 | 111812 | 107668 | 68227 | 65711 | 36111 | 26835 | 27620 | 5537 | 1585 | 1208 | 897 | 1080 | 938 | 881 | 680 | 568 | 527 | 480 | 277 | 496 | 252 | 164 | 138 | 0 | 0 |
| EarleyBoyer | 67925 | 65801 | 81085 | 73307 | 71110 | 7126 | 39002 | 37343 | 21725 | 3378 | 1982 | 1471 | 1777 | 1401 | 1359 | 1220 | 764 | 529 | 476 | 512 | 323 | 283 | 195 | 137 | 0 | 0 |
| RegExp | 19618 | 21296 | 10173 | 10092 | 10102 | 7834 | 8801 | 8819 | 794 | 549 | 197 | 225 | 225 | 237 | 227 | 182 | 61.7 | 221 | 200 | 212 | 97.5 | 247 | 48.9 | 95.3 | 0 | 0 |
| Splay | 35864 | 36532 | 39050 | 35367 | 34593 | 19925 | 23844 | 12729 | 2114 | 3561 | 1752 | 1783 | 1954 | 1809 | 1440 | 1698 | 1345 | 771 | 634 | 960 | 389 | 540 | 226 | 329 | 0 | 0 |
| NavierStokes | 34987 | 34691 | 38617 | 38765 | 38803 | 36582 | 21898 | 21941 | 23549 | 1791 | 1188 | 1289 | 973 | 1002 | 932 | 930 | 1417 | 488 | 484 | 201 | 887 | 164 | 177 | 119 | 0 | 0 |
| Score | 46971 | 46426 | 45788 | 40349 | 39842 | 20104 | 18884 | 17140 | 9647 | 1518 | 883 | 834 | 820 | 768 | 717 | 646 | 566 | 374 | 342 | 279 | 268 | 190 | 107 | 105 | 0 | 0 |
| Score/MB | 1254 | 481 | 859 | 399 | 328 | 1035 | 475 | 486 | 48 | 42 | 74 | 195 | 158 | 917 | 532 | 327 | 12 | 559 | 844 | 21 | 129 | 2 | 3 | 8 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 25 | 33 | 48 | 48 | 50 | 50 | 52 | 59 | 89 | 81 | 85 | 113 | 129 | 144 | 233 | 234 | 0 | 0 |
### macos-arm64
| Engine | jsc | bun | deno | node | v8 | spidermonkey | mozjs | graaljs | hermes | txiki.js | llrt | quickjs | qjs(ng) | rquickjs | ladybird | primjs | mujs | xst | goja | jint | kiesel | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 0 | 1.2.16 | 2.3.6 | 24.2.0 | 13.6.0 | 140.0 | 0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 2025.04.26 | 0.8.0 | 0 | 0 | 0 | 1.3.5 | 16.9.1 | 0 | 0 | 0 | 3.0.0 | 0.0.1 |
| Total size | 94.2M | 55.8M | 82.4M | 110.6M | 861K | 130.4M | 32.8M | 194M | 15.7M | 3.6M | 10.3M | 975.9K | 4.1M | 1.2M | 41.2M | 1.5M | 429.1K | 1.6M | 12.7M | 75.4M | 12.4M | 575.4K | 7.3K |
| Exe size | 914.7K | 55.8M | 82.4M | 110.6M | 861K | 65.2M | 32.8M | 147.4K | 7.9M | 3.6M | 10.3M | 975.9K | 2.1M | 1.2M | 41.2M | 1.5M | 429.1K | 1.6M | 12.7M | 75.4M | 12.4M | 575.4K | 7.3K |
| Dll size | 93.3M | 0 | 0 | 0 | 0 | 65.2M | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 50224 | 42807 | 44495 | 42218 | 32153 | 14357 | 14428 | 31045 | 1259 | 1255 | 1161 | 1130 | 1215 | 985 | 838 | 754 | 378 | 108 | 327 | 152 | 101 | 0 | 0 |
| DeltaBlue | 65002 | 53655 | 97167 | 103250 | 75084 | 16338 | 15789 | 32292 | 1158 | 1223 | 1225 | 1118 | 1110 | 1000 | 755 | 803 | 565 | 206 | 388 | 149 | 87.9 | 0 | 0 |
| Crypto | 71743 | 62132 | 55401 | 56737 | 33797 | 24575 | 21122 | 30043 | 1356 | 1150 | 943 | 1383 | 1122 | 920 | 1640 | 997 | 282 | 511 | 191 | 132 | 98.3 | 0 | 0 |
| RayTrace | 179003 | 141264 | 82287 | 92351 | 83027 | 46277 | 49135 | 726 | 2277 | 2029 | 2009 | 1221 | 1479 | 1374 | 1044 | 1191 | 898 | 685 | 353 | 315 | 212 | 0 | 0 |
| EarleyBoyer | 90123 | 74005 | 93331 | 96110 | 75952 | 49065 | 41319 | 27962 | 4619 | 2994 | 3024 | 2127 | 2335 | 2123 | 1327 | 1160 | 952 | 404 | 632 | 363 | 217 | 0 | 0 |
| RegExp | 27029 | 26847 | 13701 | 13378 | 10637 | 12092 | 10648 | 1466 | 640 | 296 | 307 | 259 | 260 | 251 | 97.5 | 198 | 330 | 301 | 271 | 202 | 129 | 0 | 0 |
| Splay | 47616 | 47680 | 47672 | 35905 | 34894 | 24072 | 17055 | 2867 | 3643 | 3245 | 2977 | 2263 | 2145 | 1950 | 2027 | 1067 | 904 | 464 | 1072 | 531 | 522 | 0 | 0 |
| NavierStokes | 31335 | 31631 | 38545 | 35432 | 34429 | 19994 | 19994 | 23252 | 1499 | 2011 | 1614 | 2192 | 1986 | 1581 | 1960 | 2342 | 693 | 1398 | 279 | 178 | 209 | 0 | 0 |
| Score | 59274 | 52800 | 51075 | 49722 | 40016 | 22921 | 20832 | 9377 | 1709 | 1461 | 1364 | 1246 | 1245 | 1093 | 929 | 895 | 567 | 397 | 380 | 225 | 166 | 0 | 0 |
| Score/MB | 629 | 945 | 619 | 449 | 47591 | 175 | 634 | 48 | 108 | 405 | 132 | 1307 | 301 | 925 | 22 | 591 | 1353 | 246 | 29 | 2 | 13 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 32 | 38 | 38 | 40 | 40 | 42 | 64 | 50 | 57 | 91 | 87 | 127 | 151 | 0 | 0 |
### macos-amd64
| Engine | bun | v8 | jsc | deno | node | ChakraCore | spidermonkey | mozjs | graaljs | hermes | txiki.js | llrt | qjs(ng) | quickjs | rquickjs | primjs | xst | mujs | goja | jint | kiesel | boa | JerryScript | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.16 | 13.6.0 | 0 | 2.3.6 | 24.2.0 | 1.13.0.0.beta | 140.0 | 0 | 24.1.2 | 0.12.0 | 24.12.0 | 0.5.1.beta | 0.8.0 | 2025.04.26 | 0 | 0 | 16.9.1 | 1.3.5 | 0 | 0 | 0 | 0.20.0 | 3.0.0 | 0.0.1 |
| Total size | 61.2M | 861K | 89.6M | 92.1M | 113.3M | 20M | 65.2M | 33.8M | 194.4M | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 68.9M | 12.9M | 25.3M | 570.8K | 7.3K |
| Exe size | 61.2M | 861K | 1016.1K | 92.1M | 113.3M | 571K | 65.2M | 33.8M | 148.8K | 7.9M | 3.7M | 12.1M | 2.1M | 1M | 1.2M | 693.4K | 1.6M | 441.8K | 13.1M | 68.9M | 12.9M | 25.3M | 570.8K | 7.3K |
| Dll size | 0 | 0 | 88.6M | 0 | 0 | 19.5M | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 28609 | 21813 | 29110 | 31020 | 22643 | 25848 | 9514 | 10012 | 43605 | 496 | 476 | 402 | 470 | 420 | 404 | 251 | 94.1 | 140 | 141 | 101 | 46.7 | 22.7 | 0 | 0 |
| DeltaBlue | 46395 | 80545 | 37019 | 54428 | 52994 | 19274 | 10943 | 11141 | 53787 | 559 | 548 | 482 | 499 | 460 | 443 | 285 | 145 | 199 | 163 | 113 | 43.8 | 22 | 0 | 0 |
| Crypto | 43042 | 41404 | 38356 | 34188 | 34349 | 27630 | 15803 | 13257 | 27202 | 547 | 302 | 275 | 292 | 329 | 272 | 199 | 188 | 109 | 78.5 | 77.8 | 51.5 | 38.9 | 0 | 0 |
| RayTrace | 116178 | 104190 | 105226 | 70003 | 70447 | 33522 | 28757 | 30562 | 12136 | 1096 | 830 | 758 | 497 | 420 | 487 | 346 | 446 | 330 | 218 | 222 | 113 | 76.3 | 0 | 0 |
| EarleyBoyer | 61479 | 71647 | 59608 | 65420 | 63062 | 6070 | 35081 | 32739 | 41144 | 1850 | 1214 | 1142 | 870 | 814 | 780 | 588 | 323 | 399 | 406 | 255 | 108 | 86 | 0 | 0 |
| RegExp | 17058 | 8594 | 17348 | 8758 | 8594 | 4914 | 8150 | 7690 | 1425 | 294 | 93.1 | 91.9 | 80.9 | 83.7 | 77.5 | 78.9 | 130 | 96 | 190 | 100 | 53.4 | 23.4 | 0 | 0 |
| Splay | 37869 | 41854 | 38496 | 37738 | 37893 | 19223 | 22932 | 12933 | 2092 | 2426 | 1464 | 1429 | 847 | 921 | 843 | 651 | 277 | 446 | 624 | 443 | 276 | 124 | 0 | 0 |
| NavierStokes | 33175 | 36470 | 33323 | 36693 | 36915 | 34691 | 24313 | 24881 | 27668 | 897 | 648 | 588 | 644 | 760 | 600 | 362 | 518 | 268 | 126 | 128 | 104 | 76.2 | 0 | 0 |
| Score | 41469 | 40419 | 39368 | 36580 | 34901 | 17593 | 17167 | 15684 | 15046 | 816 | 538 | 494 | 436 | 435 | 405 | 293 | 226 | 215 | 198 | 152 | 81.6 | 48 | 0 | 0 |
| Score/MB | 678 | 48070 | 439 | 397 | 307 | 877 | 263 | 463 | 77 | 103 | 143 | 40 | 211 | 425 | 328 | 432 | 140 | 498 | 15 | 2 | 6 | 1 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 23 | 48 | 81 | 82 | 88 | 86 | 93 | 109 | 134 | 129 | 155 | 183 | 301 | 494 | 0 | 0 |
### windows
| Engine | v8 | jsc | bun | node | deno | ChakraCore | spidermonkey | graaljs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | mujs | goja | jint | kiesel | boa | xst | engine262 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.16 | 24.2.0 | 2.3.6 | 1.11.24.0 | 140.0 | 24.1.2 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.5.1.beta | 0.8.0 | 1.3.5 | 0 | 0 | 0 | 0.20.0 | 0 | 0.0.1 |
| Total size | 51.5M | 122.8M | 130.9M | 115.7M | 138.2M | 14.4M | 50.9M | 196.1M | 112.9M | 11.8M | 37M | 9.3M | 41.8M | 9M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 0.4K |
| Exe size | 27.6M | 337K | 111.1M | 84.6M | 105.9M | 342.9K | 33.6M | 349.1K | 3M | 4.9M | 5.7M | 1.5M | 12.7M | 1.7M | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 0.4K |
| Dll size | 23.9M | 122.5M | 19.8M | 31.1M | 32.3M | 14.1M | 17.4M | 195.8M | 109.9M | 6.9M | 31.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 0 |
| Richards | 34098 | 35171 | 35203 | 31528 | 29664 | 24934 | 12158 | 35584 | 692 | 506 | 440 | 441 | 427 | 430 | 229 | 187 | 101 | 54.9 | 48.1 | 0 | 0 |
| DeltaBlue | 77894 | 43492 | 43321 | 70574 | 69966 | 26970 | 11650 | 27221 | 611 | 457 | 397 | 403 | 370 | 396 | 331 | 229 | 108 | 50.4 | 42.1 | 0 | 0 |
| Crypto | 40809 | 47581 | 42741 | 39474 | 39089 | 33182 | 20718 | 19638 | 783 | 532 | 417 | 510 | 409 | 367 | 182 | 110 | 88.4 | 59 | 75 | 0 | 0 |
| RayTrace | 101230 | 100934 | 98616 | 63639 | 66451 | 50541 | 27898 | 2883 | 996 | 545 | 715 | 594 | 598 | 578 | 419 | 219 | 263 | 128 | 133 | 0 | 0 |
| EarleyBoyer | 76996 | 56946 | 52571 | 69878 | 70045 | 41309 | 38838 | 15306 | 2231 | 981 | 1137 | 976 | 960 | 965 | 481 | 433 | 291 | 122 | 134 | 0 | 0 |
| RegExp | 9299 | 17966 | 17711 | 9556 | 9237 | 10011 | 8586 | 941 | 394 | 180 | 192 | 171 | 186 | 185 | 186 | 189 | 267 | 86.7 | 41.3 | 0 | 0 |
| Splay | 35612 | 31708 | 31944 | 31496 | 31757 | 20756 | 21880 | 2416 | 2371 | 961 | 1254 | 945 | 985 | 944 | 1141 | 882 | 504 | 313 | 152 | 0 | 0 |
| NavierStokes | 36841 | 33390 | 39583 | 36061 | 36915 | 36285 | 21073 | 24906 | 1066 | 1024 | 729 | 747 | 710 | 675 | 500 | 188 | 141 | 114 | 166 | 0 | 0 |
| Score | 42330 | 40982 | 40726 | 37880 | 37709 | 27746 | 18302 | 9113 | 962 | 573 | 565 | 531 | 514 | 503 | 362 | 247 | 186 | 97.1 | 85.4 | 0 | 0 |
| Score/MB | 822 | 333 | 311 | 327 | 272 | 1927 | 359 | 46 | 8 | 48 | 15 | 57 | 12 | 56 | 48 | 12 | 1 | 2 | 2 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 25 | 43 | 58 | 61 | 61 | 62 | 63 | 86 | 126 | 151 | 252 | 292 | 0 | 0 |
