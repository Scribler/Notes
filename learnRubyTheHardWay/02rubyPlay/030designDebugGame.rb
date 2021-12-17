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

module Uni
  def Uni.input
    print " > "
    output = $stdin.gets.chomp
    if output =~ /\d/ # This kicks back any answer containing numbers
      puts "What kind of an answer is that?"
      print "Try again"
      Uni.input
    else
      return output
    end
  end


  def Uni.start
    puts "You find yourself at the door of a large dark wooden house in the middle of an empty field"
    puts "There is nothing aroudn for miles, and the sun is just setting"
    print "What will you do?"
    input = Uni.input
    if input == "dead"
      Uni.dead("You die of pure stupidity")
    elsif input =~ (/door/) && input =~ (/open/)
      front_door
    else
      Uni.dead("You starve to death")
      exit(0)
    end
  end

  def Uni.dead(method_of_death)
    puts method_of_death
    puts "Way to go, chucklenuts!"
  end

end


# FRONT DOOR
def front_door
  puts "You are at the front door"
end




# RUN PROGRAM

Uni.start




