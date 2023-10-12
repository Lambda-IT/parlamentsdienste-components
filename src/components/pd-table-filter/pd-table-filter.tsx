import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Listen, Method, Prop } from '@stencil/core';

@Component({
  tag: 'pd-table-filter',
  styleUrl: 'pd-table-filter.scss',
  shadow: true,
})
export class TableFilter implements ComponentInterface {
  @Element() element: HTMLElement;
  private inputRef: HTMLInputElement;

  /**
   * filter value
   */
  @Prop({ mutable: true }) value = '';

  /**
   * Emitted when filter is confirmed.
   */
  @Event({ eventName: 'pd-confirm' }) pdConfirm!: EventEmitter<string>;

  /**
   * Emitted when filter is confirmed.
   */
  @Event({ eventName: 'pd-close' }) pdClose!: EventEmitter<void>;

  /**
   * Emitted when filter input value changed.
   */
  @Event({ eventName: 'pd-filter-input' }) pdInputChange!: EventEmitter<string>;

  @Method()
  async reset() {
    this.value = '';
  }

  @Method()
  async setValue(value: string) {
    this.value = value;
  }

  @Method()
  async focusInput() {
    this.inputRef.focus();
  }

  private onClear = () => {
    this.value = '';
    this.inputRef.focus();
    this.value = this.value;
  };

  private onConfirm = () => {
    this.pdConfirm.emit(this.value);
  };

  private handleFilterChange(ev) {
    this.value = ev.target.value;
    this.pdInputChange.emit(this.value);
  }

  private onSubmit(ev: KeyboardEvent) {
    if (ev.key !== 'Enter') return;

    this.pdConfirm.emit(this.value);
  }

  @Listen('click', { target: 'body' })
  handleClick(ev: MouseEvent) {
    // the filter is inside the shadowdom of the table, we need to find the clicked element inside of the shadow dom
    // ev.target doesn't work because of that
    if (!ev.composedPath().includes(this.element)) this.pdClose.emit();
  }

  public render() {
    return (
      <Host>
        <div class="pd-table-filter-wrapper">
          <div class="pd-table-search-input-wrapper">
            <input
              ref={el => (this.inputRef = el as HTMLInputElement)}
              class="pd-table-search-input"
              onInput={ev => this.handleFilterChange(ev)}
              placeholder="Stichwort, Name …"
              value={this.value}
              onKeyDown={ev => this.onSubmit(ev)}
              data-test="pd-table-filter-input"
            />
            <button class="pd-table-search-button" onClick={this.onConfirm} tabindex="-1">
              <pd-icon class="pd-table-search-button-icon" name="search" size={2.375}></pd-icon>
            </button>
          </div>
          <button class="pd-table-filter-clear" onClick={this.onClear} data-test="pd-table-filter-clear">
            <pd-icon class="pd-table-filter-close" size={2.375} name="close"></pd-icon>
          </button>
        </div>
      </Host>
    );
  }
}
