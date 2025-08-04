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


## Engine & Runtime (31/36)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47341<br>97.2M<br>486/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46965<br>37.4M<br>1254/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 45752<br>53.3M<br>858/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bare | [bare](https://github.com/holepunchto/bare)<br><br>[bare-build](https://github.com/ahaoboy/bare-build) | 40909<br>65.2M<br>627/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40184<br>106.9M<br>375/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A modern runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39939<br>123.1M<br>324/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 39205<br>67.1M<br>584/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38899<br>40.7M<br>956/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19984<br>19.4M<br>1029/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18950<br>39.9M<br>474/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17136<br>51M<br>336/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16959<br>35.2M<br>481/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 10538<br>199.7M<br>52/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2330<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1523<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 873<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 834<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 825<br>4.3M<br>193/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 719<br>857K<br>859/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | JavaScript Engine Optimized for Lynx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 711<br>1.3M<br>528/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 650<br>2M<br>329/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 549<br>45.8M<br>11/M | ✅unix<br>✅macArm<br>❌macAmd<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 497<br>2.1M<br>233/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 398<br>685K<br>594/M | ✅unix<br>❌macArm<br>❌macAmd<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 360<br>414.5K<br>889/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 311<br>2.7K<br>117941/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 277<br>13.2M<br>21/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 267<br>2.1M<br>128/M | ✅unix<br>✅macArm<br>✅macAmd<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 190<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 107<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅macAmd<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅macAmd<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | <br>454.2K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | <br>9.7M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | <br>7.3K | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | <br>1.1G | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | <br>8.4M | ❌unix<br>❌macArm<br>❌macAmd<br>❌windows | A subset of JavaScript language to use in nginx |

## bench
8/4/2025, 2:22:37 AM

