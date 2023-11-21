require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Business.destroy_all
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      first_name: 'Demo-first', 
      last_name: 'Demo-last', 
      email: 'demo@user.io', 
      zipcode: "12345",
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        first_name: Faker::Internet.unique.username(specifier: 3),
        last_name: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        zipcode: Faker::Address.zip_code,
        password: 'password'
      }) 
    end
  
    puts "Done!"
  # end

  business1 = Business.create ({ 
    name:"Nara Restaurant & Sake Bar", 
    address:"518 Haight St", 
    city: "San Francisco", 
    state:"CA", 
    zipcode:"94117", 
    stars:"4.6", 
    review_count:"500", 
    hours:"5:00 PM - 11:00 PM" })

  business1.logo.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/nara_logo.jpg"), filename: 'nara_logo.jpg')
  business1.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/nara1.jpg"), filename: 'nara1.jpg')
  business1.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/nara2.jpg"), filename: 'nara2.jpg')
  business1.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/nara3.jpg"), filename: 'nara3.jpg')
  business1.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/nara4.jpg"), filename: 'nara4.jpg')
  business1.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/nara5.jpg"), filename: 'nara5.jpg')


  business2 = Business.create ({ 
    name:"Wokuni", 
    address:"327 Lexington Ave", 
    city: "New York", 
    state:"NY", 
    zipcode:"10016", 
    stars:"4.1", 
    review_count:"300", 
    hours:"11:30 AM - 2:45 PM, 5:00 PM - 8:45 PM" })

  business2.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/wakuni1.jpg"), filename: 'wakuni1.jpg')
  business2.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/wakuni2.jpg"), filename: 'wakuni2.jpg')
  business2.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/wakuni3.jpg"), filename: 'wakuni3.jpg')
  business2.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/wakuni4.jpg"), filename: 'wakuni4.jpg')
  business2.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/wakuni5.jpg"), filename: 'wakuni5.jpg')


  business3 = Business.create ({ 
    name:"7th Street Burger", 
    address:"485 7th Ave", 
    city: "New York", 
    state:"NY", 
    zipcode:"10018", 
    stars:"4.8", 
    review_count:"2000", 
    hours:"M 10:00 am - 10:00 pm, T 10:00 am - 10:00 pm, W 10:00 am - 10:00 pm" })

  business3.logo.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/7th_logo.jpg"), filename: '7th_logo.jpg')
  business3.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/yayp-pics/348s+(1).jpg"), filename: '348s+(1).jpg')
  business3.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/yayp-pics/348s+(2).jpg"), filename: '348s+(2).jpg')
  business3.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/yayp-pics/348s+(3).jpg"), filename: '348s+(3).jpg')
  business3.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/yayp-pics/348s+(4).jpg"), filename: '348s+(3).jpg')
  business3.photos.attach(io: URI.open("https://yayp-seeds.s3.us-east-2.amazonaws.com/yayp-pics/348s+(5).jpg"), filename: '348s+(3).jpg')