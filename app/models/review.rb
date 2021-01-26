# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  reviewer   :string           not null
#  review     :text             not null
#  score      :integer          not null
#  user_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :reviewer, presence: true
    validates :review, presence: true
    validates :score, inclusion: { in: (1..5) }

    validates :user_id, :product_id, presence: true


    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product


end
