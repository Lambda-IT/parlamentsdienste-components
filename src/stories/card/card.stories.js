import notes from './readme.md';

export default {
    title: 'Layout|Card',
    parameters: { notes },
};

export const basic = () => {
    return `
    <div class="mt-3 ml-3 card" style="width: 18rem;">
        <img src="https://source.unsplash.com/random/300x300?v=1" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <pd-list>
            <pd-list-item>
                <span>Cras justo odio</span>
            </pd-list-item>
            <pd-list-item>
                <span>Dapibus ac facilisis in</span>
            </pd-list-item>
            <pd-list-item>
                <span>Vestibulum at eros</span>
            </pd-list-item>
        </pd-list>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
  `;
};
