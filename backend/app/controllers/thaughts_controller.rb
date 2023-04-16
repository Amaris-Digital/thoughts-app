class ThaughtsController < ApplicationController
  before_action :set_thaught, only: %i[ show update destroy ]
  before_action :authorized

  # GET /thaughts
  def index
    @thaughts = Thaught.all

    render json: @thaughts
  end

  # GET /thaughts/1
  def show
    render json: @thaught
  end

  # POST /thaughts
  def create
    @thaught = Thaught.new(thaught_params)

    if @thaught.save
      render json: @thaught, status: :created, location: @thaught
    else
      render json: @thaught.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /thaughts/1
  def update
    if @thaught.update(thaught_params)
      render json: @thaught
    else
      render json: @thaught.errors, status: :unprocessable_entity
    end
  end

  # DELETE /thaughts/1
  def destroy
    @thaught.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_thaught
      @thaught = Thaught.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def thaught_params
      params.require(:thaught).permit(:thought_text, :user_id, :prompt_id)
    end
end
