# Array Stuff
things = ['a', 'b', 'c', 'd']
puts "array: #{things}"

puts "Changing b"
things[1] = "booop"
puts "array: #{things}"

# Hashes

character = {"name" => "bob", "age" => 33, "health" => 100}
puts "my characters hash is: #{character}"
puts "Character name: #{character["name"]}"
puts "Character age: #{character["age"]}"
puts "Character health: #{character["health"]}"

character["city"] = "Vancouver"
character[1] = 1
character[2] = "number 2"

puts "Character City: #{character["city"]}"
puts "my characters hash is: #{character}"

character.delete(1)
character.delete(2)
character.delete("city")
puts "my characters hash is: #{character}"

# create a mapping of state to abbreviation
states = {
  'oregon' => 'OR',
  'Florida' => 'FL',
  'California' => 'CA',
  'New York' => 'NY',
  'Michigan' => 'MI',
}

# create a basic set of states and some cities in them
cities = {
  'CA' => 'San Francisco',
  'MI' => 'Detroid',
  'FL' => 'Jacksonville' 
}

# add some more cities
cities['NY'] = 'New York'
cities['OR'] = 'Portland'

# puts out some cities
puts '-' * 10
puts "NY State has #{cities['NY']}"
puts "OR State has: #{cities['OR']}"

# puts some states
puts '-' * 10
puts "Michigan's abbreviation is: #{states['Michigan']}"
puts "Florida's abbreviation is: #{states['Florida']}"

# do it by using the state then cities dict
puts '-' * 10
puts "Michigan has: #{cities[states['Michigan']]}"
puts "Florida has: #{cities[states['Florida']]}"

# puts every state abbreviation
puts '-' * 10
cities.each do |abbrev, city|
  puts "#{abbrev} has the city #{city}."
end

# puts every city in state
cities.each do | abbrev, city|
  puts "#{abbrev} has the city #{city}"
end

myhash = {
  "me" => "Steven",
  "age" => 33,
  "occupation" => "CSR",
  "future_occupation" => "Web Developer"
}

puts myhash
puts myhash["me"]
myhash.each do |question, answer|
  puts "Question: #{question}? Answer: #{answer}"
end

sym_hash = {this: "tree", that: "bee", :boop => 2}

puts sym_hash

puts sym_hash[:this]
puts sym_hash[:that]
puts sym_hash[:boop]













