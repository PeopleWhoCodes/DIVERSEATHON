module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                DarkBack: '#000209',
                Primary: '#202833',
                FaqHeading: '#202C33',
                FaqBody: '#949494',
                Secondary: '#66FCF3',
                Gray: '#C2CFF3',
                TextPassage: '#949494',
                ButtonBg: '#00B1B1',
                TextDarkBlue: '#46A29F',
                SponsorCard: '#E8E7D9',
                TextSchedule: '#BBE8E6',
                TrackBack: '#E8FFFE',
                CardBack: '#FFF',
            },
            backgroundImage: {
                backgroundHeroImage: "url('/src/assets/img/bgHero.svg')",
            },
        },
    },
    plugins: [],
}
