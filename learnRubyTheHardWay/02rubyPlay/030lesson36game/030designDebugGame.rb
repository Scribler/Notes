

#  014 > has relevent notes for this project

require './030classes'
require './030modules'

# A countryside house with a dungeon below with doors into different dimentions.
# a book leads you to the secret that lets you down into the dungeon, and also contains the secret to escape

# Variables


# START
def start
  player = Character.new
  # Intro text
  puts "You find yourself at the door of a large dark
  wooden house in the middle of an empty field. There
  is nothing around for miles, and the sun is just
  setting"
  print "What will you do?"
  # Ask for user input using input method
  input = Uni.input
  if (input =~ (/door/) && (input =~ (/open/) || input =~ (/through/)))
    house_entrance
  else
    Uni.dead("You starve to death")
    exit(0)
  end
end

# FRONT DOOR
def house_entrance
  table = ["Greeting Book", "Pen", "Old Rusty Key"]

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
    puts "The table is a lecturn style table with a keyhole in the front"
    puts "There are some things on the table"
    
    if table[0] == "Greeting Book"
      book = "a #{table[0]}"
    else
      book = ""
    end
    
    if table[1] == "Pen"
      pen = ", a #{table[1]}"
    else
      pen = ""
    end

    if table[2] == "Old Rusty Key"
      key = ", an #{table[2]}"
    else
      key = ""
    end

    puts "On the table is #{book}#{pen}#{key} on top of the table."
    input = Uni.input
    if ((input =~ /get/ || input =~ /take/) && input =~ /book/)
      
      puts "You put the greeting book in your backpack"
      Uni.add_to_inventory('inventory', table.shift)
      input = Uni.input
    end
  else
 
  end
end




# RUN PROGRAM

# Uni.add_to_inventory(inventory)
# Uni.check_inventory(inventory)

start

# puts inventory.closed?
# inventory.close
# puts inventory.closed?


