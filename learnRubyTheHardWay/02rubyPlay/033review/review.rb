
# DEFINE METHODS

# return an array containing every text file in the current directory.
def return_text_file_names 
  files_list = Dir["*.txt"]
  return files_list
end
# return a hash with numbers for keys and filenames for values
def populate_file_list
  files = return_text_file_names
  file_num = 1
  file_hash = {}
  files.each do |file_name|
    file_hash[file_num] = file_name
    file_num += 1
  end
  return file_hash
end
#------------------------------------------------------
#
# DEFINE FILE LIST HASH
file_list = populate_file_list
#
#------------------------------------------------------

def get_answer
  print "> "
  answer = $stdin.gets.chomp
  return answer
end

def questions_prompt
  puts ""
  puts "What operation would you like to do?"
  puts ""
  puts "1) List all text files in directory."
  puts "2) Show one or all of the text file's contents."
  puts "3) Concatonate(Delete Contents) of a file."
  puts "4) Edit Specific Lines of of specific files."
end

def process_answer(answer, the_file_hash)
  if answer == '1'
    puts "You answered: #{answer}"
    puts ""
    puts "Listing text files"
    puts ""
    print_text_files
    puts ""
  elsif answer == '2'
    puts "You answered: #{answer}"
    list_file_contents(the_file_hash)
    puts ""
  elsif answer == '3'
    puts "You answered: #{answer}"
    # placeholder for 'concatonate' method
    puts ""
  elsif answer == '4'
    puts "You answered: #{answer}"
    # placeholder for 'line edit' method
    puts ""
  else
    puts "#{answer} is not an answer, try again."
    start
  end
endof 

def print_text_files
  file_num = 0
  files_list = Dir["*.txt"]
  files_list.each do |file_name|
    file_num += 1
    puts "File #{file_num}: #{file_name}"
  end
end


def list_file_contents(file_hash)
  puts "The files available to view are:"
  puts "0) ALL FILES"
  file_hash.each do |key, value|
    puts "#{key}) #{value}"
  end
  puts ""
  puts "Which files contents would you like to view? (enter the file's number)"
  answer = get_answer.to_i
  puts ""
  puts "Printing: #{file_hash[answer]}"
  puts ""
  if answer == 0
    files_array = return_text_file_names
    files_array.each do |file_name|
      file = open(file_name)
      puts ""
      puts "#{file_name} contents:"
      puts file.read
      file.close
    end
  else
    file = open(file_hash[answer])
    puts file.read
    file.close
  end
end



def delete_file_contents
  print_text_files
  puts "Which file would you like to clear? (enter the file's number)"
  print "> "
  answer = $stdin.gets.chomp


  # get file
  # Concatonate
  # Confirm file is empty
end

def write_to_file
  # get file
  # check if empty
  # ask for input
  # write input to file
end

# RUN PROGRAM

p file_list
loop do
  questions_prompt
  process_answer(get_answer, file_list)
  puts "To do another opperation press 'ENTER', to exit press 'CTRL-C'"
  $stdin.gets
end


