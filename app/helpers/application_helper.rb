module ApplicationHelper
  def compute_asset_path(source, options = {})
    # set to '' when using `brunch w -s` directly
    # set to '/assets' otherwise
    dir = '/assets'
    File.join(dir, source)
  end
end
