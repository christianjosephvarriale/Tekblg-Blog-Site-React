Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/tools/update_progress', to: 'tools#update_progress'
  get '/tools/get_progress/:id', to: 'tools#get_progress'
  get '/tools/get_video/:id', to: 'tools#get_video'
  post '/tools/download', to: 'tools#download'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
