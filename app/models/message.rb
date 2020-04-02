class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user
  validates :content, presence: true, unless: :image?
  # presence: 空の場合は保存しない
  # unless: ~でければ
  # imageが空で、contentも空ならば保存しない
end
