class Thaught < ApplicationRecord
  belongs_to :user
  belongs_to :question
  validates :thought_text, presence: true
end
