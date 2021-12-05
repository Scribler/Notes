# store a reusable prompt
prompt = "#> "

# Declare new Proc for getting question.
get_question = Proc.new {
  # Request input from user
  puts "What is your question?"
  # print prompt
  print prompt
  # get question from user
  $stdin.gets.chomp.upcase
}

# Declare a Lambda to gave an answer to the question
give_answer = ->(question) {
  puts "Your question was: "
  puts question.downcase.capitalize
  question.upcase
  if question.include? "FART" or question.include? "SMELL" or question.include? "POO" or question.include? "STINK"
    puts "NO QUESTIONS ABOUT SMELLY THINGS!!!!"
    question_and_answer(get_question, give_answer)
  else
    puts "My Answer is: "
    puts "I don't know."
  end
}

def question_and_answer(a, b)
  b.call(a.call)
end

question_and_answer(get_question, give_answer)
