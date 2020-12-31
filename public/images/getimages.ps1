$list = Get-ChildItem -Recurse | `Where-Object { $_.Extension -eq '.jpg' -or $_.Extension -eq '.jpeg' -or $_.Extension -eq '.png' -or $_.Extension -eq '.jfif' }
ForEach($n in $list){
    $('<img src="images/'+$n.Name+'" alt="'+$n.name+'"></img>') | Out-File -Append 'src.txt'
}