import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { TabValue } from '../../types';

@Component({
  tag: 'pd-tabs',
  styleUrl: 'pd-tabs.scss',
  shadow: true,
})
export class Tabs implements ComponentInterface {
  private tabsId = `${tabsIds++}`;

  /**
   * List of tab texts
   */
  @Prop() tabs: TabValue[] = [];

  /**
   * Light mode
   */
  @Prop() light: boolean = false;

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
        {this.tabs.map((tab, i) => {
          return (
            <div class={{ 'pd-tabs-control': true, 'pd-tabs-light': this.light }} data-test={`pd-tabs-control-${i}`}>
              <label class="pd-tabs-label">
                <input
                  checked={tab?.checked}
                  class="pd-tabs-radio pd-tabs-visually-hidden"
                  type="radio"
                  name={`pd-tabs-${this.tabsId}`}
                  onChange={() => this.onChange(tab)}
                  data-test={`pd-tabs-radio-${i}`}
                />
                <span class="pd-tabs-text" data-test="pd-tabs-text">
                  {tab.text}
                </span>
              </label>
            </div>
          );
        })}
      </Host>
    );
  }
}

let tabsIds = 0;
