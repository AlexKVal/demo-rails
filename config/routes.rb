Rails.application.routes.draw do
  root 'home#index'

  get 'help', to: 'static_pages#help'
  get 'about', to: 'static_pages#about'
  get 'contact', to: 'static_pages#contact'
  get 'welcome', to: 'static_pages#welcome'

  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'account_activate/:id', to: 'account_activations#edit', as: :account_activate

  resources :users, except: [:new, :create] do
    get :following, :followers , on: :member
  end
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'
  post 'send_activation_email_again', to: 'users#send_activation_email_again'

  resources :password_resets, only: [:new, :create, :update]
  get 'reset_password/:id', to: 'password_resets#edit', as: :reset_password

  resources :microposts,    only: [:create, :destroy, :index]
  resources :relationships, only: [:create, :destroy]
end
