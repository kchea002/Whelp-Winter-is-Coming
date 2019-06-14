export const searchLocation = query => (
    $.ajax({
        method: 'GET',
        url: 'api/businesses/search',
        data: {query}
    })

); 