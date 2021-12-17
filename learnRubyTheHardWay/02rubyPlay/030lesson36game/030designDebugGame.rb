require './030modules'


# A countryside house with a dungeon below with doors into different dimentions.
# a book leads you to the secret that lets you down into the dungeon, and also contains the secret to escape

# Variables
inventory = []

def check_inventory(inv)
  puts "Your Inventory is #{inv}"
  return Uni.input
end

# START
def start
  # Intro text
  puts "You find yourself at the door of a large dark
  wooden house in the middle of an empty field. There
  is nothing around for miles, and the sun is just
  setting"
  print "What will you do?"
  # Ask for user input using input method
  input = Uni.input
  if (input =~ (/door/) && (input =~ (/open/) || input =~ (/through/)))
    enter_house
  else
    Uni.dead("You starve to death")
    exit(0)
  end
end

# FRONT DOOR
def enter_house
  puts "You try the handle of the door and find it
  unlocked. The door opens stiffly on ancient rusty
  hinges giving off a distinkt SKREEEECH. You step into
  the entrance and close the door behind you and flicking
  on a lightswitch as you do. You notice a few things."
  puts "The foier you are in has a small table with
  something on it as well as a attendance book and a pen."
  puts "A long Hallway Stretches ahead of you."
  puts "A steep wooden stairway stretches up into the dark
  to your left."
  input = Uni.input

  if (input =~ /examine/ && input =~ /table/)
    puts "There is"
 
  end
end




# RUN PROGRAM

inventory.push Uni.add_to_inventory(Uni.input)
puts "#{inventory}"
inventory.push Uni.add_to_inventory(Uni.input)
puts "#{inventory}"
inventory.push Uni.add_to_inventory(Uni.input)
puts "#{inventory}"

puts "Third entry of inventory is #{inventory[2]}"
puts ""
puts ""
puts ""
check_inventory(inventory)

start




