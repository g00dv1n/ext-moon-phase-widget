import './mph_index.min@1.3.5.js';
import getGeoData from './actions/getGeoData.js';
import renderExtHtml from './actions/renderExtHtml.js';

const MphWidget = MoonPhaseWidget.MoonPhaseWidget;

new MphWidget('ext-moon-phase-widget', getGeoData, renderExtHtml);