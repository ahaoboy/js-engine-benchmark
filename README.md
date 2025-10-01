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


## Engine & Runtime (35/40)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 47540<br>37.1M<br>1281/M | ✅unix<br>❌macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 46697<br>99.2M<br>470/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 46114<br>57.8M<br>798/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 41929<br>108.3M<br>387/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| bare | [bare](https://github.com/holepunchto/bare) | 40804<br>65.3M<br>624/M | ✅unix<br>✅macArm<br>✅windows | Small and modular JavaScript runtime for desktop and mobile |
| dune | [dune](https://github.com/aalykiot/dune) | 40263<br>69.6M<br>578/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39417<br>123.4M<br>319/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 38564<br>40.7M<br>948/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20012<br>19.4M<br>1031/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19509<br>39.8M<br>490/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17056<br>51M<br>334/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 16921<br>35.2M<br>480/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 9107<br>199.7M<br>45/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2386<br>0 | ✅unix<br>✅macArm<br>❌windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1517<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 925<br>12.3M<br>75/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 836<br>4.5M<br>187/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 820<br>5.2M<br>158/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 742<br>1.4M<br>533/M | ✅unix<br>✅macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| rquickjs-pgo | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rqjs-pgo-build](https://github.com/ahaoboy/rqjs-pgo-build) | 737<br>1.4M<br>523/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 735<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 720<br>831.3K<br>886/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 620<br>46.5M<br>13/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 500<br>2.1M<br>235/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 488<br>2M<br>241/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 488<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 399<br>446.6K<br>914/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 353<br>685K<br>527/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 336<br>414.5K<br>830/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 307<br>0 | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 266<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 184<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| boa | [boa](https://github.com/boa-dev/boa) | 104<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 103<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>8.4M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
10/1/2025, 1:54:48 AM

### ubuntu
| Engine | JavaScriptCore | bun | v8 | deno | bare | dune | node | lo | ChakraCore | spidermonkey | spiderfire | mozjs | graaljs | jjs | hermes | llrt | quickjs | txiki.js | rquickjs | rquickjs-pgo | njs | primjs | ladybird | duktape | quickjs-ng | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | boa | kiesel | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 1.2.23 | 14.3.0 | 2.5.2 |  | 0.10.2 | 24.9.0 |  | 1.13.0.0.beta | 144.0 |  |  | 24.1.2 |  | 0.12.0 | 0.7.0.beta | 2025.09.13 | 24.12.0 |  |  | 0.9.2 |  |  | 2.99.99 | 0.10.1 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.20.0 | 0.1.0.dev | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 37.1M | 99.2M | 57.8M | 108.3M | 65.3M | 69.6M | 123.4M | 40.7M | 19.4M | 39.8M | 51M | 35.2M | 199.7M | 0 | 36M | 12.3M | 4.5M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 46.5M | 2.1M | 2M | 0 | 446.6K | 685K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 0 | 42M |
| Exe size | 37.1M | 99.2M | 1M | 108.3M | 65.3M | 69.6M | 123.4M | 40.7M | 571K | 39.8M | 51M | 35.2M | 1M | 0 | 36M | 12.3M | 4.5M | 5.2M | 1.4M | 1.4M | 8.4M | 831.3K | 46.5M | 2.1M | 2M | 0 | 446.6K | 685K | 414.5K | 0 | 13.2M | 2.1M | 69M | 27M | 12.6M | 454.2K | 8.4M | 0 | 0 | 42M |
| Dll size | 0 | 0 | 56.8M | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 41674 | 39365 | 37876 | 35450 | 31821 | 34381 | 31592 | 32361 | 23299 | 13387 | 14036 | 12437 | 35517 | 9528 | 1134 | 716 | 698 | 710 | 573 | 564 | 567 | 583 | 535 | 289 | 392 | 346 | 275 | 246 | 222 | 157 | 198 | 90 | 102 | 59 | 59 | 260 | 28 |  | 153 |  |
| DeltaBlue | 57906 | 54395 | 93696 | 78707 | 76651 | 80062 | 69444 | 74284 | 25133 | 13667 | 13124 | 12880 | 24464 | 287 | 1068 | 697 | 662 | 636 | 567 | 571 | 540 | 587 | 489 | 327 | 378 | 383 | 362 | 357 | 313 | 201 | 249 | 163 | 114 | 54 | 54 | 268 | 33 |  | 193 |  |
| Crypto | 51346 | 49243 | 38451 | 41617 | 41439 | 41764 | 41336 | 41266 | 31968 | 20478 | 17584 | 17472 | 16931 | 7803 | 1335 | 681 | 764 | 581 | 556 | 537 | 882 | 512 | 876 | 783 | 411 | 413 | 186 | 190 | 183 | 147 | 123 | 329 | 96 | 79 | 61 | 301 | 38 |  | 149 |  |
| RayTrace | 117436 | 112256 | 109888 | 72371 | 71927 | 72371 | 65563 | 60545 | 34005 | 28137 | 26391 | 27676 | 2727 | 1308 | 1550 | 1190 | 902 | 1084 | 913 | 902 | 681 | 890 | 756 | 588 | 578 | 457 | 513 | 499 | 478 | 498 | 267 | 499 | 256 | 164 | 133 | 345 | 94 |  | 467 |  |
| EarleyBoyer | 65030 | 65696 | 85489 | 74544 | 69364 | 75070 | 72572 | 69444 | 7127 | 41919 | 36212 | 37320 | 22815 | 958 | 3387 | 1879 | 1428 | 1743 | 1204 | 1323 | 1641 | 1306 | 920 | 561 | 950 | 857 | 504 | 451 | 464 | 564 | 485 | 323 | 278 | 183 | 133 |  | 82 |  | 566 |  |
| RegExp | 19586 | 20477 | 10504 | 10102 | 10243 | 9931 | 9839 | 8919 | 7878 | 8983 | 8910 | 8848 | 804 | 567 | 549 | 268 | 242 | 226 | 228 | 216 | 115 | 228 | 63 | 136 | 155 | 180 | 232 | 206 | 195 | 453 | 203 | 95 | 244 | 49 | 89 |  |  |  |  |  |
| Splay | 35636 | 35677 | 39173 | 39091 | 38301 | 28774 | 35375 | 34185 | 19615 | 23844 | 11767 | 11875 | 1986 | 4971 | 3373 | 2324 | 1698 | 1844 | 2092 | 2047 | 2031 | 1726 | 1393 | 1269 | 1334 | 1244 | 1235 | 641 | 625 | 886 | 818 | 370 | 421 | 212 | 336 |  | 132 |  | 809 |  |
| NavierStokes | 39504 | 39800 | 38765 | 38617 | 38842 | 38694 | 38803 | 38469 | 36693 | 22171 | 22067 | 22127 | 32351 | 13922 | 1786 | 1132 | 1273 | 990 | 968 | 959 | 1210 | 906 | 1537 | 926 | 467 | 675 | 468 | 484 | 477 | 152 | 193 | 841 | 161 | 170 | 118 |  | 61 |  | 281 |  |
| Score | 47540 | 46697 | 46114 | 41929 | 40804 | 40263 | 39417 | 38564 | 20012 | 19509 | 17056 | 16921 | 9107 | 2386 | 1517 | 925 | 836 | 820 | 742 | 737 | 735 | 720 | 620 | 500 | 488 | 488 | 399 | 353 | 336 | 307 | 266 | 263 | 184 | 104 | 103 |  |  |  |  |  |
| Score/MB | 1281 | 470 | 798 | 387 | 624 | 578 | 319 | 948 | 1031 | 490 | 334 | 480 | 45 |  | 42 | 75 | 187 | 158 | 533 | 523 | 87 | 886 | 13 | 235 | 241 |  | 914 | 527 | 830 |  | 20 | 126 | 2 | 3 | 8 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 24 | 43 | 34 | 44 | 48 | 49 | 53 | 54 | 62 | 53 | 82 | 68 | 67 | 63 | 82 | 82 | 86 | 104 | 117 | 132 | 145 | 241 | 239 | 32 | 356 |  | 81 | 7 |
### macos-arm64
| Engine | v8 | bun | bare | dune | node | deno | spidermonkey | mozjs | spiderfire | graaljs | hermes | primjs | txiki.js | jjs | rquickjs | ladybird | llrt | quickjs | quickjs-ng | duktape | njs | quickjs-emscripten | mujs | xst | goja | ringo | jint | kiesel | hako | JavaScriptCore | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.9 | 1.2.23 |  | 0.10.2 | 24.9.0 | 2.5.2 | 144.0 |  |  | 24.1.2 | 0.12.0 |  | 24.12.0 |  |  |  | 0.7.0.beta | 2025.09.13 | 0.10.1 | 2.99.99 | 0.9.2 |  | 1.3.5 | 16.9.1 |  | 4.0.0 |  | 0.1.0.dev |  |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 41.3M | 57.3M | 45.6M | 60M | 111.9M | 87.5M | 131.8M | 32.8M | 46.3M | 194M | 15.7M | 1.8M | 3.6M | 0 | 1.2M | 41.5M | 10.6M | 1014.4K | 3.8M | 562.1K | 2.4M | 0 | 429.1K | 1.6M | 12.7M | 0 | 75.4M | 12.4M | 1.1M | 91.8M | 575.4K | 7.3M | 0 | 0 |
| Exe size | 41.3M | 57.3M | 45.6M | 60M | 111.9M | 87.5M | 65.9M | 32.8M | 46.3M | 147.4K | 7.9M | 1.8M | 3.6M | 0 | 1.2M | 41.5M | 10.6M | 1014.4K | 1.9M | 562.1K | 1.8M | 0 | 429.1K | 1.6M | 12.7M | 0 | 75.4M | 12.4M | 1.1M | 910.8K | 575.4K | 7.3M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 65.9M | 0 | 0 | 193.8M | 7.9M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1.9M | 0 | 559.9K | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 90.9M | 0 | 0 | 0 | 0 |
| Richards | 39009 | 46853 | 42701 | 55276 | 45773 | 49783 | 14647 | 15127 | 15416 | 28012 | 1142 | 1106 | 879 | 808 | 825 | 855 | 740 | 817 | 715 | 450 | 521 | 397 | 244 | 84 | 283 | 120 | 151 | 97 | 40 |  | 180 | 34 |  |  |
| DeltaBlue | 88909 | 64928 | 108447 | 83474 | 91507 | 93015 | 15161 | 16847 | 16219 | 32471 | 1081 | 1126 | 787 | 310 | 946 | 666 | 926 | 827 | 762 | 489 | 662 | 428 | 421 | 149 | 341 | 153 | 163 | 81 | 40 |  | 207 | 45 |  |  |
| Crypto | 50544 | 56219 | 56334 | 45262 | 50871 | 48748 | 18876 | 21683 | 21469 | 26627 | 1275 | 1599 | 915 | 3558 | 963 | 1423 | 605 | 998 | 863 | 1186 | 1054 | 481 | 194 | 314 | 165 | 112 | 126 | 87 | 38 |  | 245 | 53 |  |  |
| RayTrace | 141930 | 130460 | 96125 | 78661 | 70447 | 81029 | 42211 | 44621 | 41324 | 3160 | 2053 | 1394 | 1363 | 1651 | 1157 | 1435 | 1484 | 892 | 1027 | 837 | 497 | 611 | 644 | 579 | 235 | 602 | 320 | 191 | 41 |  | 297 | 160 |  |  |
| EarleyBoyer | 100776 | 85638 | 76835 | 76598 | 80252 | 87613 | 52207 | 43063 | 39844 | 19671 | 3646 | 986 | 2241 | 1650 | 1936 | 1863 | 2109 | 1675 | 1655 | 1136 | 1726 | 1083 | 695 | 321 | 534 | 684 | 347 | 181 | 74 |  |  | 132 |  |  |
| RegExp | 14743 | 21408 | 12435 | 13493 | 12468 | 12195 | 13183 | 10393 | 8650 | 1314 | 579 | 270 | 245 | 453 | 211 | 101 | 248 | 193 | 199 | 236 | 175 | 225 | 238 | 319 | 243 | 570 | 188 | 136 | 13 |  |  |  |  |  |
| Splay | 59668 | 32870 | 38602 | 38993 | 38945 | 35294 | 26811 | 17496 | 10282 | 3173 | 3717 | 3164 | 2147 | 1456 | 1775 | 1897 | 2361 | 1524 | 1882 | 2084 | 1775 | 1877 | 424 | 552 | 828 | 920 | 355 | 521 | 148 |  |  | 195 |  |  |
| NavierStokes | 37656 | 38173 | 35953 | 36989 | 36434 | 29532 | 20162 | 20377 | 18513 | 17607 | 1279 | 3301 | 1412 | 659 | 1361 | 1714 | 765 | 1624 | 1388 | 1359 | 1573 | 860 | 521 | 922 | 264 | 189 | 162 | 197 | 68 |  |  | 95 |  |  |
| Score | 54944 | 51736 | 49003 | 47165 | 46353 | 46091 | 22506 | 21104 | 18637 | 10126 | 1545 | 1291 | 1046 | 1007 | 981 | 958 | 934 | 913 | 896 | 799 | 790 | 612 | 383 | 323 | 319 | 309 | 210 | 155 | 47 |  |  |  |  |  |
| Score/MB | 1331 | 903 | 1075 | 786 | 414 | 526 | 170 | 643 | 402 | 52 | 98 | 733 | 290 |  | 820 | 23 | 88 | 921 | 233 | 1455 | 330 |  | 914 | 204 | 25 |  | 2 | 12 | 44 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 33 | 41 | 44 | 45 | 45 | 60 | 48 | 47 | 49 | 47 | 56 | 54 | 74 | 103 | 100 | 99 | 134 | 169 | 606 |  | 35 | 250 |  |  |
### windows
| Engine | v8 | JavaScriptCore | deno | bun | node | bare | dune | ChakraCore | spidermonkey | spiderfire | graaljs | hermes | quickjs | txiki.js | llrt | quickjs-ng | rquickjs | rquickjs-pgo | quickjs-emscripten | mujs-pgo | duktape | mujs | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.3.9 |  | 2.5.2 | 1.2.23 | 24.9.0 |  | 0.10.2 | 1.11.24.0 | 144.0 |  | 24.1.2 | 0.12.0 | 2025.09.13 | 24.12.0 | 0.7.0.beta | 0.10.1 |  |  |  |  | 2.7.0 | 1.3.5 |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 61.8M | 125.2M | 148.4M | 139.6M | 120.8M | 59.9M | 82.1M | 15.6M | 53.7M | 80.6M | 197.1M | 116.5M | 13M | 41.7M | 45.6M | 10M | 9M | 10.2M | 0 | 8.6M | 8.6M | 8.5M | 20.5M | 99.1M | 47.6M | 43.8M | 6.5M | 17.5M | 0 | 0 |
| Exe size | 29.5M | 342.5K | 112.5M | 113.6M | 85.5M | 26.1M | 49.1M | 342.9K | 33.8M | 42.6M | 349.1K | 3M | 5.1M | 5.7M | 13.1M | 1.6M | 1.2M | 1M | 0 | 744.6K | 777.7K | 692.1K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 8.3M | 0 | 0 |
| Dll size | 32.4M | 124.9M | 35.9M | 26M | 35.3M | 33.8M | 33M | 15.3M | 19.9M | 37.9M | 196.7M | 113.5M | 7.9M | 36M | 32.5M | 8.5M | 7.8M | 9.2M | 0 | 7.8M | 7.8M | 7.8M | 7.2M | 30.3M | 14.4M | 16.5M | 5.2M | 9.2M | 0 | 0 |
| Richards | 37508 | 35549 | 35316 | 36220 | 32354 | 27751 | 31101 | 24217 | 13785 | 13637 | 34787 | 680 | 496 | 443 | 384 | 394 | 432 | 430 | 352 | 257 | 207 | 256 | 171 | 96 | 48 | 46 |  | 23 |  | 115 |
| DeltaBlue | 105729 | 45450 | 76089 | 44359 | 64888 | 73510 | 74006 | 26732 | 13230 | 12655 | 27836 | 612 | 448 | 390 | 357 | 366 | 438 | 453 | 377 | 348 | 250 | 346 | 199 | 89 | 40 | 41 |  | 25 |  | 123 |
| Crypto | 36359 | 47957 | 38715 | 45184 | 40833 | 39867 | 38358 | 31038 | 20005 | 17399 | 19790 | 780 | 536 | 409 | 425 | 419 | 321 | 322 | 396 | 187 | 297 | 170 | 110 | 84 | 55 | 70 |  | 37 |  | 141 |
| RayTrace | 90205 | 100121 | 69855 | 82583 | 64527 | 68819 | 47063 | 49505 | 28416 | 14120 | 2331 | 961 | 565 | 748 | 622 | 582 | 607 | 603 | 439 | 378 | 447 | 375 | 219 | 247 | 118 | 121 |  | 83 |  | 428 |
| EarleyBoyer | 72659 | 58124 | 72869 | 49477 | 69855 | 64213 | 68297 | 42225 | 40862 | 34347 | 20148 | 2196 | 896 | 1054 | 852 | 875 | 884 | 844 | 793 | 497 | 482 | 477 | 404 | 269 | 107 | 111 |  | 75 |  | 500 |
| RegExp | 9647 | 17564 | 9738 | 16199 | 9527 | 9010 | 9283 | 9200 | 8586 | 8438 | 927 | 403 | 187 | 195 | 189 | 172 | 158 | 155 | 172 | 236 | 107 | 185 | 178 | 250 | 77 | 41 |  |  |  |  |
| Splay | 37282 | 31656 | 31708 | 30561 | 28558 | 29027 | 20417 | 22386 | 22573 | 13234 | 2300 | 2005 | 945 | 1250 | 1081 | 1142 | 1114 | 1136 | 1120 | 1135 | 945 | 925 | 626 | 407 | 267 | 158 |  | 113 |  | 641 |
| NavierStokes | 38436 | 33620 | 38436 | 33734 | 38469 | 38173 | 38139 | 35509 | 22149 | 21685 | 23720 | 1073 | 1023 | 726 | 699 | 715 | 756 | 747 | 717 | 477 | 1053 | 477 | 164 | 139 | 110 | 163 |  | 57 |  | 263 |
| Score | 43602 | 41278 | 39791 | 38625 | 37658 | 37098 | 34594 | 27285 | 19163 | 15610 | 9063 | 937 | 569 | 561 | 508 | 506 | 506 | 504 | 474 | 376 | 370 | 349 | 223 | 170 | 86 | 81 |  |  |  |  |
| Score/MB | 705 | 329 | 268 | 276 | 311 | 618 | 421 | 1748 | 356 | 193 | 45 | 8 | 43 | 13 | 11 | 50 | 56 | 49 |  | 43 | 43 | 41 | 10 | 1 | 1 | 1 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 23 | 42 | 58 | 60 | 62 | 64 | 68 | 68 | 65 | 82 | 85 | 87 | 135 | 160 | 276 | 308 | 134 | 383 |  | 90 |
