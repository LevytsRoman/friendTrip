Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/', to: 'api#home', as: 'home'
  root 'api#test'
end
