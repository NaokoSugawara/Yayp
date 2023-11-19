class Api::BusinessesController < ApplicationController

    def show
        @business = Business.find_by(id: params[:id])
        if @business
          render :show
        else 
          render json: "business not found", status: :not_found
        end
      end

end
