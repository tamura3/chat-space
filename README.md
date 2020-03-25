# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



-------------------
◆ユーザー
	ユーザーネーム
	メール
	パス
    
◆グループ
	グループ名
	ユーザーネーム

◆メッセージ
	ユーザーID	user_id
	グループ	group_id
	メッセージ	body
	画像		image

◆中間テーブル (グループ・ユーザー)
-------------------



## usersテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many: messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|string|null: false|
### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|string||
|image|string||
### Association
- belongs_to :group
- belongs_to :user











