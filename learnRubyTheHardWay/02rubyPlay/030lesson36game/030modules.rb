module Uni
  
  def Uni.input
    print " > "
    input = $stdin.gets.chomp
    if input =~ /\d/ # This kicks back any answer containing numbers
      puts "What kind of an answer is that?"
      print "Try again"
      Uni.input
    elsif input =~ /inventory/
      check_inventory(inventory)
    else
      return input
    end
  end

  def Uni.dead(method_of_death)
    puts method_of_death
    puts "Way to go, chucklenuts!"
  end

  def Uni.add_to_inventory(item)
    inventory = []
    return inventory.push item
    # return inventory
  end


end
