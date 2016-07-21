module ApplicationHelper
  def compute_asset_path(source, options = {})
    dir = '/assets'
    File.join(dir, source)
  end
end
