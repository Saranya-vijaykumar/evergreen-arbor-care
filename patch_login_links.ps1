$pages = @("index.html","home-2.html","about.html","services.html","service-detail.html","blog.html","blog-detail.html","pricing.html","contact.html")
foreach ($page in $pages) {
  if (Test-Path $page) {
    $content = [System.IO.File]::ReadAllText($page)
    $updated = $content -replace 'href="admin\.html"', 'href="login.html"'
    if ($updated -ne $content) {
      [System.IO.File]::WriteAllText($page, $updated)
      Write-Host "Updated: $page"
    } else {
      Write-Host "No change: $page"
    }
  }
}
Write-Host "Done."
