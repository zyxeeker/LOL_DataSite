webpackJsonp([0], {

    /***/
    100:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Flourish__Block'
            })(['opacity:0.6;color:#594620;position:absolute;left:0;right:0;', ' ', ' ', ''], function(props) {
                return props.animated !== undefined && '\n        width: 0;\n    ';
            }, function(props) {
                return props.top !== undefined && '\n        top: ' + props.top + 'px;\n    ';
            }, function(props) {
                return props.bottom !== undefined && '\n        bottom: ' + props.bottom + 'px;\n    ';
            });

            var FlourishBar = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Flourish__FlourishBar'
            })(['margin:0 3px;border-top:1px solid currentColor;']);

            var FlourishCap = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Flourish__FlourishCap'
            })(['border:1px solid currentColor;width:5px;height:5px;position:absolute;transform:translate(-50%,-50%) rotate(45deg);', ' ', ''], function(props) {
                return props.left && '\n        left: 0;\n    ';
            }, function(props) {
                return props.right && '\n        left: 100%;\n    ';
            });

            var Flourish = function Flourish(props) {
                return _react2.default.createElement(
                    Block,
                    props,
                    _react2.default.createElement(FlourishCap, {
                        left: true
                    }),
                    _react2.default.createElement(FlourishBar, null),
                    _react2.default.createElement(FlourishCap, {
                        right: true
                    })
                );
            };

            exports.default = Flourish;

            /***/
        }),

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
    146:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _helpers = __webpack_require__(11);

            exports.default = [{
                slug: 'resolve',
                id: 8400,
                landing: {
                    glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Resolve/glow-r.png'),
                    icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Resolve/icon-r.png'),
                    vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Resolve/vfx-r.png')
                },
                construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8400'),
                icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/resolve/icon-r-36x36.png'),
                colors: {
                    title: '#a1d586',
                    gradient: {
                        top: '#a1d586',
                        bottom: '#a4d08d'
                    }
                },
                videos: {
                    8437: 'u0554jjq549', // Grasp Of The Undying
                    8436: 'p0554zfq9xw', // Guardian
                    8439: 'z05544td7vs' // Aftershock
                }
            }, {
                slug: 'domination',
                id: 8100,
                construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8100'),
                landing: {
                    glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Domination/glow-d.png'),
                    icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Domination/icon-d.png'),
                    vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Domination/vfx-d.png')
                },
                icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/domination/icon-d-36x36.png'),
                colors: {
                    title: '#d44242',
                    gradient: {
                        top: '#d44242',
                        bottom: '#dc4747'
                    }
                },
                videos: {
                    8112: 'l0554djwyij', // Electrocute
                    8124: 'f0554pw2c1m', // Predator
                    8128: 'e0554n6qww1' // Dark Harvest
                }
            }, {
                slug: 'precision',
                id: 8000,
                construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8000'),
                landing: {
                    glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Precision/glow-p.png'),
                    icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Precision/icon-p.png'),
                    vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Precision/vfx-p.png')
                },
                icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/precision/icon-p-36x36.png'),
                colors: {
                    title: '#c8aa6e',
                    gradient: {
                        top: '#c8aa6e',
                        bottom: '#aea789'
                    }
                },
                videos: {
                    8003: 'k05543p0638', // Press The Attack
                    8008: 'g0554041rg1', // Lethal Tempo
                    8021: 'm0554pgnvnh' // Fleet Footwork
                }
            }, {
                slug: 'sorcery',
                id: 8200,
                construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8200'),
                landing: {
                    glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Sorcery/glow-s.png'),
                    icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Sorcery/icon-s.png'),
                    vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Sorcery/vfx-s.png')
                },
                icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/sorcery/icon-s-36x36.png'),
                colors: {
                    title: '#9faafc',
                    gradient: {
                        top: '#9faafc',
                        bottom: '#6c75f5'
                    }
                },
                videos: {
                    8214: 'v0554cp81n0', // Summon Aerie
                    8229: 'r0554b9ab6c', // Arcane Comet
                    8230: 'o0554lhf709' // Phase Rush
                }
            }, {
                slug: 'inspiration',
                id: 8300,
                construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8300'),
                landing: {
                    glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Inspiration/glow-i.png'),
                    icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Inspiration/icon-i.png'),
                    vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Inspiration/vfx-i.png')
                },
                icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/inspiration/icon-i-36x36.png'),
                colors: {
                    title: '#49aab9',
                    gradient: {
                        top: '#49aab9',
                        bottom: '#48b4be'
                    }
                },
                videos: {
                    8326: 'm0554riliaw', // Unsealed Spellbook (previously Summoner Specialist)
                    8351: 'l0554086v43', // Glacial Augment
                    8359: false
                }
            }];

            /***/
        }),

    /***/
    147:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _helpers = __webpack_require__(11);

            var _reactPortal = __webpack_require__(586);

            var _reactPortal2 = _interopRequireDefault(_reactPortal);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var fadeIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

            var ToolTipBlock = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'ToolTip__ToolTipBlock'
            })(['pointer-events:none;width:284px;box-shadow:0 0 0 1px rgba(1,10,19,0.48);color:#a09b8c;font-size:12px;font-weight:normal;line-height:16px;letter-spacing:0.025em;position:fixed;backface-visibility:hidden;z-index:1000;animation:', ' 0.5s ease forwards;'], fadeIn);

            var ToolTipContent = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'ToolTip__ToolTipContent'
            })(['padding:20px 20px 1px;border:2px solid #5d471d;background:#010a13;position:relative;z-index:10;']);

            var ToolTopBar = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'ToolTip__ToolTopBar'
            })(['height:3px;background:#010a13;border-bottom:1px solid #5d471d;position:absolute;top:100%;left:12px;right:12px;z-index:-1;&::before,&::after{content:\'\';background:url("', '");width:4px;height:12px;position:absolute;bottom:0;}&::before{right:100%;}&::after{left:100%;transform:scale(-1,1);}'], (0, _helpers.assetPath)('/img/runeBuilder/tooltip-sub-border-horizontal.png'));

            var ToolTipCarot = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'ToolTip__ToolTipCarot'
            })(['width:24px;height:15px;background:url("', '");position:absolute;margin:-4px -12px;top:100%;left:50%;transform:translateX(', 'px);'], (0, _helpers.assetPath)('/img/runeBuilder/tooltip-caret.png'), function(props) {
                return props.leftOffset;
            });

            var ToolTipPosition = function(_React$Component) {
                _inherits(ToolTipPosition, _React$Component);

                function ToolTipPosition(props) {
                    _classCallCheck(this, ToolTipPosition);

                    var _this = _possibleConstructorReturn(this, (ToolTipPosition.__proto__ || Object.getPrototypeOf(ToolTipPosition)).call(this, props));

                    _this.state = {
                        top: _this.props.top,
                        left: _this.props.left
                    };
                    return _this;
                }

                _createClass(ToolTipPosition, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        var appNode = document.querySelector('#perks-app');

                        var rect = this.wrap.getBoundingClientRect();
                        var appRect = appNode.getBoundingClientRect();

                        var margin = 25;
                        var top = this.props.top - rect.height - 15;
                        var left = this.props.left - rect.width / 2;
                        var leftOffset = 0;

                        var isLeft = left < appRect.left + margin;
                        var isRight = left + rect.width > appRect.left + appRect.width - margin;
                        // const isAbove = top < appRect.top;

                        if (isLeft) {
                            var newLeft = appRect.left + margin;
                            leftOffset = left - newLeft;
                            left = newLeft;
                        }

                        if (isRight) {
                            var _newLeft = appRect.left + appRect.width - rect.width - margin;
                            leftOffset = left - _newLeft;
                            left = _newLeft;
                        }

                        this.setState({
                            top: top,
                            left: left,
                            leftOffset: leftOffset
                        });
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _this2 = this;

                        var _state = this.state,
                            top = _state.top,
                            left = _state.left,
                            leftOffset = _state.leftOffset;


                        return _react2.default.createElement(
                            ToolTipBlock, {
                                innerRef: function innerRef(node) {
                                    _this2.wrap = node;
                                },
                                style: {
                                    top: top,
                                    left: left
                                }
                            },
                            this.props.children,
                            _react2.default.createElement(
                                ToolTopBar,
                                null,
                                _react2.default.createElement(ToolTipCarot, {
                                    leftOffset: leftOffset
                                })
                            )
                        );
                    }
                }]);

                return ToolTipPosition;
            }(_react2.default.Component);

            var ToolTip = function(_React$Component2) {
                _inherits(ToolTip, _React$Component2);

                function ToolTip(props) {
                    _classCallCheck(this, ToolTip);

                    var _this3 = _possibleConstructorReturn(this, (ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).call(this, props));

                    _this3.state = {
                        isOpen: false,
                        top: 0,
                        left: 0
                    };

                    _this3.open = _this3.open.bind(_this3);
                    _this3.close = _this3.close.bind(_this3);
                    return _this3;
                }

                _createClass(ToolTip, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        window.addEventListener('scroll', this.close);
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        this.close();
                        window.removeEventListener('scroll', this.close);
                    }
                }, {
                    key: 'open',
                    value: function open() {
                        var rect = this._portal.getBoundingClientRect();

                        this.setState({
                            isOpen: true,
                            top: rect.top,
                            left: rect.left + rect.width / 2
                        });
                    }
                }, {
                    key: 'close',
                    value: function close() {
                        this.setState({
                            isOpen: false
                        });
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _this4 = this;

                        var _state2 = this.state,
                            left = _state2.left,
                            top = _state2.top,
                            isOpen = _state2.isOpen;


                        if (!this.props.content) {
                            return this.props.children;
                        }

                        return _react2.default.createElement(
                            'div', {
                                ref: function ref(_ref) {
                                    _this4._portal = _ref;
                                },
                                onMouseEnter: this.open,
                                onMouseLeave: this.close
                            },
                            this.props.children,
                            _react2.default.createElement(
                                _reactPortal2.default, {
                                    isOpened: isOpen
                                },
                                _react2.default.createElement(
                                    ToolTipPosition, {
                                        top: top,
                                        left: left
                                    },
                                    _react2.default.createElement(
                                        ToolTipContent,
                                        null,
                                        this.props.content
                                    )
                                )
                            )
                        );
                    }
                }]);

                return ToolTip;
            }(_react2.default.Component);

            exports.default = ToolTip;

            /***/
        }),

    /***/
    148:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _shave = __webpack_require__(594);

            var _shave2 = _interopRequireDefault(_shave);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var TruncatedText = function(_React$Component) {
                _inherits(TruncatedText, _React$Component);

                function TruncatedText() {
                    _classCallCheck(this, TruncatedText);

                    return _possibleConstructorReturn(this, (TruncatedText.__proto__ || Object.getPrototypeOf(TruncatedText)).apply(this, arguments));
                }

                _createClass(TruncatedText, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        var _props$lines = this.props.lines,
                            lines = _props$lines === undefined ? 2 : _props$lines;


                        var text = this.innerRef || this.ref;

                        if (text) {
                            var lineHeight = parseFloat(window.getComputedStyle(text).lineHeight);
                            var height = lineHeight * lines;

                            (0, _shave2.default)(text, height);
                        }
                    }
                }, {
                    key: 'shouldComponentUpdate',
                    value: function shouldComponentUpdate() {
                        return false;
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _this2 = this;

                        return _react2.default.cloneElement(this.props.children, {
                            // Need to support styled components and regular nodes.
                            innerRef: function innerRef(node) {
                                _this2.innerRef = node;
                            },
                            ref: function ref(node) {
                                _this2.ref = node;
                            }
                        });
                    }
                }]);

                return TruncatedText;
            }(_react2.default.Component);

            exports.default = TruncatedText;

            /***/
        }),

    /***/
    149:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


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

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _PerkButton = __webpack_require__(99);

            var _PerkButton2 = _interopRequireDefault(_PerkButton);

            var _ToolTip = __webpack_require__(147);

            var _ToolTip2 = _interopRequireDefault(_ToolTip);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            var _RuneDescription = __webpack_require__(596);

            var _RuneDescription2 = _interopRequireDefault(_RuneDescription);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) {
                    if (keys.indexOf(i) >= 0) continue;
                    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                    target[i] = obj[i];
                }
                return target;
            }

            var ToolTipContent = function ToolTipContent(_ref) {
                var rune = _ref.rune;
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Description.Title,
                        null,
                        rune.name
                    ),
                    _react2.default.createElement(_RuneDescription2.default, {
                        rune: rune
                    })
                );
            };

            var PerkButtonWithTooltip = function PerkButtonWithTooltip(_ref2) {
                var rune = _ref2.rune,
                    props = _objectWithoutProperties(_ref2, ['rune']);

                return _react2.default.createElement(
                    _ToolTip2.default, {
                        content: rune && _react2.default.createElement(ToolTipContent, {
                            rune: rune
                        })
                    },
                    _react2.default.createElement(_PerkButton2.default, _extends({
                        rune: rune
                    }, props))
                );
            };

            exports.default = PerkButtonWithTooltip;

            /***/
        }),

    /***/
    150:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.RightSide = exports.LeftSide = exports.Block = undefined;

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var slideIn = (0, _styledComponents.keyframes)(['from{opacity:0;transform:translateX(20px);}to{opacity:1;transform:none;}']); // import React from 'react';
            var Block = exports.Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Slot__Block'
            })(['display:flex;margin:0;padding:6px 0;position:relative;animation:', ' 0.3s ease forwards;'], slideIn);

            var LeftSide = exports.LeftSide = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Slot__LeftSide'
            })(['flex:0 0 auto;width:62px;']);

            var RightSide = exports.RightSide = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Slot__RightSide'
            })(['flex-grow:1;display:flex;flex-direction:column;justify-content:center;animation:', ' 0.3s ease forwards;'], slideIn);

            /***/
        }),

    /***/
    227:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _templateObject = _taggedTemplateLiteral(['\n    margin-left: 10px;\n'], ['\n    margin-left: 10px;\n']);

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _reactRedux = __webpack_require__(41);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _helpers = __webpack_require__(98);

            var _Button = __webpack_require__(228);

            var _Button2 = _interopRequireDefault(_Button);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            function _taggedTemplateLiteral(strings, raw) {
                return Object.freeze(Object.defineProperties(strings, {
                    raw: {
                        value: Object.freeze(raw)
                    }
                }));
            }

            var animateIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Share__Block'
            })(['display:flex;align-items:center;justify-content:center;animation:', ' 0.5s ease forwards;', ''], animateIn, function(props) {
                return props.fixed && '\n        padding: 10px 10px 10px 40px;\n        background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.4) 10%);\n        position: absolute;\n        bottom: 0;\n        right: 0;\n    ';
            });

            var ShareTitle = (0, _styledComponents2.default)('h3').withConfig({
                displayName: 'Share__ShareTitle'
            })(['margin:0;color:#b5b4b2;font-family:"Spiegel",sans-serif;font-size:12px;font-weight:normal;']);

            var ShareButton = _Button2.default.extend(_templateObject);

            var ShareLink = ShareButton.withComponent('a');

            var ShareSVG = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'Share__ShareSVG'
            })(['fill:currentColor;path{fill:currentColor;}']);

            var Share = function(_React$Component) {
                _inherits(Share, _React$Component);

                function Share() {
                    _classCallCheck(this, Share);

                    return _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).apply(this, arguments));
                }

                _createClass(Share, [{
                    key: 'render',
                    value: function render() {
                        var _props = this.props,
                            primary = _props.primary,
                            fixed = _props.fixed;


                        var config = (0, _helpers.validateBuild)(this.props);

                        if (!config) {
                            return null;
                        }

                        var keystone = primary.slots[0].runes[primary.slots[0].choice];
                        var link = window.siteUrl + '/' + primary.id + '-' + keystone.runeId + '?build=' + config;

                        var handleFacebookShare = function handleFacebookShare() {
                            (0, _helpers.facebookShare)(link);
                        };

                        var handleTwitterShare = function handleTwitterShare() {
                            (0, _helpers.twitterShare)(link);
                        };

                        var handleVKShare = function handleVKShare() {
                            (0, _helpers.vkShare)(link);
                        };

                        var handleShareLink = function handleShareLink() {
                            (0, _helpers.shareLink)(link);
                        };

                        return _react2.default.createElement(
                            Block, {
                                fixed: fixed
                            },
                            _react2.default.createElement(
                                ShareTitle,
                                null,
                                window.i18n.runebuilder.share.title
                            ),
                            // _react2.default.createElement(
                            //     ShareButton, {
                            //         square: true,
                            //         onClick: handleFacebookShare,
                            //         title: window.i18n.runebuilder.share.facebook
                            //     },
                            //     _react2.default.createElement(
                            //         ShareSVG, {
                            //             width: '16',
                            //             height: '16',
                            //             viewBox: '0 0 1792 1792',
                            //             xmlns: 'http://www.w3.org/2000/svg'
                            //         },
                            //         _react2.default.createElement('path', {
                            //             d: 'M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z'
                            //         })
                            //     ),
                            //     _react2.default.createElement(
                            //         'span', {
                            //             className: 'u-sr-only'
                            //         },
                            //         window.i18n.runebuilder.share.facebook
                            //     )
                            // ),
                            // _react2.default.createElement(
                            //     ShareButton, {
                            //         square: true,
                            //         onClick: handleTwitterShare,
                            //         title: window.i18n.runebuilder.share.twitter
                            //     },
                            //     _react2.default.createElement(
                            //         ShareSVG, {
                            //             width: '16',
                            //             height: '16',
                            //             viewBox: '0 0 1792 1792',
                            //             xmlns: 'http://www.w3.org/2000/svg'
                            //         },
                            //         _react2.default.createElement('path', {
                            //             d: 'M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z'
                            //         })
                            //     ),
                            //     _react2.default.createElement(
                            //         'span', {
                            //             className: 'u-sr-only'
                            //         },
                            //         window.i18n.runebuilder.share.twitter
                            //     )
                            // ),
                            // window.language === 'ru' && _react2.default.createElement(
                            //     ShareButton, {
                            //         square: true,
                            //         onClick: handleVKShare,
                            //         title: window.i18n.runebuilder.share.vk
                            //     },
                            //     _react2.default.createElement(
                            //         ShareSVG, {
                            //             width: '18',
                            //             height: '16',
                            //             viewBox: '0 0 2048 1792',
                            //             xmlns: 'http://www.w3.org/2000/svg'
                            //         },
                            //         _react2.default.createElement('path', {
                            //             d: 'M1981 520q23 64-150 294-24 32-65 85-40 51-55 72t-30.5 49.5-12 42 13 34.5 32.5 43 57 53q4 2 5 4 141 131 191 221 3 5 6.5 12.5t7 26.5-.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66-70.5-57.5l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211-130.5-272q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5 41.5 38.5 34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 16-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-.5 48 3.5 40.5 11.5 39 22.5 24.5q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5 13-3 20-.5 288-2q39-5 64 2.5t31 16.5z'
                            //         })
                            //     ),
                            //     _react2.default.createElement(
                            //         'span', {
                            //             className: 'u-sr-only'
                            //         },
                            //         window.i18n.runebuilder.share.vk
                            //     )
                            // ),
                            _react2.default.createElement(
                                ShareLink, {
                                    square: true,
                                    href: link,
                                    target: '_blank',
                                    title: window.i18n.runebuilder.share.link,
                                    onClick: handleShareLink
                                },
                                _react2.default.createElement(
                                    ShareSVG, {
                                        width: '16',
                                        height: '16',
                                        viewBox: '0 0 1792 1792',
                                        xmlns: 'http://www.w3.org/2000/svg'
                                    },
                                    _react2.default.createElement('path', {
                                        d: 'M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z'
                                    })
                                ),
                                _react2.default.createElement(
                                    'span', {
                                        className: 'u-sr-only'
                                    },
                                    window.i18n.runebuilder.share.link
                                )
                            )
                        );
                    }
                }]);

                return Share;
            }(_react2.default.Component);

            function mapStateToProps(state) {
                return {
                    paths: state.paths,
                    primary: state.primary,
                    secondary: state.secondary
                };
            }

            exports.default = (0, _reactRedux.connect)(mapStateToProps)(Share);

            /***/
        }),

    /***/
    228:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var Button = (0, _styledComponents2.default)('button').withConfig({
                displayName: 'Button__Button'
            })(['display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;cursor:pointer;padding:11px 21px;height:60px;max-width:100%;border:0;color:#c7b184;fill:currentColor;box-shadow:0 0 28px #000;font-family:"Beaufort for LOL",serif;font-size:16px;line-height:1;font-weight:500;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;z-index:1;transition:0.3s;&::before,&::after{content:\'\';display:block;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;}&::before{background:linear-gradient(0deg,#72542a 0%,#bd9e5e 100%);}&::after{margin:1px;background:#16181d;transition:inherit;}&:hover{color:#fff;text-decoration:none;box-shadow:0 0 28px #000,0 0 28px rgba(#000,0.6);&::after{background:#1a1d21;}}', ' & > svg{margin:auto;}'], function(props) {
                return props.square && '\n        padding: 0;\n        width: 34px;\n        height: 34px;\n        min-height: auto;\n    ';
            });

            exports.default = Button;

            /***/
        }),

    /***/
    229:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _helpers = __webpack_require__(98);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var fadeIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

            var PreloadedImage = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'PreloadedImage__PreloadedImage'
            })(['animation:', ' 0.25s ease forwards;'], fadeIn);

            var Img = function(_React$Component) {
                _inherits(Img, _React$Component);

                function Img() {
                    _classCallCheck(this, Img);

                    var _this = _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this));

                    _this.state = {
                        isLoaded: false
                    };
                    return _this;
                }

                _createClass(Img, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        var _this2 = this;

                        (0, _helpers.loadImage)(this.props.src).then(function() {
                            _this2.setState({
                                isLoaded: true
                            });
                        }).catch(function() {
                            //console.log('no image');
                        });
                    }
                }, {
                    key: 'shouldComponentUpdate',
                    value: function shouldComponentUpdate(nextProps) {
                        return this.props.src === nextProps.src;
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        if (!this.state.isLoaded) {
                            return null;
                        }

                        return _react2.default.createElement(PreloadedImage, this.props);
                    }
                }]);

                return Img;
            }(_react2.default.Component);

            exports.default = Img;

            /***/
        }),

    /***/
    23:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.setPrimary = setPrimary;
            exports.setSecondary = setSecondary;
            exports.setPrimaryRune = setPrimaryRune;
            exports.togglePrimaryRuneDrawer = togglePrimaryRuneDrawer;
            exports.setSecondaryRune = setSecondaryRune;
            exports.toggleSecondaryPathDrawer = toggleSecondaryPathDrawer;
            exports.toggleSecondaryRuneDrawer = toggleSecondaryRuneDrawer;
            exports.clearPrimary = clearPrimary;
            exports.clearSecondary = clearSecondary;

            var _store = __webpack_require__(72);

            var _store2 = _interopRequireDefault(_store);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            /**
             * Dispatch event to set the primary path.
             * @param {string} path           slug of the path we're going to set as primary.
             * @param {number} firstRuneIndex If provided the index of the keystone we'll also set. (optional)
             */
            function setPrimary(path, firstRuneIndex) {
                //console.log('setPrimary', path, firstRuneIndex);
                _store2.default.dispatch({
                    type: 'SET_PRIMARY',
                    data: {
                        path: path,
                        firstRuneIndex: firstRuneIndex
                    }
                });
            }

            /**
             * [setSecondary description]
             * @param {string} path slug of the path we're going to set as secondary.
             */
            function setSecondary(path) {
                _store2.default.dispatch({
                    type: 'SET_SECONDARY',
                    data: {
                        path: path
                    }
                });
            }

            /**
             * Set a rune in the primary path.
             * @param {number} slotIndex Index of the slot this rune is in.
             * @param {number} runeIndex Index of the rune to set
             */
            function setPrimaryRune(slotIndex, runeIndex) {
                _store2.default.dispatch({
                    type: 'SET_PRIMARY_RUNE',
                    data: {
                        slotIndex: slotIndex,
                        runeIndex: runeIndex
                    }
                });
            }

            /**
             * Toggle open/closed a rune slot's drawer in the primary path.
             * @param  {number} slotIndex Index of the slot to open.
             */
            function togglePrimaryRuneDrawer(slotIndex) {
                _store2.default.dispatch({
                    type: 'TOGGLE_PRIMARY_RUNE_DRAWER',
                    data: {
                        slotIndex: slotIndex
                    }
                });
            }
            /**
             * Set a rune in the secondary path. We don't need to know the slot in this case.
             * The secondary rune will be set based on which slot it's in.
             * @param {number} runeIndex Index of the rune to set
             */
            function setSecondaryRune(runeIndex) {
                _store2.default.dispatch({
                    type: 'SET_SECONDARY_RUNE',
                    data: {
                        runeIndex: runeIndex
                    }
                });
            }

            /**
             * Toggle the path selector drawer for the secondary path.
             */
            function toggleSecondaryPathDrawer() {
                _store2.default.dispatch({
                    type: 'TOGGLE_SECONDARY_PATH_DRAWER',
                    data: {}
                });
            }

            /**
             * Open the rune drawer for the secondary path and set one of the available slots as active.
             * @param  {number} slotIndex Index of the slot we want the secondary path to be  trakcing.
             */
            function toggleSecondaryRuneDrawer(slotIndex) {
                _store2.default.dispatch({
                    type: 'TOGGLE_SECONDARY_RUNE_DRAWER',
                    data: {
                        slotIndex: slotIndex
                    }
                });
            }

            // Clear the primary path
            function clearPrimary() {
                _store2.default.dispatch({
                    type: 'CLEAR_PRIMARY',
                    data: {}
                });
            }

            // Clear the secondary path
            function clearSecondary() {
                _store2.default.dispatch({
                    type: 'CLEAR_SECONDARY',
                    data: {}
                });
            }

            /***/
        }),

    /***/
    230:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _gsap = __webpack_require__(231);

            var _Flourish = __webpack_require__(100);

            var _Flourish2 = _interopRequireDefault(_Flourish);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Drawer__Block'
            })(['opacity:0;visibility:hidden;position:absolute;top:0;width:100%;height:100%;will-change:transform;']);

            var Slide = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Drawer__Slide'
            })(['width:100%;height:100%;position:relative;z-index:5;']);

            var Row = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Drawer__Row'
            })(['display:flex;justify-content:space-around;flex-wrap:wrap;align-items:center;height:100%;']);

            var RowItem = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Drawer__RowItem'
            })(['flex:0 0 auto;display:flex;justify-content:center;', ''], function(props) {
                return props.columns && '\n        width: ' + 100 / props.columns + '%;\n    ';
            });

            var BlurHolder = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Drawer__BlurHolder'
            })(['width:100%;height:100%;position:absolute;z-index:1;pointer-events:none;filter:blur(10px);']);

            var Blur = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Drawer__Blur'
            })(['overflow:hidden;height:100%;position:relative;']);

            var BlurInner = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Drawer__BlurInner'
            })(['width:100%;height:100%;background:radial-gradient(ellipse closest-side at center,#ffdc7c 0%,rgba(255,220,124,0) 100%);position:absolute;left:-100%;']);

            var Drawer = function(_React$Component) {
                _inherits(Drawer, _React$Component);

                function Drawer() {
                    _classCallCheck(this, Drawer);

                    return _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
                }

                _createClass(Drawer, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        this.timing = 0.12;

                        this.animation = new _gsap.TimelineLite({
                            paused: !this.props.isOpen
                        }).set(this.blurHolder, {
                            zIndex: 10
                        }).set(this.row.childNodes, {
                            opacity: 0,
                            x: -20
                        }).to(this.block, this.timing, {
                            opacity: 1,
                            visibility: 'visible',
                            ease: _gsap.Power0.easeNone
                        }, 0.05).to([this.flourishTop, this.flourishBottom], this.timing / 2, {
                            color: '#c8aa6e',
                            ease: _gsap.Power0.easeNone
                        }).to([this.flourishTop, this.flourishBottom], this.timing / 2, {
                            color: '#594620',
                            ease: _gsap.Power0.easeNone
                        }).to(this.blur, this.timing, {
                            x: '200%',
                            ease: _gsap.Power0.easeNone
                        }, '-=' + this.timing).to([this.flourishTop, this.flourishBottom], this.timing, {
                            width: '100%',
                            ease: _gsap.Power0.easeNone
                        }, '-=' + this.timing).to([this.flourishTop, this.flourishBottom], this.timing, {
                            width: '100%',
                            ease: _gsap.Power0.easeNone
                        }, '-=' + this.timing).staggerTo(this.row.childNodes, 0.125, {
                            opacity: 1,
                            x: 0,
                            ease: _gsap.Power0.easeNone
                        }, 0.2 / this.row.childNodes.length, '-=' + this.timing).set(this.blurHolder, {
                            zIndex: 0
                        });
                    }
                }, {
                    key: 'componentDidUpdate',
                    value: function componentDidUpdate(prevProps) {
                        var _this2 = this;

                        // Animate open the drawer if it wasn't open but is now.
                        if (this.props.isOpen && !prevProps.isOpen) {
                            window.requestAnimationFrame(function() {
                                _this2.animation.play();
                            });
                        }

                        // Animate close the drawer if it was open but isn't now.
                        if (!this.props.isOpen && prevProps.isOpen) {
                            window.requestAnimationFrame(function() {
                                _this2.animation.reverse();
                            });
                        }
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        this.animation.seek(0);
                        this.animation.kill();
                        this.animation = null;
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _this3 = this;

                        var _props = this.props,
                            columns = _props.columns,
                            keystone = _props.keystone;


                        return _react2.default.createElement(
                            Block, {
                                innerRef: function innerRef(node) {
                                    _this3.block = node;
                                }
                            },
                            _react2.default.createElement(
                                BlurHolder, {
                                    innerRef: function innerRef(node) {
                                        _this3.blurHolder = node;
                                    }
                                },
                                _react2.default.createElement(
                                    Blur,
                                    null,
                                    _react2.default.createElement(BlurInner, {
                                        innerRef: function innerRef(node) {
                                            _this3.blur = node;
                                        }
                                    })
                                )
                            ), !keystone && _react2.default.createElement(_Flourish2.default, {
                                innerRef: function innerRef(node) {
                                    _this3.flourishTop = node;
                                },
                                top: 0
                            }), !keystone && _react2.default.createElement(_Flourish2.default, {
                                innerRef: function innerRef(node) {
                                    _this3.flourishBottom = node;
                                },
                                bottom: 0
                            }),
                            _react2.default.createElement(
                                Slide, {
                                    innerRef: function innerRef(node) {
                                        _this3.slide = node;
                                    }
                                },
                                _react2.default.createElement(
                                    Row, {
                                        innerRef: function innerRef(node) {
                                            _this3.row = node;
                                        }
                                    },
                                    _react2.default.Children.map(this.props.children, function(child) {
                                        return _react2.default.createElement(
                                            RowItem, {
                                                columns: columns
                                            },
                                            child
                                        );
                                    })
                                )
                            )
                        );
                    }
                }]);

                return Drawer;
            }(_react2.default.Component);

            exports.default = Drawer;

            /***/
        }),

    /***/
    232:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _Slot = __webpack_require__(65);

            var Slot = _interopRequireWildcard(_Slot);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) {
                    if (keys.indexOf(i) >= 0) continue;
                    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                    target[i] = obj[i];
                }
                return target;
            }

            var Button = (0, _styledComponents2.default)(Slot.Button).withConfig({
                displayName: 'PathButton__Button'
            })(['background:none;border:0;box-shadow:none;position:relative;']);

            var Icon = (0, _styledComponents2.default)(Slot.Icon).withConfig({
                displayName: 'PathButton__Icon'
            })(['width:36px;height:36px;']);

            var Circles = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'PathButton__Circles'
            })(['margin:', 'px;position:absolute;top:50%;left:50%;width:64px;height:64px;'], -64 / 2);

            var Circle1 = (0, _styledComponents2.default)('circle').withConfig({
                displayName: 'PathButton__Circle1'
            })(['cx:50%;cy:50%;r:43%;fill:none;stroke-width:2;transform:translateY(6%);transform-origin:50% 50%;']);

            var Circle2 = (0, _styledComponents2.default)(Circle1).withConfig({
                displayName: 'PathButton__Circle2'
            })(['transform:rotate(120deg) translateY(6%);']);

            var Circle3 = (0, _styledComponents2.default)(Circle1).withConfig({
                displayName: 'PathButton__Circle3'
            })(['transform:rotate(240deg) translateY(6%);']);

            var Cup = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'PathButton__Cup'
            })(['overflow:visible;width:86px;height:86px;position:absolute;left:-19px;bottom:-19px;']);

            var PerkButton = function PerkButton(_ref) {
                var path = _ref.path,
                    rings = _ref.rings,
                    props = _objectWithoutProperties(_ref, ['path', 'rings']);

                var color = path.colors !== undefined ? path.colors.gradient.top : '#cdbe91';
                var circlesId = 'circle-gradient-' + (path.slug || 'default');
                var cupId = 'cup-gradient-' + (path.slug || 'default');
                //console.log(path.slug);
                return _react2.default.createElement(
                    Button,
                    props,
                    rings !== false && _react2.default.createElement(
                        Circles,
                        null,
                        _react2.default.createElement(
                            'linearGradient', {
                                id: circlesId,
                                x1: '1',
                                y1: '0.6',
                                x2: '0',
                                y2: '0'
                            },
                            _react2.default.createElement('stop', {
                                stopOpacity: '1',
                                offset: '0%',
                                stopColor: color
                            }),
                            _react2.default.createElement('stop', {
                                stopOpacity: '0',
                                offset: '70%',
                                stopColor: color
                            })
                        ),
                        _react2.default.createElement(Circle1, {
                            cx: '50%',
                            cy: '50%',
                            r: '43%',
                            fill: 'none',
                            strokeWidth: '2',
                            stroke: 'url(#' + circlesId + ')'
                        }),
                        _react2.default.createElement(Circle2, {
                            cx: '50%',
                            cy: '50%',
                            r: '43%',
                            fill: 'none',
                            strokeWidth: '2',
                            stroke: 'url(#' + circlesId + ')'
                        }),
                        _react2.default.createElement(Circle3, {
                            cx: '50%',
                            cy: '50%',
                            r: '43%',
                            fill: 'none',
                            strokeWidth: '2',
                            stroke: 'url(#' + circlesId + ')'
                        })
                    ),
                    rings !== false && _react2.default.createElement(
                        Cup,
                        null,
                        _react2.default.createElement(
                            'linearGradient', {
                                id: cupId,
                                x1: '0',
                                y1: '0',
                                x2: '0',
                                y2: '1'
                            },
                            _react2.default.createElement('stop', {
                                stopOpacity: '0',
                                offset: '80%',
                                stopColor: color
                            }),
                            _react2.default.createElement('stop', {
                                stopOpacity: '1',
                                offset: '100%',
                                stopColor: color
                            })
                        ),
                        _react2.default.createElement('circle', {
                            cx: '42',
                            cy: '42',
                            r: '42',
                            fill: 'none',
                            strokeWidth: '2',
                            stroke: 'url(#' + cupId + ')'
                        })
                    ),
                    path.slug && _react2.default.createElement(Icon, {
                        src: path.icon,
                        alt: ''
                    })
                );
            };

            exports.default = PerkButton;

            /***/
        }),

    /***/
    233:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var pulse = (0, _styledComponents.keyframes)(['from{transform:translateY(-50%);}']);

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Progress__Block'
            })(['height:', ';position:absolute;top:89px;left:50%;'], function(props) {
                return 100 * props.total - 39 + 'px';
            });

            var Border = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Progress__Border'
            })(['margin-left:-7px;width:14px;height:100%;padding:2px;border:2px solid rgba(200,170,110,0.2);']);

            var BarOuter = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Progress__BarOuter'
            })(['overflow:hidden;width:6px;height:100%;background:#1c1f21;']);

            var BarHeight = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Progress__BarHeight'
            })(['overflow:hidden;height:100%;transform:translateY(', ');transition:transform 0.3s ease;'], function(props) {
                return -100 * (props.total - props.current) + 'px';
            });

            var BarInner = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Progress__BarInner'
            })(['width:100%;height:200%;background:#fff;']);

            var BarHighlight = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Progress__BarHighlight'
            })(['width:100%;height:', ';box-shadow:inset 0 0 3px #000;', ''], function(props) {
                return 100 * props.total * 2 + 'px';
            }, function(props) {
                return props.isActive && '\n        background: linear-gradient(0deg, ' + props.highlight + ' 0%, transparent 50%, ' + props.highlight + ' 100%);\n        background-size: auto 100px;\n        animation: ' + pulse + ' ' + props.total * 0.5 + 's linear forwards infinite;\n        will-change: transform;\n    ';
            });

            var Progress = function Progress(props) {
                var path = props.path,
                    total = props.total,
                    current = props.current,
                    isActive = props.isActive;


                return _react2.default.createElement(
                    Block, {
                        total: total
                    },
                    _react2.default.createElement(
                        Border,
                        null,
                        _react2.default.createElement(
                            BarOuter,
                            null,
                            path.hasPath !== false && _react2.default.createElement(
                                BarHeight, {
                                    total: total,
                                    current: current
                                },
                                _react2.default.createElement(
                                    BarInner, {
                                        total: total
                                    },
                                    _react2.default.createElement(BarHighlight, {
                                        total: total,
                                        highlight: path.colors.gradient.bottom,
                                        isActive: isActive
                                    })
                                )
                            )
                        )
                    )
                );
            };

            exports.default = Progress;

            /***/
        }),

    /***/
    234:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


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

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) {
                    if (keys.indexOf(i) >= 0) continue;
                    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                    target[i] = obj[i];
                }
                return target;
            }

            var Button = (0, _styledComponents2.default)('button').withConfig({
                displayName: 'PathButton__Button'
            })(['display:flex;align-items:center;justify-content:center;width:48px;height:48px;padding:0;border:0;background:#1e2328;border-radius:50%;text-align:center;position:relative;', ''], function(props) {
                return props.small && '\n        width: 40px;\n        height: 40px;\n    ';
            });

            var Icon = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'PathButton__Icon'
            })(['display:block;margin:auto;width:42px;height:42px;border-radius:50%;', ''], function(props) {
                return props.small && '\n        width: 36px;\n        height: 36px;\n    ';
            });

            var InnerIcon = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'PathButton__InnerIcon'
            })(['margin:-24px;width:48px;height:48px;position:absolute;top:50%;left:50%;', ''], function(props) {
                return props.small && '\n        margin: -20px;\n        width: 40px;\n        height: 40px;\n    ';
            });

            var PathButton = function PathButton(props) {
                var icon = props.icon,
                    path = props.path,
                    small = props.small,
                    restProps = _objectWithoutProperties(props, ['icon', 'path', 'small']);

                return _react2.default.createElement(
                    Button,
                    _extends({}, restProps, {
                        small: small
                    }),
                    icon && _react2.default.createElement(Icon, {
                        src: icon,
                        alt: '',
                        small: small
                    }),
                    _react2.default.createElement(
                        InnerIcon, {
                            viewBox: '0 0 47 47',
                            small: small
                        },
                        _react2.default.createElement('circle', {
                            cx: '23.5',
                            cy: '23.5',
                            r: '22.5',
                            strokeWidth: '2',
                            fill: 'none',
                            stroke: icon ? 'url(#gradient-' + path.slug + ')' : 'url(#gradient-yuma-dallasLight)'
                        })
                    )
                );
            };

            exports.default = PathButton;

            /***/
        }),

    /***/
    36:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.P = exports.Title = exports.Block = undefined;

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var appear = (0, _styledComponents.keyframes)(['to{opacity:1;transform:none;}']);

            var Block = exports.Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Description__Block'
            })(['padding-top:22px;opacity:0;transform:translateX(20px);animation:', ' 0.2s 0.25s linear forwards;'], appear);

            var Title = exports.Title = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Description__Title'
            })(['margin-bottom:3px;color:', ';font-family:"BeaufortforLOL-Medium",sans-serif;font-size:14px;line-height:18px;letter-spacing:0.075em;text-transform:uppercase;', ' ', ''], function(props) {
                return props.color || '#f0e6d2';
            }, function(props) {
                return props.flush && '\n        margin: 0;\n    ';
            }, function(props) {
                return props.small && '\n        font-size: 12px;\n        line-height: 16px;\n    ';
            });

            var P = exports.P = (0, _styledComponents2.default)('p').withConfig({
                displayName: 'Description__P'
            })(['color:#a09b8c;font-size:12px;line-height:16px;letter-spacing:0.025em;margin:0 0 20px;', ''], function(props) {
                return props.flush && '\n        margin: 0;\n    ';
            });

            /***/
        }),

    /***/
    461:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";
            /* WEBPACK VAR INJECTION */
            (function(process) {

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

                var _react = __webpack_require__(1);

                var _react2 = _interopRequireDefault(_react);

                var _reactDom = __webpack_require__(1);

                var _axios = __webpack_require__(195);

                var _axios2 = _interopRequireDefault(_axios);

                var _reactRedux = __webpack_require__(41);

                var _findIndex = __webpack_require__(61);

                var _findIndex2 = _interopRequireDefault(_findIndex);

                var _helpers = __webpack_require__(11);

                var _store = __webpack_require__(72);

                var _store2 = _interopRequireDefault(_store);

                var _paths = __webpack_require__(146);

                var _paths2 = _interopRequireDefault(_paths);

                var _App = __webpack_require__(578);

                var _App2 = _interopRequireDefault(_App);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                // Enable devtools. You can reduce the size of your app by only including this
                // module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
                // check.
                if (process.env.NODE_ENV !== 'production') {
                    /* eslint-disable */
                    __webpack_require__(236);
                    /* eslint-enable */
                }

                var mountNode = document.querySelector('#app');

                if (mountNode) {
                    _axios2.default.get((0, _helpers.assetPath)('/data/' + window.language + '/runes.json')).then(function(response) {
                        var data = response.data.styles.map(function(path, pathIndex) {
                            return _extends({}, _paths2.default[pathIndex], path);
                        });

                        data = [data[2], data[1], data[3], data[0], data[4]];

                        if (process.env.NODE_ENV !== 'production') {
                            /**
                             * This is a safety. This will alert you that a rune in the data doesn't have a
                             * share page set up. These unfortunately have to be manual.
                             */
                            var supportedShareRoutes = ['8000-8003', '8000-8008', '8000-8021', '8000-8101', '8100-8112', '8100-8124', '8100-8128', '8200-8214', '8200-8229', '8200-8230', '8300-8326', '8300-8351', '8300-8352', '8300-8353', '8300-8356', '8300-8359', '8400-8436', '8400-8437', '8400-8439'];

                            data.forEach(function(path) {
                                path.slots[0].runes.forEach(function(rune) {
                                    var testRoute = path.id + '-' + rune.runeId;
                                    var test = (0, _findIndex2.default)(supportedShareRoutes, function(route) {
                                        return testRoute === route;
                                    });
                                    if (test === -1) {
                                        //console.log(testRoute, path.name, rune.name);
                                    }
                                });
                            });
                        }

                        (0, _reactDom.render)(_react2.default.createElement(
                            _reactRedux.Provider, {
                                store: _store2.default
                            },
                            _react2.default.createElement(_App2.default, {
                                data: data
                            })
                        ), mountNode);
                    });
                }
                /* WEBPACK VAR INJECTION */
            }.call(exports, __webpack_require__(12)))

            /***/
        }),

    /***/
    573:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _redux = __webpack_require__(139);

            var _paths = __webpack_require__(574);

            var _paths2 = _interopRequireDefault(_paths);

            var _primary = __webpack_require__(575);

            var _primary2 = _interopRequireDefault(_primary);

            var _secondary = __webpack_require__(576);

            var _secondary2 = _interopRequireDefault(_secondary);

            var _longDescriptions = __webpack_require__(577);

            var _longDescriptions2 = _interopRequireDefault(_longDescriptions);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            exports.default = (0, _redux.combineReducers)({
                paths: _paths2.default,
                primary: _primary2.default,
                secondary: _secondary2.default,
                longDescriptions: _longDescriptions2.default
            });

            /***/
        }),

    /***/
    574:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = pathsReducer;
            var initialState = [];

            function pathsReducer() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
                var _ref = arguments[1];
                var type = _ref.type,
                    data = _ref.data;

                switch (type) {
                    case 'ADD_PATHS':
                        return data.paths;
                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/
    575:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


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

            exports.default = primaryReducer;

            var _findIndex = __webpack_require__(61);

            var _findIndex2 = _interopRequireDefault(_findIndex);

            var _store = __webpack_require__(72);

            var _store2 = _interopRequireDefault(_store);

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

            var initialState = false;

            function primaryReducer() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
                var _ref = arguments[1];
                var type = _ref.type,
                    data = _ref.data;

                switch (type) {
                    case 'SET_PRIMARY':
                        {
                            var _store$getState = _store2.default.getState(),
                                paths = _store$getState.paths;

                            var path = data.path;


                            var primary = paths.find(function(p) {
                                return p.slug === path;
                            });

                            var firstRuneIndex = typeof data.firstRuneIndex === 'number' ? data.firstRuneIndex : -1;
                            var openIndex = firstRuneIndex === -1 ? 0 : 1;

                            // Analytics Event
                            (0, _helpers.pushToDataLayer)({
                                eventAction: 'RuneBuilder-PrimaryPath',
                                eventLabel: primary.slug
                            });

                            return _extends({}, primary, {
                                slots: primary.slots.map(function(runes, runesIndex) {
                                    return {
                                        runes: runes.runes,
                                        choice: runesIndex === 0 ? firstRuneIndex : -1,
                                        isOpen: runesIndex === openIndex
                                    };
                                })
                            });
                        }
                    case 'ADD_PATHS':
                        {
                            var _paths = data.paths,
                                config = data.config;


                            if (config === undefined || config.length !== 8) {
                                return state;
                            }

                            var _path = _paths[config[0]];

                            var _primary = _paths.find(function(p) {
                                return p.slug === _path.slug;
                            });

                            return _extends({}, _primary, {
                                slots: _primary.slots.map(function(runes, runesIndex) {
                                    return {
                                        runes: runes.runes,
                                        choice: config[runesIndex + 1],
                                        isOpen: false
                                    };
                                })
                            });
                        }
                    case 'SET_PRIMARY_RUNE':
                        {
                            var slotIndex = data.slotIndex,
                                runeIndex = data.runeIndex;


                            var slot = _extends({}, state.slots[slotIndex], {
                                choice: runeIndex,
                                isOpen: false
                            });

                            var newState = _extends({}, state, {
                                slots: [].concat(_toConsumableArray(state.slots.slice(0, slotIndex)), [slot], _toConsumableArray(state.slots.slice(slotIndex + 1)))
                            });

                            var nextSlotIndex = (0, _findIndex2.default)(newState.slots, function(s) {
                                return s.choice === -1;
                            });

                            if (nextSlotIndex !== -1) {
                                newState = _extends({}, newState, {
                                    slots: [].concat(_toConsumableArray(newState.slots.slice(0, nextSlotIndex)), [_extends({}, newState.slots[nextSlotIndex], {
                                        isOpen: true
                                    })], _toConsumableArray(newState.slots.slice(nextSlotIndex + 1)))
                                });
                            }

                            return newState;
                        }
                    case 'TOGGLE_PRIMARY_RUNE_DRAWER':
                        {
                            var _slotIndex = data.slotIndex,
                                isOpen = data.isOpen;


                            var _slot = _extends({}, state.slots[_slotIndex], {
                                isOpen: typeof isOpen === 'boolean' ? isOpen : !state.slots[_slotIndex].isOpen
                            });

                            return _extends({}, state, {
                                slots: [].concat(_toConsumableArray(state.slots.slice(0, _slotIndex)), [_slot], _toConsumableArray(state.slots.slice(_slotIndex + 1)))
                            });
                        }
                    case 'CLEAR_PRIMARY':
                        return false;
                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/
    576:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


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

            exports.default = secondaryReducer;

            var _findIndex = __webpack_require__(61);

            var _findIndex2 = _interopRequireDefault(_findIndex);

            var _store = __webpack_require__(72);

            var _store2 = _interopRequireDefault(_store);

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

            var initialState = false;

            function secondaryReducer() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
                var _ref = arguments[1];
                var type = _ref.type,
                    data = _ref.data;

                switch (type) {
                    case 'SET_PRIMARY':
                        return {
                            isOpen: false,
                            hasPath: false,
                            slots: false
                        };
                    case 'SET_SECONDARY':
                        {
                            var _store$getState = _store2.default.getState(),
                                paths = _store$getState.paths;

                            var secondary = paths.find(function(path) {
                                return path.slug === data.path;
                            });

                            // Analytics Event
                            (0, _helpers.pushToDataLayer)({
                                eventAction: 'RuneBuilder-SecondaryPath',
                                eventLabel: secondary.slug
                            });

                            return _extends({}, secondary, {
                                isOpen: false,
                                hasPath: true,
                                slots: {
                                    runes: [].concat(_toConsumableArray(secondary.slots[1].runes), _toConsumableArray(secondary.slots[2].runes), _toConsumableArray(secondary.slots[3].runes)),
                                    slotIndex: 0,
                                    choices: [-1, -1],
                                    isOpen: true
                                }
                            });
                        }
                    case 'ADD_PATHS':
                        {
                            var _paths = data.paths,
                                config = data.config;


                            if (config === undefined || config.length !== 8) {
                                return state;
                            }

                            // We need to remove the primary path
                            var remainingPaths = [].concat(_toConsumableArray(_paths.slice(0, config[0])), _toConsumableArray(_paths.slice(config[0] + 1)));

                            var _secondary = remainingPaths[config[5]];

                            return _extends({}, _secondary, {
                                isOpen: false,
                                hasPath: true,
                                slots: {
                                    runes: [].concat(_toConsumableArray(_secondary.slots[1].runes), _toConsumableArray(_secondary.slots[2].runes), _toConsumableArray(_secondary.slots[3].runes)),
                                    slotIndex: 0,
                                    choices: [config[6], config[7]],
                                    isOpen: false
                                }
                            });
                        }
                    case 'TOGGLE_SECONDARY_PATH_DRAWER':
                        return _extends({}, state, {
                            isOpen: !state.isOpen
                        });
                    case 'SET_SECONDARY_RUNE':
                        {
                            var slotIndex = state.slots.slotIndex;


                            var choices = state.slots.choices;
                            var runeGroup = Math.floor(data.runeIndex / 3);
                            var groupMatch = (0, _findIndex2.default)(choices, function(choice) {
                                return Math.floor(choice / 3) === runeGroup;
                            });

                            // we need to check to see if the the rune group matches a group
                            // of another choice slot.
                            var choiceIndex = groupMatch === -1 ? slotIndex : groupMatch;
                            choices[choiceIndex] = data.runeIndex;

                            var nextSlot = -1;

                            if (choices[0] === -1) {
                                nextSlot = 0;
                            } else if (choices[1] === -1) {
                                nextSlot = 1;
                            }

                            return _extends({}, state, {
                                slots: _extends({}, state.slots, {
                                    choices: choices,
                                    slotIndex: nextSlot,
                                    isOpen: nextSlot !== -1
                                })
                            });
                        }
                    case 'TOGGLE_SECONDARY_RUNE_DRAWER':
                        {
                            var isOpen = state.slots.isOpen;


                            return _extends({}, state, {
                                slots: _extends({}, state.slots, {
                                    slotIndex: data.slotIndex,
                                    isOpen: !isOpen
                                })
                            });
                        }
                    case 'CLEAR_PRIMARY':
                    case 'CLEAR_SECONDARY':
                        return false;
                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/
    577:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


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

            exports.default = descriptionReducer;
            var initialState = {
                shift: false,
                global: false
            };

            function descriptionReducer() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
                var _ref = arguments[1];
                var type = _ref.type,
                    data = _ref.data;

                switch (type) {
                    case 'SET_SHIFT_DESCRIPTIONS':
                        return _extends({}, state, {
                            shift: data.shift
                        });
                    case 'TOGGLE_GLOBAL_DESCTIPTIONS':
                        return _extends({}, state, {
                            global: !state.global
                        });
                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/
    578:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _reactRedux = __webpack_require__(41);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _helpers = __webpack_require__(11);

            var _helpers2 = __webpack_require__(98);

            var _Desktop = __webpack_require__(583);

            var _Desktop2 = _interopRequireDefault(_Desktop);

            var _Mobile = __webpack_require__(603);

            var _Mobile2 = _interopRequireDefault(_Mobile);

            var _SVGGradients = __webpack_require__(609);

            var _SVGGradients2 = _interopRequireDefault(_SVGGradients);

            var _ViewportSwitch = __webpack_require__(610);

            var _ViewportSwitch2 = _interopRequireDefault(_ViewportSwitch);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'App__Block'
            })(['*{outline:0;}h1,h2,h3,h4,h5,h6{font-weight:bold;}a{text-decoration:none;}']);

            var App = function(_React$Component) {
                _inherits(App, _React$Component);

                function App(props) {
                    _classCallCheck(this, App);

                    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

                    var data = _this.props.data;

                    // Check if there's a set runeBuilderConfig and

                    var config = window.runeBuilderConfig && window.runeBuilderConfig.length === 8 && window.runeBuilderConfig.split('').map(Number);

                    props.addPaths(data, config);
                    _this.buildCompleted = false;
                    return _this;
                }

                _createClass(App, [{
                    key: 'componentWillReceiveProps',
                    value: function componentWillReceiveProps(nextProps) {
                        var validatedBuild = (0, _helpers2.validateBuild)(nextProps);

                        if (!!validatedBuild && !this.buildCompleted) {
                            var event = {
                                eventAction: 'RuneBuilder-Completed',
                                eventLabel: validatedBuild
                            };

                            (0, _helpers.pushToDataLayer)(event);

                            this.buildCompleted = true;
                        } else {
                            this.buildCompleted = false;
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var paths = this.props.paths;


                        return _react2.default.createElement(
                            Block,
                            null,
                            _react2.default.createElement(_ViewportSwitch2.default, {
                                queryString: '(min-width: 1061px)',
                                PassComponent: _react2.default.createElement(_Desktop2.default, {
                                    paths: paths
                                }),
                                FailComponent: _react2.default.createElement(_Mobile2.default, {
                                    paths: paths
                                })
                            }),
                            _react2.default.createElement(_SVGGradients2.default, {
                                paths: paths
                            })
                        );
                    }
                }]);

                return App;
            }(_react2.default.Component);

            function mapStateToProps(state) {
                return {
                    paths: state.paths,
                    primary: state.primary,
                    secondary: state.secondary
                };
            }

            function mapDispatchToProps(dispatch) {
                var _addPaths = function _addPaths(paths, config) {
                    return {
                        type: 'ADD_PATHS',
                        data: {
                            paths: paths,
                            config: config
                        }
                    };
                };

                return {
                    addPaths: function addPaths(paths, config) {
                        return dispatch(_addPaths(paths, config));
                    }
                };
            }

            exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

            /***/
        }),

    /***/
    583:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _reactRedux = __webpack_require__(41);

            var _PathList = __webpack_require__(584);

            var _PathList2 = _interopRequireDefault(_PathList);

            var _RuneBuilder = __webpack_require__(587);

            var _RuneBuilder2 = _interopRequireDefault(_RuneBuilder);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var AppOuter = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Desktop__AppOuter'
            })(['margin:auto;padding:2px;width:100%;max-width:1061px;height:645px;background:transparent;position:relative;']);

            var AppInner = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Desktop__AppInner'
            })(['width:100%;height:100%;background:#000;font-size:14px;line-height:1.5;']);

            var Desktop = function Desktop(props) {
                var paths = props.paths,
                    primary = props.primary,
                    secondary = props.secondary;


                return _react2.default.createElement(
                    AppOuter,
                    null,
                    _react2.default.createElement(
                        AppInner, {
                            id: 'perks-app'
                        }, !primary ? _react2.default.createElement(_PathList2.default, {
                            paths: paths
                        }) : _react2.default.createElement(_RuneBuilder2.default, {
                            key: primary.id,
                            primary: primary,
                            secondary: secondary
                        })
                    )
                );
            };

            var mapStateToProps = function mapStateToProps(state) {
                return {
                    primary: state.primary,
                    secondary: state.secondary
                };
            };

            exports.default = (0, _reactRedux.connect)(mapStateToProps)(Desktop);

            /***/
        }),

    /***/
    584:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Paths = undefined;

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _Path = __webpack_require__(585);

            var _Path2 = _interopRequireDefault(_Path);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var glow = (0, _styledComponents.keyframes)(['0%{filter:brightness(100%);}50%{filter:brightness(170%);}100%{filter:brightness(100%);}']);

            var Paths = exports.Paths = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'PathList__Paths'
            })(['display:flex;align-items:stretch;height:100%;background:#010a13;& > *{animation:', ' 2s ease infinite;&:nth-child(2){animation-delay:0.4s;}&:nth-child(3){animation-delay:0.8s;}&:nth-child(4){animation-delay:1.2s;}&:nth-child(5){animation-delay:1.6s;}}&:hover > *{animation:none;}'], glow);

            var PathList = function PathList(props) {
                var pathsData = Object.keys(props.paths).map(function(key) {
                    return props.paths[key];
                });

                return _react2.default.createElement(
                    Paths,
                    null,
                    pathsData.map(function(path) {
                        return _react2.default.createElement(_Path2.default, {
                            key: path.name,
                            path: path
                        });
                    })
                );
            };

            exports.default = PathList;

            /***/
        }),

    /***/
    585:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _helpers = __webpack_require__(11);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _ToolTip = __webpack_require__(147);

            var _ToolTip2 = _interopRequireDefault(_ToolTip);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Path__Block'
            })(['flex:0 0 auto;width:20%;height:100%;text-align:center;position:relative;']);

            var Perk = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Path__Perk'
            })(['display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;height:100%;box-shadow:0 0 0 1px rgba(1,10,19,0.85);position:relative;']);

            var PerkBackground = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'Path__PerkBackground'
            })(['height:639px;width:211px;position:absolute;top:0;left:0;transition:0.1s ease-out;', ':hover &{filter:brightness(150%);}'], Perk);

            var PerkButtonOverlay = (0, _styledComponents2.default)('button').withConfig({
                displayName: 'Path__PerkButtonOverlay'
            })(['border:0;background:none;padding:0;position:absolute;top:0;left:0;width:100%;height:100%;']);

            var PathIconWrap = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Path__PathIconWrap'
            })(['position:relative;width:100%;height:246px;margin-top:40px;margin-bottom:46px;']);

            var PathIcon = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'Path__PathIcon'
            })(['display:block;background:url("', '") center no-repeat;margin:0;opacity:0.7;transition:filter 0.15s ease-out;', ':hover &{opacity:1;filter:grayscale(0%);}'], (0, _helpers.assetPath)('/img/runeBuilder/assets/ring.png'), Perk);

            var PathVFX = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'Path__PathVFX'
            })(['margin:0;position:absolute;top:0;left:0;opacity:0;transition:opacity 0.25s ease-out;', ':hover &{opacity:1;}'], Perk);

            var PathBody = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Path__PathBody'
            })(['color:#ddd;font-size:10px;letter-spacing:0.075em;line-height:14px;opacity:0.2;transition:opacity 0.15s ease-out;', ':hover &{opacity:1;}'], Perk);

            var PathHeader = (0, _styledComponents2.default)('header').withConfig({
                displayName: 'Path__PathHeader'
            })(['width:100%;text-transform:uppercase;position:absolute;top:199px;left:0;']);

            var PathTitle = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Path__PathTitle'
            })(['color:#727271;font-family:"BeaufortforLOL-Medium",sans-serif;font-size:16px;letter-spacing:0.15em;line-height:19.2px;margin-bottom:4px;']);

            var PathFooter = (0, _styledComponents2.default)(PathBody).withConfig({
                displayName: 'Path__PathFooter'
            })(['margin:46px 0 0;padding:0 22px;width:100%;font-size:11px;font-weight:400;letter-spacing:0.05em;']);

            var KeyStones = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Path__KeyStones'
            })(['display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;position:relative;z-index:10;']);

            var KeyStone = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Path__KeyStone'
            })(['flex:auto 0 0;width:50%;text-align:center;position:relative;z-index:1;&:nth-child(3){width:100%;}']);

            var KeyStoneImg = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'Path__KeyStoneImg'
            })(['border-radius:32px;width:62px;height:62px;cursor:pointer;']);

            var ToolTipContent = function ToolTipContent(_ref) {
                var rune = _ref.rune;
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Description.Title,
                        null,
                        rune.name
                    ),
                    _react2.default.createElement(Description.P, {
                        dangerouslySetInnerHTML: {
                            __html: rune.longDescription
                        }
                    })
                );
            };

            var Path = function Path(_ref2) {
                var path = _ref2.path;

                var setPrimary = function setPrimary() {
                    pathsAPI.setPrimary(path.slug);
                };

                return _react2.default.createElement(
                    Block, {
                        key: path.name,
                        onClick: setPrimary
                    },
                    _react2.default.createElement(
                        Perk,
                        null,
                        _react2.default.createElement(PerkBackground, {
                            src: (0, _helpers.assetPath)('/img/runeBuilder/assets/lines.png'),
                            alt: ''
                        }),
                        _react2.default.createElement(PerkBackground, {
                            src: path.landing.glow,
                            alt: ''
                        }),
                        _react2.default.createElement(
                            PathIconWrap,
                            null,
                            _react2.default.createElement(PathIcon, {
                                src: path.landing.icon,
                                alt: ''
                            }),
                            _react2.default.createElement(PathVFX, {
                                src: path.landing.vfx,
                                alt: ''
                            }),
                            _react2.default.createElement(
                                PathHeader,
                                null,
                                _react2.default.createElement(
                                    PathTitle,
                                    null,
                                    path.name
                                ),
                                _react2.default.createElement(
                                    PathBody,
                                    null,
                                    path.slogan
                                )
                            )
                        ),
                        _react2.default.createElement(PerkButtonOverlay, {
                            onClick: setPrimary
                        }),
                        _react2.default.createElement(
                            KeyStones,
                            null,
                            path.slots[0].runes.map(function(rune, runeIndex) {
                                var setPrimaryAndRune = function setPrimaryAndRune(event) {
                                    event.stopPropagation();
                                    //console.log('setPrimaryAndRune');
                                    pathsAPI.setPrimary(path.slug, runeIndex);
                                };

                                var content = _react2.default.createElement(ToolTipContent, {
                                    rune: rune
                                });

                                return _react2.default.createElement(
                                    KeyStone, {
                                        key: 'keystone-' + path.slug,
                                        onClick: setPrimaryAndRune
                                    },
                                    _react2.default.createElement(
                                        _ToolTip2.default, {
                                            content: content
                                        },
                                        _react2.default.createElement(KeyStoneImg, {
                                            src: (0, _helpers.assetPath)('/img/runeBuilder/runes/108x108/' + rune.runeId + '.png'),
                                            alt: ''
                                        })
                                    )
                                );
                            })
                        ),
                        _react2.default.createElement(
                            PathFooter,
                            null,
                            path.description
                        )
                    )
                );
            };

            exports.default = Path;

            /***/
        }),

    /***/
    587:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            // var _Share = __webpack_require__(227);

            // var _Share2 = _interopRequireDefault(_Share);

            var _Reset = __webpack_require__(588);

            var _Reset2 = _interopRequireDefault(_Reset);

            var _Backdrop = __webpack_require__(589);

            var _Backdrop2 = _interopRequireDefault(_Backdrop);

            var _Options = __webpack_require__(590);

            var _Options2 = _interopRequireDefault(_Options);

            var _PrimaryPath = __webpack_require__(592);

            var _PrimaryPath2 = _interopRequireDefault(_PrimaryPath);

            var _SecondaryPath = __webpack_require__(597);

            var _SecondaryPath2 = _interopRequireDefault(_SecondaryPath);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var PathBlock = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'RuneBuilder__PathBlock'
            })(['height:100%;background-color:#010a13;position:relative;z-index:1;']);

            var PathBody = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'RuneBuilder__PathBody'
            })(['padding:30px 0 0 35px;display:flex;position:relative;z-index:1;']);

            var PathColumn = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'RuneBuilder__PathColumn'
            })(['flex:0 0 auto;padding-top:55px;margin-right:50px;width:275px;position:relative;']);

            var RuneBuilder = function RuneBuilder(props) {
                var primary = props.primary,
                    secondary = props.secondary;


                return _react2.default.createElement(
                    PathBlock,
                    null,
                    _react2.default.createElement(_Backdrop2.default, {
                        primary: primary,
                        secondary: secondary
                    }),
                    _react2.default.createElement(
                        PathBody,
                        null,
                        _react2.default.createElement(
                            PathColumn,
                            null,
                            _react2.default.createElement(_PrimaryPath2.default, null)
                        ),
                        _react2.default.createElement(
                            PathColumn,
                            null,
                            _react2.default.createElement(_SecondaryPath2.default, null)
                        )
                    ),
                    _react2.default.createElement(_Options2.default, null),
                    // _react2.default.createElement(_Share2.default, {
                    //     fixed: true
                    // }),
                    _react2.default.createElement(_Reset2.default, {
                        fixed: true
                    })
                );
            };

            exports.default = RuneBuilder;

            /***/
        }),

    /***/
    588:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _Button = __webpack_require__(228);

            var _Button2 = _interopRequireDefault(_Button);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Reset__Block'
            })(['', ''], function(props) {
                return props.fixed && '\n        padding: 10px 10px 10px 40px;\n        position: absolute;\n        top: 0;\n        right: 0;\n    ';
            });

            var Reset = function Reset(_ref) {
                var fixed = _ref.fixed;
                return _react2.default.createElement(
                    Block, {
                        fixed: fixed
                    },
                    _react2.default.createElement(
                        _Button2.default, {
                            square: true,
                            onClick: pathsAPI.clearPrimary,
                            title: window.i18n.runebuilder.reset
                        },
                        _react2.default.createElement(
                            'svg', {
                                width: '16',
                                height: '16',
                                viewBox: '0 0 1792 1792',
                                xmlns: 'http://www.w3.org/2000/svg'
                            },
                            _react2.default.createElement('path', {
                                d: 'M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z'
                            })
                        ),
                        _react2.default.createElement(
                            'span', {
                                className: 'u-sr-only'
                            },
                            window.i18n.runebuilder.reset
                        )
                    )
                );
            };

            exports.default = Reset;

            /***/
        }),

    /***/
    589:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _helpers = __webpack_require__(98);

            var _PreloadedImage = __webpack_require__(229);

            var _PreloadedImage2 = _interopRequireDefault(_PreloadedImage);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var fadeIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Backdrop__Block'
            })(['width:100%;height:100%;overflow:hidden;opacity:0;position:absolute;top:0;right:0;z-index:0;pointer-events:none;user-select:none;will-change:transform;transition:0.3s;', ' &::after{content:\'\';display:block;width:1055px;height:100%;position:absolute;top:0;left:0;background:linear-gradient(90deg,rgba(1,10,19,0.3) 0%,rgba(1,10,19,0.3) 55%,transparent 100%);}'], function(props) {
                return props.isLoaded && '\n        opacity: 1;\n    ';
            });

            var Environment = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'Backdrop__Environment'
            })(['margin:0;display:block;position:absolute;left:0;bottom:0;']);

            var Splash = (0, _styledComponents2.default)(_PreloadedImage2.default).withConfig({
                displayName: 'Backdrop__Splash'
            })(['display:block;margin:0;position:absolute;bottom:0;right:-107px;z-index:1;']);

            var Construct = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'Backdrop__Construct'
            })(['margin:0;display:block;position:absolute;bottom:0;right:-107px;z-index:2;']);

            var Keystone = (0, _styledComponents2.default)(_PreloadedImage2.default).withConfig({
                displayName: 'Backdrop__Keystone'
            })(['margin:0;display:block;position:absolute;bottom:30px;right:-55px;z-index:3;animation:', ' 0.25s ease forwards;'], fadeIn);

            var Backdrop = function(_React$Component) {
                _inherits(Backdrop, _React$Component);

                function Backdrop(props) {
                    _classCallCheck(this, Backdrop);

                    var _this = _possibleConstructorReturn(this, (Backdrop.__proto__ || Object.getPrototypeOf(Backdrop)).call(this, props));

                    _this.state = {
                        isLoaded: false
                    };
                    return _this;
                }

                _createClass(Backdrop, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        var _this2 = this;

                        var primary = this.props.primary;


                        var preload = [(0, _helpers.loadImage)(primary.construct + '/environment.png'), (0, _helpers.loadImage)(primary.construct + '/construct.png')];

                        Promise.all(preload).then(function() {
                            _this2.setState({
                                isLoaded: true
                            });
                        });
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _props = this.props,
                            primary = _props.primary,
                            secondary = _props.secondary;


                        var keystoneChoice = primary.slots[0].choice;
                        var keystone = keystoneChoice !== -1 && primary.slots[0].runes[keystoneChoice];

                        return _react2.default.createElement(
                            Block, {
                                isLoaded: this.state.isLoaded
                            },
                            _react2.default.createElement(Environment, {
                                src: primary.construct + '/environment.png',
                                alt: '',
                                width: '1162',
                                height: '720'
                            }),
                            secondary.id && _react2.default.createElement(Splash, {
                                key: 'splash-' + secondary.id,
                                src: primary.construct + '/second/' + secondary.id + '.png',
                                alt: '',
                                width: '700',
                                height: '670'
                            }),
                            _react2.default.createElement(Construct, {
                                src: primary.construct + '/construct.png',
                                alt: '',
                                width: '700',
                                height: '720'
                            }),
                            keystone && _react2.default.createElement(Keystone, {
                                key: 'keystone-' + keystoneChoice,
                                src: primary.construct + '/keystones/' + keystone.runeId + '.png',
                                alt: '',
                                width: '600',
                                height: '670'
                            })
                        );
                    }
                }]);

                return Backdrop;
            }(_react2.default.Component);

            exports.default = Backdrop;

            /***/
        }),

    /***/
    590:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _reactRedux = __webpack_require__(41);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _helpers = __webpack_require__(11);

            var _descriptions = __webpack_require__(591);

            var descriptionsAPI = _interopRequireWildcard(_descriptions);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Options__Block'
            })(['position:absolute;bottom:20px;left:30px;']);

            var Label = (0, _styledComponents2.default)('label').withConfig({
                displayName: 'Options__Label'
            })(['color:#a09b8c;font-size:12px;font-weight:normal;line-height:16px;letter-spacing:0.025em;&:hover{color:#f0e6d2;}']);

            var Input = (0, _styledComponents2.default)('input').withConfig({
                displayName: 'Options__Input'
            })(['display:none;']);

            var InputMask = (0, _styledComponents2.default)('span').withConfig({
                displayName: 'Options__InputMask'
            })(['margin-right:7px;display:inline-block;vertical-align:middle;width:14px;height:14px;background:url("', '");position:relative;top:-1px;', ':hover &{background-position:0 -14px;}', ':checked + &{background-position:0 -28px;}', ':hover ', ':checked + &{background-position:0 -42px;}'], (0, _helpers.assetPath)('/img/global/checkbox-sprite.png'), Label, Input, Label, Input);

            var Options = function(_React$Component) {
                _inherits(Options, _React$Component);

                function Options(props) {
                    _classCallCheck(this, Options);

                    var _this = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

                    _this.longDescriptions = _this.props.longDescriptions;

                    _this.handleKeyDown = function(event) {
                        if (event.keyCode === 16) {
                            descriptionsAPI.setShift(true);
                        }
                    };

                    _this.handleKeyUp = function(event) {
                        if (event.keyCode === 16) {
                            descriptionsAPI.setShift(false);
                        }
                    };

                    _this.handleChange = function(event) {
                        event.preventDefault();
                        descriptionsAPI.toggleGlobal();
                    };
                    return _this;
                }

                _createClass(Options, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        window.addEventListener('keydown', this.handleKeyDown);
                        window.addEventListener('keyup', this.handleKeyUp);
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        window.removeEventListener('keydown', this.handleKeyDown);
                        window.addEventListener('keyup', this.handleKeyUp);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var longDescriptions = this.props.longDescriptions;


                        return _react2.default.createElement(
                            Block,
                            null,
                            _react2.default.createElement(
                                Label, {
                                    htmlFor: 'descriptions-checkbox'
                                },
                                _react2.default.createElement(Input, {
                                    id: 'descriptions-checkbox',
                                    type: 'checkbox',
                                    checked: longDescriptions.global || longDescriptions.shift,
                                    onChange: this.handleChange
                                }),
                                _react2.default.createElement(InputMask, null),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    window.i18n.runebuilder.showDetailedDescriptions
                                )
                            )
                        );
                    }
                }]);

                return Options;
            }(_react2.default.Component);

            function mapStateToProps(state) {
                return {
                    longDescriptions: state.longDescriptions
                };
            }

            exports.default = (0, _reactRedux.connect)(mapStateToProps)(Options);

            /***/
        }),

    /***/
    591:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.setShift = setShift;
            exports.toggleGlobal = toggleGlobal;

            var _store = __webpack_require__(72);

            var _store2 = _interopRequireDefault(_store);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            /**
             * Set the shift button as active/inactive so react can render different content.
             * @param {boolean} shift The value to set.
             */
            function setShift(shift) {
                _store2.default.dispatch({
                    type: 'SET_SHIFT_DESCRIPTIONS',
                    data: {
                        shift: shift
                    }
                });
            }

            /**
             * Toggle a global forced value for the descriptions. This will override the shift value.
             */
            function toggleGlobal() {
                _store2.default.dispatch({
                    type: 'TOGGLE_GLOBAL_DESCTIPTIONS',
                    data: {}
                });
            }

            /***/
        }),

    /***/
    592:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


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

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _reactRedux = __webpack_require__(41);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _KeyStoneSlot = __webpack_require__(593);

            var _KeyStoneSlot2 = _interopRequireDefault(_KeyStoneSlot);

            var _Slot = __webpack_require__(65);

            var _Slot2 = _interopRequireDefault(_Slot);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var PrimaryPath = function PrimaryPath(_ref) {
                var primary = _ref.primary;

                var sharedProps = {
                    path: primary,
                    toggleDrawer: pathsAPI.togglePrimaryRuneDrawer,
                    setRune: pathsAPI.setPrimaryRune
                };

                return _react2.default.createElement(
                    'section', {
                        id: 'primary-path'
                    },
                    _react2.default.createElement(_KeyStoneSlot2.default, sharedProps),
                    _react2.default.createElement(_Slot2.default, _extends({
                        slot: primary.slots[0],
                        keystone: true,
                        slotIndex: 0,
                        selectText: window.i18n.runebuilder.selectKeystone
                    }, sharedProps)),
                    _react2.default.createElement(_Slot2.default, _extends({
                        slot: primary.slots[1],
                        slotIndex: 1,
                        selectText: window.i18n.runebuilder.selectGreater
                    }, sharedProps)),
                    _react2.default.createElement(_Slot2.default, _extends({
                        slot: primary.slots[2],
                        slotIndex: 2
                    }, sharedProps)),
                    _react2.default.createElement(_Slot2.default, _extends({
                        slot: primary.slots[3],
                        slotIndex: 3
                    }, sharedProps))
                );
            };

            var mapStateToProps = function mapStateToProps(state) {
                return {
                    primary: state.primary
                };
            };

            exports.default = (0, _reactRedux.connect)(mapStateToProps)(PrimaryPath);

            /***/
        }),

    /***/
    593:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _findIndex = __webpack_require__(61);

            var _findIndex2 = _interopRequireDefault(_findIndex);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            var _TruncatedText = __webpack_require__(148);

            var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

            var _Slot = __webpack_require__(65);

            var Slot = _interopRequireWildcard(_Slot);

            var _PathButton = __webpack_require__(232);

            var _PathButton2 = _interopRequireDefault(_PathButton);

            var _Progress = __webpack_require__(233);

            var _Progress2 = _interopRequireDefault(_Progress);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var Title = (0, _styledComponents2.default)(Description.Title).withConfig({
                displayName: 'KeyStoneSlot__Title'
            })(['font-size:18px;line-height:22px;']);

            var KeyStoneSlot = function KeyStoneSlot(_ref) {
                var path = _ref.path;

                var total = path.slots.length;
                var currentSlot = (0, _findIndex2.default)(path.slots, function(slot) {
                    return slot.choice === -1;
                });
                var isActive = currentSlot !== -1;
                var current = currentSlot === -1 ? total : currentSlot + 1;

                return _react2.default.createElement(
                    Slot.Block,
                    null,
                    _react2.default.createElement(
                        Slot.LeftSide,
                        null,
                        _react2.default.createElement(_Progress2.default, {
                            path: path,
                            total: total,
                            current: current,
                            isActive: isActive
                        }),
                        _react2.default.createElement(_PathButton2.default, {
                            path: path,
                            onClick: pathsAPI.clearPrimary
                        })
                    ),
                    _react2.default.createElement(
                        Slot.RightSide,
                        null,
                        _react2.default.createElement(
                            Description.Block, {
                                animate: false
                            },
                            _react2.default.createElement(
                                Title, {
                                    color: path.colors.title
                                },
                                path.name
                            ),
                            _react2.default.createElement(
                                _TruncatedText2.default,
                                null,
                                _react2.default.createElement(Description.P, {
                                    dangerouslySetInnerHTML: {
                                        __html: path.description
                                    }
                                })
                            )
                        )
                    )
                );
            };

            exports.default = KeyStoneSlot;

            /***/
        }),

    /***/
    595:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var spin = (0, _styledComponents.keyframes)(['to{transform:rotate(360deg);}']);

            var SVG = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'Spinner__SVG'
            })(['width:100%;height:100%;opacity:', ';visibility:', ';pointer-events:none;position:absolute;left:0;top:0;transition:opacity 0.2s;filter:blur(1px);animation:', ' 2s linear forwards infinite;'], function(props) {
                return props.isActive ? '1' : '0';
            }, function(props) {
                return props.isActive ? 'visible' : 'hidden';
            }, spin);

            var Spinner = function Spinner(_ref) {
                var keystone = _ref.keystone,
                    isActive = _ref.isActive;
                return _react2.default.createElement(
                    SVG, {
                        isActive: isActive
                    },
                    _react2.default.createElement('path', {
                        fill: 'none',
                        strokeLinecap: 'round',
                        strokeWidth: '2px',
                        stroke: 'url(#gradient-white-transparent)'
                            // We need a different svg path depending on if it's a keysone or
                            // not.
                            ,
                        d: keystone ? 'M 31 1 A 30 30 0 0 0 31 61' : 'M 23.5 1 A 22.5 22.5 0 0 0 23.5 46'
                    }),
                    _react2.default.createElement('ellipse', {
                        cx: '50%',
                        cy: '1px',
                        fill: '#fff',
                        rx: '5',
                        ry: '2'
                    })
                );
            };

            exports.default = Spinner;

            /***/
        }),

    /***/
    596:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _reactRedux = __webpack_require__(41);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var RuneDescription = function RuneDescription(_ref) {
                var rune = _ref.rune,
                    longDescriptions = _ref.longDescriptions;

                var showLong = longDescriptions.global || longDescriptions.shift;
                var description = showLong ? rune.longDescription : rune.shortDescription;

                return _react2.default.createElement('p', {
                    dangerouslySetInnerHTML: {
                        __html: description
                    }
                });
            };

            function mapStateToProps(state) {
                return {
                    longDescriptions: state.longDescriptions
                };
            }

            exports.default = (0, _reactRedux.connect)(mapStateToProps)(RuneDescription);

            /***/
        }),

    /***/
    597:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _reactRedux = __webpack_require__(41);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _PathSlot = __webpack_require__(598);

            var _PathSlot2 = _interopRequireDefault(_PathSlot);

            var _RuneChooser = __webpack_require__(599);

            var _RuneChooser2 = _interopRequireDefault(_RuneChooser);

            var _EmptySlot = __webpack_require__(602);

            var _EmptySlot2 = _interopRequireDefault(_EmptySlot);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var SecondaryPath = function SecondaryPath(_ref) {
                var paths = _ref.paths,
                    primary = _ref.primary,
                    secondary = _ref.secondary;
                return _react2.default.createElement(
                    'section', {
                        id: 'secondary-path'
                    },
                    _react2.default.createElement(_PathSlot2.default, {
                        paths: paths,
                        secondary: secondary,
                        primary: primary
                    }),
                    secondary.hasPath ? _react2.default.createElement(_RuneChooser2.default, {
                        key: secondary.title,
                        secondary: secondary
                    }) : _react2.default.createElement(
                        'div', {
                            key: 'empty-slots'
                        },
                        _react2.default.createElement(_EmptySlot2.default, null),
                        _react2.default.createElement(_EmptySlot2.default, null)
                    )
                );
            };

            var mapStateToProps = function mapStateToProps(state) {
                return {
                    paths: state.paths,
                    primary: state.primary,
                    secondary: state.secondary
                };
            };

            exports.default = (0, _reactRedux.connect)(mapStateToProps)(SecondaryPath);

            /***/
        }),

    /***/
    598:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _ToolTip = __webpack_require__(147);

            var _ToolTip2 = _interopRequireDefault(_ToolTip);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            var _Slot = __webpack_require__(65);

            var Slot = _interopRequireWildcard(_Slot);

            var _Progress = __webpack_require__(233);

            var _Progress2 = _interopRequireDefault(_Progress);

            var _Drawer = __webpack_require__(230);

            var _Drawer2 = _interopRequireDefault(_Drawer);

            var _PathButton = __webpack_require__(232);

            var _PathButton2 = _interopRequireDefault(_PathButton);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var PathOptionButton = (0, _styledComponents2.default)('button').withConfig({
                displayName: 'PathSlot__PathOptionButton'
            })(['width:48px;height:48px;background:none;border:0;padding:0;']);

            var PathIcon = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'PathSlot__PathIcon'
            })(['display:block;margin:0 auto;width:26px;height:26px;']);

            var Hr = (0, _styledComponents2.default)('hr').withConfig({
                displayName: 'PathSlot__Hr'
            })(['margin:6px 0;width:100%;border:0;background:#515250;height:1px;']);

            var ToolTipContent = function ToolTipContent(_ref) {
                var setBonus = _ref.setBonus;
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        Description.Title, {
                            small: true
                        },
                        setBonus.name
                    ),
                    _react2.default.createElement(
                        Description.P, {
                            flush: true
                        },
                        setBonus.name
                    ),
                    _react2.default.createElement(Hr, null),
                    _react2.default.createElement(Description.P, {
                        dangerouslySetInnerHTML: {
                            __html: setBonus.value
                        }
                    })
                );
            };

            var PathSlot = function(_React$Component) {
                _inherits(PathSlot, _React$Component);

                function PathSlot() {
                    _classCallCheck(this, PathSlot);

                    return _possibleConstructorReturn(this, (PathSlot.__proto__ || Object.getPrototypeOf(PathSlot)).apply(this, arguments));
                }

                _createClass(PathSlot, [{
                    key: 'componentDidUpdate',
                    value: function componentDidUpdate() {
                        var _props = this.props,
                            primary = _props.primary,
                            secondary = _props.secondary;


                        if (!secondary.isOpen && !secondary.hasPath) {
                            var remainingPrimaryChoices = primary.slots.filter(function(rune) {
                                return rune.choice === -1;
                            }).length;

                            if (remainingPrimaryChoices === 0) {
                                pathsAPI.toggleSecondaryPathDrawer();
                            }
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _props2 = this.props,
                            paths = _props2.paths,
                            primary = _props2.primary,
                            secondary = _props2.secondary;


                        var remainingPaths = Object.values(paths).filter(function(path) {
                            return path.name !== primary.name;
                        });

                        var total = 2;
                        var isActive = secondary.slots.choices && secondary.slots.choices[1] === -1;
                        var current = secondary.slots.choices && (secondary.slots.choices[0] !== -1 ? 2 : 1);

                        return _react2.default.createElement(
                            Slot.Block,
                            null,
                            _react2.default.createElement(
                                Slot.LeftSide,
                                null,
                                _react2.default.createElement(_Progress2.default, {
                                    path: secondary,
                                    total: total,
                                    current: current,
                                    isActive: isActive
                                }),
                                _react2.default.createElement(_PathButton2.default, {
                                    path: secondary,
                                    onClick: pathsAPI.toggleSecondaryPathDrawer
                                })
                            ),
                            _react2.default.createElement(
                                Slot.RightSide,
                                null, !secondary.isOpen && _react2.default.createElement(
                                    'div',
                                    null,
                                    secondary.icon ? function() {
                                        var setBonus = primary.bonuses.find(function(bonus) {
                                            return bonus.name.indexOf(secondary.name) !== -1;
                                        });

                                        return _react2.default.createElement(
                                            Description.Block, {
                                                key: setBonus.title,
                                                animate: true
                                            },
                                            _react2.default.createElement(
                                                Description.Title, {
                                                    color: secondary.colors.title,
                                                    small: true
                                                },
                                                secondary.name
                                            ),
                                            _react2.default.createElement(Description.P, {
                                                dangerouslySetInnerHTML: {
                                                    __html: setBonus.value
                                                }
                                            })
                                        );
                                    }() : _react2.default.createElement(
                                        Description.Block, {
                                            key: 'choose-path'
                                        },
                                        _react2.default.createElement(
                                            Description.Title, {
                                                small: true
                                            },
                                            window.i18n.runebuilder.secondary.selectSecondary
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _Drawer2.default, {
                                        isOpen: secondary.isOpen,
                                        columns: 4
                                    },
                                    remainingPaths.map(function(choice) {
                                        var setBonus = primary.bonuses.find(function(bonus) {
                                            return bonus.name.indexOf(choice.name) !== -1;
                                        });

                                        if (setBonus === undefined) {
                                            console.warn('PathSlot couldn\'t find a setBouns for ' + choice.name + ' in ' + primary.name);
                                            return null;
                                        }

                                        var setSecondary = function setSecondary() {
                                            pathsAPI.setSecondary(choice.slug);
                                        };

                                        return _react2.default.createElement(
                                            _ToolTip2.default, {
                                                key: choice.name,
                                                content: setBonus && _react2.default.createElement(ToolTipContent, {
                                                    setBonus: setBonus
                                                })
                                            },
                                            _react2.default.createElement(
                                                PathOptionButton, {
                                                    onClick: setSecondary
                                                },
                                                _react2.default.createElement(PathIcon, {
                                                    src: choice.icon,
                                                    alt: ''
                                                })
                                            )
                                        );
                                    })
                                )
                            )
                        );
                    }
                }]);

                return PathSlot;
            }(_react2.default.Component);

            exports.default = PathSlot;

            /***/
        }),

    /***/
    599:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _PerkButtonWithTooltip = __webpack_require__(149);

            var _PerkButtonWithTooltip2 = _interopRequireDefault(_PerkButtonWithTooltip);

            var _Slot = __webpack_require__(65);

            var Slot = _interopRequireWildcard(_Slot);

            var _RuneSlot = __webpack_require__(600);

            var _RuneSlot2 = _interopRequireDefault(_RuneSlot);

            var _RuneDrawer = __webpack_require__(601);

            var _RuneDrawer2 = _interopRequireDefault(_RuneDrawer);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var toggleSecondaryRuneDrawer0 = function toggleSecondaryRuneDrawer0() {
                pathsAPI.toggleSecondaryRuneDrawer(0);
            };

            var toggleSecondaryRuneDrawer1 = function toggleSecondaryRuneDrawer1() {
                pathsAPI.toggleSecondaryRuneDrawer(1);
            };

            var PathSlot = function(_React$Component) {
                _inherits(PathSlot, _React$Component);

                function PathSlot() {
                    _classCallCheck(this, PathSlot);

                    return _possibleConstructorReturn(this, (PathSlot.__proto__ || Object.getPrototypeOf(PathSlot)).apply(this, arguments));
                }

                _createClass(PathSlot, [{
                    key: 'render',
                    value: function render() {
                        var secondary = this.props.secondary;
                        var _secondary$slots = secondary.slots,
                            runes = _secondary$slots.runes,
                            choices = _secondary$slots.choices,
                            slotIndex = _secondary$slots.slotIndex,
                            isOpen = _secondary$slots.isOpen;


                        var rune1 = runes[choices[0]];
                        var rune2 = runes[choices[1]];

                        return _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                Slot.Block,
                                null,
                                _react2.default.createElement(
                                    Slot.LeftSide,
                                    null,
                                    _react2.default.createElement(_PerkButtonWithTooltip2.default, {
                                        rune: rune1,
                                        path: secondary,
                                        isActive: isOpen && slotIndex === 0,
                                        onClick: toggleSecondaryRuneDrawer0
                                    })
                                ),
                                _react2.default.createElement(
                                    Slot.RightSide,
                                    null,
                                    _react2.default.createElement(_RuneDrawer2.default, {
                                        key: secondary.name,
                                        path: secondary,
                                        isOpen: isOpen
                                    }), !isOpen && _react2.default.createElement(_RuneSlot2.default, {
                                        rune: rune1,
                                        path: secondary
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                Slot.Block,
                                null,
                                _react2.default.createElement(
                                    Slot.LeftSide,
                                    null,
                                    _react2.default.createElement(_PerkButtonWithTooltip2.default, {
                                        rune: rune2,
                                        path: secondary,
                                        isActive: isOpen && slotIndex === 1,
                                        onClick: toggleSecondaryRuneDrawer1
                                    })
                                ),
                                _react2.default.createElement(
                                    Slot.RightSide,
                                    null, !isOpen && _react2.default.createElement(_RuneSlot2.default, {
                                        rune: rune2,
                                        path: secondary
                                    })
                                )
                            )
                        );
                    }
                }]);

                return PathSlot;
            }(_react2.default.Component);

            exports.default = PathSlot;

            /***/
        }),

    /***/
    600:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            var _TruncatedText = __webpack_require__(148);

            var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var RuneSlot = function RuneSlot(_ref) {
                var rune = _ref.rune,
                    path = _ref.path;

                if (!rune) {
                    return _react2.default.createElement(
                        Description.Block, {
                            key: 'choose-rune2'
                        },
                        _react2.default.createElement(
                            Description.Title, {
                                small: true,
                                color: path.colors.title
                            },
                            window.i18n.runebuilder.secondary.selectSecondary
                        )
                    );
                }

                return _react2.default.createElement(
                    Description.Block, {
                        key: 'rune2'
                    },
                    _react2.default.createElement(
                        Description.Title, {
                            small: true,
                            color: path.colors.title
                        },
                        rune.name
                    ),
                    _react2.default.createElement(
                        _TruncatedText2.default,
                        null,
                        _react2.default.createElement(Description.P, {
                            dangerouslySetInnerHTML: {
                                __html: rune.shortDescription
                            }
                        })
                    )
                );
            };

            exports.default = RuneSlot;

            /***/
        }),

    /***/
    601:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _slicedToArray = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _gsap = __webpack_require__(231);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _Flourish = __webpack_require__(100);

            var _Flourish2 = _interopRequireDefault(_Flourish);

            var _PerkButtonWithTooltip = __webpack_require__(149);

            var _PerkButtonWithTooltip2 = _interopRequireDefault(_PerkButtonWithTooltip);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'RuneDrawer__Block'
            })(['opacity:0;visibility:hidden;width:200px;height:220px;position:absolute;top:-10px;left:0;z-index:100;']);

            var Row = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'RuneDrawer__Row'
            })(['display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;width:100%;height:100%;']);

            var Item = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'RuneDrawer__Item'
            })(['flex-basis:', '%;display:flex;align-items:center;justify-content:center;'], 100 / 3);

            var RuneDrawer = function(_React$Component) {
                _inherits(RuneDrawer, _React$Component);

                function RuneDrawer() {
                    _classCallCheck(this, RuneDrawer);

                    return _possibleConstructorReturn(this, (RuneDrawer.__proto__ || Object.getPrototypeOf(RuneDrawer)).apply(this, arguments));
                }

                _createClass(RuneDrawer, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        this.timing = 0.12;

                        this.animation = new _gsap.TimelineLite({
                            paused: !this.props.isOpen
                        }).set(this.row.childNodes, {
                            opacity: 0,
                            x: -20
                        }).to(this.block, this.timing, {
                            opacity: 1,
                            visibility: 'visible',
                            ease: _gsap.Power0.easeNone
                        }, 0.05).to([this.flourishTop, this.flourishBottom], this.timing / 2, {
                            color: '#c8aa6e',
                            ease: _gsap.Power0.easeNone
                        }, '-=' + this.timing).to([this.flourishTop, this.flourishBottom], this.timing / 2, {
                            color: '#594620',
                            ease: _gsap.Power0.easeNone
                        }).to([this.flourishTop, this.flourishBottom], this.timing, {
                            width: '100%',
                            ease: _gsap.Power0.easeNone
                        }, '-=' + this.timing).to([this.flourishTop, this.flourishBottom], this.timing, {
                            width: '100%',
                            ease: _gsap.Power0.easeNone
                        }, '-=' + this.timing).staggerTo(this.row.childNodes, 0.125, {
                            opacity: 1,
                            x: 0,
                            ease: _gsap.Power0.easeNone
                        }, 0.2 / this.row.childNodes.length, '-=' + this.timing);
                    }
                }, {
                    key: 'componentDidUpdate',
                    value: function componentDidUpdate(prevProps) {
                        var _this2 = this;

                        // Animate open the drawer if it wasn't open but is now.
                        if (this.props.isOpen && !prevProps.isOpen) {
                            window.requestAnimationFrame(function() {
                                _this2.animation.play();
                            });
                        }

                        // Animate close the drawer if it was open but isn't now.
                        if (!this.props.isOpen && prevProps.isOpen) {
                            window.requestAnimationFrame(function() {
                                _this2.animation.reverse();
                            });
                        }
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        this.animation.seek(0);
                        this.animation.kill();
                        this.animation = null;
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _this3 = this;

                        var path = this.props.path;
                        var _path$slots = path.slots,
                            runes = _path$slots.runes,
                            choices = _path$slots.choices;

                        var _choices = _slicedToArray(choices, 2),
                            choice1 = _choices[0],
                            choice2 = _choices[1];

                        var rune1Group = Math.floor(choice1 / 3);
                        var rune2Group = Math.floor(choice2 / 3);

                        return _react2.default.createElement(
                            Block, {
                                innerRef: function innerRef(node) {
                                    _this3.block = node;
                                }
                            },
                            _react2.default.createElement(
                                Row, {
                                    innerRef: function innerRef(node) {
                                        _this3.row = node;
                                    }
                                },
                                runes.map(function(rune, runeIndex) {
                                    var setSecondaryRune = function setSecondaryRune() {
                                        pathsAPI.setSecondaryRune(runeIndex);
                                    };

                                    var runeGroupNumber = Math.floor(runeIndex / 3);
                                    var inRuneGroup1 = runeGroupNumber === rune1Group;
                                    var inRuneGroup2 = runeGroupNumber === rune2Group;
                                    var runeGroup = inRuneGroup1 || inRuneGroup2;

                                    var isChosen = runeGroup && runeIndex !== choice1 && runeIndex !== choice2;

                                    return _react2.default.createElement(
                                        Item, {
                                            key: rune.name
                                        },
                                        _react2.default.createElement(_PerkButtonWithTooltip2.default, {
                                            rune: rune,
                                            path: path,
                                            onClick: setSecondaryRune,
                                            isChosen: isChosen
                                        })
                                    );
                                })
                            ),
                            _react2.default.createElement(_Flourish2.default, {
                                innerRef: function innerRef(node) {
                                    _this3.flourishTop = node;
                                },
                                top: 72
                            }),
                            _react2.default.createElement(_Flourish2.default, {
                                innerRef: function innerRef(node) {
                                    _this3.flourishBottom = node;
                                },
                                bottom: 72
                            })
                        );
                    }
                }]);

                return RuneDrawer;
            }(_react2.default.Component);

            exports.default = RuneDrawer;

            /***/
        }),

    /***/
    602:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _PerkButton = __webpack_require__(99);

            var _PerkButton2 = _interopRequireDefault(_PerkButton);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            var _Slot = __webpack_require__(65);

            var Slot = _interopRequireWildcard(_Slot);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var EmptySlot = function EmptySlot() {
                return _react2.default.createElement(
                    Slot.Block,
                    null,
                    _react2.default.createElement(
                        Slot.LeftSide,
                        null,
                        _react2.default.createElement(_PerkButton2.default, {
                            isDisabled: true
                        })
                    ),
                    _react2.default.createElement(
                        Slot.RightSide,
                        null,
                        _react2.default.createElement(
                            Description.Block,
                            null,
                            _react2.default.createElement(
                                Description.Title, {
                                    small: true
                                },
                                window.i18n.runebuilder.splash.title
                            ),
                            _react2.default.createElement(
                                Description.P, {
                                    small: true
                                },
                                window.i18n.runebuilder.splash.body
                            )
                        )
                    )
                );
            };

            exports.default = EmptySlot;

            /***/
        }),

    /***/
    603:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _preact = __webpack_require__(136);

            var _preact2 = _interopRequireDefault(_preact);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _reactRedux = __webpack_require__(41);

            // var _Share = __webpack_require__(227);

            // var _Share2 = _interopRequireDefault(_Share);

            var _PathList = __webpack_require__(604);

            var _PathList2 = _interopRequireDefault(_PathList);

            var _PrimaryPath = __webpack_require__(605);

            var _PrimaryPath2 = _interopRequireDefault(_PrimaryPath);

            var _SecondaryPath = __webpack_require__(607);

            var _SecondaryPath2 = _interopRequireDefault(_SecondaryPath);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Mobile__Block'
            })(['overflow:hidden;margin:0 -20px;padding:12px;border-bottom:1px solid #4d3d1c;background:#000;']);

            var Mobile = function Mobile(props) {
                var paths = props.paths,
                    primary = props.primary,
                    secondary = props.secondary;


                return _preact2.default.createElement(
                    Block,
                    null,
                    _preact2.default.createElement(_PathList2.default, {
                        paths: paths,
                        primary: primary
                    }),
                    _preact2.default.createElement(_PrimaryPath2.default, {
                        primary: primary
                    }),
                    _preact2.default.createElement(_SecondaryPath2.default, {
                        paths: paths,
                        primary: primary,
                        secondary: secondary
                    })

                    //,_preact2.default.createElement(_Share2.default, null)
                );
            };

            var mapStateToProps = function mapStateToProps(state) {
                return {
                    paths: state.paths,
                    primary: state.primary,
                    secondary: state.secondary
                };
            };

            exports.default = (0, _reactRedux.connect)(mapStateToProps)(Mobile);

            /***/
        }),

    /***/
    604:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'PathList__Block'
            })(['display:flex;align-items:center;justify-content:center;background:linear-gradient(0deg,#010a13 0%,#030e14 100%);']);

            var Path = (0, _styledComponents2.default)('button').withConfig({
                displayName: 'PathList__Path'
            })(['flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:20%;padding:10px 5px;background:#010a13;border:1px solid #9c9789;text-align:center;position:relative;z-index:2;&::after{content:\'\';opacity:', ';display:block;border:2px solid #c89b3c;position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;transition:0.2s;}'], function(props) {
                return props.isActive ? '1' : '0';
            });

            var Icon = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'PathList__Icon'
            })(['display:block;margin:auto;max-width:100%;height:auto;']);

            var Title = (0, _styledComponents2.default)('h3').withConfig({
                displayName: 'PathList__Title'
            })(['margin:0 0 5px;font-size:7px;line-height:1;text-transform:uppercase;']);

            var PathList = function(_React$Component) {
                _inherits(PathList, _React$Component);

                function PathList() {
                    _classCallCheck(this, PathList);

                    return _possibleConstructorReturn(this, (PathList.__proto__ || Object.getPrototypeOf(PathList)).apply(this, arguments));
                }

                _createClass(PathList, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        var _this2 = this;

                        var pathsData = Object.keys(this.props.paths).map(function(key) {
                            return _this2.props.paths[key];
                        });

                        if (this.props.primary === false) {
                            pathsAPI.setPrimary(pathsData[0].slug);
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _this3 = this;

                        var pathsData = Object.keys(this.props.paths).map(function(key) {
                            return _this3.props.paths[key];
                        });

                        return _react2.default.createElement(
                            Block,
                            null,
                            pathsData.map(function(path) {
                                var setPrimary = function setPrimary() {
                                    pathsAPI.setPrimary(path.slug);
                                };

                                return _react2.default.createElement(
                                    Path, {
                                        key: path.slug,
                                        isActive: path.slug === _this3.props.primary.slug,
                                        onClick: setPrimary
                                    },
                                    _react2.default.createElement(Icon, {
                                        src: path.icon,
                                        alt: ''
                                    }),
                                    _react2.default.createElement(
                                        Title,
                                        null,
                                        path.title
                                    )
                                );
                            })
                        );
                    }
                }]);

                return PathList;
            }(_react2.default.Component);

            exports.default = PathList;

            /***/
        }),

    /***/
    605:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _templateObject = _taggedTemplateLiteral(['\n    padding: 16px 0;\n'], ['\n    padding: 16px 0;\n']),
                _templateObject2 = _taggedTemplateLiteral(['\n    margin-bottom: 0;\n'], ['\n    margin-bottom: 0;\n']);

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            var _PerkButton = __webpack_require__(99);

            var _PerkButton2 = _interopRequireDefault(_PerkButton);

            var _Flourish = __webpack_require__(100);

            var _Flourish2 = _interopRequireDefault(_Flourish);

            var _PathButton = __webpack_require__(234);

            var _PathButton2 = _interopRequireDefault(_PathButton);

            var _Slot = __webpack_require__(150);

            var Slot = _interopRequireWildcard(_Slot);

            var _Backdrop = __webpack_require__(606);

            var _Backdrop2 = _interopRequireDefault(_Backdrop);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            function _taggedTemplateLiteral(strings, raw) {
                return Object.freeze(Object.defineProperties(strings, {
                    raw: {
                        value: Object.freeze(raw)
                    }
                }));
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'PrimaryPath__Block'
            })(['padding-top:40px;position:relative;z-index:1;']);

            var SlotBlock = Slot.Block.extend(_templateObject);

            var P = Description.P.extend(_templateObject2);

            var PrimaryPath = function(_React$Component) {
                _inherits(PrimaryPath, _React$Component);

                function PrimaryPath() {
                    _classCallCheck(this, PrimaryPath);

                    return _possibleConstructorReturn(this, (PrimaryPath.__proto__ || Object.getPrototypeOf(PrimaryPath)).apply(this, arguments));
                }

                _createClass(PrimaryPath, [{
                    key: 'render',
                    value: function render() {
                        var primary = this.props.primary;


                        if (!primary) {
                            return null;
                        }

                        return _react2.default.createElement(
                            Block,
                            null,
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_Backdrop2.default, {
                                    path: primary
                                }),
                                _react2.default.createElement(
                                    Slot.Block,
                                    null,
                                    _react2.default.createElement(
                                        Slot.LeftSide,
                                        null,
                                        _react2.default.createElement(_PathButton2.default, {
                                            icon: primary.icon,
                                            path: primary
                                        })
                                    ),
                                    _react2.default.createElement(
                                        Slot.RightSide,
                                        null,
                                        _react2.default.createElement(
                                            Description.Title, {
                                                color: primary.colors.title
                                            },
                                            primary.name
                                        ),
                                        _react2.default.createElement(
                                            Description.P,
                                            null,
                                            primary.description
                                        )
                                    )
                                ),
                                primary.slots.map(function(slot, slotIndex) {
                                    var slotRune = slot.runes[slot.choice];

                                    var togglePrimaryRuneDrawer = function togglePrimaryRuneDrawer() {
                                        pathsAPI.togglePrimaryRuneDrawer(slotIndex);
                                    };

                                    return _react2.default.createElement(
                                        SlotBlock, {
                                            key: slot.slug
                                        },
                                        _react2.default.createElement(_Flourish2.default, {
                                            top: 0
                                        }),
                                        _react2.default.createElement(
                                            Slot.LeftSide,
                                            null,
                                            _react2.default.createElement(_PerkButton2.default, {
                                                rune: slotRune,
                                                path: primary,
                                                isActive: slot.isOpen,
                                                onClick: togglePrimaryRuneDrawer
                                            })
                                        ),
                                        slot.isOpen ? _react2.default.createElement(
                                            Slot.RightSide,
                                            null,
                                            slot.runes.map(function(rune, runeIndex) {
                                                var setPrimaryRune = function setPrimaryRune() {
                                                    pathsAPI.setPrimaryRune(slotIndex, runeIndex);
                                                };

                                                var isChosen = slot.choice !== -1 && slot.choice !== runeIndex;

                                                return _react2.default.createElement(
                                                    Slot.Block, {
                                                        key: rune.name
                                                    },
                                                    _react2.default.createElement(
                                                        Slot.LeftSide,
                                                        null,
                                                        _react2.default.createElement(_PerkButton2.default, {
                                                            rune: rune,
                                                            path: primary,
                                                            small: true,
                                                            onClick: setPrimaryRune,
                                                            isChosen: isChosen
                                                        })
                                                    ),
                                                    _react2.default.createElement(
                                                        Slot.RightSide,
                                                        null,
                                                        _react2.default.createElement(
                                                            Description.Title, {
                                                                color: primary.colors.title
                                                            },
                                                            rune.name
                                                        ),
                                                        _react2.default.createElement(P, {
                                                            dangerouslySetInnerHTML: {
                                                                __html: rune.longDescription
                                                            }
                                                        })
                                                    )
                                                );
                                            })
                                        ) : _react2.default.createElement(
                                            Slot.RightSide,
                                            null,
                                            slotRune ? _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    Description.Title, {
                                                        color: primary.colors.title
                                                    },
                                                    slotRune.name
                                                ),
                                                _react2.default.createElement(P, {
                                                    dangerouslySetInnerHTML: {
                                                        __html: slotRune.longDescription
                                                    }
                                                })
                                            ) : _react2.default.createElement(
                                                P, {
                                                    color: primary.colors.title
                                                },
                                                slotIndex === 0 ? window.i18n.runebuilder.selectKeystone : window.i18n.runebuilder.selectRune
                                            )
                                        )
                                    );
                                })
                            )
                        );
                    }
                }]);

                return PrimaryPath;
            }(_react2.default.Component);

            exports.default = PrimaryPath;

            /***/
        }),

    /***/
    606:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var animateIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Backdrop__Block'
            })(['opacity:0;width:', 'vw;position:absolute;top:', 'vw;left:0;z-index:-1;transition:0.3s;', ' &::after{content:\'\';display:block;width:100%;height:100%;background:radial-gradient(ellipse closest-side at center,transparent 0%,#000 100%);position:absolute;top:0;left:0;}'], 370 / 320 * 100, -70 / 320 * 100, function(props) {
                return props.isLoaded && '\n        opacity: 1;\n    ';
            });

            var Environment = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'Backdrop__Environment'
            })(['width:100%;height:auto;']);

            var Construct = (0, _styledComponents2.default)(Environment).withConfig({
                displayName: 'Backdrop__Construct'
            })(['width:', '%;position:absolute;top:0;right:0;'], 700 / 1162 * 100);

            var Backdrop = function(_React$Component) {
                _inherits(Backdrop, _React$Component);

                function Backdrop() {
                    _classCallCheck(this, Backdrop);

                    var _this = _possibleConstructorReturn(this, (Backdrop.__proto__ || Object.getPrototypeOf(Backdrop)).call(this));

                    _this.state = {
                        isLoaded: false
                    };
                    return _this;
                }

                _createClass(Backdrop, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        var _this2 = this;

                        var image = new Image();

                        image.onload = function() {
                            _this2.setState({
                                isLoaded: true
                            });
                        };

                        image.src = this.props.path.construct + '/environment.png';
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var path = this.props.path;


                        return _react2.default.createElement(
                            Block, {
                                isLoaded: this.state.isLoaded
                            },
                            _react2.default.createElement(Environment, {
                                src: path.construct + '/environment.png',
                                alt: ''
                            }),
                            _react2.default.createElement(Construct, {
                                src: path.construct + '/construct.png',
                                alt: ''
                            })
                        );
                    }
                }]);

                return Backdrop;
            }(_react2.default.Component);

            exports.default = Backdrop;

            /***/
        }),

    /***/
    607:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _templateObject = _taggedTemplateLiteral(['\n    border-top: 1px solid #4d3d1c;\n    padding: 16px 0;\n'], ['\n    border-top: 1px solid #4d3d1c;\n    padding: 16px 0;\n']),
                _templateObject2 = _taggedTemplateLiteral(['\n    margin-bottom: 0;\n'], ['\n    margin-bottom: 0;\n']);

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _findIndex = __webpack_require__(61);

            var _findIndex2 = _interopRequireDefault(_findIndex);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            var _PathButton = __webpack_require__(234);

            var _PathButton2 = _interopRequireDefault(_PathButton);

            var _Slot = __webpack_require__(150);

            var Slot = _interopRequireWildcard(_Slot);

            var _RuneChooser = __webpack_require__(608);

            var _RuneChooser2 = _interopRequireDefault(_RuneChooser);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            function _taggedTemplateLiteral(strings, raw) {
                return Object.freeze(Object.defineProperties(strings, {
                    raw: {
                        value: Object.freeze(raw)
                    }
                }));
            }

            var Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'SecondaryPath__Block'
            })(['position:relative;z-index:1;']);

            var PerkList = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'SecondaryPath__PerkList'
            })(['display:flex;align-items:center;']);

            var PerkItem = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'SecondaryPath__PerkItem'
            })(['width:60px;']);

            var SlotBlock = Slot.Block.extend(_templateObject);

            var Title = Description.Title.extend(_templateObject2);

            var P = Description.P.extend(_templateObject2);

            var SecondaryPath = function(_React$Component) {
                _inherits(SecondaryPath, _React$Component);

                function SecondaryPath() {
                    _classCallCheck(this, SecondaryPath);

                    return _possibleConstructorReturn(this, (SecondaryPath.__proto__ || Object.getPrototypeOf(SecondaryPath)).apply(this, arguments));
                }

                _createClass(SecondaryPath, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        pathsAPI.toggleSecondaryPathDrawer();
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _props = this.props,
                            paths = _props.paths,
                            primary = _props.primary,
                            secondary = _props.secondary;


                        var remainingPrimaryChoices = (0, _findIndex2.default)(primary.slots, function(slot) {
                            return slot.choice === -1;
                        });

                        if (remainingPrimaryChoices !== -1) {
                            return null;
                        }

                        var remainingPaths = Object.values(paths).filter(function(path) {
                            return path.name !== primary.name;
                        });
                        var setBonus = secondary.icon && primary.bonuses.find(function(bonus) {
                            return bonus.name.indexOf(secondary.name) !== -1;
                        });

                        return _react2.default.createElement(
                            Block,
                            null,
                            _react2.default.createElement(
                                SlotBlock,
                                null,
                                _react2.default.createElement(
                                    Slot.LeftSide,
                                    null,
                                    _react2.default.createElement(_PathButton2.default, {
                                        icon: secondary && secondary.icon,
                                        path: secondary,
                                        onClick: pathsAPI.toggleSecondaryPathDrawer
                                    })
                                ), !secondary.isOpen && secondary.icon && _react2.default.createElement(
                                    Slot.RightSide,
                                    null,
                                    _react2.default.createElement(
                                        Description.Title, {
                                            color: secondary.colors.title
                                        },
                                        secondary.name
                                    ),
                                    _react2.default.createElement(
                                        P,
                                        null,
                                        secondary.description
                                    ),
                                    _react2.default.createElement(P, {
                                        dangerouslySetInnerHTML: {
                                            __html: setBonus.value
                                        }
                                    })
                                ), !secondary.isOpen && !secondary.icon && _react2.default.createElement(
                                    Slot.RightSide,
                                    null,
                                    _react2.default.createElement(
                                        Title, {
                                            small: true
                                        },
                                        window.i18n.runebuilder.secondary.selectSecondary
                                    )
                                ),
                                secondary.isOpen && _react2.default.createElement(
                                    Slot.RightSide,
                                    null,
                                    _react2.default.createElement(
                                        PerkList,
                                        null,
                                        remainingPaths.map(function(choice) {
                                            var setSecondary = function setSecondary() {
                                                pathsAPI.setSecondary(choice.slug);
                                            };

                                            return _react2.default.createElement(
                                                PerkItem, {
                                                    key: choice.slug
                                                },
                                                _react2.default.createElement(_PathButton2.default, {
                                                    icon: choice.icon,
                                                    path: choice,
                                                    onClick: setSecondary
                                                })
                                            );
                                        })
                                    )
                                )
                            ),
                            secondary.hasPath && _react2.default.createElement(_RuneChooser2.default, {
                                key: secondary.title,
                                secondary: secondary
                            })
                        );
                    }
                }]);

                return SecondaryPath;
            }(_react2.default.Component);

            exports.default = SecondaryPath;

            /***/
        }),

    /***/
    608:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _slicedToArray = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _templateObject = _taggedTemplateLiteral(['\n    padding: 16px 0;\n'], ['\n    padding: 16px 0;\n']),
                _templateObject2 = _taggedTemplateLiteral(['\n    margin-bottom: 0;\n'], ['\n    margin-bottom: 0;\n']);

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _paths = __webpack_require__(23);

            var pathsAPI = _interopRequireWildcard(_paths);

            var _PerkButton = __webpack_require__(99);

            var _PerkButton2 = _interopRequireDefault(_PerkButton);

            var _Flourish = __webpack_require__(100);

            var _Flourish2 = _interopRequireDefault(_Flourish);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            var _Slot = __webpack_require__(150);

            var Slot = _interopRequireWildcard(_Slot);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            function _taggedTemplateLiteral(strings, raw) {
                return Object.freeze(Object.defineProperties(strings, {
                    raw: {
                        value: Object.freeze(raw)
                    }
                }));
            }

            var RuneDrawer = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'RuneChooser__RuneDrawer'
            })(['display:flex;flex-wrap:wrap;width:180px;height:180px;z-index:100;']);

            var RuneDrawerItem = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'RuneChooser__RuneDrawerItem'
            })(['flex-basis:', '%;display:flex;'], 100 / 3);

            var SlotBlock = Slot.Block.extend(_templateObject);

            var Title = Description.Title.extend(_templateObject2);

            var P = Description.P.extend(_templateObject2);

            var PathSlot = function(_React$Component) {
                _inherits(PathSlot, _React$Component);

                function PathSlot() {
                    _classCallCheck(this, PathSlot);

                    return _possibleConstructorReturn(this, (PathSlot.__proto__ || Object.getPrototypeOf(PathSlot)).apply(this, arguments));
                }

                _createClass(PathSlot, [{
                    key: 'render',
                    value: function render() {
                        var secondary = this.props.secondary;
                        var _secondary$slots = secondary.slots,
                            runes = _secondary$slots.runes,
                            choices = _secondary$slots.choices,
                            slotIndex = _secondary$slots.slotIndex,
                            isOpen = _secondary$slots.isOpen;

                        var _choices = _slicedToArray(choices, 2),
                            choice1 = _choices[0],
                            choice2 = _choices[1];

                        var rune1 = runes[choices[0]];
                        var rune2 = runes[choices[1]];
                        var rune1Group = Math.floor(choice1 / 3);
                        var rune2Group = Math.floor(choice2 / 3);

                        return _react2.default.createElement(
                            'div', {
                                key: secondary.slug || 'blank'
                            },
                            _react2.default.createElement(
                                SlotBlock,
                                null,
                                _react2.default.createElement(_Flourish2.default, {
                                    top: 0
                                }),
                                _react2.default.createElement(
                                    Slot.LeftSide,
                                    null,
                                    _react2.default.createElement(_PerkButton2.default, {
                                        rune: rune1,
                                        path: secondary,
                                        isActive: isOpen && slotIndex === 0,
                                        onClick: pathsAPI.toggleSecondaryRuneDrawer.bind(null, 0)
                                    })
                                ),
                                _react2.default.createElement(
                                    Slot.RightSide,
                                    null,
                                    isOpen && slotIndex === 0 ? _react2.default.createElement(
                                        Slot.Block,
                                        null,
                                        _react2.default.createElement(
                                            RuneDrawer,
                                            null,
                                            runes.map(function(rune, runeIndex) {
                                                var runeGroupNumber = Math.floor(runeIndex / 3);
                                                var inRuneGroup1 = runeGroupNumber === rune1Group;
                                                var inRuneGroup2 = runeGroupNumber === rune2Group;
                                                var runeGroup = inRuneGroup1 || inRuneGroup2;

                                                var isChosen = runeGroup && runeIndex !== choice1 && runeIndex !== choice2;

                                                return _react2.default.createElement(
                                                    RuneDrawerItem, {
                                                        key: rune.runeId
                                                    },
                                                    _react2.default.createElement(_PerkButton2.default, {
                                                        rune: rune,
                                                        path: secondary,
                                                        onClick: pathsAPI.setSecondaryRune.bind(null, runeIndex),
                                                        isChosen: isChosen
                                                    })
                                                );
                                            })
                                        )
                                    ) : !rune1 ? _react2.default.createElement(
                                        Title, {
                                            key: 'choose-rune1',
                                            small: true,
                                            color: secondary.colors.title
                                        },
                                        'Select Secondary'
                                    ) : _react2.default.createElement(
                                        'div', {
                                            key: 'rune1'
                                        },
                                        _react2.default.createElement(
                                            Description.Title, {
                                                small: true,
                                                color: secondary.colors.title
                                            },
                                            rune1.name
                                        ),
                                        _react2.default.createElement(P, {
                                            dangerouslySetInnerHTML: {
                                                __html: rune1.longDescription
                                            }
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                SlotBlock,
                                null,
                                _react2.default.createElement(_Flourish2.default, {
                                    top: 0
                                }),
                                _react2.default.createElement(
                                    Slot.LeftSide,
                                    null,
                                    _react2.default.createElement(_PerkButton2.default, {
                                        rune: rune2,
                                        path: secondary,
                                        isActive: isOpen && slotIndex === 1,
                                        onClick: pathsAPI.toggleSecondaryRuneDrawer.bind(null, 1)
                                    })
                                ),
                                _react2.default.createElement(
                                    Slot.RightSide,
                                    null,
                                    isOpen && slotIndex === 1 ? _react2.default.createElement(
                                        Slot.Block,
                                        null,
                                        _react2.default.createElement(
                                            RuneDrawer,
                                            null,
                                            runes.map(function(rune, runeIndex) {
                                                var runeGroupNumber = Math.floor(runeIndex / 3);
                                                var inRuneGroup1 = runeGroupNumber === rune1Group;
                                                var inRuneGroup2 = runeGroupNumber === rune2Group;
                                                var runeGroup = inRuneGroup1 || inRuneGroup2;

                                                var isChosen = runeGroup && runeIndex !== choice1 && runeIndex !== choice2;

                                                return _react2.default.createElement(
                                                    RuneDrawerItem, {
                                                        key: rune.runeId
                                                    },
                                                    _react2.default.createElement(_PerkButton2.default, {
                                                        rune: rune,
                                                        path: secondary,
                                                        onClick: pathsAPI.setSecondaryRune.bind(null, runeIndex),
                                                        isChosen: isChosen
                                                    })
                                                );
                                            })
                                        )
                                    ) : !rune2 ? _react2.default.createElement(
                                        Title, {
                                            key: 'choose-rune2',
                                            small: true,
                                            color: secondary.colors.title
                                        },
                                        'Select Secondary'
                                    ) : _react2.default.createElement(
                                        'div', {
                                            key: 'rune2'
                                        },
                                        _react2.default.createElement(
                                            Description.Title, {
                                                small: true,
                                                color: secondary.colors.title
                                            },
                                            rune2.name
                                        ),
                                        _react2.default.createElement(P, {
                                            dangerouslySetInnerHTML: {
                                                __html: rune2.longDescription
                                            }
                                        })
                                    )
                                )
                            )
                        );
                    }
                }]);

                return PathSlot;
            }(_react2.default.Component);

            exports.default = PathSlot;

            /***/
        }),

    /***/
    609:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var SVG = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'SVGGradients__SVG'
            })(['position:absolute;top:100%;left:100%;']);

            var SVGGradients = function(_React$Component) {
                _inherits(SVGGradients, _React$Component);

                function SVGGradients() {
                    _classCallCheck(this, SVGGradients);

                    return _possibleConstructorReturn(this, (SVGGradients.__proto__ || Object.getPrototypeOf(SVGGradients)).apply(this, arguments));
                }

                _createClass(SVGGradients, [{
                    key: 'render',
                    value: function render() {
                        var paths = this.props.paths;


                        var pathsData = Object.keys(paths).map(function(key) {
                            return paths[key];
                        });

                        return _react2.default.createElement(
                            SVG, {
                                'class': 'perks-svg-gradients',
                                width: '0',
                                height: '0'
                            },
                            _react2.default.createElement(
                                'linearGradient', {
                                    id: 'gradient-white-transparent',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '1'
                                },
                                _react2.default.createElement('stop', {
                                    stopOpacity: '1',
                                    stopColor: '#fff',
                                    offset: '0%'
                                }),
                                _react2.default.createElement('stop', {
                                    stopOpacity: '0',
                                    stopColor: '#fff',
                                    offset: '100%'
                                })
                            ),
                            _react2.default.createElement(
                                'linearGradient', {
                                    id: 'gradient-yuma-dallasLight',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '1'
                                },
                                _react2.default.createElement('stop', {
                                    stopColor: '#cdbe91',
                                    offset: '0%'
                                }),
                                _react2.default.createElement('stop', {
                                    stopColor: '#785a28',
                                    offset: '100%'
                                })
                            ),
                            pathsData.map(function(path) {
                                return _react2.default.createElement(
                                    'linearGradient', {
                                        key: path.name,
                                        id: 'gradient-' + path.slug,
                                        x1: '0',
                                        y1: '0',
                                        x2: '0',
                                        y2: '1'
                                    },
                                    _react2.default.createElement('stop', {
                                        stopColor: path.colors.gradient.top,
                                        offset: '0%'
                                    }),
                                    _react2.default.createElement('stop', {
                                        stopColor: path.colors.gradient.bottom,
                                        offset: '100%'
                                    })
                                );
                            })
                        );
                    }
                }]);

                return SVGGradients;
            }(_react2.default.Component);

            exports.default = SVGGradients;

            /***/
        }),

    /***/
    610:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _debounce = __webpack_require__(235);

            var _debounce2 = _interopRequireDefault(_debounce);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var ViewportSwitch = function(_React$Component) {
                _inherits(ViewportSwitch, _React$Component);

                function ViewportSwitch(props) {
                    _classCallCheck(this, ViewportSwitch);

                    var _this = _possibleConstructorReturn(this, (ViewportSwitch.__proto__ || Object.getPrototypeOf(ViewportSwitch)).call(this, props));

                    _this.state = {
                        match: -1
                    };
                    return _this;
                }

                _createClass(ViewportSwitch, [{
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        this.testMatch();

                        this.handleResize = (0, _debounce2.default)(this.testMatch.bind(this), 100);

                        window.addEventListener('resize', this.handleResize);
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        window.removeEventListener('resize', this.handleResize);
                    }
                }, {
                    key: 'testMatch',
                    value: function testMatch() {
                        var match = window.matchMedia(this.props.queryString).matches;

                        if (match !== this.state.match) {
                            this.setState({
                                match: match
                            });
                        }
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var _props = this.props,
                            _props$PassComponent = _props.PassComponent,
                            PassComponent = _props$PassComponent === undefined ? _react2.default.createElement('span', null) : _props$PassComponent,
                            _props$FailComponent = _props.FailComponent,
                            FailComponent = _props$FailComponent === undefined ? _react2.default.createElement('span', null) : _props$FailComponent;


                        if (this.state.match === -1) {
                            return null;
                        }

                        // React.Children.only let's us return the correct component without
                        // wrapping it in another tag. Helps with markup specific styles
                        return _react2.default.Children.only(this.state.match ? PassComponent : FailComponent);
                    }
                }]);

                return ViewportSwitch;
            }(_react2.default.Component);

            exports.default = ViewportSwitch;

            /***/
        }),

    /***/
    65:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Icon = exports.Frame = exports.DisabledButton = exports.Button = exports.RightSide = exports.LeftSide = exports.Block = undefined;

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _Description = __webpack_require__(36);

            var Description = _interopRequireWildcard(_Description);

            var _TruncatedText = __webpack_require__(148);

            var _TruncatedText2 = _interopRequireDefault(_TruncatedText);

            var _PerkButtonWithTooltip = __webpack_require__(149);

            var _PerkButtonWithTooltip2 = _interopRequireDefault(_PerkButtonWithTooltip);

            var _Drawer = __webpack_require__(230);

            var _Drawer2 = _interopRequireDefault(_Drawer);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var Block = exports.Block = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Slot__Block'
            })(['display:flex;margin-bottom:-1px;']);

            var LeftSide = exports.LeftSide = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Slot__LeftSide'
            })(['flex-shrink:0;display:flex;justify-content:center;align-items:center;margin-left:-30px;width:107px;height:100px;position:relative;']);

            var RightSide = exports.RightSide = (0, _styledComponents2.default)('div').withConfig({
                displayName: 'Slot__RightSide'
            })(['flex-grow:1;position:relative;height:100px;width:198px;']);

            var Button = exports.Button = (0, _styledComponents2.default)('button').withConfig({
                displayName: 'Slot__Button'
            })(['display:block;padding:0;width:48px;height:48px;border:0;background:#1e2328;border-radius:50%;box-shadow:inset 0 0 7px #000,0 0 1px #000;position:relative;', ''], function(props) {
                return props.large && '\n        width: 62px;\n        height: 62px;\n    ';
            });

            var DisabledButton = exports.DisabledButton = Button.withComponent('div');

            var Frame = exports.Frame = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'Slot__Frame'
            })(['width:100%;height:100%;position:relative;']);

            var Icon = exports.Icon = (0, _styledComponents2.default)('img').withConfig({
                displayName: 'Slot__Icon'
            })(['margin:0;width:', ';height:', ';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);'], function(props) {
                return props.keystone ? '108px' : '46px';
            }, function(props) {
                return props.keystone ? '108px' : '46px';
            });

            var KeystoneFlourish = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'Slot__KeystoneFlourish'
            })(['position:absolute;right:0;width:286px;height:9px;', ' ', ''], function(props) {
                return props.top && '\n        top: 0;\n    ';
            }, function(props) {
                return props.bottom && '\n        bottom: 0;\n        transform: scale(1, -1);\n    ';
            });

            var Slot = function Slot(props) {
                var slot = props.slot,
                    path = props.path,
                    slotIndex = props.slotIndex,
                    selectTitle = props.selectTitle,
                    selectText = props.selectText,
                    keystone = props.keystone;
                var choice = slot.choice;


                var currentRune = slot.runes[choice] || false;

                var columns = slot.runes.length > 4 ? 3 : slot.runes.length;

                var toggleDrawer = function toggleDrawer() {
                    props.toggleDrawer(slotIndex);
                };

                return _react2.default.createElement(
                    Block,
                    null,
                    _react2.default.createElement(
                        LeftSide,
                        null,
                        _react2.default.createElement(_PerkButtonWithTooltip2.default, {
                            rune: currentRune,
                            path: path,
                            isActive: slot.isOpen,
                            disabled: props.disabled,
                            onClick: toggleDrawer,
                            size: keystone && 'large',
                            keystone: keystone
                        })
                    ),
                    _react2.default.createElement(
                        RightSide,
                        null,
                        keystone && _react2.default.createElement(
                            KeystoneFlourish, {
                                top: true,
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 286 9'
                            },
                            _react2.default.createElement(
                                'linearGradient', {
                                    id: 'grad1',
                                    x1: '0%',
                                    y1: '0%',
                                    x2: '100%',
                                    y2: '0%'
                                },
                                _react2.default.createElement('stop', {
                                    offset: '0%',
                                    stopColor: path.colors.gradient.bottom,
                                    stopOpacity: '0'
                                }),
                                _react2.default.createElement('stop', {
                                    offset: '50%',
                                    stopColor: path.colors.gradient.top,
                                    stopOpacity: '1'
                                }),
                                _react2.default.createElement('stop', {
                                    offset: '100%',
                                    stopColor: path.colors.gradient.bottom,
                                    stopOpacity: '0'
                                })
                            ),
                            _react2.default.createElement('path', {
                                fill: 'none',
                                stroke: 'url(\'#grad1\')',
                                d: 'M0 4.5h193l4 4'
                            }),
                            _react2.default.createElement('path', {
                                fill: 'none',
                                stroke: 'url(\'#grad1\')',
                                d: 'M286 8.5H62l-7-8H20l-4 4'
                            })
                        ),
                        keystone && _react2.default.createElement(
                            KeystoneFlourish, {
                                bottom: true,
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 286 9'
                            },
                            _react2.default.createElement(
                                'linearGradient', {
                                    id: 'grad2',
                                    x1: '0%',
                                    y1: '0%',
                                    x2: '100%',
                                    y2: '0%'
                                },
                                _react2.default.createElement('stop', {
                                    offset: '0%',
                                    stopColor: 'transparent'
                                }),
                                _react2.default.createElement('stop', {
                                    offset: '50%',
                                    stopColor: path.colors.gradient.top
                                }),
                                _react2.default.createElement('stop', {
                                    offset: '100%',
                                    stopColor: 'transparent'
                                })
                            ),
                            _react2.default.createElement('path', {
                                fill: 'none',
                                stroke: 'url(\'#grad1\')',
                                d: 'M0 4.5h193l4 4'
                            }),
                            _react2.default.createElement('path', {
                                fill: 'none',
                                stroke: 'url(\'#grad1\')',
                                d: 'M286 8.5H62l-7-8H20l-4 4'
                            })
                        ), !slot.isOpen && _react2.default.createElement(
                            'div',
                            null,
                            currentRune ? _react2.default.createElement(
                                Description.Block, {
                                    key: currentRune.name,
                                    animate: true
                                },
                                _react2.default.createElement(
                                    Description.Title, {
                                        color: path.colors.title
                                    },
                                    currentRune.name
                                ),
                                _react2.default.createElement(
                                    _TruncatedText2.default,
                                    null,
                                    _react2.default.createElement(Description.P, {
                                        dangerouslySetInnerHTML: {
                                            __html: currentRune.shortDescription
                                        }
                                    })
                                )
                            ) : _react2.default.createElement(
                                Description.Block, {
                                    key: 'choose-perk'
                                },
                                _react2.default.createElement(
                                    Description.Title, {
                                        small: true
                                    },
                                    selectTitle || ''
                                ),
                                _react2.default.createElement(
                                    _TruncatedText2.default,
                                    null,
                                    _react2.default.createElement(
                                        Description.P,
                                        null,
                                        selectText || window.i18n.runebuilder.selectRune
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Drawer2.default, {
                                path: path,
                                isOpen: slot.isOpen,
                                columns: columns,
                                keystone: keystone
                            },
                            slot.runes.map(function(rune, runeIndex) {
                                var setRuneWithData = function setRuneWithData() {
                                    props.setRune(slotIndex, runeIndex);
                                };

                                var isChosen = slot.choice !== -1 && slot.choice !== runeIndex;

                                return _react2.default.createElement(_PerkButtonWithTooltip2.default, {
                                    key: rune.name,
                                    rune: rune,
                                    path: path,
                                    keystone: keystone,
                                    onClick: setRuneWithData,
                                    isChosen: isChosen
                                });
                            })
                        )
                    )
                );
            };

            exports.default = Slot;

            /***/
        }),

    /***/
    72:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _redux = __webpack_require__(139);

            var _reducers = __webpack_require__(573);

            var _reducers2 = _interopRequireDefault(_reducers);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var store = (0, _redux.createStore)(_reducers2.default);

            exports.default = store;

            /***/
        }),

    /***/
    98:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.loadImage = exports.appNode = undefined;
            exports.runeIconSrc = runeIconSrc;
            exports.validateBuild = validateBuild;
            // exports.facebookShare = facebookShare;
            // exports.twitterShare = twitterShare;
            // exports.vkShare = vkShare;
            exports.shareLink = shareLink;

            var _findIndex = __webpack_require__(61);

            var _findIndex2 = _interopRequireDefault(_findIndex);

            var _helpers = __webpack_require__(11);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var appNode = exports.appNode = document.querySelector('#perks-app');

            function runeIconSrc(runeId) {
                // eslint-disable-next-line no-undef
                return (0, _helpers.assetPath)('/img/runeBuilder/runes/108x108/' + runeId + '.png');
            }

            var loadImage = exports.loadImage = function loadImage(src) {
                return new Promise(function(resolve, reject) {
                    var tempImage = new Image();

                    tempImage.onload = function() {
                        resolve();
                    };
                    tempImage.onerror = function() {
                        reject();
                    };

                    tempImage.src = src;
                });
            };

            function validateBuild(_ref) {
                var paths = _ref.paths,
                    primary = _ref.primary,
                    secondary = _ref.secondary;

                // If primary and secondary arn't set then we can't proceed and the build is invalid.
                if (!primary.slug || !secondary.slug) {
                    return false;
                }

                var remainingPaths = paths.filter(function(path) {
                    return path.name !== primary.name;
                });

                // Build a config using data from primary and secondary.
                var config = [(0, _findIndex2.default)(paths, function(path) {
                    return path.slug === primary.slug;
                }), primary.slots[0].choice, primary.slots[1].choice, primary.slots[2].choice, primary.slots[3].choice, (0, _findIndex2.default)(remainingPaths, function(path) {
                    return path.slug === secondary.slug;
                }), secondary.slots.choices[0], secondary.slots.choices[1]];

                var firstEmptyChoice = (0, _findIndex2.default)(config, function(slot) {
                    return slot === -1;
                });

                // If any slot has a value of -1 it's empty and the build is invalid
                if (firstEmptyChoice !== -1) {
                    return false;
                }

                // If we have a valid build return a string of it's config.
                return config.join('');
            }

            function facebookShare(link) {
                if (window.FB) {
                    window.FB.ui({
                        method: 'share',
                        href: link,
                        quote: window.i18n.runebuilder.share.headline,
                        mobile_iframe: true
                    });

                    var event = {
                        eventAction: 'Share-Facebook',
                        eventLabel: link
                    };

                    (0, _helpers.pushToDataLayer)(event);
                }
            }

            function twitterShare(link) {
                var event = {
                    eventAction: 'Share-Twitter',
                    eventLabel: link
                };

                (0, _helpers.pushToDataLayer)(event);

                var encoded = encodeURIComponent(link);
                var href = 'https://twitter.com/intent/tweet?text=' + window.i18n.runebuilder.share.headline + '&url=' + encoded;
                window.open(href, '_blank');
            }

            function vkShare(link) {
                var encoded = encodeURIComponent(link);
                var href = 'http://vk.com/share.php?url=' + encoded + '&title=' + window.i18n.runebuilder.share.headline + '&description=' + window.i18n.runebuilder.share.body;
                window.open(href);

                var event = {
                    eventAction: 'Share-VK',
                    eventLabel: link
                };

                (0, _helpers.pushToDataLayer)(event);
            }

            function shareLink(link) {
                var event = {
                    eventAction: 'Share-URL',
                    eventLabel: link
                };

                (0, _helpers.pushToDataLayer)(event);
            }

            /***/
        }),

    /***/
    99:
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(1);

            var _react2 = _interopRequireDefault(_react);

            var _styledComponents = __webpack_require__(2);

            var _styledComponents2 = _interopRequireDefault(_styledComponents);

            var _helpers = __webpack_require__(11);

            var _Spinner = __webpack_require__(595);

            var _Spinner2 = _interopRequireDefault(_Spinner);

            var _PreloadedImage = __webpack_require__(229);

            var _PreloadedImage2 = _interopRequireDefault(_PreloadedImage);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            var Button = (0, _styledComponents2.default)('button').withConfig({
                displayName: 'PerkButton__Button'
            })(['display:block;padding:0;width:48px;height:48px;border:0;background:#1e2328;border-radius:50%;box-shadow:inset 0 0 7px #000,0 0 1px #000;position:relative;transition:opacity 0.2s,filter 0.2s;', ' ', ' ', ' &:hover{opacity:1;filter:none;}'], function(props) {
                return props.size === 'small' && '\n        width: 62px;\n        height: 62px;\n    ';
            }, function(props) {
                return props.size === 'large' && '\n        width: 62px;\n        height: 62px;\n    ';
            }, function(props) {
                return props.isChosen && '\n        opacity: 0.5;\n        filter: grayscale(100%);\n    ';
            });

            var DisabledButton = Button.withComponent('div');

            var OuterFrame = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'PerkButton__OuterFrame'
            })(['opacity:0;width:62px;height:60px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:opacity 0.2s;', ' ', ':hover &{opacity:0.5;}'], function(props) {
                return props.size === 'large' && '\n        width: 76px;\n        height: 76px;\n    ';
            }, Button);

            var InnerFrame = (0, _styledComponents2.default)('svg').withConfig({
                displayName: 'PerkButton__InnerFrame'
            })(['width:100%;height:100%;position:relative;']);

            var Icon = (0, _styledComponents2.default)(_PreloadedImage2.default).withConfig({
                displayName: 'PerkButton__Icon'
            })(['margin:0;width:46px;height:46px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:opacity 0.2s,transform 0.2s;', ' ', ' ', ''], function(props) {
                return props.keystone && '\n        width: 82px;\n        height: 82px;\n        z-index: 1;\n    ';
            }, function(props) {
                return props.keystone && props.size === 'large' && '\n        width: 108px;\n        height: 108px;\n    ';
            }, function(props) {
                return props.isActive && '\n        transform: translate(-50%, -50%) scale(0.75);\n        opacity: 0.5;\n    ';
            });

            var SlotButton = function SlotButton(_ref) {
                var rune = _ref.rune,
                    path = _ref.path,
                    _ref$size = _ref.size,
                    size = _ref$size === undefined ? 'default' : _ref$size,
                    keystone = _ref.keystone,
                    isActive = _ref.isActive,
                    isDisabled = _ref.isDisabled,
                    isChosen = _ref.isChosen,
                    onClick = _ref.onClick;

                if (isDisabled) {
                    return _react2.default.createElement(
                        DisabledButton, {
                            size: size,
                            keystone: keystone
                        },
                        _react2.default.createElement(
                            InnerFrame, {
                                viewBox: '0 0 47 47'
                            },
                            _react2.default.createElement('circle', {
                                cx: '23.5',
                                cy: '23.5',
                                r: '22.5',
                                strokeWidth: '2',
                                fill: 'none',
                                stroke: 'url(#gradient-yuma-dallasLight)'
                            })
                        )
                    );
                }

                var stroke = path ? 'url(#gradient-' + path.slug + ')' : 'url(#gradient-yuma-dallasLight)';

                return _react2.default.createElement(
                    Button, {
                        size: size,
                        keystone: keystone,
                        onClick: onClick,
                        isChosen: isChosen
                    },
                    _react2.default.createElement(
                        OuterFrame, {
                            viewBox: '0 0 60 60',
                            size: size
                        },
                        _react2.default.createElement('circle', {
                            cx: '30',
                            cy: '30',
                            r: '28.5',
                            strokeWidth: '3',
                            fill: 'none',
                            stroke: stroke
                        })
                    ),
                    rune && _react2.default.createElement(Icon, {
                        key: rune.runeId,
                        src: (0, _helpers.assetPath)('/img/runeBuilder/runes/108x108/' + rune.runeId + '.png'),
                        alt: '',
                        keystone: keystone,
                        size: size,
                        isActive: isActive
                    }),
                    _react2.default.createElement(
                        InnerFrame, {
                            viewBox: '0 0 47 47'
                        },
                        _react2.default.createElement('circle', {
                            cx: '23.5',
                            cy: '23.5',
                            r: '22.5',
                            strokeWidth: '2',
                            fill: 'none',
                            stroke: stroke
                        })
                    ),
                    _react2.default.createElement(_Spinner2.default, {
                        keystone: keystone,
                        isActive: isActive
                    })
                );
            };

            exports.default = SlotButton;

            /***/
        })

}, [461]);
//# sourceMappingURL=runeBuilder.js.map