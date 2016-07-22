module AssetPathHelper
  class Manifest
    def initialize(path)
      # TODO watch for file changes?
      @path = path
      if File.exist?(path)
        @data = JSON.parse(File.read(@path))
      else
        @data = {}
      end
    end

    def path_for_asset(path)
      @data[path] || path
    end
  end

  def manifest
    @manifest ||= Manifest.new(Rails.root.join('public', 'assets', 'manifest.json'))
  end

  def compute_asset_path(source, options = {})
    dir = '/assets'
    File.join(dir, manifest.path_for_asset(source))
  end
end
