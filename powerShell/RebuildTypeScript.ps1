Clear-Host

<#import begin#>
$currentDir = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
. "$currentDir\DeleteFilesWithExtension.ps1"
<#import end#>

function GggCompileTypeScriptFiles($folder) {
    $tsFiles = Get-ChildItem $folder -Filter "*.ts" -Recurse
    $tsFiles | ForEach-Object {
        $tsFile = $_.FullName;
        $options = $tsFile + " --outDir js --sourceMap"
        Start-Process "tsc" $options 
    }
}

#GggInvokeDeleteFilesWithExtension $currentDir
GggCompileTypeScriptFiles $currentDir

