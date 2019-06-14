Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :reviews, only: [:create, :destroy]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    get 'businesses/search', to: 'searches#location_search'
    resources :businesses, only: [:index, :show, :create]
  end
end
