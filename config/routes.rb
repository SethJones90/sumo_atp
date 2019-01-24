Rails.application.routes.draw do
  root to: 'landing#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      ##API routes will go here
    end
  end

  # All other routes, use the Vue router
  get '/*path', to: 'landing#index', format: false
end
