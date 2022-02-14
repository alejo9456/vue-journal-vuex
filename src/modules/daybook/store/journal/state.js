export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: '1kjafhakjsdfh dshfjaslkdhfdsnhcdfslhflaks',
            picture:null  
        },
        {
            id: new Date().getTime() +1000,
            date: new Date().toDateString(),
            text: '2kjafhakjsdfh dshfjaslkdhfdsnhcdfslhflakssadfd',
            picture:null  
        },
        {
            id: new Date().getTime() +2000,
            date: new Date().toDateString(),
            text: '3kjafhakjsdfh dshfjaslkdhfdsnhcdfslhflakssadfd',
            picture:null  
        },
    ]
})