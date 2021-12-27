#REQUIRED FILES START
require "./info_modules.rb"
require "./user_class.rb"


# HASHES START
# define arrays
seymour = ['Challet', 'Pub', 'Public washrooms', 'chair lifts']

# define hashes
# THIRD LEVEL
seymour = {
  name: 'Mt. Seymour',
  ammenaties: 'Public washrooms, chair lifts, Pub, Challet, Parking',
  activities: 'Skiing, Snowboarding, Snowshoing, Tubing, Sledding'
}
grouse = {
  name: 'Grouse Mountain',
  ammenaties: 'Public washrooms, chair lifts, Pub, Challet, Parking',
  activities: 'Skiing, Snowboarding, Snowshoing, Tubing, Sledding'
}
fake = {
  name: 'Fake Mountain',
  amenaties: 'stuff, things, other things',
  activities: 'Absolutely nothing... It is not a real mountain'
}
bake = {
  name: 'Bake Mountain',
  amenaties: 'stuff, things, other things',
  activities: 'Absolutely nothing... It is not a real mountain'
}

# SECOND LEVEL
mountains = {
  sey: seymour,
  gro: grouse,
  fa: fake,
  ba: bake
}

# FIRST LEVEL
vancouver = {
  :mountains => mountains, # just a different way of defining a hash
  buildings: "Marine building"
}


# ACCESSING MODULES START
Info.get_input
Info.hash_return(mountains, 0)
puts ""
# ACCESSING MODULES END


# ACCESSING CLASSES START
# Using the 'return_user' Class method
puts "This will print a variable only accessible from within the class definition here: #{User.return_user}"
# Using '.constants' will access all constants in User
User.constants.each do |x|
  puts "The next user constant is: #{x}"

  # TRY TO MAKE THE BELOW CODE WORK
  #
  #   1) - try to make it print all the constants contents
  #   2) - currently 'User::Constant' works
  #   3) - currently 'User::<var>' doesn't work
  #
  #
  # puts "It's contents are: #{User::x}"
  #
  #
  #
end

puts "The contents of these to are..."
# The two below are 'CONSTANTS' defined in the 'User' class
puts "'Character_two': #{User::Character_two}"
puts "'Character_three': #{User::Character_three}"
puts ""
# ACCESSING CLASSES END
