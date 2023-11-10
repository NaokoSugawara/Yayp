class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  # testing purpose -------------------------------
  # def create
  #   render json: user_params
  # end
  # testing purpose -------------------------------

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :zipcode, :password)
  end
end
