class ApiController < ApplicationController
  def home
    render "index", :layout => false
  end
end
