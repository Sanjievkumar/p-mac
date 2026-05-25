Add-Type -AssemblyName System.Drawing

$brands = @(
    @{ Name = 'kannegiesser'; CropLeft = 0.25; CropTop = 0.0 },
    @{ Name = 'sealion';      CropLeft = 0.30; CropTop = 0.0 },
    @{ Name = 'maestrelli';   CropLeft = 0.25; CropTop = 0.0 },
    @{ Name = 'maxipress';    CropLeft = 0.34; CropTop = 0.45 }
)

foreach ($brand in $brands) {
    $path = "src\assets\brands\$($brand.Name).png"
    $outPath = "src\assets\brands\$($brand.Name)-text.png"
    
    if (Test-Path $path) {
        $img = [System.Drawing.Image]::FromFile((Resolve-Path $path).Path)
        
        $x = [math]::Round($img.Width * $brand.CropLeft)
        $y = [math]::Round($img.Height * $brand.CropTop)
        $w = $img.Width - $x
        $h = $img.Height - $y
        
        $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
        $bmp = New-Object System.Drawing.Bitmap($w, $h)
        
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        # Preserve transparency
        $g.Clear([System.Drawing.Color]::Transparent)
        $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
        
        $bmp.Save((Join-Path (Get-Location) $outPath), [System.Drawing.Imaging.ImageFormat]::Png)
        
        $g.Dispose()
        $bmp.Dispose()
        $img.Dispose()
        
        Write-Host "Cropped $($brand.Name) to $outPath"
    }
}
