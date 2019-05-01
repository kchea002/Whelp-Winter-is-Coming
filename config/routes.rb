Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    # resources :businesses, only: [:index, :show, :create]
    # resources :reviews, only: [:create]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
