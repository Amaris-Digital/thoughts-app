class PromptsController < ApplicationController
  before_action :set_prompt, only: %i[ show update destroy ]

  before_action :authorized, except:  [:index, :show]

  # GET /prompts
  def index
    @prompts = Prompt.all
  end

  # GET /prompts/1
  def show
    render json: @prompt
  end

  # POST /prompts
  def create
    @prompt = Prompt.new(prompt_params)

    if @prompt.save
      render json: @prompt, status: :created, location: @prompt
    else
      render json: @prompt.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /prompts/1
  def update
    if @prompt.update(prompt_params)
      render json: @prompt
    else
      render json: @prompt.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prompts/1
  def destroy
    @prompt.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prompt
      @prompt = Prompt.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def prompt_params
      params.require(:prompt).permit(:prompt_text, :user_id)
    end
end
