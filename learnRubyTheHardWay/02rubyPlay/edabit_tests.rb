# If a car holds 4 passengers plus 1 driver (5 people)
# give the number of cars needed for a given number of people
def cars_needed(people)
  # divide people by 5 (only works for 5 people, so requires next step)
  cars = (people / 5)
  # add 1 for non-zero numbers that are not exact multiples of 5
  if (people != 0) && (people % 5 != 0)
    cars += 1
  end
  # print number of cars
  puts '-' * 40
  puts %[people: %s] % people
  puts %[cars: %s] % cars
  # puts '-' * 40
end

# cars_needed(0)  #0
# cars_needed(1)  #1
# cars_needed(5)  #1
# cars_needed(10) #2
# cars_needed(12) #3

5.times{cars_needed((rand * 20).round)} 

