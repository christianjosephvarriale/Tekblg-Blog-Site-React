class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    protect_from_forgery prepend: true, with: :exception
  
    def fallback_index_html
      render :file => 'public/index.html'
    end
  end