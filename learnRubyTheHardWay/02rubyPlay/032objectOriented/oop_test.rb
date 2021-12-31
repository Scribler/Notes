require 'open-uri'

WORD_URL = "http://learnrubythehardway.org/words.txt"
WORDS = []
PHRASES = {
  "class ### < ###\nend" =>
    "Make a class named ### that is_a ###.",
  "class ###\n\tdef initialize(@@@)\n\tend\nend" =>
    "class ### has-a initialize that takes @@@ parameters.",
  "class ###\n\tdef initialize(@@@)\n\tend\nend" =>
    "class ### has-a initialize that takes @@@ parameters.",
  "class"
}

URI.open("http://www.ruby-doc.org"){|f|
  line_count = 0
  f.each_line{|line| 
    line_count += 1
    if line_count <= 10
      p line
    else
      puts "finished"
      break
    end
  }
  p "Base URI: #{f.base_uri} "
  p "Content type: #{f.content_type} "
}
