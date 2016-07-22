require 'dining_car/manifest'

module AssetPathHelper
  def manifest
    @manifest ||= DiningCar::Manifest.new(Rails.root.join('public', 'assets', 'manifest.json'))
  end

  def compute_asset_path(source, options = {})
    dir = '/assets'
    File.join(dir, manifest.path_for_asset(source))
  end
end
