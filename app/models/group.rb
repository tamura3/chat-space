class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
    #「group.users」という呼び出し方ができる
  has_many :messages
  validates :name, presence: true, uniqueness: true
end
