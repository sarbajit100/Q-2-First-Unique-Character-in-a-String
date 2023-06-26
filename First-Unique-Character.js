s= "leetcode"

var h = {}
for(var i=0; i<s.length;i++){
    if(s[i] in h){
        h[s[i]] = h[s[i]]+1
    }else{
        h[s[i]] = 1
    }
}

for(var j=0;j<s.length;j++){
    if(h[s[j]] === 1){
        console.log(s[j])
        break
    }
}
console.log('-1')
