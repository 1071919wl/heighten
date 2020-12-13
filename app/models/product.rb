# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  type_id     :integer          not null
#  description :string           not null
#  price       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :type_id, presence: true
    validates :description, presence: true
    validates :price, presence: true

    belongs_to :category,
    foreign_key: :type_id, 
    class_name: :Category

    has_one_attached :photo
end
