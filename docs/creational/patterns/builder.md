# **Builder Pattern**

Builder is a creational design pattern that lets you construct complex objects step by step.

The pattern suggest the separation of code that creates the object from the one the uses it (client code).

It's recommend when you need to create a very complex object.

It often uses method chaining

## Roles
Builder -> Interface of the builder (steps)
Concrete Builder -> Real implementation of the builder
Product -> Concrete object that will be created (there is no interface since a builder can return different types)
Director -> Class that defines the order of construction of a object (Optional)

Note: Interfaces can be replaced by abstract classes.

## Refs
- https://refactoring.guru//design-patterns/builder
- https://www.youtube.com/watch?v=2VwLvwsIu-8