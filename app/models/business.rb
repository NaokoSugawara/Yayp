class Business < ApplicationRecord

    has_one_attached :logo
    has_many_attached :photos
end
