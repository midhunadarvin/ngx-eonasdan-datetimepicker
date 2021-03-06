import 'eonasdan-bootstrap-datetimepicker';
import { OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { SetOptions, HideEventObject, ChangeEventObject, ErrorEventObject, UpdateEventObject } from 'eonasdan-bootstrap-datetimepicker';
export declare const SQ_DATETIMEPICKER_VALUE_ACCESSOR: any;
export declare const SQ_DATETIMEPICKER_VALIDATOR: any;
export declare class SqDatetimepickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
    private el;
    options: SetOptions;
    mode: 'input-group' | 'input' | 'inline';
    style: string;
    inputClass: string;
    groupClass: string;
    groupIconClass: string;
    readOnly: boolean;
    placeholder: string;
    dpChange: EventEmitter<ChangeEventObject>;
    dpError: EventEmitter<ErrorEventObject>;
    dpHide: EventEmitter<HideEventObject>;
    dpShow: EventEmitter<any>;
    dpUpdate: EventEmitter<UpdateEventObject>;
    private parseError;
    private dpElement;
    private dpObject;
    private validModes;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    validate(c: FormControl): {
        dateParseError: {
            valid: boolean;
        };
    };
    registerOnTouched(): void;
    private onChange(date);
    private propagateChange;
    private initDatetimepicker();
    private bindEvents();
}
