const apiUrl = 'https://ipinfo.io/json';
const locaStorageKey = 'mph-widget-geodata';


const defaultGeo = {
  ip: '104.131.241.248',
  city: 'Gramercy Park',
  region: 'New York',
  country: 'US',
  loc: '40.7402,-73.9996',
  org: 'AS14061 DigitalOcean, LLC',
  postal: '10011',
  timezone: 'America/New_York',
  readme: 'https://ipinfo.io/missingauth'
}


function chromeSetValue(key, value) {
    return new Promise(resolve => {
        chrome.storage.local.set({[key]: value}, () => {
            resolve(value);
        });
    });
}

function chromeGetValue(key) {
    return new Promise(resolve => {
        chrome.storage.local.get(key, data => {
            resolve(data[key]);
        });
    });
}


export default async function () {
  let geoData = await chromeGetValue(locaStorageKey);

  if (geoData) {
    return geoData;
  }
  
  try {
    const res = await fetch(apiUrl);

    if (res.ok) {
      geoData = await res.json();
    }
    
  } catch (err) {
    console.warn(err);
  }
  
  geoData = geoData || defaultGeo;

  const [latStr, lonStr] = geoData.loc.split(',');

  Object.assign(geoData, {
    latitude: parseFloat(latStr),
    longitude: parseFloat(lonStr)
  });
    
  await chromeSetValue(locaStorageKey, geoData);

  return geoData;
}