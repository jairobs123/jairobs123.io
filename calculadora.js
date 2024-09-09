function setResult(value) {
    
    document.getElementById('result').innerHTML = value

    }
   
    function getResult(value) {
    
        return(document.getElementById('result').innerHTML)
    
        }
    function add(key) {
        var result = getResult();
        if (result!='0' || isNaN(key)) setResult(result + key);
        else setResult(key);
    }
    function calc() {
        var result = eval(getResult());
        setResult(result);
    }
    function del(ac) {
        setResult(0);
    }