require 'json'
require 'erb'

image = JSON.parse(File.read(ENV['PLUGIN_FILENAME']))['image']

task :create_json do
  template = File.read('codecamp-board-deployment.json.erb')
  renderer = ERB.new(template, nil, '-')
  File.open('codecamp-board-deployment.json', 'w') do |f|
    f.puts(renderer.result(binding))
  end
end