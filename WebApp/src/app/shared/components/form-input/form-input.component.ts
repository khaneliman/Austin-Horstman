import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="group" [class.focused]="isFocused" [class.error]="hasError">
      <!-- Label -->
      <label *ngIf="label" [for]="inputId" [class]="labelClasses">
        {{ label }}
        <span *ngIf="required" class="text-red-500 ml-1">*</span>
      </label>

      <!-- Input container -->
      <div class="relative">
        <!-- Leading icon -->
        <div *ngIf="leadingIcon" class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <ng-icon [name]="leadingIcon" size="1rem" [class]="iconClasses"> </ng-icon>
        </div>

        <!-- Input field -->
        <input
          *ngIf="type !== 'textarea'"
          [id]="inputId"
          [type]="type"
          [class]="inputClasses"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="readonly"
          [value]="value"
          (input)="onInput($event)"
          (focus)="onFocus()"
          (blur)="onBlur()"
        />

        <!-- Textarea -->
        <textarea
          *ngIf="type === 'textarea'"
          [id]="inputId"
          [class]="textareaClasses"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="readonly"
          [rows]="rows"
          [value]="value"
          (input)="onInput($event)"
          (focus)="onFocus()"
          (blur)="onBlur()"
        >
        </textarea>

        <!-- Trailing icon/button -->
        <div *ngIf="trailingIcon" class="absolute inset-y-0 right-0 pr-4 flex items-center">
          <button
            *ngIf="trailingClickable"
            type="button"
            (click)="onTrailingClick()"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ng-icon [name]="trailingIcon" size="1rem"></ng-icon>
          </button>
          <ng-icon *ngIf="!trailingClickable" [name]="trailingIcon" size="1rem" [class]="iconClasses"> </ng-icon>
        </div>
      </div>

      <!-- Help text -->
      <p *ngIf="helpText" [class]="helpTextClasses">
        {{ helpText }}
      </p>

      <!-- Error message -->
      <p *ngIf="errorMessage" class="mt-1 text-sm text-red-600 dark:text-red-400">
        {{ errorMessage }}
      </p>
    </div>
  `,
  styles: [],
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea' = 'text';
  @Input() placeholder?: string;
  @Input() helpText?: string;
  @Input() errorMessage?: string;
  @Input() leadingIcon?: string;
  @Input() trailingIcon?: string;
  @Input() trailingClickable = false;
  @Input() required = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() variant: 'default' | 'filled' | 'outlined' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() rows = 4;
  @Input() inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  @Output() trailingClick = new EventEmitter<void>();
  @Output() inputFocus = new EventEmitter<void>();
  @Output() inputBlur = new EventEmitter<void>();

  value = '';
  isFocused = false;

  // ControlValueAccessor implementation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  private onChange = (_value: string) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched = () => {};

  get hasError(): boolean {
    return !!this.errorMessage;
  }

  get labelClasses(): string {
    const classes = ['block font-medium mb-2'];

    switch (this.size) {
      case 'sm':
        classes.push('text-xs');
        break;
      case 'md':
        classes.push('text-sm');
        break;
      case 'lg':
        classes.push('text-base');
        break;
    }

    if (this.hasError) {
      classes.push('text-red-700', 'dark:text-red-400');
    } else {
      classes.push('text-gray-700', 'dark:text-gray-300');
    }

    return classes.join(' ');
  }

  get inputClasses(): string {
    const classes = ['w-full transition-all duration-200'];

    // Padding based on icons and size
    if (this.leadingIcon && this.trailingIcon) {
      classes.push('pl-12 pr-12');
    } else if (this.leadingIcon) {
      classes.push('pl-12 pr-4');
    } else if (this.trailingIcon) {
      classes.push('pl-4 pr-12');
    } else {
      classes.push('px-4');
    }

    // Size-based padding
    switch (this.size) {
      case 'sm':
        classes.push('py-2 text-sm');
        break;
      case 'md':
        classes.push('py-4 text-base');
        break;
      case 'lg':
        classes.push('py-5 text-lg');
        break;
    }

    // Variant styles
    switch (this.variant) {
      case 'default':
        classes.push(
          'border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-gray-100'
        );
        break;
      case 'filled':
        classes.push(
          'border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
        );
        break;
      case 'outlined':
        classes.push(
          'border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
        );
        break;
    }

    // Focus and error states
    if (this.hasError) {
      classes.push('border-red-300 dark:border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent');
    } else {
      classes.push('focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent');
    }

    // Disabled state
    if (this.disabled) {
      classes.push('opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-700');
    }

    return classes.join(' ');
  }

  get textareaClasses(): string {
    return this.inputClasses + ' resize-vertical';
  }

  get iconClasses(): string {
    return this.hasError ? 'text-red-400 dark:text-red-400' : 'text-gray-400 dark:text-gray-500';
  }

  get helpTextClasses(): string {
    const classes = ['mt-1'];

    switch (this.size) {
      case 'sm':
        classes.push('text-xs');
        break;
      case 'md':
        classes.push('text-sm');
        break;
      case 'lg':
        classes.push('text-base');
        break;
    }

    classes.push('text-gray-600', 'dark:text-gray-400');

    return classes.join(' ');
  }

  // Event handlers
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onFocus(): void {
    this.isFocused = true;
    this.inputFocus.emit();
  }

  onBlur(): void {
    this.isFocused = false;
    this.onTouched();
    this.inputBlur.emit();
  }

  onTrailingClick(): void {
    this.trailingClick.emit();
  }

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
