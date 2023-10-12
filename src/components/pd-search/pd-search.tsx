import { createPopper, Instance } from '@popperjs/core';
import {
  Component,
  ComponentDidLoad,
  ComponentDidUpdate,
  ComponentInterface,
  ComponentWillLoad,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { InputChangeEventDetail } from '../../types';

@Component({
  tag: 'pd-search',
  styleUrl: 'pd-search.scss',
  shadow: true,
})
export class Search implements ComponentInterface, ComponentWillLoad, ComponentDidLoad, ComponentDidUpdate {
  private inputElement?: HTMLInputElement;
  private menuElement: HTMLElement;
  private wrapperElement: HTMLElement;
  private popper: Instance;

  @Element() element: HTMLElement;

  @State() open: boolean = false;
  @State() selectedIndex: number = -1;

  /**
   * Values shown as search results
   */
  @Prop({ mutable: true }) results: string[] = [];

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number = '';

  // used to hold input value in case we need to reset on escape
  private inputValue?: string | number = '';

  /**
   * Search box label
   */
  @Prop() label?: string;

  /**
   * Show matching parts in resuls as highlighted
   */
  @Prop() highlight?: boolean = true;

  /**
   * Input tag size (check pd-input 'size' for more info)
   */
  @Prop() size?: number = 1;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'pd-input' }) pdInput!: EventEmitter<InputChangeEventDetail>;

  /**
   * Emitted when the value has changed.
   */
  @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<InputChangeEventDetail>;

  /**
   * Emitted when a search request occurred.
   */
  @Event({ eventName: 'pd-search' }) pdSearch!: EventEmitter<InputChangeEventDetail>;

  /**
   * Emitted when the input loses focus.
   */
  @Event({ eventName: 'pd-blur' }) pdBlur!: EventEmitter<void>;

  /**
   * Emitted when the input has focus.
   */
  @Event({ eventName: 'pd-focus' }) pdFocus!: EventEmitter<void>;

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  valueChanged() {
    this.pdChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }

  @Watch('results')
  resultsChanged(results: any) {
    this.results = this.validateResults(results);
    if (this.results.length > 0) {
      this.selectedIndex = -1;
      this.open = true;
    } else this.open = false;
  }

  @Watch('selectedIndex')
  indexChanged(index: number) {
    const menu = this.element.shadowRoot.querySelector('.pd-search-dropdown') as HTMLElement;
    const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<HTMLPdDropdownItemElement>;

    dropdownItemNodes.forEach((item, itemIndex) => {
      const centerItem = Math.ceil(5 / 2) - 1;
      if (itemIndex === index) menu.scrollTop = item.offsetTop - 48 * centerItem;
    });
  }

  public componentWillLoad() {
    this.results = this.validateResults(this.results);
  }

  public componentDidLoad() {
    this.popper = this.createMenuPopper(this.wrapperElement, this.menuElement);
  }

  public componentDidUpdate() {
    this.popper.forceUpdate();
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    switch (ev.key) {
      case 'Tab': {
        this.open = false;
        break;
      }
      case 'Escape': {
        ev.preventDefault();
        this.open = false;
        this.value = this.inputValue;
        break;
      }
      case 'Enter': {
        ev.preventDefault();
        this.open = false;
        this.pdSearch.emit({ value: this.value });
        this.inputValue = this.value;
        break;
      }
      case 'ArrowDown': {
        ev.preventDefault();
        // try to reopen if there are results
        if (!this.open && this.results?.length > 0) {
          this.open = true;
          return;
        } else if (!this.open) return;
        const currentIndex = this.selectedIndex;
        this.selectedIndex = currentIndex >= this.results.length - 1 ? currentIndex : currentIndex + 1;
        this.setValue(this.results[this.selectedIndex]);
        break;
      }
      case 'ArrowUp': {
        ev.preventDefault();
        if (!this.open) return;
        const currentIndex = this.selectedIndex;
        this.selectedIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
        this.setValue(this.results[this.selectedIndex]);
        break;
      }
      default: {
        this.selectedIndex = -1;
      }
    }
  }

  @Listen('click', { target: 'body' })
  handleClickOutside(ev: MouseEvent) {
    if (ev.target !== this.element) {
      this.open = false;
    }
  }

  /**
   * Sets focus on the specified `pd-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }

  private onClickInput = () => {
    if (this.results?.length > 0) {
      this.open = true;
    }
  };

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    this.setValue(input?.value || '', true);
    this.pdInput.emit({ value: this.value });
  };

  private onBlur = () => {
    if (!this.disabled) this.pdBlur.emit();
  };

  private onFocus = () => {
    this.pdFocus.emit();
  };

  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }

  private setValue(value: string | number | null, isInput: boolean = false): void {
    this.value = value;
    if (isInput) this.inputValue = value;
  }

  private selectItem(value: string, index: number) {
    this.setValue(value, true);
    this.selectedIndex = index;
    this.pdSearch.emit({ value: this.value });
    this.open = false;
  }

  private reset = (ev: Event) => {
    ev.preventDefault();
    this.setValue('', true);
    this.pdSearch.emit({ value: this.value });
    this.open = false;
  };

  private search = (ev: Event) => {
    ev.preventDefault();
    this.pdSearch.emit({ value: this.value });
    this.open = false;
  };

  private validateResults(results: any) {
    return Array.isArray(results) ? results : [];
  }

  // create a popper js element for the menu
  private createMenuPopper(refElement, menu): Instance {
    return createPopper(refElement, menu, {
      placement: 'bottom-start',
    });
  }

  public render() {
    const value = this.getValue();

    return (
      <Host role="search">
        <label
          class={{
            'pd-search-label': true,
            'pd-search-disabled': this.disabled,
          }}
          data-test="pd-search-label"
        >
          {this.renderLabel()}
          <div class="pd-search-input-wrapper" ref={el => (this.wrapperElement = el)}>
            <input
              class="pd-search-input"
              ref={el => (this.inputElement = el)}
              disabled={this.disabled}
              placeholder={this.placeholder || ''}
              value={value}
              onClick={this.onClickInput}
              onInput={this.onInput}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              size={this.size}
              data-test="pd-search-input"
            />
            <button class="pd-search-clear" onClick={this.reset} tabindex="-1" data-test="pd-search-reset">
              <pd-icon class="pd-search-clear-icon" name="cancel" size={2.4}></pd-icon>
            </button>
            <button class="pd-search-button" onClick={this.search} tabindex="-1" data-test="pd-search-enter">
              <pd-icon class="pd-search-button-icon" name="search" size={2.4}></pd-icon>
            </button>
          </div>
        </label>
        {this.renderDropdownItems()}
      </Host>
    );
  }

  private renderDropdownItems() {
    return (
      <div
        ref={el => (this.menuElement = el)}
        class="pd-search-dropdown"
        style={{
          display: this.open ? 'block' : 'none',
        }}
      >
        {this.results.map((searchString, i) => (
          <pd-dropdown-item
            selected={i === this.selectedIndex || false}
            value={searchString}
            highlight={this.highlight ? this.inputValue : ''}
            onClick={() => this.selectItem(searchString, i)}
            data-test={`pd-search-dropdown-item-${i}`}
          ></pd-dropdown-item>
        ))}
      </div>
    );
  }

  private renderLabel() {
    if (!this.label) return;

    return <div class="pd-search-label-text">{this.label}</div>;
  }
}
