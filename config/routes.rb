Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # // testing purpose --------------------------------------------------
  post 'api/test', to: 'application#test'
  # // testing purpose --------------------------------------------------
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :businesses, only: [:show]
  end
end
