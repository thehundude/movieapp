package hu.helixlab.movieapp.movie;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Movie {
    @Basic
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = true, updatable = false, insertable = false)
    private int id;

    @Basic
    @Column(name = "title", nullable = true, updatable = true, insertable = true)
    private String title;

    @Basic
    @Column(name = "director", nullable = true, updatable = true, insertable = true)
    private String director;

    @Basic
    @Column(name = "length", nullable = true, updatable = true, insertable = true)
    private int length;

    @Basic
    @Column(name = "availableseats", nullable = true, updatable = true, insertable = true)
    private int availableseats;

    @Basic
    @Column(name = "screeningtime", nullable = true, updatable = true, insertable = true)
    private Date screeningtime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getAvailableseats() {
        return availableseats;
    }

    public void setAvailableseats(int availableseats) {
        this.availableseats = availableseats;
    }

    public Date getScreeningtime() {
        return screeningtime;
    }

    public void setScreeningtime(Date screeningtime) {
        this.screeningtime = screeningtime;
    }
}
