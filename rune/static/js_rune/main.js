webpackJsonp([2], {

    /***/
    11:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";
            /* WEBPACK VAR INJECTION */
            (function(process) {

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };

                exports.assetPath = assetPath;
                exports.pushToDataLayer = pushToDataLayer;

                /* global versionedAssetPath:true */
                function assetPath(path) {
                    return '' + versionedAssetPath + path;
                }

                var analyticsEvent = {
                    event: 'analyticsEvent',
                    eventCategory: 'Preseason-Update'
                };

                function pushToDataLayer(event) {
                    if (typeof window.dataLayer.push === 'function') {
                        var pushedEvent = _extends({}, analyticsEvent, event);

                        if (process.env.NODE_ENV !== 'production') {
                            //console.log(pushedEvent);
                        }
                        window.dataLayer.push(pushedEvent);
                    }
                }

                exports.default = {
                    assetPath: assetPath,
                    pushToDataLayer: pushToDataLayer
                };
                /* WEBPACK VAR INJECTION */
            }.call(exports, __webpack_require__(12)))

            /***/
        }),

    /***/
    253:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            __webpack_require__(254);

            __webpack_require__(455);

            __webpack_require__(456);

            __webpack_require__(457);

            __webpack_require__(458);

            __webpack_require__(459);

            __webpack_require__(460);

            /***/
        }),

    /***/
    455:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            var _scrollmonitor = __webpack_require__(59);

            var _scrollmonitor2 = _interopRequireDefault(_scrollmonitor);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var heroBackdrop = document.querySelector('.js-hero-backdrop');
            var frame = null;

            function position() {
                heroBackdrop.style.transform = 'translate3d(0, ' + Math.floor(_scrollmonitor2.default.viewportTop * 0.35) + 'px, 0)';

                frame = window.requestAnimationFrame(position);
            }

            if (heroBackdrop) {
                var elementWatcher = _scrollmonitor2.default.create(heroBackdrop);

                if (elementWatcher) {
                    elementWatcher.enterViewport(position);

                    elementWatcher.exitViewport(function() {
                        window.cancelAnimationFrame(frame);
                    });
                }
            }

            /***/
        }),

    /***/
    456:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            var _scrollmonitor = __webpack_require__(59);

            var _scrollmonitor2 = _interopRequireDefault(_scrollmonitor);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var stickyNav = document.querySelector('.js-sticky-nav');
            var stickyNavContent = null;

            function fix() {
                stickyNav.style.paddingTop = stickyNavContent.offsetHeight + 'px';
                stickyNavContent.classList.add('is-fixed');
            }

            function unfix() {
                stickyNav.style.paddingTop = '';
                stickyNavContent.classList.remove('is-fixed');
            }

            if (stickyNav) {
                stickyNavContent = stickyNav.querySelector('.js-sticky-nav__content');

                var elementWatcher = _scrollmonitor2.default.create(stickyNav);

                elementWatcher.partiallyExitViewport(fix);
                elementWatcher.fullyEnterViewport(unfix);

                if (!elementWatcher.isFullyInViewport) {
                    fix();
                }
            }

            /***/
        }),

    /***/
    457:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                    }
                    return arr2;
                } else {
                    return Array.from(arr);
                }
            }

            __webpack_require__(193).polyfill();

            var scrollTo = [].concat(_toConsumableArray(document.querySelectorAll('.js-scroll-to')));

            scrollTo.forEach(function(node) {
                node.addEventListener('click', function() {
                    var target = document.querySelector(node.hash);

                    if (target) {
                        window.scrollTo({
                            top: target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset),
                            left: 0,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            /***/
        }),

    /***/
    458:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            var _scrollmonitor = __webpack_require__(59);

            var _scrollmonitor2 = _interopRequireDefault(_scrollmonitor);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                    }
                    return arr2;
                } else {
                    return Array.from(arr);
                }
            }

            var items = [].concat(_toConsumableArray(document.querySelectorAll('.js-active-in-view')));

            items.forEach(function(item) {
                var elementWatcher = _scrollmonitor2.default.create(item, window.innerHeight * 0.1);

                elementWatcher.enterViewport(function() {
                    item.classList.add('is-active');
                    elementWatcher.destroy();
                });
            });

            /***/
        }),

    /***/
    459:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            var _scrollmonitor = __webpack_require__(59);

            var _scrollmonitor2 = _interopRequireDefault(_scrollmonitor);

            var _helpers = __webpack_require__(11);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                    }
                    return arr2;
                } else {
                    return Array.from(arr);
                }
            }

            var imagesToLoad = [].concat(_toConsumableArray(document.querySelectorAll('.js-lazy-image')));
            var backgroundsToLoad = [].concat(_toConsumableArray(document.querySelectorAll('.js-lazy-background')));
            var timing = 300;

            function loadImage(image) {
                return new Promise(function(resolve, reject) {
                    var tempImage = new Image();
                    var dataSrc = image.getAttribute('data-src');

                    if (!dataSrc) {
                        reject('No \'data-src\' set on ' + image);
                    }

                    tempImage.onload = function() {
                        image.src = dataSrc;
                        resolve();
                    };

                    tempImage.onerror = function() {
                        reject();
                    };

                    tempImage.src = dataSrc;
                });
            }

            imagesToLoad.forEach(function(image) {
                var elementWatcher = _scrollmonitor2.default.create(image, window.innerHeight * 0.5);
                var styles = window.getComputedStyle(image);
                var addTransition = styles.transition === 'all 0s ease 0s';

                image.style.opacity = 0;
                image.src = (0, _helpers.assetPath)('/img/global/blank.gif');

                if (addTransition) {
                    image.style.transition = 'opacity ' + timing + 'ms';
                }

                elementWatcher.enterViewport(function() {
                    loadImage(image).then(function() {
                        image.style.opacity = '';

                        window.setTimeout(function() {
                            if (addTransition) {
                                image.style.transition = '';
                            }
                        }, timing);

                        // elementWatcher.destroy();
                    });
                });
            });

            function loadBackgrounds() {
                backgroundsToLoad.forEach(function(node) {
                    node.style.background = '';
                });
            }

            window.addEventListener('load', loadBackgrounds);

            /***/
        }),

    /***/
    460:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            var _scrollmonitor = __webpack_require__(59);

            var _scrollmonitor2 = _interopRequireDefault(_scrollmonitor);

            var _helpers = __webpack_require__(11);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                    }
                    return arr2;
                } else {
                    return Array.from(arr);
                }
            }

            /**
             * Log node id to dataLayer when fully in viewport
             */
            var scrollMarkers = [].concat(_toConsumableArray(document.querySelectorAll('.js-scroll-marker')));

            if (scrollMarkers) {
                scrollMarkers.forEach(function(marker) {
                    var markerWatcher = _scrollmonitor2.default.create(marker);
                    var event = {
                        eventAction: 'Scroll',
                        eventLabel: marker.id
                    };

                    markerWatcher.fullyEnterViewport(function() {
                        (0, _helpers.pushToDataLayer)(event);
                    });
                });
            }

            var pushClickNodes = [].concat(_toConsumableArray(document.querySelectorAll('.js-push-click')));

            if (pushClickNodes) {
                pushClickNodes.forEach(function(node) {
                    var eventLabel = node.getAttribute('data-event-label');

                    var event = {
                        eventAction: 'Click',
                        eventLabel: eventLabel
                    };

                    node.addEventListener('click', function() {
                        (0, _helpers.pushToDataLayer)(event);
                    });
                });
            }

            /***/
        })

}, [253]);
//# sourceMappingURL=main.js.map