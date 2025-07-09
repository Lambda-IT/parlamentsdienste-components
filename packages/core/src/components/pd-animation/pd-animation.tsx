import '@lottiefiles/lottie-player';
import { Component, Host, Prop, h } from '@stencil/core';
import { getURL } from '../../utils';

@Component({
    tag: 'pd-animation',
    shadow: true,
    assetsDirs: ['assets/assets-animation'],
})
export class PdAnimation {
    private animations = {
        '404': 'empty_state_404.json',
        'access-denied': 'empty_state_access_denied.json',
        error: 'empty_state_general_error.json',
        'under-construction': 'empty_state_under_construction.json',
    };

    /**
     * Name of an icon from the provided gallery
     */
    @Prop() name: '404' | 'access-denied' | 'error' | 'under-construction';

    render() {
        return (
            <Host>
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={getURL(`./assets/assets-animation/${this.animations[this.name]}`)}></lottie-player>
            </Host>
        );
    }
}
