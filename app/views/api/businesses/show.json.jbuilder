# business: {
#     1:{
#         "businessId": "12345",
#         "name": "Minion Restaurant",
#         "address": "475 3rd St",
#         "city": "San Francisco",
#         "state": "CA",
#         "zipcode": "94107",
#         "stars": 5.0,
#         "review_count": 1198,
#         "hours": "Monday": "10:00-21:00",
#     }
# },

json.business do
    json.set! @business.id do
         json.extract!  @business, :id, :name, :address, :city, :state, :zipcode, :website, :tel, :stars, :review_count, :hours
         json.photos @business.photos.attached? ? @business.photos.map{ |photo| photo.url } : nil
         json.logo @business.logo.attached? ? @business.logo.url : nil
    end
end

# json.business do
#     json.set! 1 do
#       json.name "Minion Restaurant"
#       json.address "475 3rd St"
#       json.city "San Francisco"
#       json.state "CA"
#       json.zipcode "94107"
#       json.stars 5.0
#       json.reviewCount 1198
#       json.hours do
#         json.Monday "10:00-21:00"
#       end
#     end
#   end