class GroupsController < ApplicationController

  def new
    #空のインスタンスを作成
    @group = Group.new
    #ログイン中のユーザーは、作成するグループに追加する
    @group.users << current_user
  end

  def create
    #グループ作成時 フォームからの送信されるデータを確認しておく
    #binding.pry

    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      #newページの表示。リダイレクトすると変数が消えてしまう
      render :new
    end
  end


  private
  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

end