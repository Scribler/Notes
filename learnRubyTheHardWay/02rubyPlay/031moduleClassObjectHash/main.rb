#REQUIRED FILES START
require './user_class.rb'
require './info_modules.rb'

# This line lets you use Info module methods without the 'Info' prefix
# This line also allows 'User' class to use 'Info' module methods

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

puts Info::Test_var
Hashes.hash_return(mountains, 1)

# ACCESSING MODULES END


# ACCESSING CLASSES START
# ***IMPORTAINT***
# module must "NOT" have module prefix on methods ex. "def Mod.method"
# If prefixed, you will not be able to call those methods on the class later on as done below
# player.Info.add_to_inventory << THIS DOESN'T WORK

player = User.new
player.add_to_inventory
player.print_user_info

# ACCESSING CLASSES END
