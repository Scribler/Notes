# PROGRAM NOTES
#
# - get words
# - get phrases & randomize
# - fill in substitutions (each sentence)



# CLASSES
class Test
  def initialize
    @name = "bob"
  end
  attr_accessor :name
end

# METHODS
STRING = "This ###, ***, that"

def sub
  puts STRING
  STRING.gsub!(/###/, "HASH")
  STRING.gsub!(/\*\*\*/, "STARS")
  puts STRING
end


# RUN PROGRAM
this = Test.new
puts this.name

sub

