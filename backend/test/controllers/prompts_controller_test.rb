require "test_helper"

class PromptsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prompt = prompts(:one)
  end

  test "should get index" do
    get prompts_url, as: :json
    assert_response :success
  end

  test "should create prompt" do
    assert_difference("Prompt.count") do
      post prompts_url, params: { prompt: { prompt_text: @prompt.prompt_text, user_id: @prompt.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show prompt" do
    get prompt_url(@prompt), as: :json
    assert_response :success
  end

  test "should update prompt" do
    patch prompt_url(@prompt), params: { prompt: { prompt_text: @prompt.prompt_text, user_id: @prompt.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy prompt" do
    assert_difference("Prompt.count", -1) do
      delete prompt_url(@prompt), as: :json
    end

    assert_response :no_content
  end
end
