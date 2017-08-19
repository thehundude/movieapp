package hu.helixlab.movieapp.order;

import javax.persistence.*;

@Entity
@Table(name = "ticketorder", schema = "public")
public class Order {
    @Basic
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = true, updatable = false, insertable = false)
    private int id;

    @Basic
    @Column(name = "name", nullable = true, updatable = true, insertable = true)
    private String name;

    @Basic
    @Column(name = "email", nullable = true, updatable = true, insertable = true)
    private String email;

    @Basic
    @Column(name = "movieid", nullable = true, updatable = true, insertable = true)
    private int movieId;

    @Basic
    @Column(name = "tickets", nullable = true, updatable = true, insertable = true)
    private int tickets;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public int getTickets() {
        return tickets;
    }

    public void setTickets(int tickets) {
        this.tickets = tickets;
    }
}
