# Load words website
# require 'open-uri

# Assign Constants
WORD_URL = "http://learncodethehardway.org/words.txt"
WORDS = []
PHRASES = {
  # ### == class
  # *** == method
  # @@@ == parameter
  "class ### < ###\nend" => 
    "Make a class named ### that is-a ###.",

  "class ###\n\tdef initialize(@@@)\n\tend\nend" => 
    "class ### has-a initialize that takes @@@ parameters.",

  "class ###\n\tdef ***(@@@)\n\tend\nend" => 
    "class ### has-a function named *** that takes @@@ parameters.",
      
  "*** = ###.new()" => 
    "Set *** to an instance of class ###.",

  "***.***(@@@)" => 
    "From *** get the *** function, and call it with parameters @@@.",

  "***.*** = '***'" => 
    "From *** get the *** attribute and set it to '***'."
}
# check to see if 'english' was passed to the program and store boolean in variable
PHRASE_FIRST = ARGV[0] == "english"

# Comment below is the originial version using the file imported from a website.
# I wrote a script to copy that file so I don't need to rely upon the website for
# the script to work.
# URI.open(WORD_URL) {|f|
File.open('words.txt', 'r+') {|f|
  f.each_line {|word| WORDS.push(word.chomp)}
}

# Assign Methods
def craft_names(rand_words, snippet, pattern, caps=false)
  names = snippet.scan(pattern).map do
    word = rand_words.pop()
    # If caps=true(capitalize) IF caps=false(word)
    caps ? word.capitalize : word
  end

  return names * 2
end

def craft_params(rand_words, snippet, pattern)
  names = (0...snippet.scan(pattern).length).map do
          param_count = rand(3) + 1
          params = (0...param_count).map {|x| rand_words.pop() }
          params.join(', ')
  end

  return names * 2
end




def convert(snippet, phrase)
  rand_words = WORDS.sort_by {rand}
  class_names = craft_names(rand_words, snippet, /###/, caps=true)
  other_names = craft_names(rand_words, snippet, /\*\*\*/)
  param_names = craft_params(rand_words, snippet, /@@@/)

  results = []

  [snippet, phrase].each do |sentence|
    #fake class names, also copies sentence
    result = sentence.gsub(/###/) {|x| class_names.pop }

    #fake parameter lists
    result.gsub!(/\*\*\*/) {|x| other_names.pop }

    #fake parameter lists
    result.gsub!(/@@@/) {|x| param_names.pop }

    results.push(result)
  end

  return results
end

#
#
#
# PROGRAM START!
#
#
#

# keep going until they hit CTRL-D
loop do
  # store PHRASES(keys) in an array.
  snippets = PHRASES.keys().sort_by {rand}

  # step through the now randomized snippets one by one.
  for snippet in snippets
    phrase = PHRASES[snippet]
    # This takes the snippet and phrase//converts them//stores them in question and answer variables
    question, answer = convert(snippet, phrase)
    # if the PHRASE_FIRST variable is true ('english' entered at program runtime) then swap the question and answer
    if PHRASE_FIRST
      question, answer = answer, question
    end

    print question, "\n\n> "

    exit(0) unless $stdin.gets

    puts "\nANSWER: %s\n\n" % answer
  end
end
