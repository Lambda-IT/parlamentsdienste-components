import { Component, Host, h, Event, EventEmitter, Watch, Method, Prop, Listen, Element, State } from '@stencil/core';
import { InputChangeEventDetail } from '../../interface';
import { createPopper, Instance } from '@popperjs/core';

@Component({
    tag: 'pd-search',
    styleUrl: 'pd-search.scss',
    assetsDirs: ['assets-search'],
    shadow: true,
})
export class Search {
    private nativeInput?: HTMLInputElement;

    @Element() element!: HTMLElement;
    private menuElement: HTMLElement;
    private labelElement: HTMLElement;
    private popper: Instance;

    /**
     * Values shown as search results
     */
    @Prop() results: string[] = [];

    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;

    /**
     * Instructional text that shows before the input has a value.
     */
    @Prop() placeholder?: string | null;

    /**
     * The value of the input.
     */
    @Prop({ mutable: true }) value?: string | number | null = '';

    // used to hold input value in case we need to reset on escape
    private inputValue?: string | number | null = '';

    /**
     * Search box label
     */
    @Prop() label?: string;

    /**
     * Show matching parts in resuls as highlighted
     */
    @Prop() highlight?: boolean = true;

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
    protected valueChanged() {
        this.pdChange.emit({ value: this.value == null ? this.value : this.value.toString() });
    }

    @Watch('results')
    protected resultsChanged(results: any) {
        this.results = this.validateResults(results);
        if (this.results.length > 0) {
            this.selectedIndex = -1;
            this.open = true;
        } else this.open = false;
    }

    @Watch('selectedIndex')
    protected indexChanged(index: number) {
        const menu = this.element.shadowRoot.querySelector('.pd-search-dropdown') as HTMLElement;
        const dropdownItemNodes = this.element.shadowRoot.querySelectorAll('pd-dropdown-item') as NodeListOf<
            HTMLPdDropdownItemElement
        >;

        dropdownItemNodes.forEach((item, itemIndex) => {
            const centerItem = Math.ceil(5 / 2) - 1;
            if (itemIndex === index) menu.scrollTop = item.offsetTop - 48 * centerItem;
        });
    }

    protected componentWillLoad() {
        this.results = this.validateResults(this.results);
    }

    protected componentDidLoad() {
        this.menuElement = this.element.shadowRoot.querySelector('.pd-search-dropdown') as HTMLElement;
        this.labelElement = this.element.shadowRoot.querySelector('.pd-search-label') as HTMLElement;
        this.popper = this.createMenuPopper(this.labelElement, this.menuElement);
    }

    protected componentDidUpdate() {
        this.popper.forceUpdate();
    }

    @State() open: boolean = false;
    @State() selectedIndex: number = -1;

    @Listen('keydown')
    protected handleKeyDown(ev: KeyboardEvent) {
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
    protected handleClickOutside(ev: MouseEvent) {
        if (ev.target !== this.element) {
            this.open = false;
        }
    }

    /**
     * Sets focus on the specified `pd-input`. Use this method instead of the global
     * `input.focus()`.
     */
    @Method()
    public async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
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
        this.pdBlur.emit();
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
                >
                    {this.renderLabel()}
                    <div class="pd-search-input-wrapper">
                        <input
                            class="pd-search-input"
                            ref={input => (this.nativeInput = input)}
                            disabled={this.disabled}
                            placeholder={this.placeholder || ''}
                            value={value}
                            onClick={this.onClickInput}
                            onInput={this.onInput}
                            onBlur={this.onBlur}
                            onFocus={this.onFocus}
                        />
                        <button class="pd-search-clear" onClick={this.reset} tabindex="-1">
                            <pd-icon class="pd-search-clear-icon" name="cancel" size={2.4}></pd-icon>
                        </button>
                        <button class="pd-search-button" onClick={this.search} tabindex="-1">
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
