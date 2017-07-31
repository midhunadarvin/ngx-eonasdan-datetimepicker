"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var moment = require("moment");
require("eonasdan-bootstrap-datetimepicker");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var eonasdan_bootstrap_datetimepicker_1 = require("eonasdan-bootstrap-datetimepicker");
exports.SQ_DATETIMEPICKER_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SqDatetimepickerComponent; }),
    multi: true,
};
exports.SQ_DATETIMEPICKER_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return SqDatetimepickerComponent; }),
    multi: true,
};
var SqDatetimepickerComponent = (function () {
    function SqDatetimepickerComponent(el) {
        this.el = el;
        this.mode = 'input-group';
        this.inputClass = 'form-control';
        this.groupClass = '';
        this.groupIconClass = 'glyphicon glyphicon-calendar';
        this.readOnly = false;
        this.placeholder = '';
        this.dpChange = new core_1.EventEmitter();
        this.dpError = new core_1.EventEmitter();
        this.dpHide = new core_1.EventEmitter();
        this.dpShow = new core_1.EventEmitter();
        this.dpUpdate = new core_1.EventEmitter();
        this.validModes = ['input-group', 'input', 'inline'];
        this.propagateChange = function (_) { };
    }
    SqDatetimepickerComponent.prototype.ngOnInit = function () {
        if (this.validModes.indexOf(this.mode) === -1) {
            var modes = this.validModes.map(function (m) { return "\"" + m + "\""; }).join(', ');
            throw this.mode + " is not valid mode, use one of following: " + modes;
        }
        this.initDatetimepicker();
    };
    SqDatetimepickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.dpObject && changes && changes['options']) {
            this.dpObject.options(this.options);
        }
    };
    SqDatetimepickerComponent.prototype.ngOnDestroy = function () {
        this.dpObject.destroy();
    };
    SqDatetimepickerComponent.prototype.writeValue = function (obj) {
        if (typeof obj === 'string' || obj instanceof String) {
            obj = moment(obj);
        }
        this.dpObject.date(obj);
    };
    SqDatetimepickerComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SqDatetimepickerComponent.prototype.validate = function (c) {
        return (!this.parseError) ? null : {
            dateParseError: {
                valid: false,
            },
        };
    };
    SqDatetimepickerComponent.prototype.registerOnTouched = function () { };
    SqDatetimepickerComponent.prototype.onChange = function (date) {
        this.propagateChange(date);
    };
    SqDatetimepickerComponent.prototype.initDatetimepicker = function () {
        for (var _i = 0, _a = this.validModes; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m !== this.mode) {
                $(this.el.nativeElement.querySelector(".sq-datetimepicker-" + m)).remove();
            }
        }
        this.dpElement = $(this.el.nativeElement.querySelector(".sq-datetimepicker-" + this.mode));
        var options = Object.assign({}, this.options);
        options.inline = this.mode === 'inline';
        this.dpElement.datetimepicker(options);
        this.dpObject = this.dpElement.data('DateTimePicker');
        this.bindEvents();
    };
    SqDatetimepickerComponent.prototype.bindEvents = function () {
        var _this = this;
        this.dpElement.on('dp.hide', function (e) { _this.dpHide.emit(e); });
        this.dpElement.on('dp.show', function () { _this.dpShow.emit(); });
        this.dpElement.on('dp.change', function (e) {
            _this.parseError = false;
            _this.onChange(e.date || null);
            _this.dpChange.emit(e);
        });
        this.dpElement.on('dp.error', function (e) {
            _this.parseError = true;
            _this.onChange(null);
            _this.dpError.emit(e);
        });
        this.dpElement.on('dp.update', function (e) { _this.dpUpdate.emit(e); });
    };
    return SqDatetimepickerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof eonasdan_bootstrap_datetimepicker_1.SetOptions !== "undefined" && eonasdan_bootstrap_datetimepicker_1.SetOptions) === "function" && _a || Object)
], SqDatetimepickerComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SqDatetimepickerComponent.prototype, "mode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SqDatetimepickerComponent.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SqDatetimepickerComponent.prototype, "inputClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SqDatetimepickerComponent.prototype, "groupClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SqDatetimepickerComponent.prototype, "groupIconClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SqDatetimepickerComponent.prototype, "readOnly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SqDatetimepickerComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SqDatetimepickerComponent.prototype, "dpChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SqDatetimepickerComponent.prototype, "dpError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SqDatetimepickerComponent.prototype, "dpHide", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SqDatetimepickerComponent.prototype, "dpShow", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SqDatetimepickerComponent.prototype, "dpUpdate", void 0);
SqDatetimepickerComponent = __decorate([
    core_1.Component({
        selector: 'sq-datetimepicker',
        template: "\n    <div [ngStyle]=\"style\">\n      <div class=\"sq-datetimepicker-input-group input-group date\" [ngClass]=\"groupClass\">\n        <input type=\"text\" [ngClass]=\"inputClass\" [readOnly]=\"readOnly\" [placeholder]=\"placeholder\"/>\n        <span class=\"input-group-addon\">\n          <span class=\"fa fa-calendar\" [ngClass]=\"groupIconClass\"></span>\n        </span>\n      </div>\n      <input type=\"text\" class=\"sq-datetimepicker-input\" [ngClass]=\"inputClass\" [readOnly]=\"readOnly\" [placeholder]=\"placeholder\" />\n      <div class=\"sq-datetimepicker-inline\"></div>\n    </div>",
        providers: [exports.SQ_DATETIMEPICKER_VALUE_ACCESSOR, exports.SQ_DATETIMEPICKER_VALIDATOR]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SqDatetimepickerComponent);
exports.SqDatetimepickerComponent = SqDatetimepickerComponent;
var _a;
//# sourceMappingURL=sq-datetimepicker.component.js.map