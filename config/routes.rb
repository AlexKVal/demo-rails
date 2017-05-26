Rails.application.routes.draw do
  root 'static_pages#home'

  get 'home', to: 'static_pages#home'
  get 'help', to: 'static_pages#help'
  get 'about', to: 'static_pages#about'
  get 'contact', to: 'static_pages#contact'

  post 'signup', to: 'users#create'

  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'account_activate/:id', to: 'account_activations#edit', as: :account_activate

  resources :users do
    get :following, :followers , on: :member
  end

  resources :password_resets,     only: [:new, :create, :edit, :update]
  resources :microposts,          only: [:create, :destroy, :index]
  resources :relationships,       only: [:create, :destroy]
end
