class GroupUser < ApplicationRecord
  #最後を複数形にするのが慣習だから、Groupは複数・単数どちらでもOK
  belongs_to :group
  belongs_to :user
end
