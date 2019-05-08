class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            @user.photo.attach(io: File.open('./app/assets/images/user/demo_user.png'), filename: 'demo_user.png')
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

private

  def user_params
    params.require(:user).permit(:password, :email, :first_name, :last_name, :house)
  end

end
