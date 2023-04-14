class ResponsesController < ApplicationController
    before_action :set_question
    
    # GET
  def index
    @question = Question.find(params[:question_id])
    @responses = @question.responses
    render json: @responses
  end
  
  # GET
  def show
    @response = Response.find(params[:id])
    render json: @response
  end
  
  # POST
  def create
    @question = Question.find(params[:question_id])
    @response = @question.responses.build(response_params)
    
    if @response.save
      render json: @response, status: :created
    else
      render json: @response.errors, status: :unprocessable_entity
    end
  end
  
  # PATCH/PUT
  def update
    @response = Response.find(params[:id])
    
    if @response.update(response_params)
      render json: @response
    else
      render json: @response.errors, status: :unprocessable_entity
    end
  end
  
  # DELETE
  def destroy
    @response = Response.find(params[:id])
    @response.destroy
  end
  
  private
  
  def response_params
    params.require(:response).permit(:response_text, :user_id)
  end
end
