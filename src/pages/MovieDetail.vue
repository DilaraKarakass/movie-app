<template>
  <div class="container pb-10">
    <div class="mt-10 banner rounded-40 h-[480px] bg-primary-100 overflow-hidden">
      <img src="/img/cover.png" alt="" class="w-full h-full object-cover">
    </div>

    <div class="max-w-[560px] rounded-3xl bg-[rgba(32,40,62,0.8)] backdrop-blur-[12px] p-10 h-[144px] -mt-[72px] ml-[80px]">
      <div class="mb-2 text-primary-200">
        <span>MaileHero</span>
        <span class="text-grey-400"> / </span>
        <span>Movies</span>
      </div>
      
      <h1 class="text-white text-[32px] font-poppins font-semibold">{{ movie?.Title }}</h1>
    </div>

    <div class="mt-[80px] grid grid-cols-2 gap-[80px] px-[80px]">
      <div>
        <img class="w-full rounded-3xl" :src="movie?.Poster" alt="">
      </div>
      <div class="text-grey-300 text-xl leading-8">
        <p>{{ movie?.Plot }}</p>


        <div class="mt-6">
          <div class="text-grey-100">Release Date</div>
          <p>{{ movie?.Released }}</p>
        </div>
        
        <div class="mt-6">
          <div class="text-grey-100">Genres</div>
          <p>{{ movie?.Genre }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useMoviesStore } from '../stores/movies'

export default {
  computed: {
    ...mapStores(useMoviesStore),
    movie() {
      return this.moviesStore.movieList.find((movie) => {
        return movie.imdbID === this.$route.params.id
      })
    }
  },
  mounted() {
    this.moviesStore.getMovies()
  }
}
</script>
