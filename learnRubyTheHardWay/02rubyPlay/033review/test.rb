#
# **** FILE SKILLS ****
#
#) get file
#) copy file
#) add line to file
#) add block of content to file
#) remove line from file
#) 






file_list = {}

def return_text_file_names 
  files_list = Dir["*.txt"]
  return files_list
end

def populate_file_list
  files = return_text_file_names
  file_num = 1
  file_hash = {0 => "ALL FILES"}
  puts ""
  puts "The files available to view are:"
  puts "0) ALL FILES"
  files.each do |file_name|
    file_hash[file_num] = file_name
    file_num += 1
  end
  return file_hash
end

hash = populate_file_list


# RUN PROGRAM
# hash do |key, value|
  # puts "#{key}) #{value}"
# end

this = "this"
p this.to_sym










