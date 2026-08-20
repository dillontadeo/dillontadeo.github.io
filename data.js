window.SITE_DATA = {
  counties: [
    { rank: 1, name: "Alameda", region: "East Bay", score: 77, income: 126240, own: 57, competition: "Moderate", verdict: "Standalone market" },
    { rank: 2, name: "Contra Costa", region: "East Bay", score: 75, income: 125727, own: 68, competition: "Low", verdict: "Standalone market" },
    { rank: 3, name: "San Mateo", region: "Peninsula", score: 65, income: 156000, own: 62, competition: "Moderate", verdict: "Standalone, thin cushion" },
    { rank: 4, name: "Sacramento", region: "Central", score: 57, income: 88724, own: 61, competition: "Moderate", verdict: "Standalone market" },
    { rank: 5, name: "Marin", region: "North Bay", score: 52, income: 142785, own: 65, competition: "Low", verdict: "Light footprint" },
    { rank: 6, name: "Sonoma", region: "North Bay", score: 48, income: 102840, own: 63, competition: "Moderate", verdict: "Mid-size footprint" },
    { rank: 7, name: "Stanislaus", region: "Central", score: 48, income: 79661, own: 61, competition: "Low", verdict: "Light footprint" },
    { rank: 8, name: "San Joaquin", region: "Central", score: 47, income: 88531, own: 62, competition: "Moderate", verdict: "Mid-size footprint" },
    { rank: 9, name: "Solano", region: "North Bay", score: 43, income: 99994, own: 63, competition: "Moderate", verdict: "Light footprint" },
    { rank: 10, name: "San Francisco", region: "Peninsula", score: 39, income: 141446, own: 44, competition: "High", verdict: "Standalone, thin cushion" },
    { rank: 11, name: "Napa", region: "North Bay", score: 30, income: 108970, own: 64, competition: "Moderate", verdict: "Too small alone" }
  ],
  tornado: [
    { driver: "Market penetration", swing: 100 },
    { driver: "Price", swing: 74 },
    { driver: "Service volume vs sold", swing: 74 },
    { driver: "Hourly wage", swing: 66 },
    { driver: "Crew utilization", swing: 43 },
    { driver: "Customer acquisition cost", swing: 25 },
    { driver: "Annual churn", swing: 11 },
    { driver: "Facility rent", swing: 7 }
  ],
  heatmap: {
    wages: ["Low", "—", "Base", "—", "—", "High"],
    utils: ["Low", "—", "Base", "—", "High"],
    values: [
      [116, 141, 161, 181, 191],
      [81, 109, 130, 152, 163],
      [47, 76, 100, 124, 136],
      [12, 44, 70, 95, 108],
      [-23, 12, 39, 67, 81],
      [-58, -21, 9, 38, 53]
    ]
  }
};
