def gold_room
  puts "This room is full of gold. How much do you take?"

  print"> "
  choice = $stdin.gets.chomp
  
  # this line has a bug, so fix it (FIXED)
  # if choice.match(/\d/)  <=this would also work
  if choice =~ (/\d/)
    how_much = choice.to_i
  else
    dead("Man, learn to type a number.")
  end

  if how_much < 50
    puts "Nice, you're not greedy, you win!"
    exit(0)
  else
    dead("you Greedy bastard")
  end
end

def bear_room
  puts "There is a bear here."
  puts "The bear has a bunch of honey."
  puts "The fat bear is in front of another door."
  puts "How are you going to move the bear"
  bear_moved = false

  while true
    print "> "
    choice = $stdin.gets.chomp

    if choice.match /take honey/
      dead("The bear looks at you then slaps your face off.")
    elsif choice =~ /taunt bear/ && !bear_moved
      puts "The bear has moved from the door. You can go through it now."
      bear_moved = true
    elsif choice =~ (/taunt bear/) && bear_moved
      dead("The bear gets pissed off and chews your leg off.")
    elsif choice =~ /open door/ && bear_moved
      gold_room
    else
      puts "I got no idea what that means."
    end
  end


end


def dead(why)
  puts why, "Good job!"
  exit(0)
end

bear_room

