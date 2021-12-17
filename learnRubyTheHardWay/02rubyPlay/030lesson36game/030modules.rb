module Uni
  
  def Uni.check_inventory(inv)
    puts "Your Inventory is #{inv}"
  end
  
  def Uni.input
    print " > "
    input = $stdin.gets.chomp
    if input =~ /\d/ # This kicks back any answer containing numbers
      puts "What kind of an answer is that?"
      print "Try again"
      Uni.input
    elsif input =~ /inventory/
      Uni.check_inventory(inventory)
    else
      return input
    end
  end

  def Uni.dead(method_of_death)
    puts method_of_death
    puts "Way to go, chucklenuts!"
  end

  def Uni.add_to_inventory
    inventory = []
    return inventory.push Uni.input
    # return inventory
  end


end
