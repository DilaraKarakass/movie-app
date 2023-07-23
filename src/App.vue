
<template>
  <div>
    <SiteHeader />
    <RouterView />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';

export default {
  components: {
    SiteHeader
  }
}
</script>

<!-- <template>
  <div>
    <SiteHeader></SiteHeader>

    <div class="container content">
        <h1 class="title">Movies</h1>

        <input 
          v-model="searchKeyword"
          type="search" 
          placeholder="Search Movies or TV Shows" 
        />
        
        <div class="totalCount" id="totalCount">0 items</div>
        
        <div class="list" id="list">
          <MovieCard v-for="(movie, index ) in filteredMovies"
            :key="index"
            :name="movie.Title"
            :poster="movie.Poster" 
            :highlight="searchKeyword"
          />
        </div>
    </div>


  </div>

  
</template>

<script>
  import{mapStores} from 'pinia';
  import { useMoviesStore } from './stores/movies';
  import SiteHeader from './components/SiteHeader.vue';
  import MovieCard from './components/MovieCard.vue';
  export default(await import ('vue')).defineComponent({
    data(){
      return {
        searchKeyword:'',
      }
    },
    computed:{
      ...mapStores(useMoviesStore),
      filteredMovies(){
        return this.moviesStore.movieList.filter((item) => {
          return (new RegExp('(${this.searchKeyword})',"gi")).test(item.Title)
        })
      }
    },


    // methods:{
    //   getMovies() {
    //     return  fetch("https://fake-movie-api.onrender.com/api/movies" ,{
    //       headers:{
    //         authKey:'RmFrZU1vdmllQVBJLWM5MzU1ZjE0LTM3ZGUtNDAzNC1hMTAzLTRkOTcxOTYwOWRmNg==',
    //       }
    //     })
    //       .then((response)=> response.json());
    //   },
    //   searchMovie(event){
    //     const value= event.target.value;
    //     console.log(value);
    //     this.movieList= this.movieList.filter((item) =>{
    //       return (new RegExp(`(${value})`,"gi")).test(item.Title)
    //     });
    //   }
         
    // },  
    mounted(){
      this.moviesStore.getMovies()
    } ,
    
    components:{
      SiteHeader,
      MovieCard
    
    }
  })
</script> -->




