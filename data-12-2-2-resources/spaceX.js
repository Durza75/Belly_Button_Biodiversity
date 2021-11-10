// # 12.3.1 Inspect an API call with D3.json()

const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// Code to retrieve the full_name of the Vandenberg Air Force Base

