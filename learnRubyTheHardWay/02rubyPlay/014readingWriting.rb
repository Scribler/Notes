prompt = '> '

def reader(file)
    open(file, 'r') { |f|
    puts ""
    puts "Your file's current contents are: "
    puts ""
    puts "-- FILE START --"
    puts f.read
    puts "-- FILE END --"
  }
end

def clearFile(file)
  # Originally had this set to 'w' but it was clearing the file regardless of the parameters I set.
  open(file, 'a') { |f|
    puts "Would you like to clear the file now?"
    print "> "
    answer = $stdin.gets.chomp.downcase
    if answer == 'y'
      puts "Truncating File"
      f.truncate(0)
      puts "Your file is now empty"
    elsif answer != 'n'
      puts "Not a valid reply"
      clearFile(file)
    else
      break
    end
    }
end


def editor(file)
  open(file, 'a') {|f|
    answer = 'y' #store answer
    while answer == 'y'
      prompt = '> '
      puts ""
      puts "Would you like to add to the file? Yes or no? (y,n)"
      puts ""
      print prompt
      answer = $stdin.gets.chomp
      if answer != 'y'
        if answer != 'n'
          puts "That is not an option."
          editor(file)
          # f.close
        else
          # f.close
          break
        end
      else
        puts ""
        puts "What would you like to add to #{file}?"
        puts ""
        print prompt
        toAdd = $stdin.gets.chomp
        f << toAdd
        f << "\n"
      end
    end
  }
end

# Request User input
puts "We'll try to read a file."
puts "Which file do you want to read?"
print prompt
# Get filename
filename = $stdin.gets.chomp

# run reader
reader(filename)

# truncate file if desired
clearFile(filename)

# run editor
editor(filename)

# run reader to check changes
reader(filename)

