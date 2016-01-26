let properties = [
    {
        id: 1,
        city: 'Boston',
        state: 'MA',
        price: '$475,000',
        title: 'Condominium Redefined',
        beds: 2,
        baths: 2,
        likes: 5,
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 2,
        city: 'Cambridge',
        state: 'MA',
        price: '$1,200,000',
        title: 'Ultimate Sophistication',
        beds: 5,
        baths: 4,
        likes: 2,
        broker: {
            id: 2,
            name: "Michael Jones",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 3,
        city: 'Boston',
        state: 'MA',
        price: '$650,000',
        title: 'Seaport District Retreat',
        beds: 3,
        baths: 2,
        likes: 6,
        broker: {
            id: 3,
            name: "Jonathan Bradley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 4,
        city: 'Boston',
        state: 'MA',
        price: '$875,000',
        title: 'Modern City Living',
        beds: 3,
        baths: 2,
        likes: 12,
        broker: {
            id: 4,
            name: "Jennifer Wu",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house14.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house14sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 5,
        city: 'Boston',
        state: 'MA',
        zip: '02420',
        price: '$425,000',
        title: 'Urban Efficiency',
        beds: 4,
        baths: 2,
        likes: 5,
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 6,
        city: 'Boston',
        state: 'MA',
        price: '$550,000',
        title: 'Waterfront in the City',
        beds: 3,
        baths: 2,
        likes: 14,
        broker: {
            id: 6,
            name: "Miriam Aupont",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 7,
        city: 'Brookline',
        state: 'MA',
        zip: '02420',
        price: '$850,000',
        title: 'Suburban Extravaganza',
        beds: 5,
        baths: 4,
        likes: 5,
        broker: {
            id: 7,
            name: "Michelle Lambert",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 8,
        city: 'Boston',
        state: 'MA',
        zip: '02420',
        price: '$925,000',
        title: 'Contemporary Luxury',
        beds: 6,
        baths: 6,
        sqft: 950,
        likes: 8,
        broker: {
            id: 8,
            name: "Victor Oachoa",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 9,
        city: 'Cambridge',
        state: 'MA',
        zip: '02420',
        price: '$550,000',
        title: 'Heart of Harvard Square',
        beds: 5,
        baths: 4,
        likes: 9,
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 10,
        city: 'Boston',
        state: 'MA',
        zip: '02420',
        price: '$375,000',
        title: 'Architectural Details',
        beds: 2,
        baths: 2,
        likes: 10,
        broker: {
            id: 2,
            name: "Michael Jones",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 11,
        city: 'Boston',
        state: 'MA',
        zip: '02420',
        price: '$495,000',
        title: 'Modern Elegance',
        beds: 2,
        baths: 2,
        likes: 16,
        broker: {
            id: 3,
            name: "Jonathan Bradley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house13wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house13sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 12,
        city: 'Boston',
        state: 'MA',
        zip: '02420',
        price: '$625,000',
        title: 'Stunning Colonial',
        beds: 4,
        baths: 2,
        likes: 9,
        broker: {
            id: 4,
            name: "Jennifer Wu",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 13,
        city: 'Cambridge',
        state: 'MA',
        zip: '02420',
        price: '$430,000',
        title: 'Quiet Retreat',
        beds: 5,
        baths:4,
        likes: 18,
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    },
    {
        id: 14,
        city: 'Cambridge',
        state: 'MA',
        zip: '01742',
        price: '$450,000',
        title: 'Victorian Revival',
        beds: 4,
        baths:3,
        sqft: 3800,
        likes: 10,
        broker: {
            id: 6,
            name: "Miriam Aupont",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
        },
        pic: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01wide.jpg',
        thumb: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01sq.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'
    }
    ];


// Simulating async calls for plug-and-play replacement with REST services
export let findAll = () => new Promise((resolve, reject) => {
    resolve(properties);
});

export let findByName = (name) => new Promise((resolve, reject) => {
    let filtered = properties.filter(property => (address + ' ' + city + ' ' + zip + ' ' + title).toLowerCase().indexOf(name.toLowerCase()) > -1);
    resolve(filtered);
});

export let findById = (id) => new Promise((resolve, reject) => {
    resolve(properties[id-1]);
});

export let like = (id) => new Promise((resolve, reject) => {
    properties[id-1].likes++;
    resolve(properties[id-1].likes);
});
