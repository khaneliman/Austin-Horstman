import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

export interface MenuItem {
  label?: string;
  icon?: string;
  action?: () => void;
  href?: string;
  routerLink?: string | string[];
  routerLinkParams?: Record<string, unknown>;
  divider?: boolean;
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
}

export type DropdownPosition = 'left' | 'right' | 'center';
export type DropdownWidth = 'sm' | 'md' | 'lg' | 'xl' | 'auto';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent implements OnInit, OnDestroy {
  @Input() items: MenuItem[] = [];
  @Input() position: DropdownPosition = 'left';
  @Input() width: DropdownWidth = 'md';
  @Input() isOpen = false;
  @Input() darkMode = false;
  @Input() triggerElement?: HTMLElement;
  @Input() closeOnOutsideClick = true;
  @Input() closeOnItemClick = true;
  @Input() showTransition = true;
  @Input() offset = 8; // Distance from trigger in pixels
  @Input() ariaLabelledBy?: string;
  @Input() role = 'menu';

  @Output() itemClick = new EventEmitter<MenuItem>();
  @Output() openChange = new EventEmitter<boolean>();
  @Output() outsideClick = new EventEmitter<Event>();

  private focusedIndex = -1;
  private keyboardNavEnabled = true;

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    if (this.isOpen && this.keyboardNavEnabled) {
      this.setupKeyboardNavigation();
    }
  }

  ngOnDestroy(): void {
    this.focusedIndex = -1;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.closeOnOutsideClick && this.isOpen) {
      const target = event.target as HTMLElement;
      const dropdown = this.elementRef.nativeElement;

      // Check if click is outside dropdown and trigger element
      if (!dropdown.contains(target) && (!this.triggerElement || !this.triggerElement.contains(target))) {
        this.outsideClick.emit(event);
        this.closeMenu();
      }
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.isOpen || !this.keyboardNavEnabled) return;

    const enabledItems = this.getEnabledMenuItems();

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.navigateDown(enabledItems);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.navigateUp(enabledItems);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.focusedIndex >= 0) {
          this.selectItem(enabledItems[this.focusedIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.closeMenu();
        if (this.triggerElement) {
          this.triggerElement.focus();
        }
        break;
      case 'Tab':
        this.closeMenu();
        break;
    }
  }

  onItemClick(item: MenuItem, event: Event): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    this.itemClick.emit(item);

    if (item.action) {
      item.action();
    }

    if (this.closeOnItemClick && !item.divider) {
      this.closeMenu();
    }
  }

  onItemKeydown(item: MenuItem, event: KeyboardEvent): void {
    // Handle individual item keyboard events if needed
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onItemClick(item, event);
    }
  }

  private setupKeyboardNavigation(): void {
    // Focus the dropdown menu for keyboard navigation
    setTimeout(() => {
      const menuElement = this.elementRef.nativeElement.querySelector('[role="menu"]') as HTMLElement;
      if (menuElement) {
        menuElement.focus();
      }
    }, 0);
  }

  private navigateDown(enabledItems: MenuItem[]): void {
    this.focusedIndex = (this.focusedIndex + 1) % enabledItems.length;
    this.updateFocus();
  }

  private navigateUp(enabledItems: MenuItem[]): void {
    this.focusedIndex = this.focusedIndex <= 0 ? enabledItems.length - 1 : this.focusedIndex - 1;
    this.updateFocus();
  }

  private updateFocus(): void {
    const menuItems = this.elementRef.nativeElement.querySelectorAll('[role="menuitem"]:not([disabled])');
    const targetItem = menuItems[this.focusedIndex] as HTMLElement;
    if (targetItem) {
      targetItem.focus();
    }
  }

  private selectItem(item: MenuItem): void {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    this.onItemClick(item, event);
  }

  private closeMenu(): void {
    this.focusedIndex = -1;
    this.openChange.emit(false);
  }

  private getEnabledMenuItems(): MenuItem[] {
    return this.items.filter((item) => !item.disabled && !item.divider);
  }

  get menuClasses(): string {
    const classes = [
      'dropdown-menu',
      'absolute',
      'z-50',
      'py-2',
      'rounded-xl',
      'shadow-lg',
      'ring-1',
      'focus:outline-none',
    ];

    // Dark mode styles
    if (this.darkMode) {
      classes.push('bg-gray-800', 'ring-gray-700');
    } else {
      classes.push('bg-white', 'ring-gray-200');
    }

    // Position classes
    switch (this.position) {
      case 'left':
        classes.push('left-0');
        break;
      case 'right':
        classes.push('right-0');
        break;
      case 'center':
        classes.push('left-1/2', '-translate-x-1/2');
        break;
    }

    // Width classes
    switch (this.width) {
      case 'sm':
        classes.push('w-40');
        break;
      case 'md':
        classes.push('w-48');
        break;
      case 'lg':
        classes.push('w-56');
        break;
      case 'xl':
        classes.push('w-64');
        break;
      case 'auto':
        classes.push('w-auto', 'min-w-48');
        break;
    }

    // Transition classes
    if (this.showTransition) {
      classes.push('transition-all', 'duration-200', 'ease-out');

      if (this.isOpen) {
        classes.push('opacity-100', 'scale-100');
      } else {
        classes.push('opacity-0', 'scale-95', 'pointer-events-none');
      }
    }

    // Offset positioning
    classes.push(`mt-${this.offset === 8 ? '2' : '1'}`);

    return classes.join(' ');
  }

  get itemClasses(): string {
    const baseClasses = [
      'flex',
      'items-center',
      'w-full',
      'px-4',
      'py-2',
      'text-left',
      'transition-colors',
      'duration-150',
      'focus:outline-none',
    ];

    if (this.darkMode) {
      baseClasses.push(
        'text-gray-200',
        'hover:bg-gray-700',
        'hover:text-white',
        'focus:bg-gray-700',
        'focus:text-white'
      );
    } else {
      baseClasses.push(
        'text-gray-700',
        'hover:bg-blue-50',
        'hover:text-blue-600',
        'focus:bg-blue-50',
        'focus:text-blue-600'
      );
    }

    return baseClasses.join(' ');
  }

  get disabledItemClasses(): string {
    const classes = ['flex', 'items-center', 'w-full', 'px-4', 'py-2', 'cursor-not-allowed'];

    if (this.darkMode) {
      classes.push('text-gray-500');
    } else {
      classes.push('text-gray-400');
    }

    return classes.join(' ');
  }

  get dividerClasses(): string {
    const classes = ['my-2'];

    if (this.darkMode) {
      classes.push('border-t', 'border-gray-700');
    } else {
      classes.push('border-t', 'border-gray-100');
    }

    return classes.join(' ');
  }

  readonly iconClasses = 'mr-3 flex-shrink-0';

  readonly trackByFn = (index: number, item: MenuItem): string | number => {
    return item.id || item.label || index;
  };
}
