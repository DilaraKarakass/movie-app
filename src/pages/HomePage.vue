<template>
  <div class="container content">
    <h1 class="title">Movies</h1>

    <input
      v-model="searchKeyword"
      type="search"
      placeholder="Search Movies or TV Shows"
    />

    <div class="totalCount" id="totalCount">0 items</div>

    <div class="list" id="list">
      <MovieCard
        v-for="(movie, index) in filteredMovies"
        :key="index"
        :name="movie.Title"
        :poster="movie.Poster"
        :highlight="searchKeyword"
        :path="{ name: 'MovieDetail', params: { id: movie.imdbID } }"
      />
    </div>

  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useMoviesStore } from '../stores/movies';
import MovieCard from '../components/MovieCard.vue';

export default {
  data() {
    return {
      searchKeyword: ''
    }
  },
  computed: {
    ...mapStores(useMoviesStore),
    filteredMovies() {
      return this.moviesStore.movieList.filter((item) => {
        return (new RegExp(`(${this.searchKeyword})`, "gi")).test(item.Title)
      })
    }
  },
  mounted() {
    this.moviesStore.getMovies()
  },
  components: {
    MovieCard
  }
}
</script>
