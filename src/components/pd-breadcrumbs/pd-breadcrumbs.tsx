import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'pd-breadcrumbs',
    styleUrl: 'pd-breadcrumbs.scss',
    shadow: true,
})
export class PdBreadcrumbs {
    @Prop() items: string[] = [];

    @Event({ eventName: 'pd-on-navigated' }) pdOnNavigated!: EventEmitter<any>;

    render() {
        return (
            <Host>
                {this.items.map((item, i: number) => {
                    const isLast = i === this.items.length - 1;
                    return [
                        <button
                            class={{ 'pd-breadcrumbs-item': true, 'pd-breadcrumbs-item-last': isLast ? true : false }}
                            onClick={() => this.pdOnNavigated.emit(item)}
                        >
                            {item}
                        </button>,
                        this.renderArrow(isLast),
                    ];
                })}
            </Host>
        );
    }

    private renderArrow(isLast) {
        if (isLast) return;
        return <pd-icon class="pd-breadcrumbs-arrow" name="caret" rotate={270}></pd-icon>;
    }
}
