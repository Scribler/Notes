require "./info_modules.rb"

class User
  include Info
  def initialize
    print "What is your name?: "
    @name = $stdin.gets.chomp.capitalize
    print "Where do you live?: "
    @home = $stdin.gets.chomp.capitalize
    @inventory= {
      bag: 'Leather Golf Bag',
      wallet: 'Snakeskin Wallet',
      glasses: 'Black Rayband Sunglasses'
    }
  end

end
