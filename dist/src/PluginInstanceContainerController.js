"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PluginInstanceContainerController = void 0;
var _a = require('@gluestack/helpers'), SpawnHelper = _a.SpawnHelper, DockerodeHelper = _a.DockerodeHelper;
var PluginInstanceContainerController = (function () {
    function PluginInstanceContainerController(app, callerInstance) {
        this.status = 'down';
        this.app = app;
        this.callerInstance = callerInstance;
        this.setStatus(this.callerInstance.gluePluginStore.get('status'));
        this.setPortNumber(this.callerInstance.gluePluginStore.get('port_number'));
        this.setContainerId(this.callerInstance.gluePluginStore.get('container_id'));
    }
    PluginInstanceContainerController.prototype.getCallerInstance = function () {
        return this.callerInstance;
    };
    PluginInstanceContainerController.prototype.getEnv = function () { };
    PluginInstanceContainerController.prototype.installScript = function () {
        return ['npm', 'install', '--legacy-peer-deps'];
    };
    PluginInstanceContainerController.prototype.runScript = function () {
        return ['npm', 'run', 'storybook', '-p', this.getPortNumber()];
    };
    PluginInstanceContainerController.prototype.getDockerJson = function () {
        return {};
    };
    PluginInstanceContainerController.prototype.getStatus = function () {
        return this.status;
    };
    PluginInstanceContainerController.prototype.getPortNumber = function (returnDefault) {
        if (this.portNumber) {
            return this.portNumber;
        }
        if (returnDefault) {
            return 6000;
        }
    };
    PluginInstanceContainerController.prototype.getContainerId = function () {
        return this.containerId;
    };
    PluginInstanceContainerController.prototype.setStatus = function (status) {
        this.callerInstance.gluePluginStore.set('status', status || 'down');
        return (this.status = status || 'down');
    };
    PluginInstanceContainerController.prototype.setPortNumber = function (portNumber) {
        this.callerInstance.gluePluginStore.set('port_number', portNumber || null);
        return (this.portNumber = portNumber || null);
    };
    PluginInstanceContainerController.prototype.setContainerId = function (containerId) {
        this.callerInstance.gluePluginStore.set('container_id', containerId || null);
        return (this.containerId = containerId || null);
    };
    PluginInstanceContainerController.prototype.setDockerfile = function (dockerfile) {
        this.callerInstance.gluePluginStore.set('dockerfile', dockerfile || null);
        return (this.dockerfile = dockerfile || null);
    };
    PluginInstanceContainerController.prototype.getConfig = function () { };
    PluginInstanceContainerController.prototype.up = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ports_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getStatus() !== 'up')) return [3, 2];
                        ports_1 = this.callerInstance.callerPlugin.gluePluginStore.get('ports') || [];
                        return [4, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    DockerodeHelper.getPort(this.getPortNumber(true), ports_1)
                                        .then(function (port) {
                                        _this.portNumber = port;
                                        console.log('\x1b[33m');
                                        console.log("".concat(_this.callerInstance.getName(), ": Running ").concat(_this.installScript().join(' ')));
                                        SpawnHelper.run(_this.callerInstance.getInstallationPath(), _this.installScript())
                                            .then(function () {
                                            console.log("".concat(_this.callerInstance.getName(), ": Running ").concat(_this.runScript().join(' ')));
                                            console.log('\x1b[0m');
                                            SpawnHelper.start(_this.callerInstance.getInstallationPath(), _this.runScript())
                                                .then(function (_a) {
                                                var processId = _a.processId;
                                                _this.setStatus('up');
                                                _this.setPortNumber(_this.portNumber);
                                                _this.setContainerId(processId);
                                                ports_1.push(_this.portNumber);
                                                _this.callerInstance.callerPlugin.gluePluginStore.set('ports', ports_1);
                                                console.log('\x1b[32m');
                                                console.log("Open http://localhost:".concat(_this.getPortNumber(), "/ in browser"));
                                                console.log('\x1b[0m');
                                                return resolve(true);
                                            })["catch"](function (e) {
                                                return reject(e);
                                            });
                                        })["catch"](function (e) {
                                            return reject(e);
                                        });
                                    })["catch"](function (e) {
                                        return reject(e);
                                    });
                                    return [2];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    PluginInstanceContainerController.prototype.down = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ports_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getStatus() !== 'down')) return [3, 2];
                        ports_2 = this.callerInstance.callerPlugin.gluePluginStore.get('ports') || [];
                        return [4, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    SpawnHelper.stop(this.getContainerId())
                                        .then(function () {
                                        _this.setStatus('down');
                                        var index = ports_2.indexOf(_this.getPortNumber());
                                        if (index !== -1) {
                                            ports_2.splice(index, 1);
                                        }
                                        _this.callerInstance.callerPlugin.gluePluginStore.set('ports', ports_2);
                                        _this.setPortNumber(null);
                                        _this.setContainerId(null);
                                        return resolve(true);
                                    })["catch"](function (e) {
                                        return reject(e);
                                    });
                                    return [2];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    PluginInstanceContainerController.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    return PluginInstanceContainerController;
}());
exports.PluginInstanceContainerController = PluginInstanceContainerController;
//# sourceMappingURL=PluginInstanceContainerController.js.map