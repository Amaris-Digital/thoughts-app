class Prompt < ApplicationRecord
  belongs_to :user
  
  validates :prompt_text, presence: true
end
