import{defineStore} from 'pinia';

export const useMoviesStore= defineStore('movies' , {
    state:()=> {
        return {
            movieList:[]
        }
    },
    actions:{
        getMovies() {
            return  fetch("https://fake-movie-api.onrender.com/api/movies" ,{
              headers: {
                    authKey:'RmFrZU1vdmllQVBJLWM5MzU1ZjE0LTM3ZGUtNDAzNC1hMTAzLTRkOTcxOTYwOWRmNg==',
                }
            })
                .then(async(response)=>{
                    this.movieList= await response.json()
                } )
        }     
    
    }
        
    
})