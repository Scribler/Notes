#REQUIRED FILES START
require "./info_modules.rb"
require "./user_class.rb"

# HASHES START

# define hashes
seymour = ['Challet', 'Pub', 'Public washrooms', 'chair lifts']
seymour = {name: 'Mt. Seymour', ammenaties: 'Public washrooms, chair lifts, Pub, Challet, Parking', activities: 'Skiing, Snowboarding, Snowshoing, Tubing, Sledding'}
grouse = {name: 'Grouse Mountain', ammenaties: 'Public washrooms, chair lifts, Pub, Challet, Parking', activities: 'Skiing, Snowboarding, Snowshoing, Tubing, Sledding'}
mountains = {sey: seymour, gro: grouse}
vancouver = {:mountains => mountains, buildings: "Marine building"}

#define methods
def hash_return(hash)
  mountains = hash
  mountain_names = []
  mountains.each do |abr, name|
    mountain_names.push name[:name]
  end
  # fix this so it can print out any number of names instead of just 2
  return "#{mountain_names[0]}, #{mountain_names[1]}"
end

hash_return(mountains)

# get result
puts "Vancouver's Mountains are: #{hash_return(vancouver[:mountains])}"




# ACCESSING MODULES START

puts ""
# ACCESSING MODULES END

# ACCESSING CLASSES START
puts "This will print 'user_one' here: #{User.return_user}"
User.constants.each do |x|
  puts "The next user constant is: #{x}"
end

puts "The contents of these to are..."
puts "'Character_two': #{User::Character_two}"
puts "'Character_three': #{User::Character_three}"
puts ""
# ACCESSING CLASSES END
