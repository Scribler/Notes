require 'open-uri'

url = "http://learncodethehardway.org/words.txt"
words = []

URI.open(url) {|f|
  f.each_line {|word| words.push(word.chomp)}
  file = File.open('words.txt', 'a+')
  words.each do |word|
    file << word + "\n"
  end
}
