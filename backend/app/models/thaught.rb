class Thaught < ApplicationRecord
  belongs_to :user
  belongs_to :prompt
  validates :thought_text, presence: true
end
