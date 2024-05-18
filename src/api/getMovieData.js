

export async function authMovies(input){
    const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a98181a522mshc05c8f0fdea8939p1e9fe7jsn9b8c5203f18d',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    } }
