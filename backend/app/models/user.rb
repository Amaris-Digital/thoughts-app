class User < ApplicationRecord
    has_secure_password

    has_many :prompts
    has_many :thaughts
end
