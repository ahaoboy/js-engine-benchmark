fork from: https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7

```bash
npm run build

npm run update
```

https://ahaoboy.github.io/js-engine-benchmark/

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


## Engine & Runtime (33/38)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48130<br>56.8M<br>847/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47545<br>98.4M<br>482/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 46856<br>36.4M<br>1287/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 41030<br>123.1M<br>333/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| bare | [bare](https://github.com/holepunchto/bare) | 40919<br>65.3M<br>626/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40371<br>106.5M<br>379/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| dune | [dune](https://github.com/aalykiot/dune) | 39400<br>66.3M<br>594/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38625<br>40.7M<br>950/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 19534<br>19.4M<br>1006/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 18907<br>39.6M<br>477/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17116<br>51M<br>335/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17017<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9675<br>199.7M<br>48/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2606<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1535<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 872<br>12.3M<br>71/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 833<br>5.2M<br>161/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 817<br>4.3M<br>191/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 761<br>831.3K<br>937/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 741<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 702<br>1.3M<br>521/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 643<br>2M<br>325/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 543<br>46.2M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 469<br>2.1M<br>220/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 386<br>685K<br>577/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 360<br>446.6K<br>825/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 343<br>414.5K<br>847/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 282<br>2.7K<br>106943/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 274<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 261<br>2.1M<br>125/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 191<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 105<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 104<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova)<br><br>[nova-build](https://github.com/ahaoboy/nova-build) | 0<br>9.7M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>7.3K | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/18/2025, 8:51:45 AM

