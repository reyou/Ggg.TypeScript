Clear-Host
 

function GggDeleteFilesWithExtension($currentDir, $extension) {  
    $allFiles = Get-ChildItem $currentDir -Recurse 
    $allFiles | ForEach-Object {
        $item = $_
        if ($item.Extension -eq $extension) {
            "GggMessage: $($item.FullName) is getting removed."
            Remove-Item $item.FullName -Force
        }
    }
}

function GggInvokeDeleteFilesWithExtension ($currentDir) {
    GggDeleteFilesWithExtension $currentDir ".js"
    GggDeleteFilesWithExtension $currentDir ".map"
    Write-Host "GggMessage: GggDeleteFilesWithExtension completed."
}