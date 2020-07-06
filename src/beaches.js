
export const beachList = [

    {
        id: 1,
        name: 'Kill Devil Hills',
        state: 'NC',
        lat: 36.034500,
        lng: -75.668680
    },
    {
        id: 2,
        name: 'Wrightsville Beach',
        state: 'NC',
        lat: 34.209810,
        lng: -77.794560
    },
    {
        id: 3,
        name: 'Oak Island',
        state: 'NC',
        lat: 33.908880,
        lng: -78.109920
    },
    {
        id: 4,
        name: 'Myrtle Beach',
        state: 'SC',
        lat: 33.726790,
        lng: -78.838180
    },
    {
        id: 5,
        name: 'Isle Of Palms',
        state: 'SC',
        lat: 32.832070,
        lng: -79.727760
    },
    {
        id: 6,
        name: 'Hilton Head Island',
        state: 'SC',
        lat: 32.142891,
        lng: -80.751512
    },
    {
        id: 7,
        name: 'Tybee Island',
        state: 'GA',
        lat: 32.007976,
        lng: -80.842534
    },
    {
        id: 8,
        name: 'Saint Simons',
        state: 'GA',
        lat: 31.146156,
        lng: -81.373035
    },
    {
        id: 9,
        name: 'Fernandina Beach',
        state: 'FL',
        lat: 30.588244,
        lng: -81.444224
    },
    {
        id: 10,
        name: 'Neptune Beach',
        state: 'FL',
        lat: 30.323951,
        lng: -81.395220
    },
    {
        id: 11,
        name: 'Saint Augustine',
        state: 'FL',
        lat: 29.844762,
        lng: -81.265818
    },
    {
        id: 12,
        name: 'Daytona Beach',
        state: 'FL',
        lat: 29.209943,
        lng: -81.013252
    },
    {
        id: 13,
        name: 'Cape Canaveral',
        state: 'FL',
        lat: 28.391568,
        lng: -80.597803
    },
    {
        id: 14,
        name: 'Palm Beach',
        state: 'FL',
        lat: 26.706179,
        lng: -80.033724
    },
    {
        id: 15,
        name: 'Fort Lauderdale',
        state: 'FL',
        lat: 26.120185,
        lng: -80.104638
    },
    {
        id: 16,
        name: 'Miami Beach',
        state: 'FL',
        lat: 25.792868,
        lng: -80.128592
    },
    {
        id: 17,
        name: 'Naples',
        state: 'FL',
        lat: 26.253537,
        lng: -81.822968
    },
    {
        id: 18,
        name: 'Clearwater',
        state: 'FL',
        lat: 27.979209,
        lng: -82.825703
    },
    {
        id: 19,
        name: 'Alligator Point',
        state: 'FL',
        lat: 29.894932,
        lng: -84.381752
    },
    {
        id: 20,
        name: 'Panama City Beach',
        state: 'FL',
        lat: 30.208452,
        lng: -85.863701
    },
    {
        id: 21,
        name: 'Pensacola',
        state: 'FL',
        lat: 30.336056,
        lng: -87.144083
    },
    {
        id: 22,
        name: 'Gulf Shores',
        state: 'AL',
        lat: 30.248322,
        lng: -87.687664
    },
    {
        id: 23,
        name: 'Dauphin Island',
        state: 'AL',
        lat: 30.249981,
        lng: -88.127438
    },
    {
        id: 24,
        name: 'Biloxi',
        state: 'MS',
        lat: 30.391545,
        lng: -88.967007
    },
    {
        id: 25,
        name: 'Bay Saint Louis',
        state: 'MS',
        lat: 30.299605,
        lng: -89.336567
    }
]

export const nameArray = beachList.map((beach) => {
    return beach.name
})
// export const namedArray = function (arr) {
    
//     for (var i = 0; i < arr.length; i++) {
//         var namedArray = []
//        namedArray.push(arr.name[i])
//     }
// }

// namedArray(beachList)
