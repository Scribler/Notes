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
    @inventory = {}
  end
end

class Song
  def initialize(lyrics)
    @lyrics = lyrics
  end

  def sing_song
    @lyrics.each{|line| puts line}
  end
end
