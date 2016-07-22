namespace :dining_car do
  task :locations do
    paths = []

    Bundler.load.specs.each do |spec|
      %w(vendor lib app).each do |dir|
        assets_path = File.join(spec.full_gem_path, dir, 'assets', '*')
        Dir[assets_path].each { |path| paths << path }
      end
    end

    puts JSON.generate({ paths: paths })
  end
end