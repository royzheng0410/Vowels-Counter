Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :text_items, only: [:index, :create]
    end
  end

  root 'homes#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match '*path', to: 'homes#index', via: :all
end
