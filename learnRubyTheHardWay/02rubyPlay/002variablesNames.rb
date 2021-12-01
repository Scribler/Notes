# Number of available cars.
cars = 100
# Number of seats available in each car.
space_in_a_car = 4.0
# Number or drivers available.
drivers = 30
# Number of passengers to be driven.
passengers = 90
# Cars with no one to drive them.
cars_not_driven = cars - drivers
# Cars with drivers to drive them.
cars_driven = drivers
# Amount of people than gan be driven.
carpool_capacity = cars_driven * space_in_a_car
# Average number of people per car to spread them evenly between driven cars.
average_passengers_per_car = passengers / cars_driven



puts "There are #{cars} cars available."

puts "There are only #{drivers} drivers available."

puts "There will be #{cars_not_driven} empty cars today."

puts "We can transport #{carpool_capacity} people today"

puts "We have #{passengers} to carpool today."

puts "We need to put about #{average_passengers_per_car} in each car"
