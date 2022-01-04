import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { TabValue } from '../../interface';

@Component({
    tag: 'pd-tabs',
    styleUrl: 'pd-tabs.scss',
    shadow: true,
})
export class PdTabs {
    private tabsId = `ion-input-${tabsIds++}`;

    /**
     * List of tab texts
     */
    @Prop() tabs: TabValue[] = [];

    /**
     * Emitted when the value has changed.
     */
    @Event({ eventName: 'pd-change' }) pdChange!: EventEmitter<TabValue>;

    private onChange = (tab: TabValue) => {
        this.pdChange.emit(tab);
    };

    public render() {
        return (
            <Host>
                {this.tabs.map((tab) => {
                    return (
                        <div class="pd-tabs-control">
                            <label class="pd-tabs-label">
                                <input
                                    checked={tab?.checked}
                                    class="pd-tabs-radio pd-tabs-visually-hidden"
                                    type="radio"
                                    name={`pd-tabs-${this.tabsId}`}
                                    onChange={() => this.onChange(tab)}
                                />
                                <span class="pd-tabs-text">{tab.text}</span>
                            </label>
                        </div>
                    );
                })}
            </Host>
        );
    }
}

let tabsIds = 0;