### ubuntu
| Engine | bun | jsc | v8 | bare | deno | node | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | rquickjs | qjs(ng) | ladybird | duktape | mujs(one) | mujs | ringo | goja | xst | jint | boa | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 13.6.0 | 0 | 2.4.3 | 24.5.0 | 0.10.0 | 0 | 1.13.0.0.beta | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 | 0 | 0 | 0.10.1 | 0 | 2.99.99 | 0 | 1.3.5 | 4.0.0 | 0 | 16.9.1 | 0 | 0.20.0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 97.2M | 37.4M | 53.3M | 65.2M | 106.9M | 123.1M | 67.1M | 40.7M | 19.4M | 39.9M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Exe size | 97.2M | 37.4M | 937.8K | 65.2M | 106.9M | 123.1M | 67.1M | 40.7M | 571K | 39.9M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 857K | 1.3M | 2M | 45.8M | 2.1M | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 8.4M | 1.1G | 454.2K | 7.3K | 9.7M |
| Dll size | 0 | 0 | 52.3M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 38020 | 41416 | 34419 | 32280 | 32481 | 31984 | 32231 | 31966 | 22141 | 13033 | 14114 | 13002 | 35644 | 11353 | 1110 | 687 | 710 | 641 | 543 | 590 | 580 | 482 | 289 | 239 | 225 | 138 | 203 | 90 | 105 | 61 | 59 | 540 | 127 | 269 | 0 | 24 |
| DeltaBlue | 55473 | 53456 | 99746 | 75335 | 71791 | 76056 | 73569 | 77074 | 24771 | 12946 | 12900 | 12999 | 26566 | 216 | 1042 | 678 | 675 | 667 | 591 | 576 | 577 | 458 | 323 | 358 | 324 | 175 | 253 | 165 | 115 | 55 | 54 | 517 | 172 | 274 | 0 | 27 |
| Crypto | 50041 | 52161 | 42427 | 41535 | 41658 | 41644 | 41756 | 41232 | 31865 | 20258 | 17868 | 17363 | 16951 | 8393 | 1330 | 585 | 592 | 730 | 513 | 539 | 380 | 883 | 790 | 191 | 185 | 156 | 122 | 328 | 100 | 81 | 61 | 825 | 134 | 296 | 0 | 28 |
| RayTrace | 116178 | 119434 | 106780 | 72223 | 67487 | 66229 | 68301 | 67709 | 36333 | 27574 | 27306 | 28018 | 3028 | 1290 | 1539 | 1173 | 1068 | 910 | 850 | 863 | 717 | 578 | 575 | 524 | 485 | 486 | 273 | 495 | 256 | 166 | 139 | 588 | 429 | 348 | 0 | 82 |
| EarleyBoyer | 67821 | 68135 | 79017 | 70289 | 73564 | 72375 | 72393 | 71155 | 7082 | 38245 | 36376 | 36326 | 34449 | 1133 | 3359 | 1886 | 1788 | 1479 | 1322 | 1377 | 1234 | 774 | 593 | 528 | 517 | 585 | 505 | 325 | 287 | 195 | 138 | 0 | 401 | 0 | 0 | 76 |
| RegExp | 20953 | 19931 | 10162 | 10414 | 10142 | 10042 | 10152 | 8848 | 7834 | 8603 | 8837 | 8711 | 1266 | 534 | 552 | 250 | 228 | 228 | 236 | 229 | 183 | 51 | 131 | 218 | 200 | 453 | 208 | 96 | 246 | 48 | 93 | 112 | 0 | 0 | 0 | 0 |
| Splay | 36541 | 36084 | 39727 | 37779 | 35823 | 34185 | 28913 | 31439 | 19574 | 24024 | 11776 | 11919 | 2325 | 3871 | 3618 | 2371 | 1980 | 1742 | 1749 | 1465 | 1662 | 1271 | 1271 | 1324 | 846 | 974 | 968 | 406 | 471 | 222 | 324 | 1942 | 887 | 0 | 0 | 56 |
| NavierStokes | 39623 | 35022 | 38694 | 38881 | 38803 | 38842 | 38842 | 38507 | 36878 | 22319 | 22112 | 22067 | 30867 | 13940 | 1818 | 945 | 957 | 1286 | 931 | 898 | 931 | 1457 | 895 | 484 | 493 | 185 | 199 | 837 | 167 | 175 | 119 | 1223 | 287 | 0 | 0 | 50 |
| Score | 47341 | 46965 | 45752 | 40909 | 40184 | 39939 | 39205 | 38899 | 19984 | 18950 | 17136 | 16959 | 10538 | 2330 | 1523 | 873 | 834 | 825 | 719 | 711 | 650 | 549 | 497 | 398 | 360 | 311 | 277 | 267 | 190 | 107 | 104 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 486 | 1254 | 858 | 627 | 375 | 324 | 584 | 956 | 1029 | 474 | 336 | 481 | 52 | 2 | 42 | 71 | 161 | 193 | 859 | 528 | 329 | 11 | 233 | 594 | 889 | 117941 | 21 | 128 | 2 | 3 | 8 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 45 | 33 | 46 | 49 | 48 | 52 | 52 | 58 | 99 | 68 | 81 | 84 | 95 | 114 | 130 | 141 | 234 | 234 | 54 | 88 | 32 | 0 | 435 |
### macos-arm64
| Engine | bun | jsc | dune | deno | node | bare | v8 | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | txiki.js | quickjs | qjs(ng) | rquickjs | ladybird | primjs | duktape | mujs | goja | xst | ringo | jint | kiesel | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 1.2.19 | 0 | 0.10.0 | 2.4.3 | 24.5.0 | 0 | 13.6.0 | 142.0 | 0 | 0 | 24.1.2 | 0 | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 | 0.8.0 | 0 | 0 | 0 | 2.99.99 | 1.3.5 | 0 | 16.9.1 | 4.0.0 | 0 | 0.1.0.dev | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 56.4M | 94.2M | 57.4M | 85.5M | 111.5M | 45.5M | 861K | 131.5M | 32.8M | 46.3M | 194M | 0 | 15.7M | 10.5M | 3.6M | 975.9K | 4.1M | 1.2M | 41.3M | 1.5M | 562.1K | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 2.4M | 0 | 575.4K | 7.3K | 8.5M |
| Exe size | 56.4M | 914.7K | 57.4M | 85.5M | 111.5M | 45.5M | 861K | 65.7M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 10.5M | 3.6M | 975.9K | 2.1M | 1.2M | 41.3M | 1.5M | 562.1K | 429.1K | 12.7M | 1.6M | 2.7K | 75.4M | 12.4M | 1.8M | 0 | 575.4K | 7.3K | 8.5M |
| Dll size | 0 | 93.3M | 0 | 0 | 0 | 0 | 0 | 65.7M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 |
| Richards | 48625 | 50454 | 48459 | 48565 | 45490 | 44777 | 32965 | 15529 | 15406 | 16013 | 34847 | 21012 | 1319 | 1076 | 1104 | 1167 | 1334 | 1054 | 880 | 820 | 514 | 407 | 337 | 114 | 224 | 160 | 114 | 671 | 232 | 217 | 0 | 30 |
| DeltaBlue | 72168 | 68247 | 115422 | 108367 | 106582 | 113399 | 96354 | 16966 | 17812 | 17270 | 49767 | 1221 | 1251 | 1149 | 1048 | 1159 | 1243 | 1049 | 784 | 954 | 621 | 604 | 398 | 226 | 233 | 158 | 103 | 822 | 261 | 241 | 0 | 28 |
| Crypto | 73915 | 76599 | 60877 | 60900 | 60313 | 58991 | 37080 | 25394 | 22831 | 22829 | 43887 | 19329 | 1486 | 1023 | 1062 | 1397 | 1230 | 949 | 1709 | 1117 | 1386 | 310 | 200 | 534 | 163 | 146 | 119 | 1223 | 146 | 265 | 0 | 40 |
| RayTrace | 178855 | 184701 | 94275 | 90279 | 94423 | 94867 | 92055 | 48987 | 52169 | 42697 | 2982 | 1228 | 2539 | 2092 | 2047 | 1265 | 1589 | 1442 | 1141 | 1085 | 1152 | 972 | 474 | 747 | 715 | 373 | 252 | 753 | 694 | 332 | 0 | 144 |
| EarleyBoyer | 103756 | 87364 | 105900 | 106525 | 99313 | 81208 | 75780 | 49910 | 49627 | 49013 | 47178 | 1684 | 5288 | 3104 | 2983 | 2371 | 2597 | 2212 | 1326 | 2247 | 1170 | 1121 | 850 | 450 | 740 | 406 | 248 | 0 | 714 | 0 | 0 | 125 |
| RegExp | 31520 | 26756 | 15531 | 15319 | 15425 | 12988 | 10899 | 13079 | 12923 | 12884 | 1841 | 725 | 741 | 315 | 316 | 287 | 273 | 283 | 106 | 210 | 262 | 355 | 312 | 340 | 595 | 216 | 146 | 210 | 0 | 0 | 0 | 0 |
| Splay | 52558 | 51136 | 48186 | 53417 | 49954 | 40550 | 31594 | 31790 | 19533 | 18515 | 3708 | 1826 | 4808 | 4323 | 3660 | 2578 | 1993 | 2328 | 2272 | 719 | 2402 | 1140 | 1330 | 562 | 919 | 583 | 512 | 1784 | 989 | 0 | 0 | 100 |
| NavierStokes | 32648 | 33093 | 40473 | 40621 | 39060 | 31959 | 34726 | 21706 | 21454 | 21454 | 24758 | 17214 | 1634 | 1721 | 2153 | 2398 | 1940 | 1738 | 1983 | 2455 | 1580 | 791 | 334 | 1560 | 225 | 198 | 230 | 1753 | 315 | 0 | 0 | 86 |
| Score | 63378 | 61040 | 56440 | 56405 | 54901 | 49964 | 42076 | 24897 | 23333 | 22582 | 14361 | 3516 | 1929 | 1447 | 1442 | 1335 | 1314 | 1183 | 981 | 971 | 937 | 635 | 444 | 439 | 392 | 247 | 187 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 1124 | 647 | 983 | 659 | 492 | 1098 | 50041 | 189 | 710 | 487 | 74 | 0 | 122 | 137 | 399 | 1400 | 318 | 1002 | 23 | 641 | 1706 | 1515 | 34 | 272 | 148658 | 3 | 15 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 33 | 29 | 37 | 38 | 37 | 38 | 40 | 58 | 44 | 43 | 53 | 75 | 81 | 84 | 115 | 137 | 39 | 75 | 33 | 0 | 281 |
### macos-amd64
| Engine | deno | node | v8 | bun | bare | jsc | dune | ChakraCore | mozjs | spiderfire | spidermonkey | graaljs | jjs | hermes | txiki.js | llrt | qjs(ng) | rquickjs | quickjs | duktape | xst | mujs | primjs | ringo | goja | jint | kiesel | boa | njs | rhino | JerryScript | engine262 | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 2.4.3 | 24.5.0 | 13.6.0 | 1.2.19 | 0 | 0 | 0.10.0 | 1.13.0.0.beta | 0 | 0 | 142.0 | 24.1.2 | 0 | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.8.0 | 0 | 2025.04.26 | 2.99.99 | 16.9.1 | 1.3.5 | 0 | 4.0.0 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0.9.1 | 0 | 3.0.0 | 0.0.1 | 0 |
| Total size | 96.6M | 113.7M | 861K | 61.9M | 47.1M | 89.6M | 60.4M | 20M | 33.8M | 48.2M | 65.7M | 194.4M | 0 | 7.9M | 3.7M | 12.4M | 2.1M | 1.2M | 1M | 525.7K | 1.6M | 441.8K | 693.4K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 7.5M | 0 | 570.8K | 7.3K | 8.9M |
| Exe size | 96.6M | 113.7M | 861K | 61.9M | 47.1M | 1016.1K | 60.4M | 571K | 33.8M | 48.2M | 65.7M | 148.8K | 0 | 7.9M | 3.7M | 12.4M | 2.1M | 1.2M | 1M | 525.7K | 1.6M | 441.8K | 693.4K | 2.7K | 13.1M | 68.9M | 12.9M | 25.3M | 2.1M | 0 | 570.8K | 7.3K | 8.9M |
| Dll size | 0 | 0 | 0 | 0 | 0 | 88.6M | 0 | 19.5M | 0 | 0 | 0 | 194.3M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5.4M | 0 | 0 | 0 | 0 |
| Richards | 28167 | 20450 | 27521 | 22240 | 20412 | 22219 | 23388 | 25149 | 9316 | 9299 | 7869 | 33120 | 6418 | 444 | 381 | 317 | 368 | 280 | 340 | 110 | 76 | 108 | 105 | 63 | 115 | 99 | 49 | 19 | 347 | 55 | 80 | 0 | 13 |
| DeltaBlue | 49820 | 45926 | 53966 | 32728 | 54276 | 28107 | 42937 | 23545 | 10790 | 10566 | 8106 | 16272 | 208 | 467 | 433 | 323 | 394 | 238 | 306 | 157 | 114 | 171 | 187 | 96 | 143 | 106 | 45 | 17 | 363 | 102 | 95 | 0 | 14 |
| Crypto | 31374 | 32450 | 32913 | 33119 | 30226 | 29702 | 28460 | 24532 | 12732 | 12981 | 10643 | 6682 | 2806 | 449 | 259 | 213 | 230 | 174 | 213 | 229 | 147 | 90 | 140 | 66 | 65 | 78 | 50 | 31 | 408 | 69 | 113 | 0 | 18 |
| RayTrace | 61789 | 64749 | 79993 | 91241 | 57514 | 80511 | 55351 | 27010 | 30679 | 23902 | 23088 | 1614 | 613 | 909 | 713 | 623 | 379 | 331 | 317 | 332 | 352 | 247 | 249 | 287 | 194 | 209 | 116 | 56 | 239 | 247 | 196 | 0 | 48 |
| EarleyBoyer | 52211 | 58081 | 51467 | 46619 | 48858 | 41781 | 53577 | 5169 | 32730 | 28120 | 25123 | 11484 | 700 | 1456 | 1076 | 967 | 675 | 489 | 305 | 419 | 265 | 304 | 353 | 306 | 360 | 241 | 99 | 67 | 0 | 203 | 0 | 0 | 50 |
| RegExp | 7855 | 7945 | 6061 | 12183 | 7182 | 11843 | 6869 | 4191 | 7486 | 6013 | 6255 | 792 | 310 | 229 | 87 | 72 | 62 | 49 | 46 | 69 | 114 | 96 | 49 | 255 | 189 | 88 | 53 | 18 | 65 | 0 | 0 | 0 | 0 |
| Splay | 31056 | 31855 | 24292 | 26369 | 27946 | 25929 | 23429 | 15752 | 13085 | 11238 | 16844 | 1361 | 799 | 1834 | 1540 | 1510 | 606 | 429 | 347 | 733 | 271 | 467 | 447 | 586 | 283 | 399 | 289 | 92 | 1217 | 462 | 0 | 0 | 50 |
| NavierStokes | 34064 | 32796 | 29325 | 26014 | 28084 | 26484 | 35022 | 27547 | 23596 | 21832 | 17129 | 18033 | 4453 | 712 | 628 | 417 | 506 | 436 | 466 | 344 | 482 | 250 | 215 | 101 | 128 | 106 | 101 | 61 | 645 | 144 | 0 | 0 | 29 |
| Score | 32285 | 31426 | 31072 | 31018 | 29213 | 29052 | 28833 | 15698 | 15279 | 13732 | 12778 | 5810 | 1074 | 662 | 479 | 396 | 336 | 254 | 252 | 236 | 191 | 186 | 181 | 165 | 164 | 141 | 82 | 37 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 334 | 276 | 36954 | 501 | 620 | 324 | 476 | 783 | 451 | 284 | 194 | 29 | 0 | 84 | 128 | 31 | 163 | 205 | 246 | 459 | 118 | 431 | 267 | 62573 | 12 | 2 | 6 | 1 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 20 | 20 | 20 | 26 | 54 | 56 | 85 | 100 | 111 | 137 | 140 | 123 | 153 | 147 | 163 | 176 | 168 | 200 | 309 | 625 | 89 | 157 | 61 | 0 | 699 |
### windows
| Engine | v8 | jsc | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | rquickjs | llrt | qjs(ng) | duktape | mujs | goja | jint | kiesel | boa | rhino | xst | engine262 | ringo | nova |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 13.6.101 | 0 | 1.2.19 | 2.4.3 | 24.5.0 | 0.10.0 | 1.11.24.0 | 142.0 | 0 | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0 | 0.6.2.beta | 0.8.0 | 2.7.0 | 1.3.5 | 0 | 0 | 0.1.0.dev | 0.20.0 | 0 | 0 | 0.0.1 | 4.0.0 | 0 |
| Total size | 52.6M | 122.8M | 132.1M | 143.4M | 116.3M | 78.7M | 14.4M | 51.3M | 72.8M | 196.1M | 17.5M | 86.6M | 11.8M | 37M | 9.3M | 42.2M | 9M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 0 | 5.9M | 0.4K | 2.7K | 16.6M |
| Exe size | 27.6M | 337K | 112.3M | 111.1M | 85.2M | 48.4M | 342.9K | 33.8M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 1.5M | 13.1M | 1.7M | 777.7K | 665.3K | 13.3M | 68.8M | 33.2M | 27.4M | 0 | 1.3M | 0.4K | 2.7K | 8.7M |
| Dll size | 25M | 122.5M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.5M | 30.2M | 195.8M | 17.5M | 83.5M | 6.9M | 31.3M | 7.8M | 29.1M | 7.3M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 0 | 4.7M | 0 | 0 | 7.9M |
| Richards | 35246 | 36065 | 36940 | 30649 | 33251 | 32926 | 24718 | 12740 | 14484 | 36289 | 3285 | 692 | 507 | 455 | 448 | 388 | 434 | 215 | 205 | 187 | 103 | 56 | 50 | 0 | 0 | 0 | 0 | 21 |
| DeltaBlue | 98073 | 46111 | 44550 | 73735 | 76056 | 77556 | 28166 | 13224 | 12933 | 31922 | 608 | 621 | 460 | 410 | 410 | 377 | 397 | 264 | 304 | 236 | 120 | 52 | 41 | 0 | 0 | 0 | 0 | 24 |
| Crypto | 43081 | 48653 | 49156 | 41220 | 38694 | 41727 | 33569 | 20647 | 18036 | 20081 | 2197 | 789 | 546 | 429 | 515 | 426 | 367 | 317 | 182 | 112 | 93 | 59 | 74 | 0 | 0 | 0 | 0 | 27 |
| RayTrace | 84433 | 105152 | 86505 | 67715 | 66828 | 67857 | 47977 | 27768 | 27177 | 3552 | 1372 | 1019 | 549 | 739 | 589 | 580 | 578 | 442 | 460 | 232 | 271 | 133 | 135 | 0 | 0 | 0 | 0 | 77 |
| EarleyBoyer | 80165 | 61714 | 55354 | 74651 | 70110 | 72458 | 42365 | 39410 | 36944 | 27044 | 1311 | 2241 | 1024 | 1158 | 992 | 1015 | 997 | 537 | 585 | 464 | 300 | 127 | 152 | 0 | 0 | 0 | 0 | 72 |
| RegExp | 9861 | 20042 | 17855 | 9839 | 9637 | 9819 | 10294 | 8892 | 8810 | 1201 | 903 | 409 | 190 | 198 | 173 | 185 | 185 | 110 | 206 | 202 | 277 | 92 | 43 | 0 | 0 | 0 | 0 | 0 |
| Splay | 39588 | 35400 | 34634 | 33322 | 34291 | 28660 | 21341 | 24309 | 13625 | 2652 | 4830 | 2489 | 1066 | 1491 | 1009 | 1351 | 1010 | 1035 | 603 | 780 | 553 | 331 | 184 | 0 | 0 | 0 | 0 | 58 |
| NavierStokes | 38990 | 34030 | 38287 | 38912 | 39099 | 39029 | 37063 | 22467 | 22112 | 28464 | 3542 | 1098 | 1034 | 664 | 750 | 710 | 674 | 1055 | 497 | 196 | 153 | 114 | 166 | 0 | 0 | 0 | 0 | 49 |
| Score | 44487 | 43438 | 41716 | 39567 | 39498 | 39355 | 28082 | 19202 | 17551 | 10922 | 1823 | 982 | 592 | 583 | 540 | 533 | 510 | 388 | 342 | 252 | 196 | 100 | 90 | 0 | 0 | 0 | 0 | 0 |
| Score/MB | 846 | 353 | 315 | 275 | 339 | 500 | 1949 | 374 | 241 | 55 | 103 | 11 | 50 | 15 | 57 | 12 | 56 | 50 | 45 | 12 | 2 | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 39 | 42 | 57 | 60 | 60 | 61 | 65 | 83 | 82 | 121 | 146 | 249 | 270 | 0 | 130 | 0 | 97 | 450 |
