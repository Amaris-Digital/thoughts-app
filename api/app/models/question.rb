class Question < ApplicationRecord
  belongs_to :user

  validates :question_text, presence: true
end
