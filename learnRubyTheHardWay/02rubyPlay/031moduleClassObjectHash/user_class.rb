require './info_modules.rb'

# User Class
class User
  # Import methods from Info module
  include Info
  def initialize
    print "What is your name?: "
    @name = get_input_cap
    print "Where do you live?: "
    @home = get_input_cap
    @inventory= {
      bag: 'Leather Golf Bag',
      wallet: 'Snakeskin Wallet',
      glasses: 'Black Rayband Sunglasses'
    }
  end

end
