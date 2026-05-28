import { ChangeDetectionStrategy, Component, computed, forwardRef, input, output, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

export type FormInputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea';
export type FormInputVariant = 'default' | 'filled' | 'outlined';
export type FormInputSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-form-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="group" [class.focused]="isFocused()" [class.error]="hasError()">
      @if (label()) {
        <label [for]="inputId()" [class]="labelClasses()">
          {{ label() }}
          @if (required()) {
            <span class="text-red-500 ml-1">*</span>
          }
        </label>
      }

      <div class="relative">
        @if (leadingIcon(); as li) {
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <ng-icon [name]="li" size="1rem" [class]="iconClasses()"></ng-icon>
          </div>
        }

        @if (type() !== 'textarea') {
          <input
            [id]="inputId()"
            [type]="type()"
            [class]="inputClasses()"
            [placeholder]="placeholder() ?? ''"
            [disabled]="disabled()"
            [readonly]="readonly()"
            [value]="value()"
            (input)="onInput($event)"
            (focus)="onFocus()"
            (blur)="onBlur()"
          />
        } @else {
          <textarea
            [id]="inputId()"
            [class]="textareaClasses()"
            [placeholder]="placeholder() ?? ''"
            [disabled]="disabled()"
            [readonly]="readonly()"
            [rows]="rows()"
            [value]="value()"
            (input)="onInput($event)"
            (focus)="onFocus()"
            (blur)="onBlur()"
          ></textarea>
        }

        @if (trailingIcon(); as ti) {
          <div class="absolute inset-y-0 right-0 pr-4 flex items-center">
            @if (trailingClickable()) {
              <button
                type="button"
                (click)="trailingClick.emit()"
                class="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ng-icon [name]="ti" size="1rem"></ng-icon>
              </button>
            } @else {
              <ng-icon [name]="ti" size="1rem" [class]="iconClasses()"></ng-icon>
            }
          </div>
        }
      </div>

      @if (helpText(); as ht) {
        <p [class]="helpTextClasses()">{{ ht }}</p>
      }

      @if (errorMessage(); as em) {
        <p class="mt-1 text-sm text-red-600 dark:text-red-400">{{ em }}</p>
      }
    </div>
  `,
})
export class FormInputComponent implements ControlValueAccessor {
  readonly label = input<string>();
  readonly type = input<FormInputType>('text');
  readonly placeholder = input<string>();
  readonly helpText = input<string>();
  readonly errorMessage = input<string>();
  readonly leadingIcon = input<string>();
  readonly trailingIcon = input<string>();
  readonly trailingClickable = input(false);
  readonly required = input(false);
  readonly readonly = input(false);
  readonly variant = input<FormInputVariant>('default');
  readonly size = input<FormInputSize>('md');
  readonly rows = input(4);
  readonly inputId = input<string>(`input-${Math.random().toString(36).slice(2, 11)}`);

  readonly trailingClick = output<void>();
  readonly inputFocus = output<void>();
  readonly inputBlur = output<void>();

  readonly value = signal('');
  readonly isFocused = signal(false);
  readonly disabled = signal(false);

  readonly hasError = computed(() => !!this.errorMessage());

  readonly labelClasses = computed(() => {
    const classes = ['block font-medium mb-2'];
    switch (this.size()) {
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
    classes.push(
      ...(this.hasError() ? ['text-red-700', 'dark:text-red-400'] : ['text-gray-700', 'dark:text-gray-300'])
    );
    return classes.join(' ');
  });

  readonly inputClasses = computed(() => {
    const classes = ['w-full transition-all duration-200'];
    const leading = !!this.leadingIcon();
    const trailing = !!this.trailingIcon();

    if (leading && trailing) classes.push('pl-12 pr-12');
    else if (leading) classes.push('pl-12 pr-4');
    else if (trailing) classes.push('pl-4 pr-12');
    else classes.push('px-4');

    switch (this.size()) {
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

    switch (this.variant()) {
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

    classes.push(
      this.hasError()
        ? 'border-red-300 dark:border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent'
        : 'focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent'
    );

    if (this.disabled()) classes.push('opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-700');

    return classes.join(' ');
  });

  readonly textareaClasses = computed(() => `${this.inputClasses()} resize-vertical`);

  readonly iconClasses = computed(() =>
    this.hasError() ? 'text-red-400 dark:text-red-400' : 'text-gray-400 dark:text-gray-500'
  );

  readonly helpTextClasses = computed(() => {
    const classes = ['mt-1'];
    switch (this.size()) {
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
  });

  private onChange: (value: string) => void = () => {
    // noop
  };
  private onTouched: () => void = () => {
    // noop
  };

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.value.set(target.value);
    this.onChange(target.value);
  }

  onFocus(): void {
    this.isFocused.set(true);
    this.inputFocus.emit();
  }

  onBlur(): void {
    this.isFocused.set(false);
    this.onTouched();
    this.inputBlur.emit();
  }

  writeValue(value: string | null): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
