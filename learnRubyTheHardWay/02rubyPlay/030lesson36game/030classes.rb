class Character
  # Initialize Character
  def initialize
    puts "Welcome to my game, 'HOUSE OF DOOM'. Lets get started."
    print "What's your name?: "
    name = $stdin.gets.chomp
    if name.capitalize == name
      @name = name
      puts "Your name is capitalized! That's great, #{@name}!"
    else
      @name = name.capitalize
      puts "Here, I fixed it for you... Your name is: #{@name}"
    end
    @health = 100
    # Backpack 10 slot total
    @inventory = []
    puts "Welcome! I hope you enjoy the game! Try not to get eaten... ;)"
  end

  # Add Backpack Item
  def add_to_inventory(item)
    if @inventory.length >= 10
      puts "Your inventory is full"
      return
    end
    puts "Adding '#{item}' to inventory"
    @inventory.push item
  end
  
  # Return Backpack Contents
  def inventory_contents
    slot = 1
    contents = []
    @inventory.each do |x|
      contents.push "Slot #{slot}: #{x}"
      slot += 1
    end
    empty_slots = 10 - contents.length
    puts empty_slots
    if empty_slots > 0
      start = contents.length + 1
      while start <= 10 do 
        contents.push "Slot #{start}: empty"
        start += 1
      end
    end
    return contents
  end
  
  # Return Health Status
  def health_status
    return @health
  end
end
