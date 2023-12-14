import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'pd-pagination',
    styleUrl: 'pd-pagination.scss',
    shadow: true,
})
export class Pagination implements ComponentInterface {
    /**
     * Current page number
     */
    @Prop() public currentPage: number = 1;

    /**
     * Number of pages
     */
    @Prop() public totalPages: number = 5;

    /**
     * switch between pagination mode (simple with separator/page buttons)
     */
    @Prop() public showPageButtons: boolean = false;

    /**
     * visible pages in 'shopPageButtons' mode
     */
    @Prop() public visiblePages: number = 5;

    /**
     * separator string in simple mode
     */
    @Prop() public separator: string = 'von';

    /**
     * Page change event. Returns selected page
     */
    @Event({ eventName: 'pd-change' }) pdChange: EventEmitter<number>;

    private pages: number[] = [];

    private selectPage(page: number) {
        this.pdChange.emit(page);
    }

    constructor() {
        this.pageChanged(this.currentPage);
    }

    @Watch('currentPage')
    pageChanged(newPage: number) {
        const clampedPage = this.clamp(newPage, 0, this.totalPages);
        const first = this.clamp(clampedPage - Math.floor(this.visiblePages / 2) - 1, 0, this.totalPages - this.visiblePages);
        this.pages = Array.from({ length: this.clamp(this.visiblePages, 0, this.totalPages) }, (_, i) => i + first + 1);
    }

    private firstPage() {
        this.pdChange.emit(1);
    }

    private prevPage() {
        this.pdChange.emit(this.clamp(this.currentPage - 1, 1, this.totalPages));
    }

    private nextPage() {
        this.pdChange.emit(this.clamp(this.currentPage + 1, 1, this.totalPages));
    }

    private lastPage() {
        this.pdChange.emit(this.totalPages);
    }

    public render() {
        return (
            <Host>
                <button class="pd-pagination-first" onClick={() => this.firstPage()} data-test="pd-pagination-first">
                    <span>&laquo;</span>
                </button>
                <button class="pd-pagination-prev" onClick={() => this.prevPage()} data-test="pd-pagination-prev">
                    <span>&#8249;</span>
                </button>
                {this.showPageButtons ? this.renderPageButtons() : this.renderSimplePages()}
                <button class="pd-pagination-next" onClick={() => this.nextPage()} data-test="pd-pagination-next">
                    <span>&#8250;</span>
                </button>
                <button class="pd-pagination-last" onClick={() => this.lastPage()} data-test="pd-pagination-last">
                    <span>&raquo;</span>
                </button>
            </Host>
        );
    }

    private renderPageButtons() {
        return this.pages.map(value => (
            <button
                onClick={() => this.selectPage(value)}
                class={{
                    'pd-pagination-page': true,
                    'pd-pagination-active': value === this.currentPage,
                }}
                data-test={`pd-pagination-page-${value}`}
            >
                {value}
            </button>
        ));
    }

    private renderSimplePages() {
        return (
            <div class="pd-pagination-simple">
                <span class="pd-pagination-number">{this.currentPage}</span>
                <span class="pd-pagination-separator">{this.separator}</span>
                <span class="pd-pagination-number">{this.totalPages}</span>
            </div>
        );
    }

    private clamp(number, lower, upper) {
        if (number === number) {
            if (upper !== undefined) {
                number = number <= upper ? number : upper;
            }
            if (lower !== undefined) {
                number = number >= lower ? number : lower;
            }
        }
        return number;
    }
}
