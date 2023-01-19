import { Component, ComponentInterface, EventEmitter, Event, h, Host, Prop, State, Watch } from '@stencil/core';

/**
 * @slot - Label content
 */
@Component({
    tag: 'pd-dropdown-overlay',
    styleUrl: 'pd-dropdown-overlay.scss',
    shadow: true,
})
export class Dropdownoverlay implements ComponentInterface {
    constructor() {}

    private overlayElement: HTMLElement;

    @Prop() show = false;

    @Watch('show')
    public showChanged(show) {
        // console.log(this.overlayElement);
        if (show) {
            document.body.appendChild(this.overlayElement);
        } else {
        }
    }

    @Event({ eventName: 'pd-overlay-click' }) pdChange!: EventEmitter<void>;

    /**
     * Backgroundcolor
     */
    @Prop() bgcolor: string | undefined;

    public componentDidLoad() {
        // console.log(this.overlayElement);
        this.showChanged(this.show);
    }

    public render() {
        return (
            <Host
                // id="overlay"
                ref={(el) => (this.overlayElement = el)}
                onClick={this.pdChange.emit}
                class={{ 'pd-dropdown-overlay': true, show: this.show }}
                style={this.bgcolor ? { 'background-color': this.bgcolor } : {}}
            >
                {/* {this.show.toString()} */}
                <slot></slot>
            </Host>
        );
    }
}
