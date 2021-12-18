module Uni
  # collect input
  def Uni.input
    inventory = open('inventory', 'r+')
    print " > "
    input = $stdin.gets.chomp
    if input =~ /\d/ # This kicks back any answer containing numbers
      puts "What kind of an answer is that?"
      print "Try again"
      Uni.input
    elsif input =~ /inventory/
      Uni.check_inventory(inventory)
      Uni.input
    else
      return input
    end
  end
  
  # death
  def Uni.dead(method_of_death)
    puts method_of_death
    puts "Way to go, chucklenuts!"
  end






  # inventory
  def Uni.add_to_inventory(inv, item)
    open(inv, 'a+') do |x|
      x << item
      x << "\n"
    end
    # return inv
  end

  def Uni.check_inventory(inv)
      puts "Your Inventory is\n#{inv.read}"
  end

end
