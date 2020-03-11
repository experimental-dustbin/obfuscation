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
        while (_) try {
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function q(n) {
    return __awaiter(this, void 0, void 0, function () {
        var a, i, _a, _b, _c, v, _d, e_1_1;
        var e_1, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, s(0, 1)];
                case 1:
                    a = _f.sent();
                    return [4 /*yield*/, s(0, 1)];
                case 2:
                    i = _f.sent();
                    _f.label = 3;
                case 3:
                    _a = i;
                    return [4 /*yield*/, s(n, 1)];
                case 4:
                    if (!(_a < (_f.sent()))) return [3 /*break*/, 14];
                    _f.label = 5;
                case 5:
                    _f.trys.push([5, 10, 11, 12]);
                    _b = (e_1 = void 0, __values(g(i, 2))), _c = _b.next();
                    _f.label = 6;
                case 6:
                    if (!!_c.done) return [3 /*break*/, 9];
                    v = _c.value;
                    _d = a;
                    return [4 /*yield*/, v];
                case 7:
                    a = _d + _f.sent();
                    _f.label = 8;
                case 8:
                    _c = _b.next();
                    return [3 /*break*/, 6];
                case 9: return [3 /*break*/, 12];
                case 10:
                    e_1_1 = _f.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 11:
                    try {
                        if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 12: return [4 /*yield*/, s(i++, 1)];
                case 13:
                    _f.sent();
                    return [3 /*break*/, 3];
                case 14: return [2 /*return*/, a];
            }
        });
    });
}
function s(i, c) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (c < 0) {
                return [2 /*return*/, new Promise(function (r, _r) {
                        return r(i);
                    })];
            }
            else {
                return [2 /*return*/, s(i, c - 1)];
            }
            return [2 /*return*/];
        });
    });
}
function g(i, c) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(c < 0)) return [3 /*break*/, 2];
                return [4 /*yield*/, new Promise(function (r, _r) {
                        return r(i);
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2: return [5 /*yield**/, __values(g(i, c - 1))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = console).log;
                    return [4 /*yield*/, q(4)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [2 /*return*/];
            }
        });
    });
}
main();
