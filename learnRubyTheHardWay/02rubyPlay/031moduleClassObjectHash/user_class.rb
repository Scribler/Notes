class User
  @class_accessable_only = "Only accessible within class"
  User_one = "Steven 'constant one'"
  Character_two = "Dale 'constant two'"
  Character_three = "Sam 'constant three'"
  Constant_four = "bob 'constant four'"

  def User.return_user
    return @class_accessable_only
  end

end
