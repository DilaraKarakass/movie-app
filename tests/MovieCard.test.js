import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { router } from '../src/routes'
import MovieCard from '../src/components/MovieCard.vue'

describe('MovieCard component', () => {
  const wrapper = mount(MovieCard, {
    global: {
      plugins: [router]
    },
    props: {
      name: 'Avatar',
      poster: 'https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_SX300.jpg'
    }
  });
  
  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render poster', () => {
    const img = wrapper.find('img');
    const attrs = img.attributes();

    expect(attrs.src).toBe('https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_SX300.jpg');
  });
  
  it('should render name', () => {
    const name = wrapper.find('.card-name').text();

    expect(name).toBe('Avatar');
  });
});

