require "test_helper"

class ThaughtsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @thaught = thaughts(:one)
  end

  test "should get index" do
    get thaughts_url, as: :json
    assert_response :success
  end

  test "should create thaught" do
    assert_difference("Thaught.count") do
      post thaughts_url, params: { thaught: { prompt_id: @thaught.prompt_id, thought_text: @thaught.thought_text, user_id: @thaught.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show thaught" do
    get thaught_url(@thaught), as: :json
    assert_response :success
  end

  test "should update thaught" do
    patch thaught_url(@thaught), params: { thaught: { prompt_id: @thaught.prompt_id, thought_text: @thaught.thought_text, user_id: @thaught.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy thaught" do
    assert_difference("Thaught.count", -1) do
      delete thaught_url(@thaught), as: :json
    end

    assert_response :no_content
  end
end
