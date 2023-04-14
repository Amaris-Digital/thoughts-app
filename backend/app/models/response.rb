class Response < ApplicationRecord
  belongs_to :user
  belongs_to :question
  validates :response_text, presence: true
end
