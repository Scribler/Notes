class Test
  def initialize
    @name = "bob"
  end
  attr_accessor :name
end

this = Test.new

puts this.name
