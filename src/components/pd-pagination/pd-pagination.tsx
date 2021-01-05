import { Component, Host, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
    tag: 'pd-pagination',
    styleUrl: 'pd-pagination.scss',
    shadow: true,
})
export class PdPagination {
    @Prop() public currentPage: number = 1;

    @Prop() public totalPages: number = 5;

    @Prop() visiblePages: number = 5;

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
        const first = this.clamp(
            clampedPage - Math.floor(this.visiblePages / 2) - 1,
            0,
            this.totalPages - this.visiblePages,
        );
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

    render() {
        const { pages } = this;
        return (
            <Host>
                <button class="pd-pagination-first" onClick={() => this.firstPage()}>
                    <span>&laquo;</span>
                </button>
                <button class="pd-pagination-prev" onClick={() => this.prevPage()}>
                    <span>&#8249;</span>
                </button>
                {pages.map((value) => (
                    <button
                        onClick={() => this.selectPage(value)}
                        class={{
                            'pd-pagination-page': true,
                            'pd-pagination-active': value === this.currentPage,
                        }}
                    >
                        {value}
                    </button>
                ))}
                <button class="pd-pagination-next" onClick={() => this.nextPage()}>
                    <span>&#8250;</span>
                </button>
                <button class="pd-pagination-last" onClick={() => this.lastPage()}>
                    <span>&raquo;</span>
                </button>
            </Host>
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
