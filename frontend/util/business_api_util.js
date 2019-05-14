export const fetchBusinesses = () => (
    $.ajax({
        method: 'GET',
        url: '/api/businesses',
        error: (err) => console.log(err)
    })
);

export const fetchBusiness = id => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${id}`
    })
);


