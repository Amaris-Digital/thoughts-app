class QuestionsController < ApplicationController
    # GET
  def index
    @questions = Question.all
  end

  # GET
  def show
    @question = Question.find(params[:id])
  end

  # POST
  def create
    @question = current_user.questions.new(question_params)
    
    if @question.save
      redirect_to @question
    else
      render :new
    end
  end

  # PATCH/PUT
  def update

    @question = Question.find(params[:id])
    
    if @question.update(question_params)
      redirect_to @question
    else
      render :edit
    end
  end

  # DELETE
  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    redirect_to questions_path
  end


  private

  def question_params
    params.require(:question).permit(:question_text, :user_id)
  end
end
