const model= {
    app: {
    currentPage: null,
    user: null,
    },
    input: {
        newDogEquipment:
        {
            id: 0,
            name: "", 
            brandName: "",
            description: "",
            imgSrc:"",
        }, 

    plannedTrip:{
            tripType: 0,
            date: "", 
            dogPooped: false,
            poopBagsUsed: 0,

         },
    dogDayDiary:{
        numberOfTrips:0,
        poopBagsUsed:0,
        morningMeal: false, 
        eveningMeal: false,
        tripTypes:[],
        comment: "", 
    },

    }, 
    data:{
        plannedTrips: [{
            tripType: 3,
            date: "", 
            dogPooped: false,
            poopBagsUsed: 0,


        }],
            
        completedTrips: [
            {
            tripType: 3,
            date: "03.03.2024", 
            dogPooped: true,
            poopBagsUsed: 2
        },
            {
            tripType: 4,
            date: "17.01.2024", 
            dogPooped: true,
            poopBagsUsed: 2
        },
    ],

        v:{
        numberOfTrips:2,
        poopBagsUsed:3,
        morningMeal: true, 
        eveningMeal: true, 
        comment: "Veldig flink til å gå på plass og ved passering."
        },
        tripTypes: [
            {
                id: 0,
                name: "Gåtur",
                suitableEquipment: null,
            },
            {
                id: 1,
                name: "joggetur",
                suitableEquipment: null,
            },
            {
                id: 2,
                name: "Skitur",
                suitableEquipment: null,
            },
            {
                id: 3,
                name: "Fjelltur",
                suitableEquipment: null,
            },
            {
                id: 4,
                name: "Bæsjerunde",
                suitableEquipment: null,
            },
        ],
        bagCount: 420,
        dogEquipment:[
        {
            id: 0,
            name: "", 
            brandName: "",
            description: "",
            imgSrc: null,
            equipmentType: [0,2],
        }
        ]
    }
}


// model.data.dogEquipment.push(model.input.newDogEquipment)

//comment for testcommit



