require 'open-uri'

URI.open("http://www.ruby-doc.org"){|f|
  file = File.open('data.txt', 'a+')
  file << "_" * 40 + "\n\n"
  file << "These are the viewport related tags\n"
  f.each_line {|line|
    if line.include? "viewport"
      file << line
    end
  }
  file << "_" * 40 + "\n\n"
  f.rewind
  file << "_" * 40 + "\n\n"
  file << "These are the meta tags\n"
  f.each_line{|line| 
    if line.include? "meta"
      file << line
    end
  }
  file << "_" * 40 + "\n\n"
  file.close
  # p "Base URI: #{f.base_uri} "
  # p "Content type: #{f.content_type} "
}

URI.open("https://motorcycle.honda.ca"){|f|
  data_file = File.open('data.txt', 'a+')
  data_file << "_" * 40 + "\n\n"
  data_file << "Lines that include 'motorcycle'."
  count = 0
  f.each_line{|line|
    if line.include? "motorcycle"
      count += 1
      data_file << "\n" + line + "\n"
      if count >= 3
        break
      end
    end
  }
  data_file << "_" * 40 + "\n\n"
}

puts File.read("data.txt")