### ubuntu
| Engine | v8 | bun | JavaScriptCore | node | bare | deno | dune | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | txiki.js | quickjs | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | mujs-one | mujs-pgo | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 | 1.2.20 |  | 24.6.0 |  | 2.4.4 | 0.10.1 |  | 1.13.0.0.beta | 142.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 24.12.0 | 2025.04.26 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 98.4M | 36.4M | 123.1M | 65.3M | 106.5M | 66.3M | 40.7M | 19.4M | 39.6M | 51M | 35.2M | 199.7M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.3M | 2M | 46.2M | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Exe size | 1M | 98.4M | 36.4M | 123.1M | 65.3M | 106.5M | 66.3M | 40.7M | 571K | 39.6M | 51M | 35.2M | 1M | 1.1G | 36M | 12.3M | 5.2M | 4.3M | 831.3K | 8.4M | 1.3M | 2M | 46.2M | 2.1M | 685K | 446.6K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 9.7M | 7.3K | 1.1G | 42M |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37724 | 41660 | 40791 | 38430 | 32284 | 32831 | 32633 | 32534 | 22936 | 12924 | 14138 | 13432 | 36093 | 12243 | 1123 | 668 | 710 | 688 | 625 | 560 | 598 | 586 | 487 | 280 | 245 | 254 | 229 | 99 | 202 | 90 | 103 | 59 | 59 | 265 | 23 |  | 128 |  |
| DeltaBlue | 109544 | 55737 | 54971 | 74158 | 77391 | 72869 | 74846 | 76975 | 23743 | 13038 | 13032 | 12800 | 25667 | 249 | 1067 | 668 | 683 | 668 | 616 | 545 | 588 | 583 | 463 | 318 | 349 | 357 | 315 | 158 | 250 | 164 | 112 | 53 | 55 | 274 | 27 |  | 176 |  |
| Crypto | 41363 | 49401 | 51802 | 41458 | 41249 | 41591 | 41721 | 41261 | 31255 | 20461 | 17658 | 17519 | 11485 | 9222 | 1369 | 600 | 603 | 751 | 557 | 885 | 502 | 380 | 859 | 779 | 187 | 189 | 183 | 126 | 124 | 324 | 99 | 80 | 62 | 296 | 27 |  | 134 |  |
| RayTrace | 112330 | 108852 | 113366 | 67857 | 72149 | 67339 | 68079 | 59584 | 33710 | 28137 | 26539 | 27768 | 7370 | 1443 | 1565 | 1143 | 1042 | 906 | 969 | 686 | 880 | 715 | 560 | 568 | 505 | 474 | 484 | 437 | 271 | 493 | 253 | 162 | 138 | 342 | 80 |  | 424 |  |
| EarleyBoyer | 87064 | 67702 | 64698 | 71626 | 69421 | 74611 | 74479 | 73202 | 7039 | 38373 | 36190 | 35887 | 22699 | 1420 | 3365 | 1851 | 1737 | 1390 | 1343 | 1658 | 1322 | 1212 | 757 | 549 | 468 | 440 | 463 | 588 | 502 | 320 | 282 | 188 | 135 |  | 75 |  | 418 |  |
| RegExp | 10466 | 21135 | 19404 | 10102 | 10284 | 10032 | 10072 | 8992 | 7457 | 8586 | 8810 | 8728 | 832 | 649 | 556 | 258 | 225 | 225 | 231 | 115 | 223 | 179 | 64 | 134 | 209 | 226 | 197 | 458 | 209 | 96 | 242 | 48 | 94 |  |  |  |  |  |
| Splay | 42375 | 36475 | 35017 | 35612 | 38121 | 36223 | 28758 | 31839 | 19264 | 22956 | 12134 | 12232 | 2638 | 3913 | 3458 | 2367 | 1942 | 1615 | 1753 | 2104 | 1399 | 1553 | 957 | 872 | 1292 | 727 | 693 | 934 | 911 | 368 | 557 | 218 | 320 |  | 57 |  | 728 |  |
| NavierStokes | 38842 | 40068 | 40136 | 38881 | 38842 | 38842 | 38803 | 38397 | 36545 | 22260 | 22045 | 21941 | 19639 | 14543 | 1858 | 968 | 1001 | 1261 | 990 | 1220 | 917 | 932 | 1490 | 926 | 483 | 477 | 478 | 185 | 198 | 812 | 164 | 175 | 119 |  | 48 |  | 272 |  |
| Score | 48130 | 47545 | 46856 | 41030 | 40919 | 40371 | 39400 | 38625 | 19534 | 18907 | 17116 | 17017 | 9675 | 2606 | 1535 | 872 | 833 | 817 | 761 | 741 | 702 | 643 | 543 | 469 | 386 | 360 | 343 | 282 | 274 | 261 | 191 | 105 | 104 |  |  |  |  |  |
| Score/MB | 847 | 482 | 1287 | 333 | 626 | 379 | 594 | 950 | 1006 | 477 | 335 | 483 | 48 | 2 | 42 | 71 | 161 | 191 | 937 | 87 | 521 | 325 | 11 | 220 | 577 | 825 | 847 | 106943 | 20 | 125 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 38 | 34 | 46 | 50 | 49 | 51 | 61 | 54 | 59 | 86 | 69 | 83 | 82 | 86 | 102 | 114 | 132 | 143 | 238 | 235 | 31 | 445 |  | 89 | 7 |
### macos-arm64
| Engine | JavaScriptCore | bun | v8 | bare | dune | deno | node | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | primjs | txiki.js | llrt | quickjs-ng | quickjs | rquickjs | njs | ladybird | duktape | mujs | xst | goja | ringo | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.20 | 14.1.83 |  | 0.10.1 | 2.4.4 | 24.6.0 | 142.0 |  |  | 24.1.2 |  | 0.12.0 |  | 24.12.0 | 0.6.2.beta | 0.8.0 | 2025.04.26 |  | 0.9.2 |  | 2.99.99 | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 56.8M | 41.1M | 45.6M | 56.8M | 85.6M | 111.5M | 131.2M | 32.8M | 46.3M | 194M | 0 | 15.7M | 1.8M | 3.6M | 10.5M | 4.1M | 975.9K | 1.2M | 2.4M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Exe size | 0.2K | 56.8M | 41.1M | 45.6M | 56.8M | 85.6M | 111.5M | 65.6M | 32.8M | 46.3M | 147.4K | 0 | 7.9M | 1.8M | 3.6M | 10.5M | 2.1M | 975.9K | 1.2M | 1.8M | 41.5M | 562.1K | 429.1K | 1.6M | 12.7M | 2.7K | 75.4M | 12.4M | 1.1M | 575.4K | 8.5M | 7.3K | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65.6M | 0 | 0 | 193.8M | 0 | 7.9M | 0 | 0 | 0 | 2.1M | 0 | 0 | 566.7K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 53094 | 53253 | 44053 | 45564 | 48727 | 46768 | 45621 | 15416 | 15614 | 15674 | 37374 | 21238 | 1301 | 1186 | 1310 | 1017 | 1346 | 1149 | 1114 | 772 | 868 | 532 | 388 | 120 | 336 | 229 | 186 | 115 | 41 | 217 | 38 |  | 234 |
| DeltaBlue | 77418 | 75679 | 126675 | 113697 | 114311 | 111118 | 110933 | 17739 | 17944 | 17389 | 39281 | 1532 | 1201 | 1334 | 1332 | 1089 | 1245 | 1136 | 1143 | 864 | 793 | 639 | 594 | 226 | 399 | 238 | 207 | 103 | 43 | 242 | 46 |  | 264 |
| Crypto | 78474 | 74435 | 63880 | 60307 | 61125 | 61030 | 61005 | 26399 | 22817 | 22781 | 43316 | 14240 | 1461 | 1821 | 1224 | 971 | 1176 | 1396 | 1002 | 1233 | 1655 | 1394 | 305 | 553 | 200 | 166 | 175 | 119 | 46 | 271 | 47 |  | 146 |
| RayTrace | 193877 | 192101 | 163538 | 101822 | 92425 | 95015 | 91093 | 51355 | 51799 | 43215 | 6867 | 1581 | 2569 | 2009 | 2196 | 2101 | 1577 | 1269 | 1474 | 1182 | 1137 | 1133 | 992 | 755 | 479 | 780 | 426 | 253 | 45 | 338 | 125 |  | 699 |
| EarleyBoyer | 109670 | 108007 | 123821 | 100239 | 107182 | 105839 | 100902 | 52944 | 50298 | 49721 | 56916 | 2265 | 5296 | 3872 | 3311 | 3112 | 2634 | 2357 | 2377 | 2875 | 1456 | 1213 | 1097 | 453 | 860 | 765 | 460 | 251 | 92 |  | 114 |  | 714 |
| RegExp | 33491 | 32672 | 15547 | 15578 | 15516 | 15410 | 15319 | 12936 | 12845 | 13001 | 1959 | 809 | 718 | 335 | 319 | 327 | 281 | 288 | 282 | 220 | 110 | 262 | 357 | 340 | 315 | 660 | 233 | 144 | 16 |  |  |  |  |
| Splay | 56661 | 53515 | 72543 | 60800 | 48772 | 50511 | 48854 | 29549 | 19787 | 19647 | 3680 | 2111 | 4795 | 5338 | 3427 | 4298 | 2507 | 2594 | 2367 | 2926 | 2279 | 2237 | 937 | 611 | 1388 | 1385 | 606 | 599 | 160 |  | 97 |  | 1222 |
| NavierStokes | 34508 | 40688 | 40513 | 40688 | 40729 | 40662 | 40621 | 21750 | 21370 | 21454 | 34326 | 5946 | 1633 | 4170 | 2107 | 1757 | 2194 | 2391 | 1742 | 1909 | 2020 | 1583 | 762 | 1580 | 334 | 236 | 278 | 229 | 80 |  | 87 |  | 323 |
| Score | 67849 | 67729 | 65281 | 57702 | 56507 | 56300 | 55205 | 25211 | 23419 | 22803 | 16735 | 3376 | 1907 | 1896 | 1564 | 1429 | 1373 | 1329 | 1229 | 1167 | 994 | 939 | 611 | 450 | 448 | 430 | 291 | 191 | 54 |  |  |  |  |
| Score/MB | 413632750 | 1192 | 1589 | 1266 | 994 | 657 | 494 | 192 | 713 | 492 | 86 |  | 121 | 1077 | 433 | 135 | 333 | 1394 | 1041 | 486 | 23 | 1710 | 1458 | 279 | 35 | 163069 | 3 | 15 | 50 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 22 | 32 | 29 | 35 | 36 | 37 | 37 | 36 | 39 | 44 | 59 | 43 | 53 | 80 | 76 | 79 | 97 | 135 | 508 | 33 | 274 |  | 75 |
### windows
| Engine | v8 | JavaScriptCore | bun | bare | deno | dune | node | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.83 |  | 1.2.20 |  | 2.4.4 | 0.10.1 | 24.6.0 | 1.11.24.0 | 142.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta | 0.8.0 |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.1M | 122.1M | 132.7M | 55.8M | 143.1M | 77.6M | 116.3M | 14.4M | 51M | 72.8M | 196.1M | 17.5M | 112.8M | 11.8M | 38.1M | 42.2M | 9M | 8M | 7.6M | 7.6M | 7.5M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 16.6M | 0.4K | 0 |
| Exe size | 29.1M | 337.5K | 112.9M | 26.1M | 110.8M | 47.4M | 85.3M | 342.9K | 33.7M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.7M | 1.3M | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.7M | 0.4K | 0 |
| Dll size | 25M | 121.8M | 19.8M | 29.7M | 32.3M | 30.3M | 31.1M | 14.1M | 17.4M | 30.2M | 195.8M | 17.5M | 109.8M | 6.9M | 32.4M | 29.1M | 7.3M | 6.7M | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38437 | 36439 | 37381 | 33000 | 33353 | 33025 | 20772 | 24200 | 13369 | 14322 | 35887 | 8727 | 698 | 514 | 445 | 391 | 430 | 381 | 229 | 208 | 233 | 192 | 92 | 54 | 49 |  | 21 |  |  |
| DeltaBlue | 106225 | 44921 | 45007 | 76247 | 67506 | 72293 | 70674 | 28814 | 10744 | 12999 | 30983 | 595 | 616 | 461 | 403 | 364 | 396 | 410 | 311 | 258 | 330 | 233 | 110 | 50 | 42 |  | 24 |  |  |
| Crypto | 41598 | 49059 | 46089 | 40791 | 37829 | 41433 | 30058 | 34017 | 20450 | 17505 | 23053 | 3160 | 789 | 549 | 426 | 429 | 364 | 316 | 189 | 314 | 182 | 111 | 92 | 58 | 74 |  | 27 |  |  |
| RayTrace | 114106 | 104042 | 89243 | 71779 | 67487 | 66747 | 58311 | 53670 | 28091 | 27232 | 2886 | 1468 | 1003 | 549 | 746 | 594 | 578 | 553 | 465 | 438 | 465 | 227 | 256 | 126 | 134 |  | 73 |  |  |
| EarleyBoyer | 84919 | 63098 | 54840 | 69044 | 72531 | 74612 | 70440 | 42700 | 39486 | 37176 | 28858 | 2504 | 2241 | 990 | 1115 | 997 | 969 | 893 | 557 | 517 | 574 | 453 | 288 | 124 | 140 |  | 69 |  |  |
| RegExp | 9910 | 18584 | 16877 | 9991 | 9709 | 9637 | 8828 | 10011 | 9019 | 8928 | 914 | 991 | 402 | 188 | 196 | 194 | 187 | 155 | 253 | 109 | 199 | 198 | 279 | 89 | 42 |  |  |  |  |
| Splay | 42848 | 35620 | 32238 | 39168 | 32939 | 27772 | 31651 | 18645 | 24382 | 14057 | 2998 | 5428 | 2328 | 1024 | 1377 | 1304 | 978 | 944 | 1182 | 1009 | 717 | 911 | 520 | 329 | 169 |  | 56 |  |  |
| NavierStokes | 39099 | 33984 | 40028 | 39060 | 38951 | 38951 | 38990 | 37063 | 22171 | 22149 | 20310 | 3973 | 1089 | 1038 | 740 | 712 | 670 | 728 | 475 | 938 | 484 | 190 | 151 | 115 | 167 |  | 48 |  |  |
| Score | 47815 | 43078 | 41177 | 40864 | 38854 | 38800 | 34430 | 27984 | 18842 | 17591 | 10218 | 2448 | 969 | 587 | 579 | 533 | 505 | 475 | 386 | 375 | 356 | 254 | 187 | 98 | 87 |  |  |  |  |
| Score/MB | 883 | 352 | 310 | 732 | 271 | 499 | 295 | 1943 | 369 | 241 | 52 | 139 | 8 | 49 | 15 | 12 | 56 | 59 | 50 | 49 | 47 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 35 | 42 | 58 | 59 | 60 | 63 | 68 | 79 | 85 | 83 | 124 | 147 | 251 | 282 | 128 | 460 |  |  |
