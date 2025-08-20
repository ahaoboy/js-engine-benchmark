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


## Engine & Runtime (33/39)

| name | repo | score | platform | description |
| --- | --- | --- | --- | --- |
| v8 | [v8.dev](https://v8.dev)<br><br>[v8-build](https://github.com/ahaoboy/v8-build) | 48461<br>56.8M<br>852/M | ✅unix<br>✅macArm<br>✅windows | V8 is Google’s open source high-performance JavaScript and WebAssembly engine |
| JavaScriptCore | [JavaScriptCore](https://github.com/WebKit/webkit/tree/main/Source/JavaScriptCore)<br><br>[jsc-build](https://github.com/ahaoboy/jsc-build) | 48459<br>36.4M<br>1330/M | ✅unix<br>✅macArm<br>✅windows | JavaScriptCore is the built-in JavaScript engine for WebKit, which implements ECMAScript as in ECMA-262 specification |
| bun | [bun](https://github.com/oven-sh/bun)<br><br>[setup-bun](https://github.com/oven-sh/setup-bun) | 47985<br>98.4M<br>487/M | ✅unix<br>✅macArm<br>✅windows | Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one |
| deno | [deno](https://github.com/denoland/deno)<br><br>[setup-deno](https://github.com/denoland/setup-deno) | 40524<br>106.5M<br>380/M | ✅unix<br>✅macArm<br>✅windows | A modern runtime for JavaScript and TypeScript |
| lo | [lo](https://github.com/just-js/lo)<br><br>[lo-build](https://github.com/ahaoboy/lo-build) | 39425<br>40.7M<br>969/M | ✅unix<br>❌macArm<br>❌windows | it's JavaScript Jim, but not as we know it |
| node | [node](https://github.com/nodejs/node)<br><br>[setup-node](https://github.com/actions/setup-node) | 39407<br>123.1M<br>319/M | ✅unix<br>✅macArm<br>✅windows | Node.js JavaScript runtime |
| dune | [dune](https://github.com/aalykiot/dune) | 38801<br>66.3M<br>585/M | ✅unix<br>✅macArm<br>✅windows | JavascriptA hobby runtime for JavaScript and TypeScript |
| ChakraCore | [ChakraCore](https://github.com/chakra-core/ChakraCore)<br><br>[ChakraCore-build](https://github.com/ahaoboy/ChakraCore-build) | 20141<br>19.4M<br>1037/M | ✅unix<br>❌macArm<br>✅windows | ChakraCore is an open source Javascript engine with a C API |
| spidermonkey | [spidermonkey.dev](https://spidermonkey.dev)<br><br>[spidermonkey-build](https://github.com/ahaoboy/spidermonkey-build) | 19286<br>40.1M<br>480/M | ✅unix<br>✅macArm<br>✅windows | SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox |
| mozjs | [mozjs](https://github.com/servo/mozjs)<br><br>[mozjs-cli](https://github.com/ahaoboy/mozjs-cli) | 17047<br>35.2M<br>483/M | ✅unix<br>✅macArm<br>❌windows | Rust bindings to SpiderMonkey |
| spiderfire | [spiderfire](https://github.com/Redfire75369/spiderfire)<br><br>[spiderfire-build](https://github.com/ahaoboy/spiderfire-build) | 17024<br>51M<br>333/M | ✅unix<br>✅macArm<br>✅windows | JavaScript Runtime built with Mozilla's SpiderMonkey Engine |
| graaljs | [graaljs](https://github.com/oracle/graaljs) | 11073<br>199.7M<br>55/M | ✅unix<br>✅macArm<br>✅windows | A ECMAScript 2023 compliant JavaScript implementation built on GraalVM. With polyglot language interoperability support. Running Node.js applications! |
| jjs | [nashorn](https://github.com/openjdk/nashorn) | 2735<br>1.1G<br>2/M | ✅unix<br>✅macArm<br>✅windows | Nashorn engine is an open source implementation of the ECMAScript Edition 5.1 Language Specification |
| hermes | [hermes](https://github.com/facebook/hermes) | 1526<br>36M<br>42/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine optimized for running React Native |
| llrt | [llrt](https://github.com/awslabs/llrt) | 867<br>12.3M<br>70/M | ✅unix<br>✅macArm<br>✅windows | LLRT (Low Latency Runtime) is a lightweight JavaScript runtime |
| quickjs | [quickjs](https://github.com/bellard/quickjs)<br><br>[quickjs-build](https://github.com/ahaoboy/quickjs-build) | 830<br>4.3M<br>194/M | ✅unix<br>✅macArm<br>✅windows | QuickJS is a small and embeddable Javascript engine. It supports the ES2023 specification including modules, asynchronous generators, proxies and BigInt. |
| txiki.js | [txiki.js](https://github.com/saghul/txiki.js)<br><br>[txiki.js-build](https://github.com/ahaoboy/txiki.js-build) | 828<br>5.2M<br>160/M | ✅unix<br>✅macArm<br>✅windows | A tiny JavaScript runtime |
| primjs | [primjs](https://github.com/lynx-family/primjs)<br><br>[primjs-build](https://github.com/ahaoboy/primjs-build) | 769<br>831.3K<br>947/M | ✅unix<br>✅macArm<br>❌windows | JavaScript Engine Optimized for Lynx |
| njs | [njs](https://github.com/nginx/njs)<br><br>[njs-build](https://github.com/ahaoboy/njs-build) | 740<br>8.4M<br>87/M | ✅unix<br>✅macArm<br>❌windows | A subset of JavaScript language to use in nginx |
| rquickjs | [rquickjs](https://github.com/DelSkayn/rquickjs)<br><br>[rquickjs-cli](https://github.com/ahaoboy/rquickjs-cli) | 719<br>1.3M<br>534/M | ✅unix<br>❌macArm<br>✅windows | High level bindings to the quickjs javascript engine |
| quickjs-ng | [quickjs](https://github.com/quickjs-ng/quickjs) | 647<br>2M<br>327/M | ✅unix<br>✅macArm<br>✅windows | QuickJS, the Next Generation: a mighty JavaScript engine |
| ladybird | [ladybird](https://github.com/LadybirdBrowser/ladybird)<br><br>[ladybird-js-build](https://github.com/ahaoboy/ladybird-js-build) | 544<br>46.1M<br>11/M | ✅unix<br>✅macArm<br>❌windows | Truly independent web browser |
| duktape | [duktape](https://github.com/svaarala/duktape)<br><br>[duktape-build](https://github.com/ahaoboy/duktape-build) | 488<br>2.1M<br>229/M | ✅unix<br>✅macArm<br>✅windows | embeddable Javascript engine with a focus on portability and compact footprint |
| quickjs-emscripten | [quickjs-emscripten](https://github.com/justjake/quickjs-emscripten)<br><br>[quickjs-emscripten-cli](https://github.com/ahaoboy/quickjs-emscripten-cli) | 485<br>0 | ✅unix<br>✅macArm<br>✅windows | Safely execute untrusted Javascript in your Javascript, and execute synchronous code that uses async functions |
| mujs-pgo | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-pgo-build](https://github.com/ahaoboy/mujs-pgo-build) | 380<br>446.6K<br>871/M | ✅unix<br>❌macArm<br>✅windows | An embeddable Javascript interpreter in C |
| mujs-one | [mujs-one](https://github.com/ahaoboy/mujs-one) | 372<br>685K<br>556/M | ✅unix<br>❌macArm<br>❌windows | mujs by c2rust |
| mujs | [mujs](https://github.com/ccxvii/mujs)<br><br>[mujs-build](https://github.com/ahaoboy/mujs-build) | 358<br>414.5K<br>884/M | ✅unix<br>✅macArm<br>✅windows | An embeddable Javascript interpreter in C |
| ringo | [ringojs](https://github.com/ringo/ringojs) | 299<br>2.7K<br>113390/M | ✅unix<br>✅macArm<br>❌windows | RingoJS is a JavaScript platform built on the JVM and optimized for server-side applications |
| goja | [goja](https://github.com/dop251/goja)<br><br>[goja-build](https://github.com/ahaoboy/goja-build) | 265<br>13.2M<br>20/M | ✅unix<br>✅macArm<br>✅windows | ECMAScript/JavaScript engine in pure Go |
| xst | [moddable](https://github.com/Moddable-OpenSource/moddable) | 263<br>2.1M<br>126/M | ✅unix<br>✅macArm<br>❌windows | Tools for developers to create truly open IoT products using standard JavaScript on low cost microcontrollers |
| jint | [jint](https://github.com/sebastienros/jint)<br><br>[jint-cli](https://github.com/ahaoboy/jint-cli) | 186<br>69M<br>2/M | ✅unix<br>✅macArm<br>✅windows | Javascript Interpreter for .NET |
| kiesel | [kiesel](https://codeberg.org/kiesel-js/kiesel)<br><br>[kiesel-build](https://github.com/ahaoboy/kiesel-build) | 102<br>12.6M<br>8/M | ✅unix<br>✅macArm<br>✅windows | A JavaScript engine written in Zig https://kiesel.dev |
| boa | [boa](https://github.com/boa-dev/boa) | 101<br>27M<br>3/M | ✅unix<br>❌macArm<br>✅windows | Boa is an embeddable and experimental Javascript engine written in Rust. Currently, it has support for some of the language. |
| JerryScript | [jerryscript](https://github.com/jerryscript-project/jerryscript)<br><br>[jerryscript-build](https://github.com/ahaoboy/jerryscript-build) | 0<br>454.2K | ❌unix<br>❌macArm<br>❌windows | Ultra-lightweight JavaScript engine for the Internet of Things |
| nova | [nova](https://github.com/trynova/nova) | 0<br>10.3M | ❌unix<br>❌macArm<br>❌windows | Nova is a JavaScript and WebAssembly engine written in Rust |
| engine262 | [engine262](https://github.com/engine262/engine262) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | An implementation of ECMA-262 in JavaScript |
| rhino | [rhino](https://github.com/mozilla/rhino) | 0<br>1.1G | ❌unix<br>❌macArm<br>❌windows | Rhino is an open-source implementation of JavaScript written entirely in Java |
| bare | [bare](https://github.com/holepunchto/bare) | 0<br>0 | ❌unix<br>❌macArm<br>❌windows | Small and modular JavaScript runtime for desktop and mobile |
| hako | [hako](https://github.com/andrewmd5/hako)<br><br>[hako-cli](https://github.com/andrewmd5/hako-cli) | 0<br>42M | ❌unix<br>✅macArm<br>❌windows | An embeddable, lightweight, secure, high-performance JavaScript engine |

## bench
8/20/2025, 11:01:06 AM

### ubuntu
| Engine | v8 | JavaScriptCore | bun | deno | lo | node | dune | ChakraCore | spidermonkey | mozjs | spiderfire | graaljs | jjs | hermes | llrt | quickjs | txiki.js | primjs | njs | rquickjs | quickjs-ng | ladybird | duktape | quickjs-emscripten | mujs-pgo | mujs-one | mujs | ringo | goja | xst | jint | kiesel | boa | JerryScript | nova | engine262 | rhino | hako |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.0 |  | 1.2.20 | 2.4.4 |  | 24.6.0 | 0.10.1 | 1.13.0.0.beta | 143.0 |  |  | 24.1.2 |  | 0.12.0 | 0.6.2.beta | 2025.04.26 | 24.12.0 |  | 0.9.2 |  | 0.10.1 |  | 2.99.99 |  |  |  | 1.3.5 | 4.0.0 |  | 16.9.1 |  | 0.1.0.dev | 0.20.0 | 3.0.0 |  | 0.0.1 |  |  |
| Total size | 56.8M | 36.4M | 98.4M | 106.5M | 40.7M | 123.1M | 66.3M | 19.4M | 40.1M | 35.2M | 51M | 199.7M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 12.6M | 27M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Exe size | 1M | 36.4M | 98.4M | 106.5M | 40.7M | 123.1M | 66.3M | 571K | 40.1M | 35.2M | 51M | 1M | 1.1G | 36M | 12.3M | 4.3M | 5.2M | 831.3K | 8.4M | 1.3M | 2M | 46.1M | 2.1M | 0 | 446.6K | 685K | 414.5K | 2.7K | 13.2M | 2.1M | 69M | 12.6M | 27M | 454.2K | 10.3M | 0 | 1.1G | 42M |
| Dll size | 55.8M | 0 | 0 | 0 | 0 | 0 | 0 | 18.8M | 0 | 0 | 0 | 198.6M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 37883 | 41434 | 40417 | 32488 | 32351 | 32213 | 31821 | 23423 | 13252 | 13429 | 13457 | 35662 | 13556 | 1098 | 677 | 690 | 697 | 636 | 566 | 597 | 582 | 486 | 261 | 335 | 255 | 245 | 222 | 126 | 203 | 90 | 104 | 58 | 59 | 275 | 26 |  | 121 |  |
| DeltaBlue | 111634 | 57866 | 56280 | 74799 | 79361 | 71467 | 72102 | 25232 | 13442 | 12979 | 13111 | 26851 | 212 | 1060 | 672 | 661 | 684 | 622 | 543 | 590 | 582 | 465 | 316 | 387 | 356 | 356 | 323 | 176 | 247 | 164 | 114 | 53 | 54 | 278 | 32 |  | 179 |  |
| Crypto | 41185 | 52014 | 49435 | 40943 | 41178 | 41299 | 41871 | 32231 | 20377 | 17710 | 17408 | 15926 | 8509 | 1365 | 582 | 689 | 599 | 557 | 883 | 549 | 380 | 903 | 799 | 411 | 190 | 189 | 183 | 157 | 122 | 320 | 97 | 61 | 79 | 302 | 31 |  | 136 |  |
| RayTrace | 111812 | 119064 | 118990 | 67931 | 66525 | 64379 | 68523 | 35410 | 27399 | 27546 | 26909 | 5517 | 988 | 1542 | 1124 | 900 | 1039 | 944 | 679 | 876 | 709 | 568 | 555 | 448 | 529 | 519 | 483 | 472 | 267 | 502 | 254 | 132 | 163 | 350 | 93 |  | 415 |  |
| EarleyBoyer | 88599 | 66821 | 65398 | 75144 | 69679 | 71720 | 73352 | 7103 | 40683 | 36942 | 36413 | 29282 | 2183 | 3346 | 1854 | 1459 | 1740 | 1410 | 1677 | 1369 | 1228 | 742 | 574 | 854 | 560 | 531 | 514 | 584 | 488 | 325 | 285 | 132 | 188 |  | 78 |  | 496 |  |
| RegExp | 10466 | 20436 | 21707 | 10082 | 8919 | 9728 | 9656 | 7728 | 8611 | 8839 | 8745 | 1240 | 839 | 548 | 253 | 228 | 227 | 232 | 115 | 226 | 179 | 63 | 133 | 179 | 245 | 215 | 199 | 453 | 204 | 91 | 250 | 91 | 48 |  |  |  |  |  |
| Splay | 43370 | 37266 | 36972 | 36565 | 34748 | 35057 | 28367 | 19876 | 24586 | 11694 | 12132 | 2242 | 5197 | 3540 | 2412 | 1834 | 1899 | 1838 | 2084 | 1475 | 1641 | 925 | 1288 | 1249 | 744 | 811 | 876 | 888 | 787 | 373 | 430 | 334 | 219 |  | 88 |  | 854 |  |
| NavierStokes | 38842 | 40244 | 40028 | 38842 | 38436 | 38842 | 38842 | 36803 | 22341 | 21963 | 22090 | 32994 | 13639 | 1848 | 950 | 1301 | 997 | 981 | 1218 | 928 | 929 | 1528 | 899 | 670 | 465 | 465 | 476 | 164 | 192 | 849 | 161 | 118 | 129 |  | 51 |  | 274 |  |
| Score | 48461 | 48459 | 47985 | 40524 | 39425 | 39407 | 38801 | 20141 | 19286 | 17047 | 17024 | 11073 | 2735 | 1526 | 867 | 830 | 828 | 769 | 740 | 719 | 647 | 544 | 488 | 485 | 380 | 372 | 358 | 299 | 265 | 263 | 186 | 102 | 101 |  |  |  |  |  |
| Score/MB | 852 | 1330 | 487 | 380 | 969 | 319 | 585 | 1037 | 480 | 483 | 333 | 55 | 2 | 42 | 70 | 194 | 160 | 947 | 87 | 534 | 327 | 11 | 229 |  | 871 | 556 | 884 | 113390 | 20 | 126 | 2 | 8 | 3 |  |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 21 | 20 | 20 | 20 | 23 | 38 | 33 | 47 | 48 | 49 | 50 | 61 | 52 | 59 | 87 | 67 | 63 | 80 | 83 | 85 | 98 | 117 | 132 | 144 | 242 | 248 | 31 | 407 |  | 87 | 7 |
### macos-arm64
| Engine | JavaScriptCore | v8 | dune | bun | deno | node | mozjs | spidermonkey | spiderfire | graaljs | jjs | primjs | hermes | txiki.js | llrt | njs | quickjs-ng | quickjs | ladybird | duktape | quickjs-emscripten | mujs | goja | ringo | xst | jint | kiesel | hako | JerryScript | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version |  | 14.1.93 | 0.10.1 | 1.2.20 | 2.4.4 | 24.6.0 |  | 143.0 |  | 24.1.2 |  |  | 0.12.0 | 24.12.0 | 0.6.2.beta | 0.9.2 | 0.8.0 | 2025.04.26 |  | 2.99.99 |  | 1.3.5 |  | 4.0.0 | 16.9.1 |  | 0.1.0.dev |  | 3.0.0 |  | 0.0.1 |  |
| Total size | 0.2K | 41.1M | 56.8M | 56.8M | 85.6M | 111.5M | 32.8M | 132.3M | 46.3M | 194M | 0 | 1.8M | 15.7M | 3.6M | 10.5M | 2.4M | 4.1M | 975.9K | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Exe size | 0.2K | 41.1M | 56.8M | 56.8M | 85.6M | 111.5M | 32.8M | 66.2M | 46.3M | 147.4K | 0 | 1.8M | 7.9M | 3.6M | 10.5M | 1.8M | 2.1M | 975.9K | 41.5M | 562.1K | 0 | 429.1K | 12.7M | 2.7K | 1.6M | 75.4M | 12.4M | 1.1M | 575.4K | 8.4M | 0 | 0 |
| Dll size | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66.2M | 0 | 193.8M | 0 | 0 | 7.9M | 0 | 0 | 566.7K | 2.1M | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Richards | 49924 | 37999 | 41159 | 39079 | 34614 | 30932 | 14071 | 11441 | 13252 | 31496 | 3866 | 1035 | 955 | 924 | 764 | 686 | 964 | 863 | 593 | 466 | 559 | 284 | 220 | 221 | 100 | 144 | 109 | 33 | 154 | 31 |  | 155 |
| DeltaBlue | 72320 | 119634 | 99812 | 58190 | 73173 | 66462 | 16384 | 15062 | 13362 | 14882 | 1506 | 1225 | 875 | 883 | 766 | 716 | 936 | 820 | 686 | 524 | 620 | 452 | 264 | 210 | 146 | 147 | 94 | 38 | 171 | 37 |  | 231 |
| Crypto | 74158 | 57017 | 57858 | 56770 | 44256 | 42861 | 20944 | 24082 | 19219 | 25499 | 11794 | 1709 | 1080 | 888 | 742 | 1170 | 871 | 949 | 1410 | 1042 | 503 | 223 | 140 | 141 | 334 | 134 | 111 | 40 | 231 | 42 |  | 138 |
| RayTrace | 172565 | 143336 | 88577 | 104382 | 65119 | 61641 | 50541 | 46721 | 38293 | 3275 | 803 | 1693 | 1669 | 1628 | 1545 | 1106 | 1366 | 970 | 983 | 790 | 506 | 669 | 402 | 628 | 479 | 340 | 228 | 37 | 296 | 120 |  | 658 |
| EarleyBoyer | 96262 | 109758 | 87589 | 59162 | 74996 | 72941 | 49111 | 44494 | 41164 | 26862 | 1246 | 1422 | 3632 | 1469 | 2057 | 2586 | 2096 | 1862 | 1167 | 955 | 1150 | 926 | 759 | 709 | 307 | 390 | 229 | 79 |  | 91 |  | 660 |
| RegExp | 29304 | 14120 | 13847 | 23275 | 10282 | 11455 | 12716 | 10052 | 11433 | 1188 | 723 | 273 | 534 | 246 | 239 | 212 | 207 | 217 | 100 | 208 | 223 | 306 | 290 | 548 | 307 | 201 | 134 | 13 |  |  |  |  |
| Splay | 44657 | 56050 | 33794 | 32922 | 28946 | 24896 | 19368 | 18172 | 12242 | 2108 | 2743 | 4592 | 2787 | 2298 | 2752 | 1838 | 1384 | 1545 | 2220 | 1874 | 1522 | 1015 | 1246 | 971 | 474 | 564 | 574 | 147 |  | 91 |  | 930 |
| NavierStokes | 31959 | 34132 | 38359 | 27695 | 31515 | 29769 | 17294 | 16423 | 17589 | 14722 | 13738 | 3585 | 1139 | 1498 | 1316 | 1833 | 1508 | 1781 | 1907 | 1432 | 857 | 656 | 305 | 165 | 1040 | 154 | 222 | 69 |  | 67 |  | 294 |
| Score | 60771 | 56918 | 48976 | 45035 | 38798 | 36800 | 21802 | 20027 | 18412 | 8883 | 2565 | 1483 | 1321 | 1049 | 1022 | 1020 | 997 | 960 | 853 | 756 | 644 | 495 | 359 | 355 | 320 | 225 | 178 | 46 |  |  |  |  |
| Score/MB | 370482628 | 1386 | 862 | 792 | 453 | 329 | 664 | 151 | 397 | 45 |  | 842 | 84 | 290 | 97 | 425 | 241 | 1007 | 20 | 1377 |  | 1181 | 28 | 134627 | 202 | 2 | 14 | 43 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 39 | 39 | 35 | 44 | 44 | 47 | 45 | 45 | 63 | 49 | 56 | 64 | 84 | 95 | 104 | 128 | 145 | 617 | 37 | 332 |  | 80 |
### windows
| Engine | v8 | JavaScriptCore | bun | deno | node | dune | ChakraCore | spidermonkey | spiderfire | graaljs | jjs | hermes | quickjs | txiki.js | llrt | rquickjs | quickjs-ng | quickjs-emscripten | duktape | mujs | mujs-pgo | goja | jint | kiesel | boa | xst | nova | engine262 | rhino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | 14.1.93 |  | 1.2.20 | 2.4.4 | 24.6.0 | 0.10.1 | 1.11.24.0 | 143.0 |  | 24.1.2 | 1.8.0 | 0.12.0 | 2025.04.26 | 24.12.0 | 0.6.2.beta |  | 0.8.0 |  | 2.7.0 | 1.3.5 |  |  |  | 0.1.0.dev | 0.20.0 |  |  | 0.0.1 |  |
| Total size | 54.2M | 122.1M | 132.7M | 143.1M | 116.3M | 77.6M | 14.4M | 51.5M | 72.8M | 196.1M | 17.3M | 112.8M | 11.8M | 37M | 42.2M | 9.3M | 9M | 0 | 7.6M | 7.5M | 7.6M | 19.5M | 96.1M | 46.3M | 42.4M | 5.9M | 17.1M | 0 | 0 |
| Exe size | 29.2M | 337.5K | 112.9M | 110.8M | 85.3M | 47.4M | 342.9K | 34.1M | 42.6M | 349.1K | 0 | 3M | 4.9M | 5.7M | 13.1M | 1.5M | 1.7M | 0 | 777.7K | 692.1K | 744.6K | 13.3M | 68.8M | 33.2M | 27.4M | 1.3M | 9.2M | 0 | 0 |
| Dll size | 25M | 121.8M | 19.8M | 32.3M | 31.1M | 30.3M | 14.1M | 17.4M | 30.2M | 195.8M | 17.3M | 109.8M | 6.9M | 31.3M | 29.1M | 7.8M | 7.3M | 0 | 6.9M | 6.9M | 6.9M | 6.2M | 27.3M | 13.2M | 15M | 4.7M | 7.9M | 0 | 0 |
| Richards | 38433 | 35786 | 37180 | 32354 | 32944 | 32273 | 24990 | 13242 | 14198 | 35849 | 3022 | 700 | 515 | 452 | 388 | 444 | 430 | 361 | 211 | 233 | 229 | 187 | 105 | 52 | 47 |  | 23 |  |  |
| DeltaBlue | 107984 | 46871 | 41661 | 75718 | 70052 | 70422 | 28034 | 13329 | 13091 | 28847 | 225 | 621 | 460 | 396 | 377 | 403 | 390 | 396 | 254 | 338 | 318 | 237 | 117 | 50 | 42 |  | 26 |  |  |
| Crypto | 40506 | 48200 | 44991 | 40205 | 36401 | 41977 | 33711 | 20205 | 17742 | 21073 | 1617 | 786 | 549 | 429 | 429 | 509 | 374 | 424 | 317 | 180 | 189 | 112 | 89 | 58 | 74 |  | 29 |  |  |
| RayTrace | 110776 | 106188 | 101526 | 63417 | 65785 | 65711 | 50837 | 28313 | 27010 | 4295 | 1327 | 999 | 549 | 731 | 600 | 592 | 589 | 452 | 435 | 462 | 476 | 223 | 266 | 124 | 134 |  | 79 |  |  |
| EarleyBoyer | 88095 | 62852 | 57485 | 74844 | 72315 | 74450 | 42668 | 41123 | 36713 | 28118 | 1092 | 2218 | 1008 | 1150 | 1011 | 986 | 999 | 890 | 498 | 580 | 574 | 444 | 294 | 123 | 139 |  | 70 |  |  |
| RegExp | 10042 | 18293 | 17547 | 9489 | 9930 | 9770 | 10142 | 8947 | 8784 | 923 | 685 | 403 | 190 | 195 | 195 | 173 | 187 | 181 | 109 | 201 | 254 | 192 | 272 | 89 | 42 |  |  |  |  |
| Splay | 43606 | 35489 | 32417 | 33876 | 33745 | 28359 | 17265 | 24733 | 14880 | 2285 | 4891 | 2424 | 1040 | 1482 | 1319 | 953 | 1009 | 1267 | 1009 | 1163 | 648 | 862 | 522 | 321 | 170 |  | 82 |  |  |
| NavierStokes | 39060 | 33835 | 34098 | 38990 | 38990 | 38990 | 36841 | 22275 | 22260 | 24634 | 3837 | 1088 | 1037 | 741 | 717 | 745 | 666 | 741 | 1081 | 471 | 469 | 188 | 151 | 115 | 165 |  | 48 |  |  |
| Score | 47974 | 43075 | 40938 | 39444 | 38880 | 38710 | 27536 | 19448 | 17673 | 10399 | 1458 | 973 | 590 | 586 | 538 | 533 | 511 | 504 | 381 | 378 | 361 | 250 | 192 | 97 | 87 |  |  |  |  |
| Score/MB | 885 | 352 | 308 | 275 | 334 | 498 | 1912 | 377 | 242 | 53 | 84 | 8 | 50 | 15 | 12 | 57 | 57 |  | 50 | 50 | 47 | 12 | 1 | 2 | 2 |  |  |  |  |
| Time(s) | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 24 | 38 | 42 | 58 | 60 | 61 | 60 | 63 | 63 | 84 | 83 | 78 | 126 | 149 | 252 | 285 | 130 | 438 |  |  |
