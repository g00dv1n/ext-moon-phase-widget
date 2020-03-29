
function normalizeUrl(link) {
    let url = new URL(link);
    url.search = '?utm_source=ext&utm_medium=chrome&utm_campaign=widget';

    return url.toString();
}

export default function (moonPhaseData, geoData) {
    moonPhaseData.link = 'https://moonorganizer.com/en/app/';
    moonPhaseData.linkLabel = 'Get 25% off for Moon Calendar';

    return `
<div class="mph-widget">
    <div class="mph-row">
        <div class="current-date">${moonPhaseData.dateFmt}</div>
    </div>
    <div class="mph-row">
        <div class="current-place">${geoData.city}, ${geoData.country}</div>
    </div>
    <div class="mph-row">
        <div class="moon-phase-ico">
            <img src="${moonPhaseData.phaseIco}" />
        </div>
    </div>
    <div class="mph-row">
        <div class="phase-name">${moonPhaseData.phase}</div>
    </div>
    <div class="mph-row">
        <div class="zodiac-name">Moon in <strong>${moonPhaseData.zodiac}</strong></div>
    </div>
    <div class="mph-row">
        <div>Set: </div>
        <div class="moon-time">${moonPhaseData.set}</div>
    </div>
    <div class="mph-row">
        <div>Rise: </div>
        <div class="moon-time">${moonPhaseData.rise}</div>
    </div>
    <div class="mph-row mph-link mph-promo">
        <a href="${normalizeUrl(moonPhaseData.link)}" target="_blank">${moonPhaseData.linkLabel}</a>
    </div>
</div>
    `;
}