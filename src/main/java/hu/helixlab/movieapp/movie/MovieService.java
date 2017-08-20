package hu.helixlab.movieapp.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    Iterable<Movie> findAll() {
        return movieRepository.findAll();
    }

    Movie addMovie(Movie movie) {
        return movieRepository.saveAndFlush(movie);
    }
}
