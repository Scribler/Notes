# Module
# 1 getting input from user
# 2 comparing information
# 3 checking information
# 4 death message
# 5 start message
#
#
# game premise?
#
# A countryside house with a dungeon below with doors into different dimentions.
#
# a book leads you to the secret that lets you down into the dungeon, and also contains the secret to escape
#
#

module Universal
  def Universal.start
    puts "You find yourself at the door of a large dark wooden house in the middle of an empty field"
    puts "There is nothing aroudn for miles, and the sun is just setting"
    puts "What will you do?"
    choice = Universal.get_input
  end

  def Universal.get_input
    input = $stdin.gets.chomp
    if input =~ /\d/
      puts "What kind of an answer is that?"
      get_input
    elsif input == "dead"
      Universal.dead("You die of pure stupidity")
    else
      return input
    end
  end

  def Universal.dead(method_of_death)
    puts method_of_death
    puts "Way to go, chucklenuts!"
  end


end


def front_door
  puts "You are at the front door"
end


Universal.start
if Universal.start =~ /door/
  front_door
else
  Universal.dead("You starve to death.")
end
