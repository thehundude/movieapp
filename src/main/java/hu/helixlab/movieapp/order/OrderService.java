package hu.helixlab.movieapp.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    Order createOrder(Order order) {
        return orderRepository.saveAndFlush(order);
    }

    Iterable<Order> findAllOrders() {
        return orderRepository.findAll();
    }
}
