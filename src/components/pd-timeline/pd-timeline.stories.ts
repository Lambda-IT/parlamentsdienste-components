import type { Meta, StoryObj } from '@storybook/html';

const defaultArgs = {
    start: true,
    end: true,
};

type TimelineArgs = typeof defaultArgs;

const meta: Meta<TimelineArgs> = {
    title: 'Interactions/Timeline',
};

export default meta;

///////////////////////////////////////////////////////////////////////////

const timeline = args => `
    <pd-timeline class="m-3" start="${args.start}" end="${args.end}">
        <pd-timeline-date date="13.03.2019" header="Ständerat">
            Annahme
        </pd-timeline-date>
        <pd-timeline-date date="28.04.2019" header="SiK-NR" href="http://www.google.ch">
            Beginn der Beratung<br />
            <a href="#">Unterlagen (PDF)</a>
        </pd-timeline-date>
        <pd-timeline-date date="30.10.2019">
            Die <strong>Finanzdelegation</strong> stimmt allen Anträgen des Bundesrates auf dringliche Kredite
            mit Vorschuss zu. <br /><a href="#">Audioaufnahme</a>
            <img src="https://source.unsplash.com/random/300x300?v=1" class="card-img-top" alt="..." />
        </pd-timeline-date>
        <pd-timeline-date date="24.06.2019" header="SiK-NR" href="http://www.google.ch">
            Antrag: Ablehnung <br />
            <a href="#">Bericht (PDF)</a>
        </pd-timeline-date>
        <pd-timeline-date date="19.09.2019" header="Nationalrat">
            Ablehnung
        </pd-timeline-date>
    </pd-timeline>
`;

export const Timeline: StoryObj = {
    render: timeline,
    args: defaultArgs,
};
