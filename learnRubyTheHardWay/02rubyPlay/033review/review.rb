# DEFINE METHODS

def start
  puts ""
  puts "What operation would you like to do?"
  puts ""
  puts "1) List all text files in directory."
  puts "2) Show one of the text file's contents."
  puts "3) Concatonate(Delete Contents) of a file."
  puts "4) Edit Specific Lines of of specific files."
  answer = $stdin.gets.chomp
  if answer == '1'
    puts "Placeholder one"
  elsif answer == '2'
    puts "Placeholder two"
  elsif answer == '3'
    puts "Placeholder three"
  elsif answer == '4'
    puts "Placeholder four"
  else
    puts "That is not an answer"
    start
  end
end


def list_text_files
  file_num = 0
  files_list = Dir["*.txt"]
  files_list.each do |file_name|
    file_num += 1
    puts "File #{file_num}: #{file_name}"
  end
end




# RUN PROGRAM

loop do
  puts "Are you ready to begin? If so, press 'ENTER' if not pres 'CTRL-C'."
  $stdin.gets
  start
  puts "Listing files when ready."
  puts "Are you ready to begin? If so, press 'ENTER' if not pres 'CTRL-C'."
  $stdin.gets
  list_text_files
end


