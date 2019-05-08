json.extract! user, :id, :email, :first_name, :last_name, :house
json.photo url_for(user.photo)