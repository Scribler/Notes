require './030classes.rb'


player = Character.new

player.add_to_inventory("lamp")
player.add_to_inventory("towel")
player.add_to_inventory("bottle opener")

puts "Your Inventory: ", player.inventory_contents

puts "Your health is #{player.health_status}"
